import {Btn} from "../common/Btn/Btn";
import {AuthorizationInfo} from "../common/AuthorizationInfo/AuthorizationInfo";
import {FormEvent, useState} from "react";
import {redirect} from "react-router-dom";
import {Spinner} from "../common/Spinner/Spinner";
import './SignUp.css';

export const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<boolean | null>(null);
    const [form, setForm] = useState({
        email: '',
        password: '',
        repeatedPassword: ''
    });
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            setUser(true)
            const res = await fetch(`http://localhost:3001/user/signup`, {
                // @TODO Return to the url
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
            if (res.status === 400 || res.status === 500) {
                const err = await res.json();
                alert(`Błąd: ${err.message}`)
                return;
            }
            const data = await res.json();
            // @TODO insert mail from backend
            setUser(data.email)
        } finally {
            setLoading(false);
        }

    }
    if (loading) {
        return <Spinner/>
    }
    if (user) {
        redirect("http://localhost:5173")
    }

    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="E-mail" onChange={e => updateForm('email', e.target.value)}/>
                    <input type="password" placeholder="Hasło" onChange={e => updateForm('password', e.target.value)}/>
                    <input type="password" placeholder="Powtórz hasło" onChange={e => updateForm('repeatedPassword', e.target.value)}/>
                    <Btn text="Zarejestruj się"></Btn>
                </form>
                <AuthorizationInfo text="Poprawnie dodano użytkownika. - !! Do zrobienia !!"/>
            </div>
        </div>
    )
}