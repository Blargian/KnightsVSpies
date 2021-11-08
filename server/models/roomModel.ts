/**
 * @class Model
 *
 * Manages the data of a room.
 */

import {Socket} from 'socket.io';
import randomstring from "randomstring";

export class Room {
    public roomId: string = '';
    public players: Map<string,Socket> = new Map();
    public gameStarted: boolean = false;
    
    constructor(
        callingPlayer:Socket
    ){
        this.addPlayer(callingPlayer);
        this.generateRoomCode();
    }

    private addPlayer(player:Socket){
        this.players.set(player.id,player);
    }

    private generateRoomCode() {
        this.roomId = randomstring.generate({
            length: 6,
            charset: 'alphanumeric'
        });
    }
}

