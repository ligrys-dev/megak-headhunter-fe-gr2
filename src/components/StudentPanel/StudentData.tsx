import {StudentPersonalData} from "../common/StudentPersonalData/StudentPersonalData";
import {StudentEmploymentExpectations} from "../common/StudentEducationAndExperience/StudentEmploymentExpectations/StudentEmploymentExpectations";
import {StudentEducation} from "../common/StudentEducationAndExperience/StudentEducation/StudentEducation";
import {StudentExperience} from "../common/StudentEducationAndExperience/StudentExperience/StudentExperience";
import {StudentProfileInterface} from "types";
import './StudentData.css';

interface Props {
    user: StudentProfileInterface
}

export const StudentData = (props: Props) => {
    return (
        <div className="student-data">
            <StudentPersonalData user={props.user}/>
            <div className="education-experience">
                <StudentEmploymentExpectations user={props.user}/>
                <StudentEducation user={props.user}/>
                <StudentExperience user={props.user}/>
            </div>
        </div>
    )
}