import {useEffect, useState} from 'react';
import {StudentData} from '../../StudentPanel/StudentData';
import {StudentImport} from '../../AdminPanel/StudentImport';
import {HRForm} from '../../AdminPanel/HRForm';
import {EditStudentData} from '../../StudentPanel/EditStudentData';
import {Notification} from '../../StudentPanel/Notification';
import {StudentsToInterview} from '../../HRPanel/StudentsToInterview';
import {AvailableStudents} from '../../HRPanel/AvailableStudents';
import {StudentInitialInterface, StudentProfileInterface} from 'types';
import {handleUpdateStudentProfile} from 'src/api/handle-update-student-profile';
import {getStudent} from 'src/api/get-student';
import {FilterPanelAvailableStudents} from "../FilterPanel/FilterPanelAvailableStudents";
import {FilterPanelStudentsToInterview} from "../FilterPanel/FilterPanelStudentsToInterview";
import './BookmarksPanel.css';

interface Props {
    bookmarks: string[][];
    user?: StudentProfileInterface;
    bookmarksView: boolean;
    onChildClick: () => {};
}

export const BookmarksPanel = (props: Props) => {
    const [selectedBookmark, setSelectedBookmark] = useState<string | null>(null);
    const [student, setStudent] = useState<StudentProfileInterface | null>(null);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        if (Number(localStorage.getItem('role')) === 2) {
            (async () => {
                const {profile} = (await getStudent()) as StudentInitialInterface;
                setStudent(profile ?? null);
            })();
        }
    }, []);

    const handleBookmarkSelection = (bookmark: string) => {
        setSelectedBookmark(bookmark);
        changeBookmarksView(bookmark);
    };

    const changeBookmarksView = bookmark => {
        props.onChildClick(bookmark);
    };

    const handleFilteredUsers = users => {
        setFilteredUsers(users);
    };

    const renderBookmark = () => {
        switch (selectedBookmark) {
            case 'studentData':
                return <StudentData user={props.user}/>;
            case 'editStudentData':
                return (
                    <EditStudentData
                        onSubmit={handleUpdateStudentProfile}
                        initialData={student ?? undefined}
                    />
                );
            case 'notification':
                return <Notification user={props.user}/>;
            case 'addStudents':
                return <StudentImport/>;
            case 'addHR':
                return <HRForm/>;
            case 'availableStudents':
                return <AvailableStudents filteredUsers={filteredUsers}/>;
            case 'studentsToInterview':
                return <StudentsToInterview filteredUsers={filteredUsers}/>;
            default:
                return null;
        }
    };

    return (
        <div className="bookmarks_panel">
            <div className="bookmarks">
                {props.bookmarks.map(bookmark => (
                    <p
                        className={selectedBookmark === bookmark[0] ? 'active' : ''}
                        key={bookmark[0]}
                        onClick={() => handleBookmarkSelection(`${bookmark[0]}`)}
                    >
                        {bookmark[1]}
                    </p>
                ))}
            </div>
            {selectedBookmark === 'availableStudents' ? <FilterPanelAvailableStudents onChildClick={handleFilteredUsers}></FilterPanelAvailableStudents> : ''}
            {selectedBookmark === 'studentsToInterview' ? <FilterPanelStudentsToInterview onChildClick={handleFilteredUsers}></FilterPanelStudentsToInterview> : ''}
            {props.bookmarksView ? renderBookmark() : ''}
        </div>
    );
};
