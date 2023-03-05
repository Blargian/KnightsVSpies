import LobbyController from "./lobbyController";
import GameController, {communicateStartOfGame,communicatePlayerCantVote} from "./gameController";

import {
    ioCreateRoom,
    ioEnterRoomCode,
    ioPlayerIsReady,
    ioStartGame,
    errorOccured,
    ioPlayerAcknowledged,
    ioUpdateSelectedPlayers,
    ioGetAllData,
    ioCastToVote,
    ioPlayerCastVote,
    ioVetoMissionHandler,
    gameOver
} from '../../client/reducers';

//Handles socket 
export default class MainController {
    constructor(io){
        this.io = io;
        this.lobbyController = new LobbyController(this.io);
        this.gameController = new GameController(this.io);

        this.io.on("connection", (socket) => {

            socket.on(ioCreateRoom.type,()=>{
                socket.join(this.lobbyController.createRoom(socket.id));
            });
    
            socket.on(ioEnterRoomCode.type,(enteredRoomCode)=>{
                 this.lobbyController.joinRoom(enteredRoomCode,socket);
            });

            socket.on("disconnect",()=>{
               this.lobbyController.playerLeft(socket.id)
            })

            socket.on(ioPlayerIsReady.type,(payload)=>{
                const updatedPlayers = this.lobbyController.updatePlayerReadiness(payload.playerId);
                this.lobbyController.rooms.get(payload.roomCode).updatePlayers(updatedPlayers);
                this.lobbyController.sendUpdatedPlayersToRoom(updatedPlayers,payload.roomCode);
            });

            socket.on(ioStartGame.type,(enteredRoomCode)=>{
                const room = this.lobbyController.getRoom(enteredRoomCode)
                if(room){
                    let game = this.gameController.createGame(room);
                    communicateStartOfGame(io,room.roomCode,game);
                } else {
                    console.log('Tried to create a gameController without valid room object passed. Passed to function:')
                    console.log(room)
                }
            })

            socket.on(ioGetAllData.type,(enteredRoomCode)=>{
                if(this.lobbyController.checkRoomExists(enteredRoomCode)){
                    this.lobbyController.emitAllRoomData(enteredRoomCode,socket.id)
                } else {
                    io.to(socket.id).emit(errorOccured.type,'No Such Room Exists...');
                }
            })

            socket.on(ioPlayerAcknowledged.type,(enteredRoomCode)=>{
                this.gameController.setGameWithRoomcode(this.gameController.checkAllPlayersAcknowledged(enteredRoomCode));
            })

            socket.on(ioUpdateSelectedPlayers.type,(payload)=>{
                this.gameController.sendSelectedPlayersToRoom(payload.roomCode,payload.newSelectedPlayers)
            })

            socket.on(ioCastToVote.type,(payload)=>{
                this.gameController.updateCastToVote(payload.roomCode,payload.castToVote)
            })

            socket.on(ioPlayerCastVote.type,(payload)=>{

                let game = this.gameController.getGameFromRoomcode(payload.roomCode);
                this.gameController.setGameWithRoomcode(payload.roomCode,this.gameController.updatePlayerVote(game,payload.selfId,payload.missionPass));
                communicatePlayerCantVote(io,payload.selfId);
                let allPlayersVoted = this.gameController.checkAllPlayersVoted(payload.roomCode);
                if(allPlayersVoted){
                    this.gameController.transitionRound(payload.roomCode);
                    let [gameOverFlag,knightsWonGame] = this.gameController.checkGameOver(game);
                    if(!gameOverFlag){
                    } else {
                        game.gameOver=true; 
                        this.gameController.setGameWithRoomcode(payload.roomCode,game);
                        this.io.in(payload.roomCode).emit(gameOver.type,knightsWonGame);
                    }
                }
            })

            socket.on(ioVetoMissionHandler.type,(payload)=>{
                this.gameController.updateVetoDecision(payload.roomCode,payload.playerId,payload.vetoMission);
                const vetoStatus = this.gameController.checkVetoStatus(payload.roomCode);
                if(vetoStatus.allPlayersVoted){
                    this.gameController.updateMissionVetoed(payload.roomCode,vetoStatus.vetoMission);
                }
            })
        });
    }
}