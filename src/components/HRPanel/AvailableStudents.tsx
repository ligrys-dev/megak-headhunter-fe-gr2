import {useEffect, useState} from 'react';
import {StudentInitialInterface} from 'types';
import {getStudentsForRecruiter} from 'src/api/get-students-for-recruiter';
import {OneStudent} from './OneStudent';
import {Spinner} from '../common/Spinner/Spinner';
import {Btn} from '../common/Btn/Btn';
import {reserveStudentByHr} from 'src/api/reserve-student-by-hr';
import './AvailableStudents.css';

interface Props {
    filteredUsers: StudentInitialInterface[];
}

export const AvailableStudents = (props: Props) => {
    const [students, setStudents] = useState<StudentInitialInterface[] | null>(null);

    useEffect(() => {
        (async () => {
            const studentArray = await getStudentsForRecruiter();
            setStudents(studentArray.students);
        })();
    }, [students]);

    const reserveStudent = async (email: string) => {
        const student = await reserveStudentByHr(email);
        return {
            expirationDate: student.reservationExpirationDate,
        };
    };

    if (!students) return <Spinner/>;

    return (
        <div className="available-students">
            <ul>
                {props.filteredUsers ? (props.filteredUsers.length === 0 ? students.map(student => (
                    <li key={student.profile?.id}>
                        <OneStudent student={student}>
                            <Btn
                                text="Zarezerwuj rozmowę"
                                onClick={() => reserveStudent(student.email)}
                            />
                        </OneStudent>
                    </li>
                )) : props.filteredUsers.map(student => (
                    <li key={student.profile?.id}>
                        <OneStudent student={student}>
                            <Btn
                                text="Zarezerwuj do rozmowy"
                                onClick={() => reserveStudent(student.email)}
                            />
                        </OneStudent>
                    </li>
                ))) : ''
                }
            </ul>
        </div>
    );
};
