import {Game} from '../models/game'
import {
    navigateToGame,
} from '../../client/reducers';
import {
    updateGameState,
    allPlayersAcknowledged,
    updateSelectedPlayers,
    updateCastToVote,
    updateAllowToVote
} from '../../client/reducers';
import { io } from 'socket.io-client';

export default class GameController {
    constructor(io){
        this.io = io;
        this.games = new Map();
    }

    createGame = function(room){
        const game = new Game(room);
        this.games.set(room.roomCode,game)
        return game;
    } 

    checkAllPlayersAcknowledged = function(roomCode){
        const game = this.games.get(roomCode);
        game.playersAcknowledgedRole++;
        if(game.playersAcknowledgedRole === game.players.length){
            this.io.in(roomCode).emit(allPlayersAcknowledged.type,)
        }
        return game;
    }

    sendSelectedPlayersToRoom = function(roomCode, selectedPlayers){
        this.io.in(roomCode).emit(updateSelectedPlayers.type,selectedPlayers);
    }

    updateCastToVote = function(roomCode, castToVote){
        this.castToVote = castToVote;
        this.io.in(roomCode).emit(updateCastToVote.type,castToVote);
    }

    getGameFromRoomcode = function(roomCode){
        return this.games.get(roomCode);
    }

    setGameWithRoomcode = function(roomCode,game){
        this.games.set(roomCode,game)
    }

    updatePlayerVote = function(gameToUpdate,selfId,missionPass){
        let game = gameToUpdate;
        missionPass ? game.rounds[game.currentRound].numberOfPass++ : game.rounds[game.currentRound].numberOfFail++;
        game.rounds[game.currentRound].playersOnMission.push(selfId);
        return game;
    }

    checkAllPlayersVoted = function(roomCode){
        const game = getGameFromRoomcode(roomCode)
        const currentRound = game.rounds[game.currentRound]
        if((currentRound.numberOfFail + currentRound.numberOfPass) === game.missionRules[game.players.length-5][game.currentRound]){
            return true;
        } else {
            return false;
        }
    }

    checkIfKnightsWin = function(roomCode){
        let game = this.games.get(roomCode)
        let currentRound = game.rounds[game.currentRound]
        //if mission fails then spies won
        if(currentRound.numberOfFail>=1 && game.players.length<7){
            game.rounds[game.currentRound].knightsWon = false;
            this.games.set(roomCode,game)
            return false;
        } else if (currentRound.numberOfFail>=2 && game.players.length >= 7 ){
            game.rounds[game.currentRound].knightsWon = false;
            this.games.set(roomCode,game)
            return false;
        } else {
            game.rounds[game.currentRound].knightsWon = true;
            this.games.set(roomCode,game)
            return true;
        }
    }

    transitionRound = function(roomCode){
        let knightsWon = this.checkIfKnightsWin(roomCode);
        console.log(`KnightsWon: ${knightsWon}`)
        console.log('transitioning round')
        //store the winner 
        //send something back to the front-end to show the winner 
    }
}

export const communicateStartOfGame = (io, toRoom, game) => {
    io.in(toRoom).emit(navigateToGame.type);
    io.in(toRoom).emit(updateGameState.type,game);
}

export const communicatePlayerCantVote = (io,selfId) => {
    io.to(selfId).emit(updateAllowToVote.type,false)
}
