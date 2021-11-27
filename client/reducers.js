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
}

const roomsSlice = createSlice({
    name: "room",
    initialState:initialRoomState,
    reducers: {
        ioCreateRoom(state,action){
        },
        roomCreated(state,{action,payload}){
            state.roomCode = payload.roomCode;
            state.selfId = payload.selfId; 
            return state; 
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
} = roomsSlice.actions;

