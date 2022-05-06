import express from 'express';
import socketServer from "./socket";
import {createServer} from 'http';
import path from 'path';
const publicPath = path.join(__dirname, '..', 'public','dist');
import MainController from './controllers/mainController';

const expressServer = express();
expressServer.use(express.static(publicPath));
expressServer.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
})

const httpServer = createServer(expressServer);

const io = socketServer(httpServer);

const port = process.env.PORT || 3000
httpServer.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});

const mainController = new MainController(io);


