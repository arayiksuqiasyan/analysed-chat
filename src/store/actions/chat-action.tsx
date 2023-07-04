import axios from "axios";
import {AppDispatch} from "../store";
import {notify} from "../reducers/root-reducer";
import {generateAiMessage} from "../../constants";
import {editMessage, Imessage, setIsLoading, setMessages} from "../reducers/chat-reducer";

type INewMessage = { id: string | number, role: string, content: string }

export const getAllMessages = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('/messages')
            dispatch(setMessages(response.data))
        } catch (e: any) {
            dispatch(notify({type: 'error', message: e.message}))
        }
    }
}

export const onSaveAiAnswer = (answer: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post('/messages', answer)
            dispatch(setMessages(answer))
        } catch (e: any) {
            dispatch(notify({type: 'error', message: e.message}))
        }
    }
}

export const sendMessage = (newMessage: INewMessage, reset: () => void) => {
    return (dispatch: AppDispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch(setIsLoading(true))
            try {
                const response = await axios.post('/messages', newMessage)
                reset()
                dispatch(setMessages(newMessage))
                setTimeout(() => {
                    dispatch(setIsLoading(false))
                    resolve(generateAiMessage(newMessage.content))
                }, 1200)

            } catch (e: any) {
                setTimeout(() => {
                    dispatch(setIsLoading(false))
                    reject(e.message)
                }, 1200)
            }
        })
    }
}

export const putMessage = (el: Imessage, reset: () => void) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.put(`/messages/${el.id}`, el)
            reset()
            dispatch(editMessage(response.data))
        } catch (e: any) {
            dispatch(notify({type: 'error', message: e.message}))
        }
    }
}
