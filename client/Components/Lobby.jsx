import React from 'react';
import {connect} from 'react-redux';

 const Lobby = (props) => {
    return(
        <div>
            <h2>Roomcode</h2>
            <h2>{props.roomCode}</h2>
            {props.selfAlias === 'Player1' ? <button>Start Game</button> : null}
            <ul>
                {
                props.players.map(player => {
                    return <div key={player.playerID}>
                            <p>{player.selfAlias}</p>
                            <p>{player.readyToStart ? 'ready' : 'waiting...'}</p>   
                        </div>
                })
                }
            </ul>
            <button>Ready</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const room = state.room
    return {
        ...room
    }
};

export default connect(mapStateToProps,null)(Lobby);