import './HRPanel.css';
import {useEffect, useState} from "react";
import {
    RecruiterInterface, UserType,
} from "types";
import {HeaderPanel} from "../common/HeaderPanel/HeaderPanel";
import {BookmarksPanel} from "../common/BookmarksPanel/BookmarksPanel";
import {ChangePassword} from "../common/ChangePassword/ChangePassword";
import {WelcomeView} from "../common/WelcomeView/WelcomeView";
import {getUser} from "../../api/get-user";

export const HRPanel = () => {
    const [password, setPassword] = useState(false);
    const [bookmarksView, setBookmarksView] = useState('');
    const [user, setUser] = useState<RecruiterInterface | null>(null);
    const bookmarks = [
        ['availableStudents', 'Dostępni kursanci'],
        ['studentsToInterview', 'Do rozmowy'],
    ];

    useEffect(() => {
        (async () => {
            const data = await getUser() as UserType;
            setUser(data.recruiter)
        })();
    }, []);

    const handleChildHeaderClick = (newMessage) => {
        setPassword(newMessage);
        setBookmarksView(false)
    };

    const handleChildBookmarksClick = (newMessage) => {
        setBookmarksView(newMessage);
    };

    return (
        <div className="student_panel">
            <HeaderPanel name={user?.fullName} lastName=" " urlAccount="/hr" onChildClick={handleChildHeaderClick}/>
            <div className="panel_main">
                <BookmarksPanel bookmarks={bookmarks} bookmarksView={bookmarksView} onChildClick={handleChildBookmarksClick}/>
                {bookmarksView ? '' : (password ? <ChangePassword/> : <WelcomeView name={user?.fullName}/>)}
            </div>
        </div>
    );
}