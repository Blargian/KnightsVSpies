import React, {useState} from 'react';
import {ioCreateRoom} from '../reducers'
import { useSelector, useDispatch, connect} from 'react-redux'


const App = (props) => {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(updateMessageActionCreator(message))
        setMessage('');
    }

    const createRoomHandler = () => {
        dispatch(ioCreateRoom());
    }

    return (
        <div>
            <button onClick={createRoomHandler}>Create Room</button>
            <form>
                <label>Enter room code</label>
                <input></input>
                <button>X</button>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        messageFromState: state.room.message
    }
};

export default connect(mapStateToProps,null)(App);