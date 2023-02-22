import React,{useState,useEffect,useRef} from 'react';
import { useSelector, useDispatch,connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ioVetoMissionHandler } from '../reducers';

const passMissionButton = "bg-green hover:bg-green text-white font-bold py-2 px-4 rounded";
const passMissionButtonDisable = `${passMissionButton} cursor-not-allowed`;
const failMissionButton = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
const failMissionButtonDisable = `${failMissionButton} cursor-not-allowed`;

const MissionVoter = ({missionLeaderId,selectedPlayerIds,players,playerId,roomCode}) =>{
    
    const dispatch = useDispatch();
    const [hasChosen,setHasChosen] = useState(false);

    const VetoMissionHandler = (roomCode,veto,playerId) => {
        dispatch(ioVetoMissionHandler({roomCode,playerId,vetoMission:veto}));
        //hide the veto and accept buttons 
        setHasChosen(true);
    }

    return(
        <div className="w-2/5 mx-auto">
            <div>
                {players.map((player)=>{
                    if(player.playerId==missionLeaderId){
                        return <h1 key={player.playerId} className="text-white">{player.selfAlias}</h1>
                    }
                    })
                } 
                <h1 className="text-white">voted to send on the mission:</h1>
                <div>
                    {
                        players.map((player=>{
                            return selectedPlayerIds.map(selectedId=>{
                                if(player.playerId==selectedId){
                                    return <h2 key={player.playerId} className="text-white">{player.selfAlias}</h2>
                                }
                            })
                        }))
                    }
                </div>
                
            </div>
            {
                playerId!==missionLeaderId && !hasChosen ?
                <div>
                    <button onClick={()=>{VetoMissionHandler(roomCode,false,playerId)}} className={passMissionButton}>Accept</button>
                    <button onClick={()=>{VetoMissionHandler(roomCode,true,playerId)}} className={failMissionButton}>Veto</button>
                </div> :
                <div></div>
            }
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const playerId = state.room.selfId;
    const players = state.room.players;
    const roomCode = state.room.roomCode;
    return {
        players,
        playerId,
        roomCode,
        ...ownProps
    }
}

export default connect(mapStateToProps,null)(MissionVoter);