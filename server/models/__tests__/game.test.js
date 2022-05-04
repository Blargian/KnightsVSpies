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

    test('incrementMissionLeader should return the id of the next player in line when leader is not the last player',()=>{
        
        let game = roomSetup();
        game.leader = game.players[0].playerId; //for purposes of this test set leader as player1
        let previousMissionLeaderId = game.leader;

        let indexOfPreviousLeaderId = game.players.findIndex(player => player.playerId === previousMissionLeaderId)

        expect(indexOfPreviousLeaderId).toBe(0);
        
        let nextLeaderId = game.incrementMissionLeader(game.players,previousMissionLeaderId)

        let indexOfNextLeaderId = game.players.findIndex(player => player.playerId === nextLeaderId)

        expect(indexOfNextLeaderId).toBe(1);
    });

    test('incrementMissionLeader should return the id of the next player in line (player1) when leader is the last player (player5)',()=>{
        
        let game = roomSetup();
        game.leader = game.players[4].playerId; //for purposes of this test set leader as player1
        let previousMissionLeaderId = game.leader;

        let indexOfPreviousLeaderId = game.players.findIndex(player => player.playerId === previousMissionLeaderId)

        expect(indexOfPreviousLeaderId).toBe(4);
        
        let nextLeaderId = game.incrementMissionLeader(game.players,previousMissionLeaderId)

        let indexOfNextLeaderId = game.players.findIndex(player => player.playerId === nextLeaderId)

        expect(indexOfNextLeaderId).toBe(0);
    })

    test('incrementMissionLeader should return the id of the next player in line when it is somewhere in the middle eg) player3',()=>{
        
        let game = roomSetup();
        game.leader = game.players[2].playerId; //for purposes of this test set leader as player1
        let previousMissionLeaderId = game.leader;

        let indexOfPreviousLeaderId = game.players.findIndex(player => player.playerId === previousMissionLeaderId)

        expect(indexOfPreviousLeaderId).toBe(2);
        
        let nextLeaderId = game.incrementMissionLeader(game.players,previousMissionLeaderId)

        let indexOfNextLeaderId = game.players.findIndex(player => player.playerId === nextLeaderId)

        expect(indexOfNextLeaderId).toBe(3);
    })
})