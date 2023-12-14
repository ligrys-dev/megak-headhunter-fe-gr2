import {FC} from 'react';
import {ContractType, StudentInitialInterface, TypeWork} from 'types';

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

export const OneStudentProfile: FC<Props> = ({student}) => {
    const checkMonthsOfCommercialExp = () => {
        const arrayOfMonths = [2, 3, 4];
        if (student.profile?.monthsOfCommercialExp === 1) {
            return '1 miesiąc'
        } else if (arrayOfMonths.includes(student.profile?.monthsOfCommercialExp)) {
            return `${student.profile?.monthsOfCommercialExp} miesiące`
        } else {
            return `${student.profile?.monthsOfCommercialExp} miesięcy`
        }
    }

    return (
        <ul className="one-student-profile">
            <div className="left-side">
                <li>
                    <div className="profile-property">
                        <p>Ocena przejścia kursu:</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{Number(student.courseCompletion).toFixed(0)} / 5</p></div>
                </li>
                <li>
                    <div className="profile-property">
                        <p>Ocena aktywności zaangażowania na kursie</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{Number(student.courseEngagement).toFixed(0)} / 5</p></div>
                </li>
                <li>
                    <div className="profile-property">
                        <p>Ocena kodu w projekcie własnym</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{Number(student.projectDegree).toFixed(0)} / 5</p></div>
                </li>
                <li>
                    <div className="profile-property">
                        <p>Ocena pracy w zespole Scrum</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{Number(student.teamProjectDegree).toFixed(0)} / 5</p></div>
                </li>
                <li>
                    <div className="profile-property">
                        <p>Preferowane miejsce pracy</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{getExpectedTypeWorkString(student.profile?.expectedTypeWork)}</p>
                    </div>
                </li>
            </div>
            <div className="right-side">
                <li>
                    <div className="profile-property">
                        <p>Docelowe miasto, gdzie chce pracować kandydat</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{student.profile?.targetWorkCity}</p>
                    </div>
                </li>
                <li>
                    <div className="profile-property">
                        <p>Oczekiwany typ kontraktu</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{getExpectedContractType(student.profile?.expectedContractType)}</p>
                    </div>
                </li>
                <li>
                    <div className="profile-property">
                        <p>Oczekiwane wynagrodzenie miesięczne netto</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{Number(student.profile?.expectedSalary).toFixed(0) + ' zł'}</p>
                    </div>
                </li>
                <li>
                    <div className="profile-property">
                        <p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{student.profile?.canTakeApprenticeship ? 'Tak' : 'Nie'}</p>
                    </div>
                </li>
                <li>
                    <div className="profile-property">
                        <p>Komercyjne doświadczenie w programowaniu</p>
                    </div>
                    <div className="profile-property-value">
                        <p>{student.profile ? checkMonthsOfCommercialExp() : ''}</p>
                    </div>
                </li>
            </div>
        </ul>
    );
}
