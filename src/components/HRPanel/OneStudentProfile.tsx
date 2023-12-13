import { FC } from 'react';
import { ContractType, StudentInitialInterface, TypeWork } from 'types';

import './OneStudentProfile.css';

interface Props {
  student: StudentInitialInterface;
}

const getExpectedTypeWorkString = (expectedTypeWork: TypeWork) => {
  switch (expectedTypeWork) {
    case 0:
      return 'Na miejscu';
    case 1:
      return 'Gotowość do przeprowadzki';
    case 2:
      return 'Zdalnie';
    case 3:
      return 'Hybrid';
    case 4:
      return 'Nie ma znaczenia';
    default:
      return 'Nieokreślone';
  }
};

const getExpectedContractType = (exprectedContractType: ContractType) => {
  switch (exprectedContractType) {
    case 0:
      return 'Umowa zlecenie';
    case 1:
      return 'B2B';
    case 2:
      return 'Umowa o pracę';
    case 3:
      return 'Nie ma znaczenia';
    default:
      return 'Nieokreślone';
  }
};

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
        {getExpectedTypeWorkString(student.profile?.expectedTypeWork)}
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
        {getExpectedContractType(student.profile?.expectedContractType)}
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
        {student.profile?.canTakeApprenticeship ? 'Tak' : 'Nie'}
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
