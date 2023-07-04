import React, {useEffect, useRef} from "react";
import classes from './ChatMessages.module.scss'
import classNames from "classnames";

import ChatLoading from "../ChatLoading/ChatLoading";
import {useAppSelector} from "../../../hooks/Redux";
import {scrollToBottom} from "../../../constants";

const ChatMessages = () => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const {messages,isLoading} = useAppSelector((state) => state.chat)

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
                        </div>
                    )
                })
            }
            <ChatLoading isLoading={isLoading}/>
        </div>
    )
}

export default ChatMessages
