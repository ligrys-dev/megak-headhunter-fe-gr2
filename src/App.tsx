import {LogIn} from "./components/LogIn/LogIn";
import {Route, Routes} from "react-router-dom";
import {ResetPassword} from "./components/ResetPassword/ResetPassword";
import {AdminPanel} from "./components/AdminPanel/AdminPanel.tsx";
import {StudentPanel} from "./components/StudentPanel/StudentPanel";
import {HRPanel} from "./components/HRPanel/HRPanel";
import {AdminElement, HRElement, StudentElement} from "./components/RoleElement/RoleElement";
import {useState} from "react";
import {UserContext} from "./context/context";
import './App.css';

interface userType {
    id: string;
    role: number;
}

function App() {
    const [user, setUser] = useState<userType>('');
    return (
        <div className="app-container">
           <UserContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path="/" element={<LogIn/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                    <Route path="/admin" element={<AdminElement role={user.role}><AdminPanel/></AdminElement>}/>
                    <Route path="/student" element={<StudentElement><StudentPanel/></StudentElement>}/>
                    <Route path="/hr" element={<HRElement><HRPanel/></HRElement>}/>
                </Routes>
           </UserContext.Provider>
        </div>
    )
}

export default App;
