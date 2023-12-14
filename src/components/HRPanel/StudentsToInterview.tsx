import { useState, useEffect } from 'react';
import { FilteredStudents } from 'types';
import { Spinner } from '../common/Spinner/Spinner';
import { OneStudent } from './OneStudent';
import { getReservedStudents } from 'src/api/get-reserved-students';
import { Btn } from '../common/Btn/Btn';
import { Pagination } from './Pagination';
import {cancelStudentByHr} from "../../api/cancel-reservation-by-hr.ts";

export const StudentsToInterview = () => {
  const [students, setStudents] = useState<FilteredStudents | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const studentArray = await getReservedStudents(currentPage, itemsPerPage);

      setStudents(studentArray);
    })();
  }, [currentPage, itemsPerPage, students]);

  const onPageChange = (page: number, take: number) => {
    setCurrentPage(page);
    setItemsPerPage(take);
  };

  const showCv = () => {
    console.log('show cv');
  };
  const handleNotInterested = async (email: string) => {
    await cancelStudentByHr(email);
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
                text="Anuluj rezerwację do rozmowy"
                onClick={() => handleNotInterested(student.email)}
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
