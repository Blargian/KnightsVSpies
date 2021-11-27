import randomstring from "randomstring";
import { io } from "socket.io-client";

export class Room {

    constructor(callingPlayer){
        this.roomCode = this.generateRoomCode();
        this.players = [];
    }

    generateRoomCode(){
        return randomstring.generate({
            length: 6,
            charset: 'alphanumeric'
        });
    }

    addCallingPlayer(player){
        this.players.push({
            playerID:callingPlayer.id,
            readyToStart: false
        });
    }
}