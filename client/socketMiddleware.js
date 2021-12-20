import { 
    ioCreateRoom,
    roomCreated,
    ioEnterRoomCode,
    updatePlayers,
    updateSelf,
    errorOccured,
    navigateToGame,
    updateGameState,
} from './reducers';
import {
    allPlayersAcknowledged
} from './reducers';

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

    socket.on(errorOccured.type,(payload)=>{
        dispatch(errorOccured(payload));
    });

    socket.on(navigateToGame.type,(payload)=>{
        dispatch(navigateToGame(payload));
    })

    socket.on(updateGameState.type,(payload)=>{
        dispatch(updateGameState(payload));
    })

    socket.on(allPlayersAcknowledged.type,(payload)=>{
        dispatch(allPlayersAcknowledged(payload))
    })

    return action => {
        //actions from clients emit events
        if(action.type.includes('io')){
            socket.emit(action.type, action.payload)
        }
        next(action);
    }
}
