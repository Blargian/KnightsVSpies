import React, {useState, useEffect} from 'react';
import {ioCreateRoom,ioEnterRoomCode,errorOccured} from '../reducers'
import { useSelector, useDispatch, connect} from 'react-redux'
import { useNavigate } from 'react-router-dom';


const App = (props) => {

    const navigate = useNavigate();
    const [roomCodeEntry, setRoomCodeEntry] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        if(props.roomCode){
            navigate(`/${props.roomCode}/lobby`);
        }
    },[props.roomCode,navigate])

    useEffect(()=>{
        if(props.error==="roomIsFull"){
            alert('Sorry, that room is full');
            dispatch(errorOccured(null));
        }
    },[props.error])

    const createRoomHandler = () => {
        dispatch(ioCreateRoom());
    }

    const enterRoomCodeHandler = (e) =>{
        e.preventDefault();
        dispatch(ioEnterRoomCode(e.target.userInput.value))
    }

    const appClass="mx-auto p-10 flex flex-col gap-10";
    const createButtonClass = 'text-black bg-white w-40 p-0.2';
    const enterInputClass = 'text-black bg-white ml-10';
    const enterButtonClass = 'text-white bg-blue ml-2 w-6';
    const headerClass = 'text-white text-6xl text-center';

    return (
        <div className={appClass}>
            <h1 className={headerClass}>Spy Spy</h1>
            <div className="flex flex-row">
                <button onClick={createRoomHandler} className={createButtonClass}>Create Room</button>
                <form onSubmit={enterRoomCodeHandler}>
                    <input className={enterInputClass} type="text" name="userInput" defaultValue="Enter roomcode"></input>
                    <button className={enterButtonClass}>X</button>
                </form>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    const room = state.room
    return {
        ...room
    }
};

export default connect(mapStateToProps,null)(App);