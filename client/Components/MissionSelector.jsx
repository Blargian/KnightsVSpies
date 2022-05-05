import React,{useState,useEffect,useRef} from 'react';
import { useSelector, useDispatch,connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ioUpdateSelectedPlayers,ioCastToVote,ioPlayerCastVote} from '../reducers';

const MissionSelector = ({roomCode, players, selectedPlayers, missionLeader, currentRound, selfId, castToVote,allowToVote, spyIds}) =>{

    const dispatch = useDispatch();
    const missionRules = [
        [2,3,2,3,3], //5 players
        [2,3,4,3,4], //6 players
        [2,3,3,4,4], //7 players
        [3,4,4,5,5], //8 players
        [3,4,4,5,5], //9 players
        [3,4,4,5,5] //10 players
    ]
    let maxPlayersInRound = missionRules[players.length-5][currentRound]
    
    const sendOnMissionHandler = (selectedPlayerId) => {

        if(castToVote)
            return; 

        let newSelectedPlayers = [...selectedPlayers];
        let maxPlayersInRound = missionRules[players.length-5][currentRound]

        if(!selectedPlayers.includes(selectedPlayerId)){
            if(selectedPlayers.length<maxPlayersInRound){
                newSelectedPlayers.push(selectedPlayerId);
            }
        } else {
            newSelectedPlayers = selectedPlayers.filter((alreadySelectedPlayer)=>{
                return alreadySelectedPlayer!==selectedPlayerId
            })
        }
        dispatch(ioUpdateSelectedPlayers({roomCode,newSelectedPlayers}));
    }

    const voteHandler = (missionPass) => {
        if(!castToVote)
            return 
        //console.log(`${selfId} voted ${missionPass ? 'for' : 'against'}`);
        dispatch(ioPlayerCastVote({roomCode,selfId,missionPass}));
    }

    const castToVoteHandler = () => {
        if(selectedPlayers.length === maxPlayersInRound){
            //send a message to the server to say that it's ready to get votes
            dispatch(ioCastToVote({roomCode:roomCode,castToVote:true}));
        }
    }

    const leaderClass = "text-amber text-2xl text-center align-center";
    const playerDivs = players.map((player)=>{
        return <div 
            key={player.playerId} 
            onClick={selfId === missionLeader ? ()=>{sendOnMissionHandler(player.playerId)} : ()=>{}} 
            className="grid grid-cols-3 cursor-pointer"
            >
                {player.playerId === missionLeader ? <FontAwesomeIcon icon={faCrown} className={leaderClass}/>: <div className="content-none"></div>}
                <h1 className="text-white">{player.selfAlias}</h1>
                <FontAwesomeIcon icon={faCheck} className={selectedPlayers.includes(player.playerId)?'text-green text-2xl':'text-green text-2xl hidden'}/>
            </div>
    });

    
    const MissionSelectorClass = "basis-2/3 border-2 border-sky-300 border-solid rounded-lg bg-sky400";
    const castToVoteButton = "bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded";
    const castToVoteButtonDisable = `${castToVoteButton} cursor-not-allowed`;
    const passMissionButton = "bg-green hover:bg-green text-white font-bold py-2 px-4 rounded";
    const passMissionButtonDisable = `${passMissionButton} cursor-not-allowed`;
    const failMissionButton = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
    const failMissionButtonDisable = `${failMissionButton} cursor-not-allowed`;
    
    return(
        <div className="w-2/5 mx-auto">
            <h3 className="text-white">You are a {spyIds.includes(selfId)?"Spy" : "Knight"}</h3>
            <div className={MissionSelectorClass}>
            {playerDivs}
            {selfId===missionLeader 
                ? <div>
                    {((maxPlayersInRound - selectedPlayers.length)!==0) ? <h3>{`Select ${maxPlayersInRound - selectedPlayers.length} players to go on mission` }</h3> : null}
                    <button onClick={castToVoteHandler} className={allowToVote ? castToVoteButton: castToVoteButtonDisable}>Cast to vote</button>    
                </div> :null}
                {selectedPlayers.includes(selfId)?
                <div>
                    {spyIds.includes(selfId) && castToVote ? 
                    <div>
                        <button onClick={()=>{voteHandler(true)}} className={castToVote && allowToVote ? passMissionButton : passMissionButtonDisable}>Accept</button>
                        <button onClick={()=>{voteHandler(false)}} className={castToVote && allowToVote ? failMissionButton : failMissionButtonDisable}>Veto</button>
                    </div> : null
                    }
                    {!spyIds.includes(selfId) && castToVote ?
                    <button onClick={()=>{voteHandler(true)}} className={castToVote && allowToVote ? passMissionButton : passMissionButtonDisable}>Accept</button>
                    : null
                    }
                </div> : null
                }
        </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const roomCode = state.room.roomCode;
    const playerId = state.room.selfId;
    return {
        roomCode,
        ...ownProps
    }
}

export default connect(mapStateToProps,null)(MissionSelector);