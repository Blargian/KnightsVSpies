import Round from '../models/round';
import { Room } from './room';

export class Game {
    constructor(room){
        this.roomCode = room.roomCode;
        this.players = [...room.players];
        this.numberOfPlayers = this.players.length;
        let selectedRoles = this.selectRoles(this.players)
        this.spies = selectedRoles.spies;
        this.knights = selectedRoles.knights;
        this.rounds = [
            new Round()
        ];
        this.leader = this.selectMissionLeader(this.players);
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
    selectRoles = function(players){
        let playersArray = [...players];
        let spies = []
        let knights = []
        //assign the spies
        while(spies.length<Math.ceil((players.length*0.33))){
            let randomIndex = Math.ceil((Math.random()*playersArray.length))-1;
            spies.push(playersArray[randomIndex])
            playersArray.splice(randomIndex,1)
        }
        knights = playersArray; //assign the remaining knights

        return {spies, knights};
    }

    selectMissionLeader = function(players){
        let randomIndex = Math.ceil((Math.random()*players.length))-1;
        return players[randomIndex].playerId;
    }

    // incrementMissionLeader = function(players,previousMissionLeader)
    // if previous leader is number 4, should return 5
    // if previous leader is 5 should return 1

    incrementMissionLeader = function(players,previousMissionLeader){
        let previousLeaderIndex = players.findIndex(player => player.playerId===previousMissionLeader);
        let leaderIsLast = previousLeaderIndex === players.length-1;
        if(leaderIsLast){
            return players[0].playerId;
        } else {
            return players[previousLeaderIndex+1].playerId;
        }
    }
}