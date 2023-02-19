import React,{useState,useEffect,useRef} from 'react';
import { useSelector, useDispatch,connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ioUpdateSelectedPlayers,ioCastToVote,ioPlayerCastVote} from '../reducers';

const passMissionButton = "bg-green hover:bg-green text-white font-bold py-2 px-4 rounded";
const passMissionButtonDisable = `${passMissionButton} cursor-not-allowed`;
const failMissionButton = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
const failMissionButtonDisable = `${failMissionButton} cursor-not-allowed`;

const MissionVoter = ({missionLeaderId,selectedPlayerIds,players,playerId}) =>{
    
    return(
        <div>
            <div>
                <h1 className="text-white">{players.filter((player)=>player.playerId==missionLeaderId ? player.selfAlias : null)} voted to send on the mission:</h1>
                <h2 className="text-white">
                    {players.filter((player)=>{player.playerId==playerId ? player.selfAlias : null})}
                </h2>
            </div>
            {
                playerId!==missionLeaderId ?
                <div>
                    <button onClick={()=>{}} className={passMissionButton}>Accept</button>
                    <button onClick={()=>{}} className={failMissionButton}>Veto</button>
                </div> :
                null
            }
            
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const playerId = state.room.selfId;
    const players = state.room.players;
    return {
        players,
        playerId,
        ...ownProps
    }
}

export default connect(mapStateToProps,null)(MissionVoter);