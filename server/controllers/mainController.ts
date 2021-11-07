import {RoomController} from './roomController';

export class MainController {

    public roomController: RoomController;

    constructor(){
        this.roomController = new RoomController();
    }
}