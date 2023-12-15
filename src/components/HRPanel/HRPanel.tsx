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
import {StudentCV} from "../StudentCV/StudentCV";

export const HRPanel = () => {
    const [password, setPassword] = useState(false);
    const [bookmarksView, setBookmarksView] = useState('');
    const [user, setUser] = useState<RecruiterInterface | null>(null);
    const [studentId, setStudentId] = useState<string | null>(null);
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

    const handleStudentId = (newMessage) => {
        setStudentId(newMessage);
    };

    return (
        <div className="student_panel">
            <HeaderPanel name={user?.fullName} lastName=" " urlAccount="/hr" onChildClick={handleChildHeaderClick}/>
            <div className="panel_main">
                {studentId ? <StudentCV id = {studentId} onChildClick={handleStudentId}></StudentCV> : <BookmarksPanel bookmarks={bookmarks} bookmarksView={bookmarksView}
                                                                       onChildClick={handleChildBookmarksClick} onChildClickStudentId={handleStudentId}/>}
                {bookmarksView ? '' : (password ? <ChangePassword/> : <WelcomeView name={user?.fullName}/>)}
            </div>
        </div>
    );
}