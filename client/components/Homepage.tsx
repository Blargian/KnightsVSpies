import React, {useState} from 'react';
import {connect} from 'react-redux';

interface HomepageProps {
  
}

const Homepage: React.FC<HomepageProps> = () => {

    const [roomCode, setRoomCode] = useState('');

    const createRoom = () =>{
    };

    const enterRoomcode = (e: React.FormEvent<HTMLInputElement>) =>{
        setRoomCode(e.currentTarget.value);
    }

    const enterRoomcodeSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }

    return (
        <div>
            <button onClick={createRoom}>Create Room</button>
            <form onSubmit={enterRoomcodeSubmit}>
                <label>Enter roomcode</label>
                <input value={roomCode} onChange={enterRoomcode}></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(null, mapDispatchToProps)(Homepage)
