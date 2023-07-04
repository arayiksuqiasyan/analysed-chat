import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import MyInfo from "../../pages/MyInfo/MyInfo";
import AppChat from "../../pages/Chat";
import MyCareer from "../../pages/MyCareer/MyCareer";
import Feedback from "../../pages/Feedback/Feedback";
import Instruction from "../../pages/Instruction/Instruction";
import AppLayout from "../AppLayout/AppLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AppLayout/>}>
                <Route index path="/chat" element={<AppChat/>}/>
                <Route path="/instruction" element={<Instruction/>}/>
                <Route path="/info" element={<MyInfo/>}/>
                <Route path="/career" element={<MyCareer/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="*" element={<Navigate to="/chat"/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes
