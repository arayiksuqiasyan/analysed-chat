import React, {useCallback, useEffect, useRef} from "react";
import classes from './ChatMessages.module.scss'
import classNames from "classnames";

import ChatLoading from "../ChatLoading/ChatLoading";
import {scrollToBottom} from "../../../constants";
import {useAppSelector} from "../../../hooks/Redux";

import {Imessage} from "../../../store/reducers/chat-reducer";

interface IChatMessages {
    onEdit: (message: Imessage) => void
}

const ChatMessages = ({onEdit}: IChatMessages) => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const {messages, isLoading} = useAppSelector((state) => state.chat)

    useEffect(() => {
        scrollToBottom(messagesRef)
    }, [messages, messagesRef])

    return (
        <div ref={messagesRef} className={classes.messages}>
            {
                messages.map((el) => {
                    const {id, content, role} = el
                    return (
                        <div
                            key={id}
                            className={classNames(classes.message, {[classes.bot]: role === 'bot'})}>
                            <p>{content}</p>
                            <div
                                onClick={() => typeof onEdit === 'function' && onEdit(el)}
                                className={classes.editIconWrapper}>
                                <i className={'icon-editPen'}></i>
                            </div>
                        </div>
                    )
                })
            }
            <ChatLoading isLoading={isLoading}/>
        </div>
    )
}

export default ChatMessages
