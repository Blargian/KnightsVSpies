import * as randomstring from "randomstring";

export class RoomController {

    public generateRoomCode() : string {
        return randomstring.generate({
            length: 6,
            charset: 'alphanumeric'
        });
    }
}