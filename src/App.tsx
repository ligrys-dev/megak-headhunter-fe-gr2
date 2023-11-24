import React from "react";
import {LogIn} from "./components/LogIn/LogIn";
import {Route, Routes} from "react-router-dom";
import {SignIn} from "./components/SignIn/SignIn";
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
        </>
    )
}

export default App
