import { FC, useState } from 'react';
import { StudentInitialInterface } from 'types';
import { Btn } from '../common/Btn/Btn';
import { LiaAngleDownSolid } from 'react-icons/lia';

import './OneStudent.css';
import { OneStudentProfile } from './OneStudentProfile';

interface Props {
  student: StudentInitialInterface;
}

export const OneStudent: FC<Props> = ({ student }) => {
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
          {student.profile?.firstName} {student.profile?.lastName.charAt(0)}.
        </div>
        <Btn text="Zarezerwuj rozmowę" />
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
