import { FilteredStudents } from 'types';

export const getReservedStudents = async (): Promise<FilteredStudents> => {
  const res = await fetch('http://localhost:3001/student/list/1', {
    credentials: 'include',
  });
  return await res.json();
};
