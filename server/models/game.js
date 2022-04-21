import {round as firstRound} from '../models/round';
import { Room } from './room';

export class Game {
    constructor(room){
        this.players = room.players;
        this.numberOfPlayers = this.players.length;
        this.spies = [];
        this.knights = [];
        this.rounds = [
            firstRound
        ];
        this.leader = '';
        this.showRoles = true;
        this.playersAcknowledgedRole = 0;
        this.castToVote = false;
        this.currentRound = 0;
        this.missionRules = [
            [2,3,2,3,3], //5 players
            [2,3,4,3,4], //6 players
            [2,3,3,4,4], //7 players
            [3,4,4,5,5], //8 players
            [3,4,4,5,5], //9 players
            [3,4,4,5,5] //10 players
        ]
    }

    //selects 1/3 (rounded up) of players to be spies 
    selectRoles = function(){
        let playersArray = [...this.players];
        let randomIndex;
        //assign the spies
        while(this.spies.length<Math.ceil((this.players.length*0.33))){
            let randomIndex = Math.ceil((Math.random()*playersArray.length))-1;
            this.spies.push(playersArray[randomIndex])
            playersArray.splice(randomIndex,1)
        }
        this.knights = playersArray; //assign the remaining knights
    }

    selectMissionLeader = function(){
        let randomIndex = Math.ceil((Math.random()*this.players.length))-1;
        this.leader = this.players[randomIndex].playerId;
    }
}