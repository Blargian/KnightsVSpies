import GameController from "./gameController";
import {
    ioCreateRoom,
    ioEnterRoomCode,
    ioPlayerIsReady
} from '../../client/reducers';

//Handles socket 
export default class MainController {
    constructor(io){
        this.io = io;
        this.gamecontroller = new GameController();

        this.io.on("connection", (socket) => {

            socket.on(ioCreateRoom.type,()=>{
                socket.join(this.gamecontroller.createRoom(this.io,socket.id));
            });
    
            socket.on(ioEnterRoomCode.type,(enteredRoomCode)=>{
                 this.gamecontroller.joinRoom(enteredRoomCode,this.io,socket);
            });

            socket.on("disconnect",()=>{
               this.gamecontroller.playerLeft(socket.id,this.io)
            })

            socket.on(ioPlayerIsReady.type,(callingPlayerId)=>{
                //call function which will flip the internal state
                //send out an action to all players with the
            })
        });
    }
}