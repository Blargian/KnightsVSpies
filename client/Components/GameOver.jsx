import React from 'react';
import knightsWinImage from '/assets/knights_won.png';
import spiesWinImage from '/assets/spies_won.png';
import {connect} from 'react-redux'

const GameOver = ({knightsWonGame}) => {

    return (
        <div className="text-center">
            <h1 className="text-white text-3xl animate-fadein">GAME OVER</h1>
            <h1 className="text-white text-3xl animate-fadein delay-1000">{knightsWonGame ? "KNIGHTS" : "SPIES"} WON </h1>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const knightsWonGame = state.game.knightsWonGame
    return {
        knightsWonGame
    }
}

export default connect(mapStateToProps,null)(GameOver);