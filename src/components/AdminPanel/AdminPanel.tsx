import {HeaderPanel} from "../common/HeaderPanel/HeaderPanel";
import {BookmarksPanel} from "../common/BookmarksPanel/BookmarksPanel";
import './AdminPanel.css';
import {ChangePassword} from "../common/ChangePassword/ChangePassword";
import {useState} from "react";
import {WelcomeView} from "../common/WelcomeView/WelcomeView";

export const AdminPanel = () => {
    const [password, setPassword] = useState(false);
    const [bookmarksView, setBookmarksView] = useState('');
    const bookmarks = [
        ['addStudents', 'Dodaj kursantów'],
        ['addHR', 'Dodaj HR'],
    ];

    const handleChildHeaderClick = (newMessage) => {
        setPassword(newMessage);
        setBookmarksView(false)
    };

    const handleChildBookmarksClick = (newMessage) => {
        setBookmarksView(newMessage);
    };

    return (
        <div className='admin_panel'>
            <HeaderPanel name="Admin" lastName="admin@admin.com" urlAccount="/admin" onChildClick={handleChildHeaderClick}/>
            <div className="panel_main">
                <BookmarksPanel bookmarks={bookmarks} bookmarksView={bookmarksView} onChildClick={handleChildBookmarksClick}/>
                {bookmarksView ? '' : (password ? <ChangePassword/> : <WelcomeView name="Admin"/>)}
            </div>
        </div>
    );
};