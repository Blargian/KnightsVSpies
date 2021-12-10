import LobbyController from "./lobbyController";
import {
    ioCreateRoom,
    ioEnterRoomCode,
    ioPlayerIsReady
} from '../../client/reducers';

//Handles socket 
export default class MainController {
    constructor(io){
        this.io = io;
        this.lobbyController = new LobbyController();

        this.io.on("connection", (socket) => {

            socket.on(ioCreateRoom.type,()=>{
                socket.join(this.lobbyController.createRoom(this.io,socket.id));
            });
    
            socket.on(ioEnterRoomCode.type,(enteredRoomCode)=>{
                 this.lobbyController.joinRoom(enteredRoomCode,this.io,socket);
            });

            socket.on("disconnect",()=>{
               this.lobbyController.playerLeft(socket.id,this.io)
            })

            socket.on(ioPlayerIsReady.type,(payload)=>{
                const updatedPlayers = this.lobbyController.updatePlayerReadiness(payload.playerId);
                this.lobbyController.rooms.get(payload.roomCode).updatePlayers(updatedPlayers);
                this.lobbyController.sendUpdatedPlayersToRoom(updatedPlayers,io,payload.roomCode);
            })
        });
    }
}