import {Btn} from "../common/Btn/Btn";
import {AuthorizationInfo} from "../common/AuthorizationInfo/AuthorizationInfo";
import {FormEvent, useRef, useState} from "react";
import './ResetPassword.css';

export const ResetPassword = () => {
    const [response, setResponse] = useState<boolean | null>(null);
    const [email, setEmail] = useState<string>({
        email: ''
    });
    const text = useRef('');

    const updateForm = async (key: string, value: any) => {
        setEmail(email => ({
            ...email,
            [key]: value
        }))
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/user/reset-pass', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email)
        });
        const data = await res.json();

        if (res.status === 400 || res.status === 401 || res.status === 404 || res.status === 500) {
            alert('Błędny e-mail. Wpisz jeszcze raz.');
            return;
        } else {
            setResponse(data.ok);
        }
    }

    if (response) {
        text.current = 'Wysłano wiadomość. Sprawdź e-mail.'
    }

    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form className="reset_password" onSubmit={onSubmit}>
                    <input type="email" placeholder="E-mail" onChange={e => updateForm('email', e.target.value)}/>
                    <Btn text="Wyślij wiadomość"></Btn>
                </form>
                <AuthorizationInfo text={text.current}/>
            </div>
        </div>
    )
}