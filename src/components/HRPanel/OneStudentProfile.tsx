import { FC } from 'react';
import { StudentInitialInterface } from 'types';

import './OneStudentProfile.css';

interface Props {
  student: StudentInitialInterface;
}

export const OneStudentProfile: FC<Props> = ({ student }) => (
  <ul className="one-student-profile">
    <li>
      <div className="profile-property">Ocena przejścia kursu:</div>
      <div className="profile-property-value">{student.courseCompletion}</div>
    </li>
    <li>
      <div className="profile-property">
        Ocena aktywności zaangażowania na kursie
      </div>
      <div className="profile-property-value">{student.courseEngagement}</div>
    </li>

    <li>
      <div className="profile-property">Ocena pracy w zespole Scrum</div>
      <div className="profile-property-value">{student.teamProjectDegree}</div>
    </li>
    <li>
      <div className="profile-property">Preferowane miejsce pracy</div>
      <div className="profile-property-value">
        {student.profile?.expectedTypeWork}
      </div>
    </li>
    <li>
      <div className="profile-property">
        Docelowe miasto, gdzie chce pracować kandydat
      </div>
      <div className="profile-property-value">
        {student.profile?.targetWorkCity}
      </div>
    </li>
    <li>
      <div className="profile-property">Oczekiwany typ kontraktu</div>
      <div className="profile-property-value">
        {student.profile?.expectedContractType}
      </div>
    </li>
    <li>
      <div className="profile-property">
        {' '}
        Oczekiwane wynagrodzenie miesięczne netto
      </div>
      <div className="profile-property-value">
        {student.profile?.expectedSalary}
      </div>
    </li>
    <li>
      <div className="profile-property">
        Zgoda na odbycie bezpłatnych praktyk/stażu na początek
      </div>
      <div className="profile-property-value">
        {student.profile?.canTakeApprenticeship}
      </div>
    </li>
    <li>
      <div className="profile-property">
        Komercyjne doświadczenie w programowaniu
      </div>
      <div className="profile-property-value">
        {student.profile?.monthsOfCommercialExp}
      </div>
    </li>
  </ul>
);
