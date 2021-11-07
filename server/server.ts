import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/app';
import socketServer from "./socket";
import {createServer} from 'http';

const expressServer = express();

expressServer.set('view engine','ejs');
expressServer.set('views',path.join(__dirname,'views'));

expressServer.use('/',express.static(path.join(__dirname,'static')));

const manifest = fs.readFileSync(
    path.join(__dirname, 'static/manifest.json')
    ,'utf-8');
const assets = JSON.parse(manifest);

expressServer.get('/',(req,res)=>{
    const component = ReactDOMServer.renderToString(React.createElement(App))
    res.status(200).render('client',{component,assets})
});

const httpServer = createServer(expressServer);

const io = socketServer(httpServer);
io.on("connection", (socket)=>{
    console.log(`New socket connected ${socket.id}`);

    socket.on("create_room",(anObject)=>{
        console.log('generate a random code');
    })
});

httpServer.listen(3000, ()=> {
    console.log(`Server running on http://localhost:3000`);
});

