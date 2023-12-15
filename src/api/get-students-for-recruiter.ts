import { FilteredStudents, StudentFilters } from 'types';

export const getStudentsForRecruiter = async (
  page: number = 1,
  take: number = 10,
  filterOptions: StudentFilters | null = null,
): Promise<FilteredStudents> => {
  const filters = encodeURIComponent(JSON.stringify(filterOptions));

  const input = `http://localhost:3001/student/list/0/${page}/${take}?filters=${filters}`;

  const res = await fetch(input, {
    credentials: 'include',
  });
  return await res.json();
};
