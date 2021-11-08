import {RoomController} from './roomController';
import {Socket} from 'socket.io';

export class MainController {

    private roomController: RoomController;

    constructor(){
        this.roomController = new RoomController();
    }

    public handleSocket(socket:Socket){
        console.log('Handle the socket');

        socket.on("create_room",()=>{
            this.roomController.addRoom(socket);     
            console.log(`New room added`);
            console.log(`Number of rooms currently created is: ${this.roomController.getRoomCount()}`);    
        });

        socket.on("enter_roomcode", (data)=>{
            console.log(`User submitted roomcode: ${data.roomcode}`)
        })
    }
}