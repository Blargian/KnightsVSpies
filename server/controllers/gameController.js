import {Game} from '../models/game'
import {
    navigateToGame,
} from '../../client/reducers';
import {
    updateGameState,
    allPlayersAcknowledged
} from '../../client/reducers';
import { io } from 'socket.io-client';

export default class GameController {
    constructor(io){
        this.io = io;
        this.games = new Map();
    }

    createGame = function(room){
        const game = new Game(room);
        game.selectRoles();
        game.selectMissionLeader();
        this.games.set(room.roomCode,game)
        this.io.in(room.roomCode).emit(navigateToGame.type);
        this.io.in(room.roomCode).emit(updateGameState.type,game);
    } 

    checkAllPlayersAcknowledged = function(roomCode){
        const game = this.games.get(roomCode);
        game.playersAcknowledgedRole++;
        this.games.set(roomCode,game);
        if(game.playersAcknowledgedRole === game.players.length){
            this.io.in(roomCode).emit(allPlayersAcknowledged.type,)
        }
    }
}