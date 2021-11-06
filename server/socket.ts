import { Server } from 'socket.io';
import {useSocketServer} from "socket-controllers";
import path from 'path';

export default (httpServer: any) => {

    const io = new Server(httpServer,{
        cors: {
            origin: "*"
        },
    });

    useSocketServer(io,{
        controllers:[path.join(__dirname, "./controllers/*.ts")]
    });

    return io;
}