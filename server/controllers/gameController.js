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

    sendSelectedPlayersToRoom = function(roomCode, selectedPlayers){
        this.io.in(roomCode).emit(updateSelectedPlayers.type,selectedPlayers);
    }

    updateCastToVote = function(roomCode, castToVote){
        console.log(roomCode, castToVote)
        this.castToVote = castToVote;
        this.io.in(roomCode).emit(updateCastToVote.type,castToVote);
    }

    updatePlayerVote = function(roomCode,selfId,missionPass){
        const game = this.games.get(roomCode);
        missionPass ? game.rounds[game.currentRound].numberOfPass++ : game.rounds[game.currentRound].numberOfFail++;
        console.log(` Number of pass: ${game.rounds[game.currentRound].numberOfPass}`)
        console.log(` Number of fail: ${game.rounds[game.currentRound].numberOfFail}`)
        game.rounds[game.currentRound].playersOnMission.push(selfId);
        this.games.set(roomCode,game);
        this.io.to(selfId).emit(updateAllowToVote.type,false)
    }

    checkAllPlayersVoted = function(roomCode){
        const game = this.games.get(roomCode)
        const currentRound = game.rounds[game.currentRound]
        console.log(currentRound.numberOfFail)
        console.log(game.players)
        if((currentRound.numberOfFail + currentRound.numberOfPass) === game.missionRules[game.players.length-5][game.currentRound]){
            return true;
        } else {
            return false;
        }
    }

    checkIfKnightsWin = function(roomCode){
        const game = this.games.get(roomCode)
        const currentRound = game.rounds[game.currentRound]
        //if mission fails then spies won
        if(currentRound.numberOfFail>1){
            currentRound.knightsWon = true;
            console.log('Spies won')
            return false;
        //if mission passes then knights won
        } else if (currentRound.numberOfPass === currentRound.playersOnMission.length){
            currentRound.knightsWon = true;
            console.log('Knights won')
            return true;
        }
    }

    transitionRound = function(){
        console.log('transitioning round')
    }
}