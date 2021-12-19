import {Game} from '../models/game'
import {
    navigateToGame,
} from '../../client/reducers';
import {
    updateGameState
} from '../../client/reducers';

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
}