import React, {ForwardedRef, forwardRef, InputHTMLAttributes} from "react";
import classes from './ChatInput.module.scss'

interface IChatInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | undefined
}

const ChatInput = forwardRef((props: IChatInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {error, ...rest} = props || {}
    return (
        <label className={classes.wrapper}>
            <input ref={ref}{...rest}/>
            <div className={'app-error'}>{error ? error : ''}</div>
        </label>
    )
})

export default ChatInput
