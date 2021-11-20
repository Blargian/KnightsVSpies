import { configureStore, createSlice, combineReducers, PayloadAction} from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export default configureStore({
    reducer:rootReducer
} );