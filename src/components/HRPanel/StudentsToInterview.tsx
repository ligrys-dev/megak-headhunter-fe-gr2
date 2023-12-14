import { useState, useEffect } from 'react';
import { FilteredStudents } from 'types';
import { Spinner } from '../common/Spinner/Spinner';
import { OneStudent } from './OneStudent';
import { getReservedStudents } from 'src/api/get-reserved-students';
import { Btn } from '../common/Btn/Btn';
import { Pagination } from './Pagination';

interface Props {
  filteredUsers: StudentInitialInterface[];
  onChildClick: () => {}
}

export const StudentsToInterview = (props: Props) => {
  const [students, setStudents] = useState<FilteredStudents | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      const studentArray = await getReservedStudents(currentPage, itemsPerPage);
      setStudents(studentArray);
      props.onChildClick(studentArray.students);
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

    if (!students) return <Spinner/>;

    return (
        <div className="students-to-interview">
            <ul>
                {props.filteredUsers ? (props.filteredUsers.length === 0 ? students.map(student => (
                    <li key={student.profile?.id}>
                        <OneStudent key={student.profile?.id} student={student} isReserved>
                            <Btn text="Pokaż CV" onClick={() => showCv()}></Btn>
                            <Btn
                                text="Brak Zainteresowania"
                                onClick={() => handleNotInterested()}
                            ></Btn>
                            <Btn text="Zatrudniony" onClick={() => handleHire()}></Btn>
                        </OneStudent>
                    </li>
                )) : props.filteredUsers.map(student => (
                    <li key={student.profile?.id}>
                        <OneStudent key={student.profile?.id} student={student} isReserved>
                            <Btn text="Pokaż CV" onClick={() => showCv()}></Btn>
                            <Btn
                                text="Brak Zainteresowania"
                                onClick={() => handleNotInterested()}
                            ></Btn>
                            <Btn text="Zatrudniony" onClick={() => handleHire()}></Btn>
                        </OneStudent>
                    </li>
                ))) : ''
                }
            </ul>
          <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={students.studentsCount}
              totalPages={students.numberOfPages}
              onPageChange={onPageChange}
          />
        </div>
    );
};
