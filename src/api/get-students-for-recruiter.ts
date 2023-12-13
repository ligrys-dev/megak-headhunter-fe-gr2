import { FilteredStudents } from 'types';

export const getStudentsForRecruiter = async (): Promise<FilteredStudents> => {
  const res = await fetch('http://localhost:3001/student/list', {
    credentials: 'include',
  });
  return await res.json();
};
