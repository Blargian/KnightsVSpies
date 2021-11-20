import React, { useState } from "react";
import Homepage from "./Homepage";
import Lobby from "./Lobby";
import { io, Socket } from "socket.io-client";

interface AppProps {
    socket: Socket
}

const App: React.FC = () => {
    return(
        <div>
            <Homepage/>
        </div>
    );
}

export default App