import {round as firstRound} from '../models/round';
import { Room } from './room';

export class Game {
    constructor(room){
        this.players = room.players;
        this.spies = [];
        this.knights = [];
        this.round = [
            firstRound
        ];
        this.leader = '';
        this.showRoles = true;
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