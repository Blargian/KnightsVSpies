import React from 'react';
import knightsWonImage from '../assets/knights_won.png';
import spiesWonImage from '../assets/spies_won.png';

const RoundWinner = ({knightsWon}) => {
    return (
        <div className="text-center animate-fadein">
            <h1 className="text-white text-3xl">{knightsWon ? "Knights" : "Spies"} won the round</h1>
            {knightsWon ? <img src={knightsWonImage}/> : <img src={spiesWonImage}/>}
        </div>
    )
}

export default RoundWinner;