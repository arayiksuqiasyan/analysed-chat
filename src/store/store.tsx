import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {chatSlice} from "./reducers/chat-reducer";
import {rootSlice} from "./reducers/root-reducer";

const rootReducer = combineReducers({
    [chatSlice.name]: chatSlice.reducer,
    [rootSlice.name]:rootSlice.reducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
