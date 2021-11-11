import {Room} from '../models/roomModel';
import {Socket} from 'socket.io';

export class RoomController {

    private rooms: Array<Room> = [];

    constructor(){

    }

    public addRoom(callingSocket:Socket) : string{
        const newRoom = new Room(callingSocket);
        this.rooms.push(newRoom);
        return newRoom.roomId;
    }

    public getRoomCount() : number {
        return this.rooms.length;
    }

    public roomExists(enteredRoomCode:string) : boolean {
        const room = this.rooms.some(room=>
            room.roomId === enteredRoomCode
        );
        return room ? true : false;
    }
}