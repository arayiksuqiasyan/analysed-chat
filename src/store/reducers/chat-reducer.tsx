import {createSlice} from '@reduxjs/toolkit'

type message = { id: number | string, role: 'user' | 'bot', content: string }

interface InitialState {
    messages: message[] | []
    isLoading: boolean,
    errorMessage: string | null
}

const initialState: InitialState = {
    messages: [],
    isLoading: false,
    errorMessage: null
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setMessages: (state, action) => {
            if (Array.isArray(action.payload)) {
                state.messages = [...action.payload]
            } else {
                state.messages = [...state.messages, action.payload]
            }
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
})

export const {setMessages, setIsLoading} = chatSlice.actions

export default chatSlice.reducer
