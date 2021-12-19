import randomstring from "randomstring";
import { io } from "socket.io-client";

export class Room {

    //callingPlayerId: socket.id
    constructor(callingPlayerId){
        this.roomCode = this.generateRoomCode();
        this.players = [];
        this.addPlayer(callingPlayerId)
    }

    generateRoomCode = function(){
        return randomstring.generate({
            length: 6,
            charset: 'alphanumeric'
        });
    }

    addPlayer = function(callingPlayerId){
        this.players.push({
            playerId:callingPlayerId,
            selfAlias:`Player${this.players.length+1}`,
            readyToStart: false
        });
    }

    updatePlayers = function(newPlayerArray){
        this.players = newPlayerArray;
    }

}