import React, {useCallback, useEffect, useMemo} from "react";
import classes from './Chat.module.scss'
import {v4 as uuid} from 'uuid';
import {Controller, ControllerFieldState, ControllerRenderProps, useForm} from "react-hook-form";

import {notify} from "../../store/reducers/root-reducer";
import ChatInput from "./ChatInput/ChatInput";
import ChatMessages from "./ChatMessages/ChatMessages";
import {useAppDispatch, useAppSelector} from "../../hooks/Redux";
import {getAllMessages, onSaveAiAnswer, sendMessage} from "../../store/actions/chat-action";

interface IFormValues {
    chatInput: string
}

type IFormRenderProps = {
    field: ControllerRenderProps<IFormValues>,
    fieldState: ControllerFieldState
}


const AppChat = () => {
    const dispatch = useAppDispatch()
    const {isLoading} = useAppSelector((state) => state.chat)

    const {
        control,
        reset,
        handleSubmit
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            chatInput: ''
        } as IFormValues
    });

    const rules = useMemo(() => {
        return {
            required: {value: true, message: 'Required'},
            maxLength: {value: 200, message: 'Please enter a message with a maximum length of 200 characters.'}
        }
    }, [])

    const render = useCallback(({field, fieldState}: IFormRenderProps) => {
        return <ChatInput
            {...field}
            disabled={isLoading}
            className={classes.chatInput}
            placeholder={'Send a message'}
            error={fieldState?.error?.message}
        />
    }, [isLoading])

    const onSubmit = (data: IFormValues) => {
        const newMessage = {id: uuid(), role: 'user', content: data.chatInput}
        dispatch(sendMessage(newMessage, reset))
            .then((answer) => dispatch(onSaveAiAnswer(answer)))
            .catch((message) => dispatch(notify({type: 'error', message})))
    }

    useEffect(() => {
        dispatch(getAllMessages())
    }, [dispatch])

    return (
        <div className={classes.chat}>
            <ChatMessages/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.chatInputWrapper}>
                    <div className={classes.chatInputController}>
                        <Controller
                            name="chatInput"
                            rules={rules}
                            control={control}
                            render={({field, fieldState}) => render({field, fieldState})}
                        />
                        <button type={'submit'}>
                            {isLoading ? <div className={'loader'}/> : <span>Next</span>}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AppChat
