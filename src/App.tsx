import {LogIn} from "./components/LogIn/LogIn";
import {Route, Routes} from "react-router-dom";
import {ResetPassword} from "./components/ResetPassword/ResetPassword";
import {AdminPanel} from "./components/AdminPanel/AdminPanel.tsx";
import {StudentPanel} from "./components/StudentPanel/StudentPanel";
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
                <Route path="/student" element={<StudentPanel/>}/>
            </Routes>
        </div>
    )
}

export default App
