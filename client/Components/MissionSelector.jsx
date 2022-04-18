import React,{useState,useEffect,useRef} from 'react';
import { useSelector, useDispatch,connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ioUpdateSelectedPlayers } from '../reducers';

const MissionSelector = ({roomCode, players, selectedPlayers, missionLeader, currentRound, selfId}) =>{

    const dispatch = useDispatch();
    const missionRules = [
        [2,3,2,3,3], //5 players
        [2,3,4,3,4], //6 players
        [2,3,3,4,4], //7 players
        [3,4,4,5,5], //8 players
        [3,4,4,5,5], //9 players
        [3,4,4,5,5] //10 players
    ]

    const sendOnMissionHandler = (selectedPlayerId) => {

        let newSelectedPlayers = [...selectedPlayers];
        console.log(newSelectedPlayers)

        if(!selectedPlayers.includes(selectedPlayerId)){
            let maxPlayersInRound = missionRules[players.length-5][currentRound]
            console.log(maxPlayersInRound);
            if(selectedPlayers.length<maxPlayersInRound){
                console.log('reached')
                newSelectedPlayers.push(selectedPlayerId);
            }
        } else {
            newSelectedPlayers = selectedPlayers.filter((alreadySelectedPlayer)=>{
                return alreadySelectedPlayer!==selectedPlayerId
            })
        }
        dispatch(ioUpdateSelectedPlayers({roomCode,newSelectedPlayers}));
    }

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

    const leaderClass = "text-amber text-2xl text-center align-center"
    const MissionSelectorClass = "basis-2/3 border-2 border-sky-300 border-solid rounded-lg bg-sky400"
    
    return(
        <div className={MissionSelectorClass}>
            {playerDivs}
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const roomCode = state.room.roomCode;
    return {
        roomCode,
        ...ownProps
    }
}

export default connect(mapStateToProps,null)(MissionSelector);