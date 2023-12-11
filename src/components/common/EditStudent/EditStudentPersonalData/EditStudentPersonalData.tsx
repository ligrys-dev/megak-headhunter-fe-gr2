import { useContext } from 'react';
import { EditStudentDataContext } from "src/context/EditStudentDataContext";
import { StudentProfileInterface } from "types";
import { Btn } from "../../Btn/Btn";
import './EditStudentPersonalData.css';

interface Props {
    onChange: Function
}

export const EditStudentPersonalData = (props: Props) => {
    const {form} = useContext(EditStudentDataContext)
    const {tel, githubUsername, firstName, initialData, bio, lastName, status} = props.user;

    const checkStatus = () => {
        switch (status) {
            case 0:
                return 'Dostępny';
            case 1:
                return 'Do rozmowy';
            case 2:
                return 'Zatrudniony';
            default:
                return null;
        }
    }

    return (
        <div className="student-personal-info">
            <div className="student-personal-info-left-side">
                <img id="user-image"
                     src={githubUsername ? `https://github.com/${githubUsername}.png` : "/assets/user.png"}
                     alt=""/>
                <input value={form.firstName} onChange={e => props.onChange('firstName', e.target.value)}></input> 
                <input value={form.lastName} onChange={e => props.onChange('lastName', e.target.value)}></input>
                <div className="github-info">
                    <img src="/assets/github.png" alt="GitHub logo"/>
                    <p>{githubUsername ? githubUsername : 'Brak profilu'}</p>
                </div>
                <div className="phone-info">
                    <img src="/assets/phone.png" alt="Phone image"/>
                    <p>{tel ? tel : 'Brak numeru'}</p>
                </div>
                <div className="email-info">
                    <img src="/assets/envelope.png" alt="Envelope image"/>
                    <p>{initialData.email}</p>
                </div>
            </div>
            <div className="student-personal-info-right-side">
                <div className="about">
                    <p>O mnie</p>
                    <p>{bio}</p>
                </div>
                <Btn text="Brak zainteresowania"></Btn>
                <Btn text={checkStatus()}></Btn>
            </div>
        </div>
    )
}