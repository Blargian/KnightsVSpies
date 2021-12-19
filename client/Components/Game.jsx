import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch ,connect} from 'react-redux'

const Game = (props) => {

    const [otherSpies, setOtherSpies] = useState([]);
    const appClass="w-full align-center content-center p-10 bg-spy flex flex-col justify-center";
    useEffect(()=>{
        if(props.otherSpies){
            setOtherSpies(props.otherSpies)
        }
    },[props.otherSpies]);

    const enterButtonClass = 'text-white bg-blue ml-2 w-6';

    return(
        <div className={appClass}>
            {props.showRoles ? 
                <div className="flex flex-col">
                    <h1 className="text-white text-center">{props.selfAlias} you are a</h1>
                    {props.isSpy ? 
                        <div>
                            <h1 className="text-white text-center">SPY</h1>
                            <ul className="">
                                {otherSpies.map((otherSpy)=>{
                                    return <li className="text-white text-center" key={otherSpy.playerId}>{otherSpy.selfAlias}</li>
                                })}
                            </ul>
                            <h2 className="text-white text-center">{otherSpies.length>1 ? 'Are also spies' : 'Is also a spy'}</h2>
                        </div> : 
                        <h1 className="text-white text-center">KNIGHT</h1>    
                    }
                    <button className="enterButtonClass">Let's go</button>
                </div> : <div className="text-white text-center">loading</div>

            }
        </div>
    )
}

const mapStateToProps = (state) => {

const isSpy = state.game.spies.filter((spy)=>{
    return spy.playerId === state.room.selfId; 
}).length ? true : false;

const selfAlias = state.room.players.filter((player)=>{
    return player.playerId === state.room.selfId; 
})[0].selfAlias;

let otherSpies; 
if(isSpy){
    otherSpies = state.game.spies.filter((spy)=>{
        if(spy.playerId !== state.room.selfId){
            return spy.selfAlias;
        }
    });
} else {
    otherSpies = null;
}
console.log(otherSpies)

return {
    ...state.room,
    selfAlias,
    ...state.game,
    isSpy,
    otherSpies
}

};

export default connect(mapStateToProps,null)(Game);