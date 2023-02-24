import React from 'react';
import knightsWinImage from '/assets/knights_won.png';
import spiesWinImage from '/assets/spies_won.png';

const GameOver = ({knightsWon}) => {

    const winnerClass = "text-center p-5 mx-auto"
    return (
        <div className="text-center animate-fadein">
            <h1 className="text-white text-3xl">GAME OVER</h1>
            {knightsWon!==null ? <h1 className="text-white text-3xl">{knightsWon? "Knights" : "Spies"} won the game</h1> : null}
            {knightsWon===true ? <img className={winnerClass} src={knightsWinImage}/> : (knightsWon!==true && knightsWon===false) ? <img className={winnerClass} src={spiesWinImage}/> : <h1 className="text-white text-3xl">GAME OVER</h1>}
        </div>
    )
}

export default GameOver;