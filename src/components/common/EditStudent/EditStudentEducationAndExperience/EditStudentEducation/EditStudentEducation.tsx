import './EditStudentEducation.css';
import {StudentProfileInterface} from "types";

interface Props {
    user: StudentProfileInterface
}

export const EditStudentEducation = (props: Props) => {
    const {education, courses} = props.user;
    return (
        <div className="student-education">
            <h2>Edukacja</h2>
                <textarea>{education ? education : 'Brak danych'}</textarea>
            <h2>Kursy</h2>
                <textarea>{courses ? courses : 'Brak danych'}</textarea>
        </div>
    )
}