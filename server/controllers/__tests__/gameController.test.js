import {playersMock,playersMockLarge} from './mocks/mock_players';
import {mockRoom,mockRoomCode,mockRoomLarge,mockRoomCodeLarge} from './mocks/mock_room';
import GameController from '../gameController';

jest.mock('../gameController',function(){
    const originalModule = jest.requireActual('../gameController'); 
    const gc = new originalModule.default();
    return{
        __esModule: true,
        default: jest.fn().mockImplementation(function(){
            return gc;
        }
        ),
    }
})

beforeEach(()=>{
    game.rounds[game.currentRound].numberOfFail=0;
    game.rounds[game.currentRound].numberOfPass=0;
    game.rounds[game.currentRound].knightsWon=null;
})

afterEach(()=>{
    jest.clearAllMocks()
})

const gameController = new GameController();
let game = gameController.createGame(mockRoom);

test('updatePlayerVote called with true should increment number of passes by 1',()=>{
    expect(game.rounds[game.currentRound].numberOfFail).toEqual(0);
    expect(game.rounds[game.currentRound].numberOfPass).toEqual(0);
    game = gameController.updatePlayerVote(game,'xudsbfjsd',true);
    expect(game.rounds[game.currentRound].numberOfPass).toEqual(1);
    expect(game.rounds[game.currentRound].numberOfFail).toEqual(0);
})

test('updatePlayerVote called with false should increment number of fails by 1',()=>{

    expect(game.rounds[game.currentRound].numberOfFail).toEqual(0);
    expect(game.rounds[game.currentRound].numberOfPass).toEqual(0);
    game = gameController.updatePlayerVote(game,'xudsbfjsd',false);
    expect(game.rounds[game.currentRound].numberOfPass).toEqual(0);
    expect(game.rounds[game.currentRound].numberOfFail).toEqual(1);
})

    test('checkIfKnightsWin returns false if someone voted to fail the mission',()=>{

        const playerIndexes = [0,1];
        const playerChoices = [true,false];

        for(let i=0;i<playerIndexes.length;i++){
            gameController.setGameWithRoomcode(
                gameController.updatePlayerVote(
                    gameController.getGameFromRoomcode(mockRoomCode)
                    ,playersMock[playerIndexes[i]].playerId
                    ,playerChoices[i]
                )
            );
        }
        expect(gameController.checkIfKnightsWin(mockRoomCode)).toBeFalsy();
    })

    test('checkIfKnightsWin returns true if all players on mission voted to pass mission',()=>{
        
        const playerIndexes = [0,1];
        const playerChoices = [true,true];

        for(let i=0;i<playerIndexes.length;i++){
            gameController.setGameWithRoomcode(
                gameController.updatePlayerVote(
                    gameController.getGameFromRoomcode(mockRoomCode)
                    ,playersMock[playerIndexes[i]].playerId
                    ,playerChoices[i]
                )
            );
        }
        expect(gameController.checkIfKnightsWin(mockRoomCode)).toBeTruthy();
    })

    test('If 7-10 players are playing then checkIfKnightsWin should return false only if there are two votes to fail mission',()=>{
      
       let gameLarge = gameController.createGame(mockRoomLarge);
       //Three players go on the mission
       const playerNumbers = [0,3,4];
       const playerChoices = [true,true,false]; //two vote to pass and one votes to fail

       for(let i=0;i<3;i++){
        gameController.setGameWithRoomcode(
            gameController.updatePlayerVote(
                gameController.getGameFromRoomcode(mockRoomCodeLarge)
                ,playersMockLarge[playerNumbers[i]].playerId
                ,playerChoices[i]
            )
        );
       }
       expect(gameController.checkIfKnightsWin(mockRoomCodeLarge)).toBeTruthy();
    })

    test('storeWinner stores the winner on game.rounds[currentround].knightsWon if knights won',()=>{
        expect(game.rounds[game.currentRound].knightsWon).toEqual(null);
        gameController.storeWinner(true,game); //knights won
        game = gameController.getGameFromRoomcode(mockRoomCode);
        expect(game.rounds[game.currentRound].knightsWon).toBeTruthy();
    });

    test('storeWinner stores the winner on game.rounds[currentround].knightsWon if knights lost',()=>{
        expect(game.rounds[game.currentRound].knightsWon).toEqual(null);
        gameController.storeWinner(false,game); //knights won
        game = gameController.getGameFromRoomcode(mockRoomCode);
        expect(game.rounds[game.currentRound].knightsWon).toBeFalsy();
    });

    test('getNameFromId correctly returns the player name from the id',()=>{
        gameController.storeWinner(false,game); //knights won
        game = gameController.getGameFromRoomcode(mockRoomCode);
        let playerName = gameController.getNameFromId(game,playersMock[1].playerId)
        expect(playerName).toBe(playersMock[1].selfAlias);
    });
