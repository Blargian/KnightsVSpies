import React, {useState} from 'react';

interface HomepageProps {
    userSocket:any
}

const Homepage: React.FC<HomepageProps> = ({userSocket}: HomepageProps) => {

    const [roomCode, setRoomCode] = useState('');

    const createRoom = () =>{
        userSocket.emit("create_room");
    };

    const enterRoomcode = (e: React.FormEvent<HTMLInputElement>) =>{
        setRoomCode(e.currentTarget.value);
    }

    const enterRoomcodeSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        userSocket.emit("enter_roomcode", {"roomcode":roomCode});
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

export default Homepage;