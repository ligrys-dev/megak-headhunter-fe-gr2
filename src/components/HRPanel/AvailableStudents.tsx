import { useEffect, useState } from 'react';
import { FilteredStudents, StudentInitialInterface } from 'types';
import { getStudentsForRecruiter } from 'src/api/get-students-for-recruiter';
import { OneStudent } from './OneStudent';
import { Spinner } from '../common/Spinner/Spinner';
import { Btn } from '../common/Btn/Btn';
import { reserveStudentByHr } from 'src/api/reserve-student-by-hr';
import './AvailableStudents.css';
import { Pagination } from './Pagination';

interface Props {
    filteredUsers: StudentInitialInterface[];
    onChildClick: () => {}
}

export const AvailableStudents = (props: Props) => {
  const [students, setStudents] = useState<FilteredStudents | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const studentArray = await getStudentsForRecruiter(
        currentPage,
        itemsPerPage,
      );
      setStudents(studentArray);
      props.onChildClick(studentArray.students);
    })();
  }, [currentPage, itemsPerPage]);

  const onPageChange = (page: number, take: number) => {
    setCurrentPage(page);
    setItemsPerPage(take);
  };

  const reserveStudent = async (email: string) => {
    const student = await reserveStudentByHr(email);
    return {
      expirationDate: student.reservationExpirationDate,
    };
  };

  if (!students) return <Spinner />;

  return (
    <>
      <div className="available-students">
        <ul>
          {props.filteredUsers
            ? props.filteredUsers.length === 0
              ? students.students.map(student => (
                  <li key={student.profile?.id}>
                    <OneStudent student={student}>
                      <Btn
                        text="Zarezerwuj rozmowę"
                        onClick={() => reserveStudent(student.email)}
                      />
                    </OneStudent>
                  </li>
                ))
              : props.filteredUsers.map(student => (
                  <li key={student.profile?.id}>
                    <OneStudent student={student}>
                      <Btn
                        text="Zarezerwuj rozmowę"
                        onClick={() => reserveStudent(student.email)}
                      />
                    </OneStudent>
                  </li>
                ))
            : ''}
        </ul>
      </div>
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
