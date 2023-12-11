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

    const checkStatus = () => {
        switch (form.status) {
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
                     src={form.githubUsername ? `https://github.com/${form.githubUsername}.png` : "/assets/user.png"}
                     alt=""/>
                <input value={form.firstName} onChange={e => props.onChange('firstName', e.target.value)}></input> 
                <input value={form.lastName} onChange={e => props.onChange('lastName', e.target.value)}></input>
                <div className="github-info">
                    <img src="/assets/github.png" alt="GitHub logo"/>
                    <input value={form.githubUsername ? form.githubUsername : 'Brak profilu'}></input>
                </div>
                <div className="phone-info">
                    <img src="/assets/phone.png" alt="Phone image"/>
                    <input type='tel' value={form.tel ? form.tel : 'Brak numeru'} onChange={e => props.onChange('tel', e.target.value)}></input>
                </div>
                <div className="email-info">
                    <img src="/assets/envelope.png" alt="Envelope image"/>
                    <p>{form.initialData.email}</p>
                </div>
            </div>
            <div className="student-personal-info-right-side">
                <div className="about">
                    <p>O mnie</p>
                    <textarea value={form.bio} onChange={e => props.onChange('bio', e.target.value)}></textarea>
                </div>
                <Btn text="Brak zainteresowania"></Btn>
                <Btn text={checkStatus()}></Btn>
            </div>
        </div>
    )
}