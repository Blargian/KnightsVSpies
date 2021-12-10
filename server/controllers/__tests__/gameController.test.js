import {Room} from '../../models/room';
import GameController from '../gameController';

describe('Game controller',()=>{

    const testRoom = new Room('ojIckSD2jqNzOqIrAGzL');
    const mockPlayers = ['hucylJiInWPujkGz','ifFvbMuDPpMlnyPY','FUJtTDdnDdXBemJJ','ympvKdEDzyABfena']
    mockPlayers.forEach((playerId)=>{
        testRoom.addPlayer(playerId);
    })
    const gameController = new GameController(testRoom);

    test('Checks to see that the game controller object initialises correctly',()=>{
        
        expect(gameController).toHaveProperty('players',testRoom.players);
        expect(gameController).toHaveProperty('spies',[])
        expect(gameController).toHaveProperty('knights',[])
        expect(gameController).toHaveProperty('round',0)
        expect(gameController).toHaveProperty('points',{
            spyPoints:0,
            knightPoints:0
        })
    });

    test('selectRoles should randomly select 1/3 (rounded up) of players as spies',()=>{
        gameController.selectRoles();
        //for five players in a room, two should be spies
        expect(gameController.spies).toHaveLength(2);
    })
})