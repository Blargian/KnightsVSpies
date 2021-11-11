import React from 'react';

interface LobbyProps {

}

const Lobby: React.FC<LobbyProps>= ({}:LobbyProps) => {
    return(
        <div>
            <h1>Room Code</h1>
            <button>Start Game</button>
        </div>
    )
}

export default Lobby;