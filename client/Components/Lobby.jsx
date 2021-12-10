import React,{useState} from 'react';
import { useSelector, useDispatch,connect} from 'react-redux'
import { ioPlayerIsReady } from '../reducers';

const Lobby = (props) => {

    const dispatch = useDispatch();

    const readyHandler = () => {
        dispatch(ioPlayerIsReady({playerId:props.selfId,roomCode:props.roomCode}));
    }

    const startGameHandler = () => {
        if(props.canStartGame){
            console.log('Game started');
        } else {
            console.log('Cant start game');
        }
    }

    const appClass="w-full align-center content-center p-10 bg-spy";
    const startbuttonClass = "bg-blue text-white w-36 p-2 rounded-lg hover:bg-lightblue transition duration-500 ease-in-out";
    const startButtonClassUnable = "bg-lightgray text-white w-36 p-2 rounded-lg transition duration-500 ease-in-out";
    const readybuttonClass = `bg-blue text-white  w-36 p-2 rounded-lg hover:bg-lightblue transition duration-500 ease-in-out ${props.selfAlias === 'Player1' ? 'mt-2' : ''}`;
    const unreadybuttonClass = `bg-green text-white  w-36 p-2 rounded-lg hover:bg-lightgreen transition duration-500 ease-in-out ${props.selfAlias === 'Player1' ? 'mt-2' : ''}`;

    return(
        <div className={appClass}>
            <div className="flex flex-row flex-wrap justify-between">
                <div>
                    <h2 className="text-white text-2xl">Roomcode</h2>
                    <h2 className="text-white text-3xl">{props.roomCode}</h2>
                </div>
                <div className="flex flex-col">
                    {props.selfAlias === 'Player1' ? <button className={props.canStartGame ? startbuttonClass : startButtonClassUnable} onClick={startGameHandler}>Start Game</button> : null}
                    {!props.myPlayerIsReady? 
                        <button className={readybuttonClass} onClick={readyHandler}>Ready</button> 
                        :<button className={unreadybuttonClass} onClick={readyHandler}>Not ready</button> 
                    }
                </div>
            </div>
            <ul className="flex flex-row">
                {
                (props.players || []).map(player => {
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
    const thisPlayer = room.players.filter((player)=>{
        return player.playerID === room.selfId 
    })[0];
    const canStartGame = room.players.every((player)=>{
        return player.readyToStart === true
    })

    return {
        ...room,
        myPlayerIsReady: (thisPlayer ? thisPlayer.readyToStart : false),
        canStartGame
    }
};

export default connect(mapStateToProps,null)(Lobby);