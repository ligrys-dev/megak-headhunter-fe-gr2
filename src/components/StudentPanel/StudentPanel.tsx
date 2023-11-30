import {useState} from 'react';
import {HeaderPanel} from "../common/HeaderPanel/HeaderPanel";
import {BookmarksPanel} from "../common/BookmarksPanel/BookmarksPanel";
import './StudentPanel.css';

export const StudentPanel = () => {
    const bookmarks = [
        ['studentData', 'Dane kursanta'],
        ['editStudentData', 'Edycja danych'],
        ['notification', 'Powiadomienia'],
];
    const [user, setUser] =useState({
        firstName: 'Student',
        lastName: 'Testowy',
        githubUsername: ''
    })

    return (
            <div className="student_panel">
                <HeaderPanel name={user.firstName} lastName={user.lastName} urlAccount="/student1" urlLogOut="/logout1" githubUsername={user.githubUsername}/>
                <div className="panel_main">
                    <BookmarksPanel bookmarks={bookmarks}/>
                </div>
            </div>
    );
};