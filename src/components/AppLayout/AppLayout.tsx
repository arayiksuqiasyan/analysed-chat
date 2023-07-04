import React from "react";
import {Outlet} from "react-router-dom";

import classes from './AppLayout.module.scss'
import AppHeader from "../AppHeader/AppHeader";
import AppSideBar from "../AppSideBar/AppSideBar";

const AppLayout = () => {
    return (
        <div className={classes.layout}>
                <div className={classes.sidebar}>
                    <AppSideBar/>
                </div>
                <div className={classes.outlet}>
                    <AppHeader/>
                    <Outlet/>
                </div>
        </div>
    )
}

export default AppLayout
