import React from "react";
import classes from './AppHeader.module.scss'
import avatar from '../../images/avatar.png'

const AppHeader = () => {

    return (
        <div className={classes.header}>
            <div className={classes.left}>
                <span>Chat</span>
                <div className={classes.cycle}>
                    <span>3/28</span>
                </div>
            </div>
            <div className={classes.right}>
                <figure>
                    <img
                        width={32}
                        height={32}
                        alt="avatart"
                        src={avatar}
                    />
                </figure>
            </div>
        </div>
    )
}

export default AppHeader
