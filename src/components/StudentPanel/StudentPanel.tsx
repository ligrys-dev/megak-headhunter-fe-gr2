import {useState} from 'react';
import {PanelHeader} from "../common/PanelHeader/PanelHeader";
import './StudentPanel.css';

export const StudentPanel = () => {
    const [user, setuser] = useState({
        name: 'Student',
        lastName: 'Testowy',
        userGitHub: ''
    })

    return (
        <>
            <div className="student_panel">
                <PanelHeader name={user.name} lastName={user.lastName}  urlAccount="/student1" urlLogOut="/logout1" userGitHub={user.userGitHub}/>
                <div className="panel_main">
                </div>
            </div>
        </>
    );
};