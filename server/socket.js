import { Server } from 'socket.io';
import path from 'path';

export default (httpServer) => {

    console.log('Setting up socket.io server...');
    const io = new Server(httpServer,{
        cors: {
            origin: "*"
        },
    });

    return io;
}