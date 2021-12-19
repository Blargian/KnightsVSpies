import {Game} from "../game";
import {Room} from "../room";

describe('Game model',()=>{

    const testRoom = new Room('ojIckSD2jqNzOqIrAGzL');
    const mockPlayers = ['hucylJiInWPujkGz','ifFvbMuDPpMlnyPY','FUJtTDdnDdXBemJJ','ympvKdEDzyABfena']
    mockPlayers.forEach((playerId)=>{
        testRoom.addPlayer(playerId);
    })
    const game = new Game(testRoom);

    test('selectRoles should randomly select 1/3 (rounded up) of players as spies',()=>{
        game.selectRoles();
        //for five players in a room, two should be spies
        expect(game.spies).toHaveLength(2);
    })

    test('selectMissionLeader should randomly select a player to be the leader',()=>{
        game.selectMissionLeader();
        const numberOfMatches = testRoom.players.filter((player)=>{
            return player.playerId === game.leader
        }).length;
        expect(numberOfMatches).toBe(1);
    })
})