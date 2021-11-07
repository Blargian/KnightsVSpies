import Jest from 'jest';
import {RoomController} from '../../controllers/roomController';

const roomController = new RoomController();

it("should generate a random alphanumeric roomcode of length 6", ()=>{
    expect(roomController.generateRoomCode()).toHaveLength(6);
});