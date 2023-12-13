import { useEffect, useState } from 'react';
import { StudentInitialInterface } from 'types';
import { getStudentsForRecruiter } from 'src/api/get-students-for-recruiter';
import { OneStudent } from './OneStudent';
import { Spinner } from '../common/Spinner/Spinner';

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

  if (!students) return <Spinner />;

  return (
    <ul>
      {students?.map(student => (
        <li>
          <OneStudent key={student.profile?.id} student={student} />
        </li>
      ))}
    </ul>
  );
};
