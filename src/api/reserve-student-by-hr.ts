import { StudentInitialInterface } from 'types';

export const reserveStudentByHr = async (
  studentEmail: string,
): Promise<StudentInitialInterface> => {
  const res = await fetch(`http://localhost:3001/hr/reserve/${studentEmail}`, {
    credentials: 'include',
    method: 'PATCH',
  });

  return await res.json();
};
