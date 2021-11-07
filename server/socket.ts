import { Server } from 'socket.io';
import path from 'path';

export default (httpServer: any) => {

    console.log('Setting up socket.io server...');
    const io = new Server(httpServer,{
        cors: {
            origin: "*"
        },
    });

    return io;
}