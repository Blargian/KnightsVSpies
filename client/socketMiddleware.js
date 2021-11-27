import { Middleware } from 'redux'
import { RootState } from './store'
import { 
    ioCreateRoom,
    roomCreated,
} from './reducers'

//A middleware to pass actions to the server 
export const socketMiddleware = (socket) => ({dispatch,getState}) => next => {
 
    //events from server dispatch actions
    socket.on(roomCreated.type,(payload)=>{
        dispatch({type:roomCreated.type, payload});
    })

    return action => {
        //actions from clients emit events
        if(action.type === ioCreateRoom.type){
            socket.emit(action.type, action.payload);
        }
        next(action);
    }
}
