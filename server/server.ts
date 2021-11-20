import express from 'express';
import socketServer from "./socket";
import {createServer} from 'http';
import { MainController } from './controllers/mainController';
import store from './store';
import path from 'path';
const publicPath = path.join(__dirname, '..', 'public');

const expressServer = express();
expressServer.use(express.static(publicPath));
expressServer.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
})

const httpServer = createServer(expressServer);

const io = socketServer(httpServer);
const controller = new MainController();

store.subscribe(
    () => io.emit('state-change', store.getState())
);

io.on("connection", (socket)=>{
    console.log(`New socket connected ${socket.id}`);
    
    socket.emit('state-change', store.getState());
    socket.on('action', store.dispatch.bind(store));
});

httpServer.listen(3000, ()=> {
    console.log(`Server running on http://localhost:3000`);
});

