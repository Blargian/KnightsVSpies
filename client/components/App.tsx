import React, { useEffect } from "react";
import Homepage from "./Homepage";
import { io } from "socket.io-client";

const socket = io();
const App: React.FC = () => {

    return(
        <Homepage userSocket={socket}/>
    );
}

export default App;