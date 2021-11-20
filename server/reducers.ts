import { configureStore, createSlice, combineReducers, PayloadAction} from "@reduxjs/toolkit";
import {Room} from './models/roomModel';
import {Socket} from 'socket.io';

const initialState : Room[] = [];

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        createRoom(state, action: PayloadAction<Socket>){
            const newRoom = new Room(action.payload);
            state.push(newRoom);
            console.log(state);
        }
    }
});

//Root reducer for usage in the store
export const rootReducer = combineReducers({
    rooms: roomsSlice.reducer
});

//Make action creators accesible 
export const {
    createRoom: createRoomActionCreator,
} = roomsSlice.actions;