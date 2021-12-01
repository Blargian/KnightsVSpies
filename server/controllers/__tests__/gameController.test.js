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

    let gameController = new GameController();

    const mockSocket = {
        //socket things
        id: 'x8WIv7-mJelg7on_ALbx'
    } 
    const room = new Room(mockSocket.id);

    test('addToRoomMap correctly adds the room to the map',()=>{   
        gameController.addToRoomMap(room);
        expect(gameController.rooms.get(room.roomCode)).toEqual(room);
    });

    test('addPlayerToRoomMap correctly adds a mapping between player and room',()=>{
        gameController.addPlayerToRoomMap(room,mockSocket.id)
        expect(gameController.playersToRooms.get(mockSocket.id)).toEqual(room.roomCode);
    });

    test('formattedRoom returns an object with the correct properties',()=>{
        expect(gameController.formattedRoom(room,mockSocket.id)).toEqual(expect.objectContaining({
            roomCode: expect.any(String),
            selfId: expect.any(String),
            selfAlias:expect.stringContaining('Player'),
            players: expect.any(Array)
        }));
    })
})
