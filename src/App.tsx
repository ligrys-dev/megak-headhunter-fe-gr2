import {LogIn} from "./components/LogIn/LogIn";
import {Route, Routes} from "react-router-dom";
import {ResetPassword} from "./components/ResetPassword/ResetPassword";
import {AdminPanel} from "./components/AdminPanel/AdminPanel.tsx";
import {StudentPanel} from "./components/StudentPanel/StudentPanel";
import {HRPanel} from "./components/HRPanel/HRPanel";
import {AdminElement, HRElement, StudentElement} from "./components/RoleElement/RoleElement";
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path="/admin" element={<AdminElement><AdminPanel/></AdminElement>}/>
                <Route path="/student" element={<StudentElement><StudentPanel/></StudentElement>}/>
                <Route path="/hr" element={<HRElement><HRPanel/></HRElement>}/>
            </Routes>
        </div>
    )
}

export default App;
