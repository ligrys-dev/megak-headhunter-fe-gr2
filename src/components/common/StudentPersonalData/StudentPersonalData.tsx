import {StudentProfileInterface} from "types";
import './StudentPersonalData.css';

interface Props {
    user: StudentProfileInterface
}

export const StudentPersonalData = (props: Props) => {
    const {profile, firstName, email, lastName} = props.user;

    return (
        <div className="student-personal-info">
            <div className="student-personal-info-left-side">
                <img id="user-image"
                     src={profile ? `https://github.com/${profile.githubUsername}.png` : "/assets/user.png"}
                     alt=""/>
                <p id="user-name">{profile ? firstName : 'Brak'} {profile ? lastName : ' danych'}</p>
                <div className="github-info">
                    <img src="/assets/github.png" alt="GitHub logo"/>
                    <p>{profile ? profile.githubUsername : 'Brak profilu'}</p>
                </div>
                <div className="phone-info">
                    <img src="/assets/phone.png" alt="Phone image"/>
                    <p>{profile ? profile.tel : 'Brak numeru'}</p>
                </div>
                <div className="email-info">
                    <img src="/assets/envelope.png" alt="Envelope image"/>
                    <p>{email}</p>
                </div>
            </div>
            <div className="student-personal-info-right-side">
                <div className="about">
                    <p>O mnie</p>
                    <p>{profile ? profile.bio : 'Brak bio'}</p>
                </div>
            </div>
        </div>
    )
}