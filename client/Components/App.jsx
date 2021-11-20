import React, {useState} from 'react';
import {updateMessageActionCreator} from '../reducers'
import { useSelector, useDispatch, connect} from 'react-redux'


const App = (props) => {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(updateMessageActionCreator(message))
        console.log(props)
        setMessage('');
    }

    return (
        <div>
            <h1>Hello Spy Spy</h1>
            <form onSubmit={formSubmitHandler}>
                <input value={message} onChange={(e)=>{setMessage(e.target.value)}}></input>
                <button>submit</button>
                <h2>{props.messageFromState}</h2>
            </form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        messageFromState: state.rooms.message
    }
};

export default connect(mapStateToProps,null)(App);