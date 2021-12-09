import React,{useState} from 'react';
import { useSelector, useDispatch,connect} from 'react-redux'
import { ioPlayerIsReady } from '../reducers';

const Lobby = (props) => {

    const dispatch = useDispatch();

    const readyHandler = () => {
        dispatch(ioPlayerIsReady(props.selfId));
    }

    const appClass="bg-spy w-full align-center content-center p-10";
    const startbuttonClass = "bg-blue text-white w-36 p-2 rounded-lg hover:bg-lightblue transition duration-500 ease-in-out";
    const readybuttonClass = `bg-blue text-white  w-36 p-2 rounded-lg hover:bg-lightblue transition duration-500 ease-in-out ${props.selfAlias === 'Player1' ? 'mt-2' : ''}`;

    return(
        <div className={appClass}>
            <div className="flex flex-row flex-wrap justify-between">
                <div>
                    <h2 className="text-white text-2xl">Roomcode</h2>
                    <h2 className="text-white text-3xl">{props.roomCode}</h2>
                </div>
                <div className="flex flex-col">
                    {props.selfAlias === 'Player1' ? <button className={startbuttonClass}>Start Game</button> : null}
                    <button className={readybuttonClass} onClick={readyHandler}>Ready</button>
                </div>
            </div>
            <ul className="flex flex-row">
                {
                props.players.map(player => {
                    return <div key={player.playerID}>
                            <h2 className="text-white">{player.selfAlias}</h2>
                            <p className="text-white">{player.readyToStart ? 'ready' : 'waiting...'}</p>   
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