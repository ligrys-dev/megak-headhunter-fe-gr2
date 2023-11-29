import {FormEvent, useState} from "react";
import {Btn} from "../common/Btn/Btn";
import {redirect} from "react-router-dom";
import {Spinner} from "../common/Spinner/Spinner";
import './LogIn.css';

export const LogIn = () => {
    const [loading, setLoading] = useState<boolean | null>(null);
    // @TODO Add type for form
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const updateForm = async (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    };

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
                body: JSON.stringify(form)
            });
            if (res.status === 400 || res.status === 500) {
                alert('Błędny login lub hasło.')
                return;
            }
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner/>
    }

    if (!loading) {
        redirect("http://localhost:5173/home")
    }

    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="E-mail" onChange={e => updateForm('email', e.target.value)}/>
                    <input type="password" placeholder="Hasło" onChange={e => updateForm('password', e.target.value)}/>
                    <a href="/reset-password">Zapomniałeś hasła?</a>
                    <div className="registration_and_btn">
                        <div className="go_to_registration">
                            <p>Nie masz konta?</p>
                            <a href="/signup">Zarejestruj się</a>
                        </div>
                        <Btn text="Zaloguj się"></Btn>
                    </div>
                </form>
            </div>
        </div>
    )
}