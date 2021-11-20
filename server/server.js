import express from 'express';
import socketServer from "./socket";
import {createServer} from 'http';
import path from 'path';
const publicPath = path.join(__dirname, '..', 'public');

const expressServer = express();
expressServer.use(express.static(publicPath));
expressServer.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
})

const httpServer = createServer(expressServer);

const io = socketServer(httpServer);

httpServer.listen(3000, ()=> {
    console.log(`Server running on http://localhost:3000`);
});

