import React from "react";
import {LogIn} from "./components/LogIn/LogIn";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "./components/SignUp/SignUp";
import {ResetPassword} from "./components/ResetPassword/ResetPassword";
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
            </Routes>
        </>
    )
}

export default App
