import LobbyController from "./lobbyController";
import GameController, {communicateStartOfGame,communicatePlayerCantVote} from "./gameController";
import chalk from 'chalk';

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
    ioPlayerCastVote
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
                    console.log(chalk.red('Tried to create a gameController without valid room object passed. Passed to function:'))
                    console.log(chalk.red(room))
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
                this.gameController.setGameWithRoomcode(this.gameController.updatePlayerVote(this.gameController.getGameFromRoomcode(payload.roomCode),payload.selfId,payload.missionPass));
                communicatePlayerCantVote(io,payload.selfId);
                this.gameController.checkAllPlayersVoted(payload.roomCode) ? this.gameController.transitionRound(payload.roomCode) : ()=>{}
            })
        });
    }
}