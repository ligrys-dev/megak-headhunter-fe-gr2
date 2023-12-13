import { StudentInitialInterface, UserType } from 'types';

export const getStudent = async (): Promise<StudentInitialInterface | null> => {
  const res = await fetch('http://localhost:3001/user', {
    credentials: 'include',
  });
  const data: UserType = await res.json();
  if (!data.student.profile) {
    return null;
  } else {
    return data.student;
  }
};
