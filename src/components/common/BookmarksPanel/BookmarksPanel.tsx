import { useState } from 'react';
import { StudentData } from '../../StudentPanel/StudentData';
import { StudentImport } from '../../AdminPanel/StudentImport';
import { HRForm } from '../../AdminPanel/HRForm';
import { EditStudentData } from '../../StudentPanel/EditStudentData';
import { Notification } from '../../StudentPanel/Notification';
import { StudentsToInterview } from '../../HRPanel/StudentsToInterview';
import { AvailableStudents } from '../../HRPanel/AvailableStudents';
import { NewStudentProfileInterface, StudentProfileInterface } from 'types';
import './BookmarksPanel.css';

interface Props {
  bookmarks: string[][];
  user?: StudentProfileInterface;
}

export const BookmarksPanel = (props: Props) => {
  const [selectedBookmark, setSelectedBookmark] = useState<string | null>(null);

  const handleBookmarkSelection = (bookmark: string) => {
    setSelectedBookmark(bookmark);
  };

  const handleCreate = async (data: NewStudentProfileInterface) => {
    console.log(data);
    try {
      const res = await fetch('http://localhost:3001/student', {
        body: JSON.stringify(data),
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const dataApi = await res.json();
      console.log(dataApi);
      // console.log('New profile created:', data);
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

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
        return <EditStudentData onSubmit={handleCreate} />;
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
      {renderBookmark()}
    </div>
  );
};
