import React, {useState, useEffect} from 'react';
import {ioCreateRoom,ioEnterRoomCode} from '../reducers'
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

    const createRoomHandler = () => {
        dispatch(ioCreateRoom());
    }

    const enterRoomCodeHandler = (e) =>{
        e.preventDefault();
        dispatch(ioEnterRoomCode(e.target.userInput.value))
    }

    return (
        <div>
            <button onClick={createRoomHandler}>Create Room</button>
            <form onSubmit={enterRoomCodeHandler}>
                <label>Enter room code</label>
                <input type="text" name="userInput"></input>
                <button>X</button>
            </form>
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