import {EditStudentPersonalData} from "../common/EditStudent/EditStudentPersonalData/EditStudentPersonalData";
import { EditStudentEducation } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentEducation/EditStudentEducation";
import { EditStudentEmploymentExpectations } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentEmploymentExpectations/EditStudentEmploymentExpectations";
import { EditStudentExperience } from "../common/EditStudent/EditStudentEducationAndExperience/EditStudentExperience/EditStudentExperience";
import {StudentProfileInterface} from "types";
import './StudentData.css';


interface Props {
    user: StudentProfileInterface
}

export const EditStudentData = (props: Props) => {
    return (
        <div className="student-data">
            <EditStudentPersonalData user={props.user}/>
            <div className="education-experience">
                <EditStudentEmploymentExpectations user={props.user}/>
                <EditStudentEducation user={props.user}/>
                <EditStudentExperience user={props.user}/>
            </div>
        </div>
    )
}