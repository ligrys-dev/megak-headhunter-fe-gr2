import {Link} from "react-router-dom";
import {StudentInitialInterface} from "types";
import {StudentPersonalData} from "../common/StudentPersonalData/StudentPersonalData";
import {
    StudentEmploymentExpectations
} from "../common/StudentEducationAndExperience/StudentEmploymentExpectations/StudentEmploymentExpectations";
import {StudentEducation} from "../common/StudentEducationAndExperience/StudentEducation/StudentEducation";
import {StudentExperience} from "../common/StudentEducationAndExperience/StudentExperience/StudentExperience";
import './StudentCV.css';
import {StudentEvaluation} from "../common/StudentEducationAndExperience/StudentEvaluation/StudentEvaluation";

interface Props {
    student: StudentInitialInterface,
    onChildClick: () => {}
}

export const StudentCV = (props: Props) => {
    const handleCloseCV = () => {
        props.onChildClick(null)
    }

    return (
        <>
            <div className="student-cv-container">
                <Link onClick={handleCloseCV} to='/hr'><img src="/assets/arrow-left.svg" alt="Arrow left"/><p>Wróć</p></Link>
                <div className="student-data">
                    <StudentPersonalData user={props.student}/>
                    <div className="education-experience">
                        <StudentEvaluation user={props.student}/>
                        <StudentEmploymentExpectations user={props.student}/>
                        <StudentEducation user={props.student}/>
                        <StudentExperience user={props.student}/>
                    </div>
                </div>
            </div>
        </>
    )
}