import Jest from 'jest';
import GameController from "../gameController";
import {Room} from "../../models/room";
const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");
import {
    ioCreateRoom,
    roomCreated,
    ioEnterRoomCode,
    updatePlayers,
    updateSelf
} from '../../../client/reducers';

describe('Game controller', ()=>{

    let gameController;

    let mockSocket = {
        //socket things
        id: 'x8WIv7-mJelg7on_ALbx'
    } 

    test('addToRoomMap correctly adds the room to the map',()=>{   
        let room = new Room(mockSocket.id);
        gameController = new GameController();
        gameController.addToRoomMap(room);
        expect(gameController.rooms.get(room.roomCode)).toEqual(room);
    });

    test('addPlayerToRoomMap correctly adds a mapping between player and room',()=>{
        let room = new Room(mockSocket.id);
        gameController = new GameController();
        gameController.addPlayerToRoomMap(room,mockSocket.id)
        expect(gameController.playersToRooms.get(mockSocket.id)).toEqual(room.roomCode);
    });

    test('formattedRoom returns an object with the correct properties',()=>{
        let room = new Room(mockSocket.id);
        gameController = new GameController();
        expect(gameController.formattedRoom(room,mockSocket.id)).toEqual(expect.objectContaining({
            roomCode: expect.any(String),
            selfId: expect.any(String),
            selfAlias:expect.stringContaining('Player'),
            players: expect.any(Array)
        }));
    });

    test('roomIsFull returns true if a room already has 10 players',()=>{
        let room = new Room(mockSocket.id);
        gameController = new GameController();
        const simulatedPlayerSockets = [
            {id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'},{id:'10'}
        ]

        gameController.addToRoomMap(room);
        simulatedPlayerSockets.forEach((socket)=>{
            gameController.addPlayerToRoom(room.roomCode,socket.id);
        });
        expect(gameController.roomIsFull(room.roomCode)).toEqual(true);
    });

    test('roomIsFull returns false if a room has less than 10 players',()=>{
        const simulatedPlayerSockets = [
            {id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'},
        ]
        let room = new Room(mockSocket.id);
        gameController = new GameController();
        gameController.addToRoomMap(room);
        simulatedPlayerSockets.forEach((socket)=>{
            gameController.addPlayerToRoom(room.roomCode,socket.id);
        });
        expect(gameController.roomIsFull(room.roomCode)).toEqual(false);
    });

    test('updatePlayerReadiness returns an updated player array given the calling player ID',()=>{
        let room = new Room(mockSocket.id);
        gameController = new GameController();
        gameController.addToRoomMap(room);
        gameController.addPlayerToRoomMap(room,mockSocket.id);
        expect(gameController.updatePlayerReadiness(mockSocket.id)[0].readyToStart).toBeTruthy();
    });
})
