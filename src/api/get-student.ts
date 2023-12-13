import { StudentInitialInterface, UserType } from 'types';

export const getStudent = async (): Promise<StudentInitialInterface | null> => {
  const res = await fetch('http://localhost:3001/user', {
    credentials: 'include',
  });
  const data: UserType = await res.json();
  return data.student;
};
