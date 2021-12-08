import React,{useState} from 'react';
import { useSelector, useDispatch,connect} from 'react-redux'
import { ioPlayerIsReady } from '../reducers';

const Lobby = (props) => {

    const dispatch = useDispatch();

    const readyHandler = () => {
        dispatch(ioPlayerIsReady(props.selfId));
    }

    const appClass="p-10 flex flex-col gap-10 bg-spy";
    const buttonClass = "bg-blue text-white"

    return(
        <div className={appClass}>
            <h2 className="text-white">Roomcode</h2>
            <h2 className="text-white">{props.roomCode}</h2>
            {props.selfAlias === 'Player1' ? <button className={buttonClass}>Start Game</button> : null}
            <button className={buttonClass} onClick={readyHandler}>Ready</button>
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