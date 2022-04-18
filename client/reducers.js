import { configureStore, createSlice, combineReducers, PayloadAction} from "@reduxjs/toolkit";

const initialGameState = {
    players: [],
    spies: [],
    knights: [],
    round: [

    ],
    leader: '',
    showRoles: false,
    allAcknowledged: false,
    selectedPlayers: [],
}

const initialRoomState = {
    selfId: '',
    selfAlias: '',
    players: [],
    roomCode: null,
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
        },
        returnAllRoomData(state,{action,payload}){
            return {...state,...payload}
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
        },
        ioGetAllData(state){
        },
        ioPlayerAcknowledged(state){},
        allPlayersAcknowledged(state,{action,payload}){
            return {...state,allAcknowledged:true,showRoles:false}
        },
        ioUpdateSelectedPlayers(state,{action,payload}){
        },
        updateSelectedPlayers(state,{action,payload}){
            console.log('updateSelectedPlayers:' + payload)
            return {...state,selectedPlayers:payload}
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
    returnAllRoomData
} = roomsSlice.actions;

export const {
    updateGameState,
    ioGetAllData,
    ioPlayerAcknowledged,
    allPlayersAcknowledged,
    ioUpdateSelectedPlayers,
    updateSelectedPlayers
} = gameSlice.actions;

