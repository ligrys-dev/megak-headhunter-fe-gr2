import {StudentProfileInterface} from "types";
import {Btn} from "../Btn/Btn";
import './StudentPersonalData.css';

interface Props {
    user: StudentProfileInterface
}

export const StudentPersonalData = (props: Props) => {

    const checkStatus = () => {
        switch (props.user.status) {
            case 0:
                return 'Dostępny';
            case 1:
                return  'Do rozmowy';
            case 2:
                return  'Zatrudniony';
            default:
                return null;
        }
    }

    return (
        <div className="student-personal-info">
            <img id="user-image"
                 src={props.user.githubUsername ? `https://github.com/${props.user.githubUsername}.png` : "/assets/user.png"}
                 alt=""/>
            <p id="user-name">{props.user.firstName} {props.user.lastName}</p>
            <div className="github-info">
                <img src="/assets/github.png" alt="GitHub logo"/>
                <p>{props.user.githubUsername}</p>
            </div>
            <div className="phone-info">
                <img src="/assets/phone.png" alt="Phone image"/>
                <p>{props.user.tel}</p>
            </div>
            <div className="email-info">
                <img src="/assets/envelope.png" alt="Envelope image"/>
                <p>{props.user.initialData.email}</p>
            </div>
            <div className="about">
                <p>O mnie</p>
                <p>{props.user.bio}</p>
            </div>
            <Btn text="Brak zainteresowania"></Btn>
            <Btn text={checkStatus()}></Btn>
        </div>
    )
}