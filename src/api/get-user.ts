import { StudentInitialInterface, UserType } from 'types';

export const getUser = async (): Promise<StudentInitialInterface | null> => {
  const res = await fetch('http://localhost:3001/user', {
    credentials: 'include',
  });
  return await res.json() as UserType;
};
