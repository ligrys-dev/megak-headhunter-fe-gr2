import {StudentPersonalData} from "../common/StudentPersonalData/StudentPersonalData";
import {StudentEmploymentExpectations} from "../common/StudentEducationAndExperience/StudentEmploymentExpectations/StudentEmploymentExpectations";
import {StudentEducation} from "../common/StudentEducationAndExperience/StudentEducation/StudentEducation";
import {StudentExperience} from "../common/StudentEducationAndExperience/StudentExperience/StudentExperience";
import {StudentInitialInterface} from "types";
import './StudentData.css';
import {useState} from "react";

interface Props {
    user: StudentInitialInterface
}

export const StudentData = (props: Props) => {
    const [text, setText] = useState('');

    const handleChildBookmarksClick = newMessage => {
        setText(newMessage);
    };

    return (
        <div className="student-data">
            <StudentPersonalData user={props.user} onChildClick={handleChildBookmarksClick}/>
            <div className="education-experience">
                {text ? <p className="set-employed-info">{text}</p> : ''}
                {props.user.profile ? '' : <h1>Uzupełnij dane na stronie głównej</h1>}
                <StudentEmploymentExpectations user={props.user}/>
                <StudentEducation user={props.user}/>
                <StudentExperience user={props.user}/>
            </div>
        </div>
    )
}