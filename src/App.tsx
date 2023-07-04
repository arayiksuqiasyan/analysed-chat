import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

import AppChat from "./components/Chat";

function App() {
    return (
        <div className="App">
            <AppChat/>
            <ToastContainer
                theme="dark"
                autoClose={2000}
                position="top-center"
            />
        </div>
    );
}

export default App;
