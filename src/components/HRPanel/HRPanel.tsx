import './HRPanel.css';
import {useState} from "react";
import {
    RecruiterInterface,
} from "types";
import {HeaderPanel} from "../common/HeaderPanel/HeaderPanel";
import {BookmarksPanel} from "../common/BookmarksPanel/BookmarksPanel";

export const HRPanel = () => {
    const bookmarks = [
        ['availableStudents', 'Dostępni kursanci'],
        ['studentsToInterview', 'Do rozmowy'],
    ];

    const [user, setUser] = useState<RecruiterInterface | null>({
        email: 'abc@hr.pl',
        fullName: 'Rekruter Rekruterowy',
        company: 'firma',
        maxReservedStudents: 50
    })

    return (
        <div className="student_panel">
            <HeaderPanel name={user?.fullName} urlAccount="/hr"/>
            <div className="panel_main">
                <BookmarksPanel bookmarks={bookmarks}/>
            </div>
        </div>
    );
}

