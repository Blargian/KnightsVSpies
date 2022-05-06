import React from 'react';
import knightsWinImage from '/assets/knights_won.png';
import spiesWinImage from '/assets/spies_won.png';

const RoundWinner = ({knightsWon}) => {

    const winnerClass = "text-center p-5 mx-auto"
    return (
        <div className="text-center animate-fadein">
            <h1 className="text-white text-3xl">{knightsWon ? "Knights" : "Spies"} won the round</h1>
            {knightsWon ? <img className={winnerClass} src={knightsWinImage}/> : <img className={winnerClass} src={spiesWinImage}/>}
        </div>
    )
}

export default RoundWinner;