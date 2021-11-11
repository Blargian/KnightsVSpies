import React, { useState } from "react";
import Homepage from "./Homepage";
import Lobby from "./Lobby";
import { io } from "socket.io-client";

const socket = io();

const App: React.FC = () => {

    const [roomCode,setRoomCode] = useState('');

    socket.on("room_created",(roomCodeReturn)=>{
        setRoomCode(roomCodeReturn);
    });

    socket.on("enter_roomcode",(data)=>{
        //
    })

    return(
        <div>
            <Homepage userSocket={socket}/>
        </div>
    );
}

export default App;