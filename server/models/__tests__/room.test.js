import {Room} from '../room';
import Jest from 'jest';

describe('The room model',()=>{
    test('addPlayer should add the player to the player array on instantiation',()=>{
        const mockSocket = {
            //socket things
            id: 'x8WIv7-mJelg7on_ALbx'
        } 
        const room = new Room(mockSocket.id);
        expect(room.players).toHaveLength(1);     
    })
})