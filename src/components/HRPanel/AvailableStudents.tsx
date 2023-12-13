import { useEffect, useState } from 'react';
import { StudentInitialInterface } from 'types';
import { getStudentsForRecruiter } from 'src/api/get-students-for-recruiter';
import { OneStudent } from './OneStudent';
import { Spinner } from '../common/Spinner/Spinner';
import { Btn } from '../common/Btn/Btn';
import { reserveStudentByHr } from 'src/api/reserve-student-by-hr';

export const AvailableStudents = () => {
  const [students, setStudents] = useState<StudentInitialInterface[] | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const studentArray = await getStudentsForRecruiter();

      setStudents(studentArray.students);
    })();
  }, []);

  const reserveStudent = async (email: string) => {
    const student = await reserveStudentByHr(email);
    console.log(student.reservationExpirationDate);
    return {
      expirationDate: student.reservationExpirationDate,
    };
  };

  if (!students) return <Spinner />;

  return (
    <ul>
      {students?.map(student => (
        <li>
          <OneStudent key={student.profile?.id} student={student} isReserved>
            <Btn
              text="Zarezerwuj rozmowę"
              onClick={() => reserveStudent(student.email)}
            />
          </OneStudent>
        </li>
      ))}
    </ul>
  );
};
