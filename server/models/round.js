export default class Round {
    constructor(){
        this.playersOnMission= [];
        this.numberOfPass = 0;
        this.numberOfFail = 0;
        this.knightsWon = undefined;
        this.accepted = [];
        this.vetoed = []; 
        this.missionWasVetoed = null; 
    }
}