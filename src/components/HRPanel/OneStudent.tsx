import { FC, ReactNode, useState } from 'react';
import { StudentInitialInterface } from 'types';
import { LiaAngleDownSolid } from 'react-icons/lia';

import './OneStudent.css';
import { OneStudentProfile } from './OneStudentProfile';

interface Props {
  student: StudentInitialInterface;
  isReserved?: boolean;
  children: ReactNode;
}

export const OneStudent: FC<Props> = ({ student, isReserved, children }) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const showProfile = () => {
    setIsProfileVisible(!isProfileVisible);
    setRotationAngle(rotationAngle + 180);
  };

  return (
    <>
      <div className="one-student">
        <div className="student-name">
          {student.profile?.firstName}{' '}
          {isReserved
            ? student.profile?.lastName.charAt(0) + '.'
            : student.profile?.lastName}
        </div>

        {children}
        <LiaAngleDownSolid
          className="arrow"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
          onClick={showProfile}
        />
      </div>
      {isProfileVisible && <OneStudentProfile student={student} />}
    </>
  );
};
