import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

import AppRoutes from "./components/Routes";

function App() {
    return (
        <div className="App">
            <AppRoutes/>
            <ToastContainer
                theme="dark"
                autoClose={2000}
                position="top-center"
            />
        </div>
    );
}

export default App;
