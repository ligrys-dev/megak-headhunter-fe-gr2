import './HRPanel.css';
import {useState} from "react";
import {
    RecruiterInterface,
} from "types";
import {HeaderPanel} from "../common/HeaderPanel/HeaderPanel";
import {BookmarksPanel} from "../common/BookmarksPanel/BookmarksPanel";
import {ChangePassword} from "../common/ChangePassword/ChangePassword";
import {WelcomeView} from "../common/WelcomeView/WelcomeView";

export const HRPanel = () => {
    const [password, setPassword] = useState(false);
    const [bookmarksView, setBookmarksView] = useState('');
    const bookmarks = [
        ['availableStudents', 'Dostępni kursanci'],
        ['studentsToInterview', 'Do rozmowy'],
    ];

    const [user, setUser] = useState<RecruiterInterface | null>({
        email: 'abc@hr.pl',
        fullName: 'Rekruter Rekruterowy',
        company: 'firma',
        maxReservedStudents: 50
    });

    const handleChildHeaderClick = (newMessage) => {
        setPassword(newMessage);
        setBookmarksView(false)
    };

    const handleChildBookmarksClick = (newMessage) => {
        setBookmarksView(newMessage);
    };

    return (
        <div className="student_panel">
            <HeaderPanel name={user?.fullName} urlAccount="/hr" onChildClick={handleChildHeaderClick}/>
            <div className="panel_main">
                <BookmarksPanel bookmarks={bookmarks} bookmarksView={bookmarksView} onChildClick={handleChildBookmarksClick}/>
                {bookmarksView ? '' : (password ? <ChangePassword/> : <WelcomeView name={user?.fullName}/>)}
            </div>
        </div>
    );
}

