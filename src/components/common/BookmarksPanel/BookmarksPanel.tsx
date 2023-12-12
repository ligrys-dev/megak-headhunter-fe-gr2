import { useEffect, useState } from 'react';
import { StudentData } from '../../StudentPanel/StudentData';
import { StudentImport } from '../../AdminPanel/StudentImport';
import { HRForm } from '../../AdminPanel/HRForm';
import { EditStudentData } from '../../StudentPanel/EditStudentData';
import { Notification } from '../../StudentPanel/Notification';
import { StudentsToInterview } from '../../HRPanel/StudentsToInterview';
import { AvailableStudents } from '../../HRPanel/AvailableStudents';
import { StudentProfileInterface } from 'types';
import { handleUpdateStudentProfile } from 'src/context/api/handle-update-student-profile';
import './BookmarksPanel.css';
import { getStudentProfile } from 'src/context/api/get-student-profile';

interface Props {
  bookmarks: string[][];
  user?: StudentProfileInterface;
}

export const BookmarksPanel = (props: Props) => {
  const [selectedBookmark, setSelectedBookmark] = useState<string | null>(null);

  const handleBookmarkSelection = (bookmark: string) => {
    setSelectedBookmark(bookmark);
  };

  const [student, setStudent] = useState<StudentProfileInterface | null>(null);

  useEffect(() => {
    (async () => {
      const studentProfile = await getStudentProfile(
        'TODO add studentProfileId',
      );
      setStudent(studentProfile);
    })();
  }, []);

  // const handleUpdate = async (data: NewStudentProfileInterface) => {
  //   try {
  //     // Przy założeniu, że masz dostęp do ID profilu, który chcesz zaktualizować
  //     const profileId = 'ID_PROFILU_DO_AKTUALIZACJI';
  //     console.log('Profile updated:', updatedProfile);
  //   } catch (error) {
  //     console.error('Error updating profile:', error);
  //   }
  // };

  const renderBookmark = () => {
    switch (selectedBookmark) {
      case 'studentData':
        return <StudentData user={props.user} />;
      case 'editStudentData':
        return (
          <EditStudentData
            onSubmit={handleUpdateStudentProfile}
            initialData={student ? student : undefined}
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
    bookmarks: string[][];
    user?: StudentProfileInterface;
    bookmarksView: boolean;
    onChildClick: () => {}
}

export const BookmarksPanel = (props: Props) => {
    const [selectedBookmark, setSelectedBookmark] = useState<string | null>(null);

    const handleBookmarkSelection = (bookmark: string) => {
        setSelectedBookmark(bookmark);
        changeBookmarksView(bookmark)
    };

    const changeBookmarksView = (bookmark) => {
        props.onChildClick(bookmark);
    };

    const renderBookmark = () => {
        switch (selectedBookmark) {
            case 'studentData':
                return <StudentData user={props.user}/>;
            case 'editStudentData':
                return <EditStudentData/>;
            case 'notification':
                return <Notification/>;
            case 'addStudents':
                return <StudentImport/>;
            case 'addHR':
                return <HRForm/>;
            case 'availableStudents':
                return <AvailableStudents/>;
            case 'studentsToInterview':
                return <StudentsToInterview/>;
            default:
                return null;
        }
      
      
  const [student, setStudent] = useState<StudentProfileInterface | null>(null);

  useEffect(() => {
    (async () => {
      const studentProfile = await getStudentProfile(
        'TODO add studentProfileId',
      );
      setStudent(studentProfile);
    })();
  }, []);

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
      {renderBookmark()}
    </div>
  );
};
