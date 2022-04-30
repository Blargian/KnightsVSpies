import {Game} from "../game";
import {Room} from "../room";

describe('Game model',()=>{

    const mockPlayers = ['hucylJiInWPujkGz','ifFvbMuDPpMlnyPY','FUJtTDdnDdXBemJJ','ympvKdEDzyABfena']

    const roomSetup = () => {
        const testRoom = new Room('ojIckSD2jqNzOqIrAGzL');
        mockPlayers.forEach((playerId)=>{
            testRoom.addPlayer(playerId);
        })
        return new Game(testRoom);
    }

    test('selectRoles should randomly select 1/3 (rounded up) of players as spies',()=>{
        let game = roomSetup();
        //for five players in a room, two should be spies
        expect(game.spies).toHaveLength(2);
    })

    test('selectRoles should randomly select 2/3 (rounded up) of players as knights',()=>{
        //for five players in a room, two should be spies
        let game = roomSetup();
        expect(game.knights).toHaveLength(3);
    })

    test('selectMissionLeader should randomly select a player to be the leader',()=>{
        let game = roomSetup();
        const numberOfMatches = game.players.filter((player)=>{
            return player.playerId === game.leader
        }).length;
        expect(numberOfMatches).toBe(1);
    })
})