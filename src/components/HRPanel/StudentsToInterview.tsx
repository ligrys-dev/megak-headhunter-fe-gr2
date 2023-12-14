import { useState, useEffect } from 'react';
import { FilteredStudents } from 'types';
import { Spinner } from '../common/Spinner/Spinner';
import { OneStudent } from './OneStudent';
import { getReservedStudents } from 'src/api/get-reserved-students';
import { Btn } from '../common/Btn/Btn';
import { Pagination } from './Pagination';

export const StudentsToInterview = () => {
  const [students, setStudents] = useState<FilteredStudents | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const studentArray = await getReservedStudents(currentPage, itemsPerPage);

      setStudents(studentArray);
    })();
  }, [currentPage, itemsPerPage]);

  const onPageChange = (page: number, take: number) => {
    setCurrentPage(page);
    setItemsPerPage(take);
  };

  const showCv = () => {
    console.log('show cv');
  };
  const handleNotInterested = () => {
    console.log('not interested');
  };
  const handleHire = () => {
    console.log('hired');
  };

  if (!students) return <Spinner />;

  return (
    <>
      <ul>
        {students.students.map(student => (
          <li>
            <OneStudent key={student.profile?.id} student={student} isReserved>
              <Btn text="Pokaż CV" onClick={() => showCv()}></Btn>
              <Btn
                text="Brak Zainteresowania"
                onClick={() => handleNotInterested()}
              ></Btn>
              <Btn text="Zatrudniony" onClick={() => handleHire()}></Btn>
            </OneStudent>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={students.studentsCount}
        totalPages={students.numberOfPages}
        onPageChange={onPageChange}
      />
    </>
  );
};
