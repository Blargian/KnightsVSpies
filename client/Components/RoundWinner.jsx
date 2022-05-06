import React from 'react';

const RoundWinner = ({knightsWon}) => {
    return (
        <div className="text-center animate-fadein">
            <h1 className="text-white text-3xl">{knightsWon ? "Knights" : "Spies"} won the round</h1>
            {knightsWon ? <img src=""/> : <img src=""/>}
        </div>
    )
}

export default RoundWinner;