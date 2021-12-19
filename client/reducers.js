import { configureStore, createSlice, combineReducers, PayloadAction} from "@reduxjs/toolkit";

const initialGameState = {
    players: [],
    spies: [],
    knights: [],
    round: [

    ],
    leader: '',
    showRoles: false,
}

const initialRoomState = {
    selfId: '',
    selfAlias: '',
    players: [],
    roomCode: '',
    error: null,
    gameStarted:false,
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
        },
        ioPlayerIsReady(state,{action,payload}){
        },
        ioStartGame(state){

        },
        navigateToGame(state){
            return {
                ...state,
                gameStarted: true
            }
        }
    }
});

const gameSlice = createSlice({
    name:"game",
    initialState:initialGameState,
    reducers: {
        updateGameState(state,{action,payload}){
            return{
                ...state,
                ...payload
            }
        }
    }
}
);

//Root reducer for usage in the store
export const rootReducer = combineReducers({
    room: roomsSlice.reducer,
    game: gameSlice.reducer,
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
    ioPlayerIsReady,
    ioStartGame,
    navigateToGame,
} = roomsSlice.actions;

export const {
    updateGameState,
} = gameSlice.actions;

