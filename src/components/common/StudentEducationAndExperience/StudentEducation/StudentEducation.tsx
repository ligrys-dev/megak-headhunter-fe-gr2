import './StudentEducation.css';
import {StudentInitialInterface} from "types";

interface Props {
    user: StudentInitialInterface
}

export const StudentEducation = (props: Props) => {
    const {education, courses} = props.user.profile;
    return (
        <div className="student-education">
            <h2>Edukacja</h2>
            <p>{education ? education : 'Brak danych'}</p>
            <h2>Kursy</h2>
            <p>{courses ? courses : 'Brak danych'}</p>
        </div>
    )
}