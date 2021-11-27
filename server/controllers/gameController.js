import {
    ioCreateRoom,
    roomCreated
} from '../../client/reducers';
import { Room } from '../models/room';

// one instance is made on server start up
export default class GameController{

    constructor(io){
        this.io = io; 
        this.rooms = []
        this.connect();
    }

    connect(){
        this.io.on("connection", (socket) => {

            //sets up listener for room
            socket.on(ioCreateRoom.type,(payload)=>{
                
                console.log('Creating new room')
                const newRoom = new Room();
                this.rooms.push(newRoom);
                //emits action with room as payload, playerid
                socket.emit(roomCreated.type,{
                    roomCode: newRoom.roomCode,
                    selfId: 'dummy_value'
                })
            });
    
            //sets up listener for connect code
            socket.on("room/ioJoinRoom",()=>{})
            //check to see if the room code exists
                //add player to game if it does
                //emits action for setting roomcode, playerid
            //if it doesn't 
                //dispatch an error action
        });
    }
}

