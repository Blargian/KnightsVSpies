import { configureStore, createSlice, combineReducers, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    game: {
        missionLeader: false,
        leaderSelection: [],
        round: 0,
        closeEyes: false,
        spies: [],
        knights: [],
        votesPass: 0,
        votesFail: 0,
    }
}

const initialRoomState = {
    selfId: '',
    selfAlias: '',
    players: [],
    roomCode: '',
    error: null,
}

const roomsSlice = createSlice({
    name: "room",
    initialState:initialRoomState,
    reducers: {
        ioCreateRoom(state,action){
        },
        roomCreated(state,{action,payload}){
            return {...state,...payload}; 
        },
        ioEnterRoomCode(state,{action,payload}){            
        },
        updatePlayers(state,{action,payload}){
            return {...state, players: payload}
        },
        updateSelf(state,{action,payload}){
            return {
                ...state,
                ...payload
            }
        },
        errorOccured(state,{action,payload}){
            return {
                ...state,
                error: payload
            }
        }


    }
});

//Root reducer for usage in the store
export const rootReducer = combineReducers({
    room: roomsSlice.reducer
});

//Make action creators accesible 
export const {
    ioCreateRoom,
    roomCreated,
    navigateToLobby,
    ioEnterRoomCode,
    updatePlayers,
    updateSelf,
    errorOccured,
} = roomsSlice.actions;

