import React from 'react';

const MissionHistory = (props) => {

//playersOnMission
//knightsWon
return <div className="flex flex-col">
    <h1 className="text-white">Previous mission scores</h1>
    <div className={`grid grid-cols-${props.players.length}`}>
        {
            props.rounds.map((round,index)=>{
                return <div key={`round${index}`}>
                    <div className={`text-white text-center border-2 bg-slate-100/50 ${round.knightsWon === true ? ' bg-green' : round.knightsWon === false ? ' bg-red-500' : ' '}`}>{round.knightsWon === true ? 'Knights' : round.knightsWon === false ? 'Spies' : null}</div>
                    <div>
                        {round.playersOnMission.map((player)=>{
                            return <div key={`round${index}${player}`} className="text-black border-2 border-gray bg-white">{player}</div>
                        })}
                    </div>
                </div>
            })
        }
    </div>
</div>
}

export default MissionHistory;