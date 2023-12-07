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
            <form>
                <textarea>{education ? education : 'Brak danych'}</textarea>
            </form>
            <h2>Kursy</h2>
            <form>
                <textarea>{courses ? courses : 'Brak danych'}</textarea>
            </form>
        </div>
    )
}