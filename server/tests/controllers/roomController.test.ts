import Jest from 'jest';
import {RoomController} from '../../controllers/roomController';
const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");

jest.setTimeout(30000);

describe("The room controller", () => {
    
    const roomController = new RoomController();
    let io: any; 
    let serverSocket: any; 
    let clientSocket: any; //usage of any here probably not a good use of typescript

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

    test('should correctly display the number of rooms',(done)=>{
        expect.assertions(1);
        serverSocket.on("test_event", (callback:() => void)=>{
            roomController.addRoom(serverSocket);
            if(callback){
                callback();
            }
        });
        clientSocket.emit('test_event');
        clientSocket.emit('test_event',(response: ()=>void)=>{
            done();
            expect(roomController.getRoomCount()).toEqual(2);
        });
    });

    test('should return true if the entered roomcode is correct ',(done)=>{
        expect.assertions(1);
        let correctGuess: string;

        serverSocket.on("create_room", (callback: ()=>void)=>{
            correctGuess = roomController.addRoom(serverSocket);
            callback();
        });
        clientSocket.emit("create_room",(response: ()=>void)=>{
            done();
            expect(roomController.roomExists(correctGuess)).toBeTruthy();
        });

    });

    test('should return false if the entered roomcode is incorrect ',(done)=>{
        expect.assertions(1);
        let correctGuess='';
        let incorrectGuess='abc123';

        serverSocket.on("create_room", (callback: ()=>void)=>{
            correctGuess = roomController.addRoom(serverSocket);
            callback();
        });
        clientSocket.emit("create_room",(response:()=>void)=>{
            done();
            expect(roomController.roomExists(incorrectGuess)).toBeFalsy();
        });

    })
})    


