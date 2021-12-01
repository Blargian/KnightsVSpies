import {
    roomCreated,
    updatePlayers,
    updateSelf,
    errorOccured
} from '../../client/reducers';

import { Room } from '../models/room';
import chalk from 'chalk';

// one instance is made on server start up
export default class GameController{

    constructor(){
        this.rooms = new Map();
        this.playersToRooms = new Map();
    }

    createRoom = function(io,playerId){
        const newRoom = new Room(playerId);
        this.addToRoomMap(newRoom);
        this.addPlayerToRoomMap(newRoom,playerId);
        io.to(playerId).emit(roomCreated.type,this.formattedRoom(newRoom,playerId));
        return newRoom.roomCode
    }

    joinRoom = function(enteredRoomCode,io,socket){
        if(this.checkRoomExists(enteredRoomCode)){
            if(!this.roomIsFull(enteredRoomCode)){
                socket.join(enteredRoomCode);
                const room = this.rooms.get(enteredRoomCode)
                this.addPlayerToRoomMap(room,socket.id)
                const players = this.addPlayerToRoom(enteredRoomCode,socket.id)
                //update this players state 
                io.to(socket.id).emit(updateSelf.type,this.formattedPlayer(enteredRoomCode,players,socket.id));
                //update all players state with the list of players
                io.in(enteredRoomCode).emit(updatePlayers.type,players);
            } else {
                io.to(socket.id).emit(errorOccured.type,'roomIsFull');
            }
        } else{
            
        }          
    }

    playerLeft = function(playerId,io){
        try{
            this.removePlayerFromRoom(playerId,io)
        } catch(error){
            console.log(chalk.red('an error occured trying to remove a player from their room'));
            console.log(error);
        }  
    }

    addToRoomMap = function(newRoom){
        return this.rooms.set(newRoom.roomCode,newRoom);
    }

    addPlayerToRoomMap = function(newRoom,playerId){
        return this.playersToRooms.set(playerId,newRoom.roomCode);
    }

    formattedRoom = function(newRoom,playerId){
        return {
            roomCode: newRoom.roomCode,
            selfId: playerId,
            selfAlias: newRoom.players[0].selfAlias,
            players: newRoom.players
        }
    }

    formattedPlayer = function(roomCode, playersArray,playerId){

        const selfAlias = playersArray.filter((player)=>{
            return player.selfId === playerId
        }).selfAlias

        return {
            roomCode: roomCode, 
            selfId: playerId,
            selfAlias
        }
    }

    checkRoomExists(enteredCode){
        return this.rooms.has(enteredCode)
    }

    addPlayerToRoom(enteredRoomCode, player){
        let room = this.rooms.get(enteredRoomCode);
        if(room){
            if(room.players.length<10){
                room.addPlayer(player);
            }
            return room.players;
        } else {
            console.log(chalk.red(`no room was found for ${enteredCode}`))
        }
    }

    removePlayerFromRoom(playerId,io){
        
        if(this.playersToRooms.size===0 || this.playersToRooms.get(playerId) === undefined){
            return;
        }
        let roomName = this.playersToRooms.get(playerId);
        let playerRoom = this.rooms.get(roomName);
        let remainingPlayers = playerRoom.players.filter((player)=>{
            return player.playerID !== playerId
        });

        playerRoom = {
            ...playerRoom, 
            players:remainingPlayers
        }

        if(playerRoom.players.length===0){
            this.rooms.delete(roomName);    
        } else {
            this.rooms.set(roomName,playerRoom);
            io.in(roomName).emit(updatePlayers.type,remainingPlayers);
        } 
    }

    roomIsFull = function(roomCode) {
        let room = this.rooms.get(roomCode);
        return room.players.length < 10 ? false : true; 
    }
}


