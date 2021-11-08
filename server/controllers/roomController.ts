import {Room} from '../models/roomModel';
import {Socket} from 'socket.io';

export class RoomController {

    private rooms: Array<Room> = [];

    constructor(){

    }

    public addRoom(callingSocket:Socket){
        const newRoom = new Room(callingSocket);
        this.rooms.push(newRoom);
    }

    public getRoomCount() : number {
        return this.rooms.length;
    }
}