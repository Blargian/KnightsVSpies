import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch, connect} from 'react-redux'
import {ioGetAllData,ioPlayerAcknowledged} from '../reducers'
import {useParams} from "react-router-dom";

const Game = (props) => {

    const dispatch = useDispatch();
    let {roomCode} = useParams()

    const [isLoading,setIsLoading] = useState(false);
    const [allAcknowledged,setAllAcknowledged] = useState(false)
    //Used for fetching data if the user renavigates to the route but no state data is present
    useEffect(() => {
        if(!props.roomCode){
            setIsLoading(true);
            dispatch(ioGetAllData(roomCode))
        }
      }, []);

      useEffect(() => {
          if(props.error){
            setIsLoading(false);
          }
      },[props.error])

    const [otherSpies, setOtherSpies] = useState([]);
    const appClass="w-full align-center content-center p-10 bg-spy flex flex-col justify-center";
    useEffect(()=>{
        if(props.otherSpies){
            setOtherSpies(props.otherSpies)
        }
    },[props.otherSpies]);

    const acknowledgeRoleHandler = () =>{
        if(!allAcknowledged){
            setAllAcknowledged(true);
            dispatch(ioPlayerAcknowledged(props.roomCode));
        }
    }

    let acknowledgeButtonClass = readyButtonClass;
    let readyButtonClass = 'bg-blue text-white  w-36 p-2 rounded-lg hover:bg-lightblue transition duration-500 ease-in-out mt-4';
    let acceptedButtonClass = `bg-green text-white  w-36 p-2 rounded-lg hover:bg-lightgreen transition duration-500 ease-in-out mt-4`;
    
    return(
        <div className={appClass}>
            {props.showRoles ? 
                <div className="flex flex-col justify-center content-center items-center">
                    <h1 className="text-white text-center">{props.selfAlias} you are a</h1>
                    {props.isSpy ? 
                        <div>
                            <h1 className="text-white text-center animate-top-fade">SPY</h1>
                            <ul className="mt-4">
                                {otherSpies.map((otherSpy)=>{
                                    return <li className="text-white text-center" key={otherSpy.playerId}>{otherSpy.selfAlias}</li>
                                })}
                            </ul>
                            <h2 className="text-white text-center mt-2">{otherSpies.length>1 ? 'Are also spies' : 'Is also a spy'}</h2>
                        </div> : 
                        <h1 className="text-white text-center animate-top-fade">KNIGHT</h1>    
                    }
                    <button className={allAcknowledged ? acceptedButtonClass : readyButtonClass} onClick={acknowledgeRoleHandler}>Let's go</button>
                </div> : null

            }
            {
                props.error ? <div className="flex flex-col items-center"><h1 className="text-red-600 text-center text-xl animate-pulse">{props.error}</h1><FontAwesomeIcon icon={faExclamationCircle} className='text-red-600 text-6xl animate-pulse text-center'/></div> : null
            }
            {
                isLoading ? <div className="flex flex-col justify-center items-center"><div className="text-white text-center animate-pulse">loading</div><FontAwesomeIcon icon={faSpinner} className='text-white text-6xl animate-spin'/></div> : null
            }
            {
                props.allAcknowledged ? <div></div> : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {

const isSpy = state.game.spies.filter((spy)=>{
    return spy.playerId === state.room.selfId; 
}).length ? true : false;

let selfAlias = state.room.players.filter((player)=>{
    return player.playerId === state.room.selfId; 
});
if(selfAlias.length>=1)
    selfAlias = [0].selfAlias

let otherSpies; 
if(isSpy){
    otherSpies = state.game.spies.filter((spy)=>{
        if(spy.playerId !== state.room.selfId){
            return spy.selfAlias;
        }
    });
} else {
    otherSpies = null;
}

return {
    ...state.room,
    selfAlias,
    ...state.game,
    isSpy,
    otherSpies
}

};

export default connect(mapStateToProps,null)(Game);