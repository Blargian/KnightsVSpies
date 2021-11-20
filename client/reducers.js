import { configureStore, createSlice, combineReducers, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    message: ''
}

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        updateMessage(state, action){
            return {...state,message:action.payload};
        }
    }
});

//Root reducer for usage in the store
export const rootReducer = combineReducers({
    rooms: roomsSlice.reducer
});

//Make action creators accesible 
export const {
    updateMessage: updateMessageActionCreator,
} = roomsSlice.actions;