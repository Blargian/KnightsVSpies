import { configureStore, createSlice, combineReducers, PayloadAction} from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import {myMiddleware} from "./socketMiddleware";

const store = configureStore({
    reducer: rootReducer,
    middleware: [myMiddleware],
    devTools: true
});
export default store;