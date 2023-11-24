import React from "react";
import {LogIn} from "./components/LogIn/LogIn";
import {Route, Routes} from "react-router-dom";
import './App.css'

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
            </Routes>
        </>
    )
}

export default App
