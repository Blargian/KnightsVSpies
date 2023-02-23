import {Game} from '../models/game';
import Round from '../models/round';

import {
    navigateToGame,
} from '../../client/reducers';
import {
    updateGameState,
    allPlayersAcknowledged,
    updateSelectedPlayers,
    updateCastToVote,
    updateAllowToVote,
    updateMissionVetoed,
    showWinner,
    hideShowWinner,
    resetGameState
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
        let game = this.games.get(roomCode);
        game.playersAcknowledgedRole++;
        if(game.playersAcknowledgedRole === game.players.length){
            this.io.in(roomCode).emit(allPlayersAcknowledged.type)
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

    //updates a players choice whether to veto or pass the mission from MissionVoter component. 
    updateVetoDecision = function(roomCode, playerId, veto){
        let game = this.getGameFromRoomcode(roomCode)
        if(veto===true){
            game.rounds[game.currentRound].vetoed.push(playerId)
        } else if(veto===false) {
            game.rounds[game.currentRound].accepted.push(playerId)
        }
        this.setGameWithRoomcode(roomCode,game);
    }

    //checks for majority veto or majority pass
    //return {allPlayersVoted: boolean, vetoMission: boolean} 
    checkVetoStatus = function(roomCode){
        let returnObject = {
            allPlayersVoted: false,
            vetoMission: false
        };
        const game = this.getGameFromRoomcode(roomCode);
        const currentRound = game.rounds[game.currentRound];
        if((currentRound.vetoed.length + currentRound.accepted.length)===game.players.length){
            returnObject.allPlayersVoted = true; 
        };
        if(currentRound.vetoed.length > currentRound.accepted.length){
            returnObject.vetoMission = true;
        } else {
            returnObject.vetoMission = false;
        };
        return returnObject;
    }

    //emits actions to inform the client that the mission whould go ahead or not 
    updateMissionVetoed = function(roomCode,vetoed){
        if(vetoed){
            let game = this.getGameFromRoomcode(roomCode);
            game.numberOfVetos++;
            this.io.in(roomCode).emit(updateMissionVetoed.type,true);
            this.transitionRound(roomCode);
            let [gameOver,knightsWonGame] = this.checkGameOver(game);
            if(gameOver){
                console.log('Game over')
            }
        } else {
            let game = this.getGameFromRoomcode(roomCode);
            game.numberOfVetos = 0; //if players did not veto then the veto count gets reset 
            this.setGameWithRoomcode(roomCode,game);
            this.io.in(roomCode).emit(updateMissionVetoed.type,false);
        }
    }

    updatePlayerVote = function(gameToUpdate,selfId,missionPass){
        let game = gameToUpdate;
        missionPass ? game.rounds[game.currentRound].numberOfPass++ : game.rounds[game.currentRound].numberOfFail++;
        let playerName = this.getNameFromId(game,selfId);
        game.rounds[game.currentRound].playersOnMission.push(playerName);
        return game;
    }

    checkAllPlayersVoted = function(roomCode){
        const game = this.getGameFromRoomcode(roomCode)
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

        //if mission was vetoed then nobody wins
        if(currentRound.numberOfFail===0 && currentRound.numberOfPass===0){
            return null;
        }
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
        let game = this.getGameFromRoomcode(roomCode);
        let knightsWon = this.checkIfKnightsWin(roomCode);
        if(knightsWon!==null){
            this.storeWinner(knightsWon,this.getGameFromRoomcode(roomCode))
            this.incrementRound(game);
        } else{
            this.resetRound(game);
        } 
        this.incrementLeader(game);
        //send something back to the front-end to show the winner 
        this.io.in(roomCode).emit(showWinner.type,knightsWon);
        setTimeout(()=>{
            //wait 30 seconds and then
            // hide the winners 
            this.io.in(roomCode).emit(hideShowWinner.type);
            this.io.in(roomCode).emit(resetGameState.type,{rounds:game.rounds,currentRound:game.currentRound,newLeader:game.leader});
        },10000)
            
            // increment the round and reset what needs to be reset
    }

    //After a veto, resets the state for the current round 
    resetRound = function(game){
        let updatedGame = game
        updatedGame.rounds[game.currentRound] = new Round(); 
        this.setGameWithRoomcode(updatedGame.roomCode,updatedGame);
    }

    //need to add a new blank round
    //set game.currentRound++
    //game.selectedPlayers back to []
    //game.leader = ''
    //

    storeWinner = function(knightsWin,game){
        let updatedGame = game; 
        updatedGame.rounds[game.currentRound].knightsWon = knightsWin;
        this.setGameWithRoomcode(updatedGame.roomCode, updatedGame);
    }

    incrementRound = function(game){
        let updatedGame = game; 
        updatedGame.currentRound++;
        this.setGameWithRoomcode(updatedGame.roomCode,updatedGame);
    }

    incrementLeader = function(game){
        let updatedGame = game; 
        updatedGame.leader = updatedGame.incrementMissionLeader(updatedGame.players,updatedGame.leader);
        this.setGameWithRoomcode(updatedGame.roomCode,updatedGame);
    }

    //works under the assumption that player names will not be the same
    getNameFromId = (game,providedSelfId) => {
        let playerName = game.players.filter((player)=>{
            return player.playerId===providedSelfId
        })
        if(playerName[0]){
            return playerName[0].selfAlias;
        } else {
            return null;
        }
        
    }

    checkGameOver(game){

        let rounds = game.rounds
        let timesKnightsWon = 0;
        let timesSpiesWon = 0;
        let gameOver = false;
        let knightsWonGame = null;

        if(game.numberOfVetos===game.players.length){
            gameOver = true;
            knightsWonGame = null;
            return [gameOver,knightsWonGame]
        }

        rounds.forEach((round)=>{
            if(round.knightsWon === true){
                timesKnightsWon++;
            } else if (round.knightsWon === false){
                timesSpiesWon++;
            }
        })

        if(timesKnightsWon===3){
            gameOver = true;
            knightsWonGame = true;
            return [gameOver,knightsWonGame]
        } else if (timesSpiesWon===3){
            gameOver = true;
            knightsWonGame = false;
            return [gameOver,knightsWonGame]
        } else {
            return [false,null]
        }
    }
}

export const communicateStartOfGame = (io, toRoom, game) => {
    io.in(toRoom).emit(navigateToGame.type);
    io.in(toRoom).emit(updateGameState.type,game);
}

export const communicatePlayerCantVote = (io,selfId) => {
    io.to(selfId).emit(updateAllowToVote.type,false)
}


