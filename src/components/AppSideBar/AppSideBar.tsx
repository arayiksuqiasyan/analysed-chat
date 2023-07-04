import React from "react";
import classes from './AppSideBar.module.scss'
import {NavLink} from "react-router-dom";
import classNames from "classnames";

import {MENU_OPTIONS} from "../../constants";
import logo from '../../images/logo.png'

const AppSideBar = () => {

    return (
        <div className={classes.sideBar}>
            <div className={classes.profLab}>
                <img src={logo} alt="logo" width={27} height={28}/>
                <span>ProfLab</span>
            </div>
            <div className={classes.menu}>
                {
                    MENU_OPTIONS.map((item) => {
                        const {id, name, iconName, path} = item
                        return (
                            <NavLink
                                key={id}
                                to={path}
                                className={({isActive, isPending}) =>
                                    (isActive ? classNames(classes.menuItem, classes.activeLink) : classes.menuItem)}>
                                <div className={classes.iconWrapper}>
                                <i className={classNames(classes[iconName], `icon-${iconName}`)}></i>
                                </div>
                                {name}
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AppSideBar
