import {createSlice} from '@reduxjs/toolkit'
import {toast} from "react-toastify";

type INotify = 'error' | 'warning' | 'success'

interface InitialState {
}

const initialState: InitialState = {
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        notify: (state, action: { payload: { message: string, type?: INotify } }) => {
            const {message,type} = action.payload || {}
            toast[type ? type : 'error'](message)
        }
    },
})

export const {notify} = rootSlice.actions

export default rootSlice.reducer
