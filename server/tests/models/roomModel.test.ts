import Jest from 'jest';
import {Room} from '../../models/roomModel';
import socketIOClient from 'socket.io-client';
import MockedSocket from 'socket.io-mock';

jest.mock('socket.io-client');
jest.setTimeout(6000);

describe("tests for the room model", () => {
    
    let socket;
    let room : any;

    beforeEach((done) => {
        socket = new MockedSocket();
        socketIOClient.mockReturnValue(socket);
        room = new Room(socket);
    });
    
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("should generate a random alphanumeric roomcode of length 6", ()=>{
        expect(room.roomId).toHaveLength(6);
    });

    test("should add the calling player socket to the array",()=>{
        expect(room.players).toHaveLength(1);
    })

    
})    


