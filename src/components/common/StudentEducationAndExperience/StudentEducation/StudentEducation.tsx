import './StudentEducation.css';
import {StudentInitialInterface} from "types";

interface Props {
    user: StudentInitialInterface
}

export const StudentEducation = (props: Props) => {
    const {profile} = props.user;
    return (
        <div className="student-education">
            <h2>Edukacja</h2>
            <p>{profile ? profile.education : 'Brak danych'}</p>
            <h2>Kursy</h2>
            <p>{profile ? profile.courses : 'Brak danych'}</p>
        </div>
    )
}