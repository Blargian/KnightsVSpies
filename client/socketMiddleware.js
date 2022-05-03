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
    allPlayersAcknowledged,
    updateSelectedPlayers,
    updateCastToVote,
    updateAllowToVote,
    showWinner,
    hideShowWinner,
    resetGameState
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

    socket.on(updateSelectedPlayers.type,(payload)=>{
        dispatch(updateSelectedPlayers(payload))
    })

    socket.on(updateCastToVote.type,(payload)=>{
        dispatch(updateCastToVote(payload))
    })

    socket.on(updateAllowToVote.type,(payload)=>{
        dispatch(updateAllowToVote(payload))
    })

    socket.on(showWinner.type,(payload)=>{
        dispatch(showWinner(payload))
    })

    socket.on(hideShowWinner.type,(payload)=>{
        dispatch(hideShowWinner(payload))
    })

    socket.on(resetGameState.type,(payload)=>{
        dispatch(resetGameState(payload))
    })
    

    return action => {
        //actions from clients emit events
        if(action.type.includes('io')){
            socket.emit(action.type, action.payload)
        }
        next(action);
    }
}
