import { useEffect, useState } from 'react';
import { HeaderPanel } from '../common/HeaderPanel/HeaderPanel';
import { BookmarksPanel } from '../common/BookmarksPanel/BookmarksPanel';
import { ChangePassword } from '../common/ChangePassword/ChangePassword';
import { StudentInitialInterface } from 'types';
import { WelcomeView } from '../common/WelcomeView/WelcomeView';
import { getStudent } from '../../api/get-student';
import { EditStudentData } from './EditStudentData';
import { handleCreateStudentProfile } from '../../api/handle-create-student-profile';
import './StudentPanel.css';

export const StudentPanel = () => {
  const [password, setPassword] = useState(false);
  const [bookmarksView, setBookmarksView] = useState('');
  const [user, setUser] = useState<StudentInitialInterface | null>(null);

  const bookmarks = [
    ['studentData', 'Dane kursanta'],
    ['editStudentData', 'Edycja danych'],
    ['notification', 'Powiadomienia'],
  ];

  useEffect(() => {
    (async () => {
      const studentProfile = await getStudent();
      setUser(studentProfile);
    })();
  }, []);

  const handleChildHeaderClick = newMessage => {
    setPassword(newMessage);
    setBookmarksView(false);
  };

  const handleChildBookmarksClick = newMessage => {
    setBookmarksView(newMessage);
  };

  return (
    <div className="student_panel">
      <HeaderPanel
        name={user?.profile?.firstName}
        lastName={user?.profile?.lastName}
        urlAccount="/student"
        avatar={user?.profile?.githubUsername}
        onChildClick={handleChildHeaderClick}
      />
      <div className="panel_main">
        <BookmarksPanel
          user={user}
          bookmarks={bookmarks}
          bookmarksView={bookmarksView}
          onChildClick={handleChildBookmarksClick}
        />
        {bookmarksView ? (
          ''
        ) : password ? (
          <ChangePassword />
        ) : user?.profile ? (
          <WelcomeView name={user?.profile?.firstName} />
        ) : (
          <EditStudentData onSubmit={handleCreateStudentProfile} />
        )}
      </div>
    </div>
  );
};
