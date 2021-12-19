import Jest from 'jest';
import LobbyController from "../lobbyController";
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

describe('Lobby controller', ()=>{

    let lobbyController;

    let mockSocket = {
        //socket things
        id: 'x8WIv7-mJelg7on_ALbx'
    } 

    test('addToRoomMap correctly adds the room to the map',()=>{   
        let room = new Room(mockSocket.id);
        lobbyController = new LobbyController();
        lobbyController.addToRoomMap(room);
        expect(lobbyController.rooms.get(room.roomCode)).toEqual(room);
    });

    test('addPlayerToRoomMap correctly adds a mapping between player and room',()=>{
        let room = new Room(mockSocket.id);
        lobbyController = new LobbyController();
        lobbyController.addPlayerToRoomMap(room,mockSocket.id)
        expect(lobbyController.playersToRooms.get(mockSocket.id)).toEqual(room.roomCode);
    });

    test('formattedRoom returns an object with the correct properties',()=>{
        let room = new Room(mockSocket.id);
        lobbyController = new LobbyController();
        expect(lobbyController.formattedRoom(room,mockSocket.id)).toEqual(expect.objectContaining({
            roomCode: expect.any(String),
            selfId: expect.any(String),
            selfAlias:expect.stringContaining('Player'),
            players: expect.any(Array)
        }));
    });

    test('roomIsFull returns true if a room already has 10 players',()=>{
        let room = new Room(mockSocket.id);
        lobbyController = new LobbyController();
        const simulatedPlayerSockets = [
            {id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'},{id:'10'}
        ]

        lobbyController.addToRoomMap(room);
        simulatedPlayerSockets.forEach((socket)=>{
            lobbyController.addPlayerToRoom(room.roomCode,socket.id);
        });
        expect(lobbyController.roomIsFull(room.roomCode)).toEqual(true);
    });

    test('roomIsFull returns false if a room has less than 10 players',()=>{
        const simulatedPlayerSockets = [
            {id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'},
        ]
        let room = new Room(mockSocket.id);
        lobbyController = new LobbyController();
        lobbyController.addToRoomMap(room);
        simulatedPlayerSockets.forEach((socket)=>{
            lobbyController.addPlayerToRoom(room.roomCode,socket.id);
        });
        expect(lobbyController.roomIsFull(room.roomCode)).toEqual(false);
    });

    test('updatePlayerReadiness returns an updated player array given the calling player ID',()=>{
        let room = new Room(mockSocket.id);
        lobbyController = new LobbyController();
        lobbyController.addToRoomMap(room);
        lobbyController.addPlayerToRoomMap(room,mockSocket.id);
        expect(lobbyController.updatePlayerReadiness(mockSocket.id)[0].readyToStart).toBeTruthy();
    });

    test('getRoom() retrieves the room object given the roomId',()=>{
        let room = new Room(mockSocket.id);
        let roomCode = room.roomCode;
        lobbyController = new LobbyController();
        lobbyController.addToRoomMap(room);
        lobbyController.addPlayerToRoomMap(room,mockSocket.id);
        expect(lobbyController.getRoom(roomCode)).toEqual(room);
    })
})
