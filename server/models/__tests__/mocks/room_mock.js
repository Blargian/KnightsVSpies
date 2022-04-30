import {Room} from '../../room';

describe('Dummy test suite',()=>{
    test('Dummy test',()=>{
        
    })
})

const playersMock = [
    {
        playerId:'3mg28C_Axq92daf6AAAR',
        selfAlias:'Player1',
        readyToStart:true
    },
    {
        playerId:'EY_8_V5m200LQvpEAAAH',
        selfAlias:'Player2',
        readyToStart:true
    },
    {
        playerId:'-EcEo_a64LyyNObXAAAL',
        selfAlias:'Player3',
        readyToStart:true
    },
    {
        playerId:'cf1HMSBRJvCfG9Z6AAAN',
        selfAlias:'Player4',
        readyToStart:true
    },
    {
        playerId:'rgG0QTm_2HDw8zw2AAAP',
        selfAlias:'Player5',
        readyToStart:true
    },
    {
        playerId:'zw22HrgGD_3AAzww80QTmAP',
        selfAlias:'Player6',
        readyToStart:true
    },
    {
        playerId:'G0QTmAA2wrg_8zw2HDw8zAP',
        selfAlias:'Player7',
        readyToStart:true
    },
    {
        playerId:'0Q2HDwrAPgzw2GTm_88zwAA',
        selfAlias:'Player8',
        readyToStart:true
    },
    {
        playerId:'HD2wG0r_g8zAwQTm2A8zwAP',
        selfAlias:'Player9',
        readyToStart:true
    },
    {
        playerId:'zw22APHDrgG0Qw8AAzwTm_8',
        selfAlias:'Player10',
        readyToStart:true
    }
]
const mockLeader='rgG0QTm_2HDw8zw2AAAP'

const room = new Room(playersMock[0].playerId);
for(let i=1;i<=4;i++){
    room.addPlayer(playersMock[i].playerId);
}
const largeRoomSeven = new Room(playersMock[0].playerId);
for(let i=1;i<=6;i++){
    largeRoomSeven.addPlayer(playersMock[i].playerId);
}
const largeRoomTen = new Room(playersMock[0].playerId);
for(let i=1;i<=9;i++){
    largeRoomTen.addPlayer(playersMock[i].playerId);
}
export {room,largeRoomSeven,largeRoomTen};