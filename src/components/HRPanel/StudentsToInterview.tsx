import { useState, useEffect } from 'react';
import { StudentInitialInterface } from '../../../../megak-v3-headhunter-be-gr2/src/types/student';
import { Spinner } from '../common/Spinner/Spinner';
import { OneStudent } from './OneStudent';
import { getReservedStudents } from 'src/api/get-reserved-students';
import { Btn } from '../common/Btn/Btn';

export const StudentsToInterview = () => {
  const [students, setStudents] = useState<StudentInitialInterface[] | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const studentArray = await getReservedStudents();

      setStudents(studentArray.students);
    })();
  }, []);

  if (!students) return <Spinner />;

  return (
    <ul>
      {students?.map(student => (
        <li>
          <OneStudent key={student.profile?.id} student={student}>
            <Btn text="Pokaż CV"></Btn>
            <Btn text="Brak Zainteresowania"></Btn>
            <Btn text="Zatrudniony"></Btn>
          </OneStudent>
        </li>
      ))}
    </ul>
  );
};
