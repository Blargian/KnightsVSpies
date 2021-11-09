import Jest from 'jest';
import {RoomController} from '../../controllers/roomController';
const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");

jest.setTimeout(30000);

describe("The room controller", () => {
    
    const roomController = new RoomController();
    let io: any, serverSocket: any, clientSocket: any; //usage of any here probably not a good use of typescript

    //see example on socket.io testing documentation page
    beforeAll((done) => {
        const httpServer = createServer();
        io = new Server(httpServer);
        httpServer.listen(()=>{
            const port = httpServer.address().port;
            clientSocket = new Client(`http://localhost:${port}`);
            io.on("connection",(socket:any)=>{
                serverSocket = socket;        
            });
            clientSocket.on("connect",done)
        })
    });

    afterAll(()=>{
        io.close();
        clientSocket.close();
    });

    test('should correctly display the number of rooms',async()=>{
        await serverSocket.on("test_event", ()=>{
            roomController.addRoom(serverSocket);
        });
        await clientSocket.emit('test_event');
        await clientSocket.emit('test_event',(response)=>{
            expect(roomController.getRoomCount).toEqual(2);
        });
    });
    
})    


