import {Link} from "react-router-dom";
import {StudentInitialInterface} from "types";
import {StudentPersonalData} from "../common/StudentPersonalData/StudentPersonalData";
import {
    StudentEmploymentExpectations
} from "../common/StudentEducationAndExperience/StudentEmploymentExpectations/StudentEmploymentExpectations";
import {StudentEducation} from "../common/StudentEducationAndExperience/StudentEducation/StudentEducation";
import {StudentExperience} from "../common/StudentEducationAndExperience/StudentExperience/StudentExperience";
import './StudentCV.css';

interface Props {
    student: StudentInitialInterface,
    onChildClick: () => {}
}

export const StudentCV = (props: Props) => {
    console.log(props.student)
    const handle = () => {
        props.onChildClick(null)
    }

    return (
        <>
            <div className="student-cv-container">
                <Link onClick={handle} to='/hr'>Wróć</Link>
                <div className="student-data">
                    <StudentPersonalData user={props.student}/>
                    <div className="education-experience">
                        <StudentEmploymentExpectations user={props.student}/>
                        <StudentEducation user={props.student}/>
                        <StudentExperience user={props.student}/>
                    </div>
                </div>
            </div>
        </>
    )
}