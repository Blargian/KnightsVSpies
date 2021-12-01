import { 
    ioCreateRoom,
    roomCreated,
    ioEnterRoomCode,
    updatePlayers,
    updateSelf
} from './reducers'

//A middleware to pass actions to the server 
export const socketMiddleware = (socket) => ({dispatch,getState}) => next => {
 
    //events from server dispatch actions
    socket.on(roomCreated.type,(payload)=>{
        dispatch(roomCreated(payload));
    });

    socket.on(updatePlayers.type,(payload)=>{
        dispatch(updatePlayers(payload));
    });

    socket.on(updateSelf.type,(payload)=>{
        dispatch(updateSelf(payload));
    });

    return action => {
        //actions from clients emit events
        if(action.type.includes('io')){
            socket.emit(action.type, action.payload)
        }
        next(action);
    }
}
