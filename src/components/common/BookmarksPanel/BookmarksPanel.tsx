import {useState} from "react";
import {StudentData} from "../../StudentPanel/StudentData";
import {StudentImport} from "../../AdminPanel/StudentImport";
import {HRForm} from "../../AdminPanel/HRForm";
import {EditStudentData} from "../../StudentPanel/EditStudentData";
import {Notification} from "../../StudentPanel/Notification";
import './BookmarksPanel.css';

interface Props {
    bookmarks: string[][]
}

export const BookmarksPanel = (props: Props) => {
    const [selectedBookmark, setSelectedBookmark] = useState<string | null>(null);

    const handleBookmarkSelection = (bookmark: string) => {
        setSelectedBookmark(bookmark);
        console.log(bookmark)
    };

    const renderBookmark = () => {
        switch (selectedBookmark) {
            case 'studentData':
                return <StudentData/>;
            case 'editStudentData':
                return <EditStudentData/>;
            case 'notification':
                return <Notification/>;
            case 'kursant':
                return <StudentImport/>;
            case 'hr':
                return <HRForm/>;
            default:
                return null;
        }
    }

    return (
            <div className="bookmarks_panel">
                <div className="bookmarks">
                    {props.bookmarks.map(bookmark => <p key={bookmark[0]}
                                                        onClick={() => handleBookmarkSelection(`${bookmark[0]}`)}>{bookmark[1]}</p>)}
                </div>
                {renderBookmark()}
            </div>
    )
}