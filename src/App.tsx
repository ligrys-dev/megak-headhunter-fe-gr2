
import {LogIn} from "./components/LogIn/LogIn";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "./components/SignUp/SignUp";
import {ResetPassword} from "./components/ResetPassword/ResetPassword";
import {AdminPanel} from "./components/AdminPanel/AdminPanel.tsx";
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </>
    )
}

export default App
