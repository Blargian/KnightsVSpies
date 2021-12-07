import React,{useState} from 'react';
import { useSelector, useDispatch,connect} from 'react-redux'
import { ioPlayerIsReady } from '../reducers';

const Lobby = (props) => {

    const dispatch = useDispatch();

    const readyHandler = () => {
        dispatch(ioPlayerIsReady(props.selfId));
    }

    return(
        <div>
            <h2>Roomcode</h2>
            <h2>{props.roomCode}</h2>
            {props.selfAlias === 'Player1' ? <button>Start Game</button> : <button onClick={readyHandler}>Ready</button>}
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