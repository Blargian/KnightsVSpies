import React from 'react';

interface HomepageProps {
    userSocket:any
}

const Homepage: React.FC<HomepageProps> = ({userSocket}: HomepageProps) => {

    const createRoom = () =>{
        userSocket.emit("create_room");
    };

    return (
        <div>
            <button onClick={createRoom}>Create Room</button>
            <form>
                <label>Enter roomcode</label>
                <input></input>
            </form>
        </div>
    );
}

export default Homepage;