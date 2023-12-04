import './StudentEducation.css';
import {StudentProfileInterface} from "types";

interface Props {
    user: StudentProfileInterface
}

export const StudentEducation = (props: Props) => {
    const {education, courses} = props.user;
    return (
        <div className="student-education">
            <h2>Edukacja</h2>
            <p>{education ? education : 'Brak danych'}</p>
            <h2>Kursy</h2>
            <p>{courses ? courses : 'Brak danych'}</p>
        </div>
    )
}