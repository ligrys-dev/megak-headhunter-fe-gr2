import { FilteredStudents } from 'types';

export const getReservedStudents = async (
  page: number = 1,
  take: number = 10,
  filterOptions: string = '',
): Promise<FilteredStudents> => {
  const res = await fetch(
    `http://localhost:3001/student/list/1/${page}/${take}?filter=${filterOptions}`,
    {
      credentials: 'include',
    },
  );
  return await res.json();
};
