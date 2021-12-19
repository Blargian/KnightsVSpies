import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch,connect} from 'react-redux'
import { ioPlayerIsReady, ioStartGame} from '../reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Lobby = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [canStartGame,setCanStart] = useState(false);

    const readyHandler = () => {
        dispatch(ioPlayerIsReady({playerId:props.selfId,roomCode:props.roomCode}));
    }

    useEffect(()=>{
        const canStartGame = props.players.every((player)=>{
            return player.readyToStart === true
        }) && props.players.length >= 5;
        setCanStart(canStartGame);
    },[props.players])

    const startGameHandler = () => {
        if(canStartGame)
            dispatch(ioStartGame(props.roomCode));
    }

    const startGame= useEffect(()=>{
        if(props.gameStarted){
            navigate(`../${props.roomCode}/game`);
        }
    },[props.gameStarted,navigate])

    const appClass="w-full align-center content-center p-10 bg-spy flex flex-col justify-between";
    const startbuttonClass = "bg-blue text-white w-36 p-2 rounded-lg hover:bg-lightblue transition duration-500 ease-in-out";
    const startButtonClassUnable = "bg-lightgray text-white w-36 p-2 rounded-lg transition duration-500 ease-in-out";
    const readybuttonClass = `bg-blue text-white  w-36 p-2 rounded-lg hover:bg-lightblue transition duration-500 ease-in-out ${props.selfAlias === 'Player1' ? 'mt-2' : ''}`;
    const unreadybuttonClass = `bg-green text-white  w-36 p-2 rounded-lg hover:bg-lightgreen transition duration-500 ease-in-out ${props.selfAlias === 'Player1' ? 'mt-2' : ''}`;

    return(
        <div className={appClass}>
            <div className="flex flex-row flex-wrap justify-between">
                <div>
                    <h2 className="text-white text-2xl">Roomcode</h2>
                    <h2 
                        onClick={() => {navigator.clipboard.writeText(props.roomCode)}}
                        className="text-white text-3xl animate-bounce text-center cursor-pointer">{props.roomCode}
                    </h2>
                </div>
                <div className="flex flex-col">
                    {props.selfAlias === 'Player1' ? <button className={canStartGame ? startbuttonClass : startButtonClassUnable} onClick={startGameHandler}>Start Game</button> : null}
                    {!props.myPlayerIsReady? 
                        <button className={readybuttonClass} onClick={readyHandler}>Ready</button> 
                        :<button className={unreadybuttonClass} onClick={readyHandler}>Not ready</button> 
                    }
                </div>
            </div>
            <ul className="flex flex-row justify-evenly">
                {
                (props.players || []).map(player => {
                    return <div key={player.playerId} className='flex flex-col content-center items-center'>
                            <FontAwesomeIcon icon={faUser} className='text-white text-6xl'/>
                            <h2 className="text-white">{player.selfAlias}</h2>
                            {player.readyToStart ? <p className="text-green align-center">ready</p> :<p className="text-white align-center animate-pulse">waiting</p>}   
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
        return player.playerId === room.selfId 
    })[0];

    return {
        ...room,
        myPlayerIsReady: (thisPlayer ? thisPlayer.readyToStart : false),
    }
};

export default connect(mapStateToProps,null)(Lobby);