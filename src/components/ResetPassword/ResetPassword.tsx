import {Btn} from "../common/Btn/Btn";
import {AuthorizationInfo} from "../common/AuthorizationInfo/AuthorizationInfo";
import {FormEvent, useRef, useState} from "react";
import {Spinner} from "../common/Spinner/Spinner";
import './ResetPassword.css';

export const ResetPassword = () => {
    const [loading, setLoading] = useState<boolean | null>(null);
    // @TODO Add type for form
    const [email, setEmail] = useState<string>('');
    const text = useRef('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3306/user/login`, {
                // @TODO Return to the url
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email)
            });
            if (res.status === 400 || res.status === 500) {
                alert(`Nie ma ${email} w bazie.`)
                return;
            }
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner/>
    }

    if (loading === false) {
        text.current = 'Wysłano wiadomość. Sprawdź e-mail.'
    }

    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                    <Btn text="Wyślij wiadomość"></Btn>
                </form>
                <AuthorizationInfo text={text.current}/>
            </div>
        </div>
    )
}