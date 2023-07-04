import React from "react";
import classes from "./ChatLoading.module.scss";
import classNames from "classnames";

interface IPropsChatLoading {
    isLoading: boolean
}

const ChatLoading = ({isLoading}: IPropsChatLoading) => {
    return (
        <div className={classNames(classes.chatLoading, {[classes.shown]: isLoading})}>
            <div className="dot-falling"></div>
        </div>
    )
}

export default ChatLoading
