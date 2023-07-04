import {createSlice} from '@reduxjs/toolkit'

export type Imessage = { id: number | string, role: 'user' | 'bot', content: string }

interface InitialState {
    messages: Imessage[] | []
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
        editMessage: (state, action) => {
            const foundedIndex = state.messages.findIndex(el => el?.id === action.payload?.id)
            if (foundedIndex > -1) {
                const newMessages = [...state.messages]
                newMessages[foundedIndex].content = action.payload?.content
            }
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
})

export const {setMessages, setIsLoading, editMessage} = chatSlice.actions

export default chatSlice.reducer
