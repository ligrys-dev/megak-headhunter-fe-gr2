import { useState, useEffect } from 'react';
import { StudentData } from '../../StudentPanel/StudentData';
import { StudentImport } from '../../AdminPanel/StudentImport';
import { HRForm } from '../../AdminPanel/HRForm';
import { EditStudentData } from '../../StudentPanel/EditStudentData';
import { Notification } from '../../StudentPanel/Notification';
import { StudentsToInterview } from '../../HRPanel/StudentsToInterview';
import { AvailableStudents } from '../../HRPanel/AvailableStudents';
import { StudentProfileInterface } from 'types';
import { handleUpdateStudentProfile } from 'src/api/handle-update-student-profile';
import { getStudentProfile } from 'src/api/get-student-profile';
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

  useEffect(() => {
    (async () => {
      const studentProfile = await getStudentProfile();
      setStudent(studentProfile);
    })();
  }, []);

  const handleBookmarkSelection = (bookmark: string) => {
    setSelectedBookmark(bookmark);
    changeBookmarksView(bookmark);
  };

  const changeBookmarksView = bookmark => {
    props.onChildClick(bookmark);
  };

  const renderBookmark = () => {
    switch (selectedBookmark) {
      case 'studentData':
        return <StudentData user={props.user} />;
      case 'editStudentData':
        return (
          <EditStudentData
            onSubmit={handleUpdateStudentProfile}
            initialData={student ?? undefined}
          />
        );
      case 'notification':
        return <Notification />;
      case 'addStudents':
        return <StudentImport />;
      case 'addHR':
        return <HRForm />;
      case 'availableStudents':
        return <AvailableStudents />;
      case 'studentsToInterview':
        return <StudentsToInterview />;
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
      {props.bookmarksView ? renderBookmark() : ''}
    </div>
  );
};
