import './StudentEvaluation.css';
import {Stars} from "../../Stars/Stars";
import {StudentInitialInterface} from "types";

interface Props {
    user: StudentInitialInterface;
}

export const StudentEvaluation = (props: Props) => {
    return (
        <>
            <h2>Oceny</h2>
            <div className="student-evaluation">
                <div className="left-side">
                    <div className="course-evaluation">
                        <h3>Ocena przejścia kursu</h3>
                        <Stars numberOfStars={Number(props.user.courseCompletion)}/>
                    </div>
                    <div className="activity-assessment">
                        <h3>Ocena aktywności i zaangażowania na kursie</h3>
                        <Stars numberOfStars={Number(props.user.courseEngagement)}/>
                    </div>
                </div>
                <div className="right-side">
                    <div className="code-evaluation">
                        <h3>Ocena kodu w projekcie własnym</h3>
                        <Stars numberOfStars={Number(props.user.projectDegree)}/>
                    </div>
                    <div className="work-evaluation-in-scrum">
                        <h3>Ocena pracy w zespole w Scrum</h3>
                        <Stars numberOfStars={Number(props.user.teamProjectDegree)}/>
                    </div>
                </div>
            </div>
        </>
    )
}