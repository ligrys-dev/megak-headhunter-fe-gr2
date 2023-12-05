import {FormEvent, useState} from "react";
import {Btn} from "../common/Btn/Btn";
import './LogIn.css';


interface formType {
    email: string;
    password: string;
}

interface dataType {
    id: string;
    role: number;
}

export const LogIn = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<dataType | null>(null)
    const [form, setForm] = useState<formType>({
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
        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        console.log(data)
        if (res.status === 400 || res.status === 401 || res.status === 404 || res.status === 500) {
            alert('Błędny login lub hasło.');
            return;
        } else {
            setResponse(data);
            setLoading(true);
        }
    }

    if (loading) {
        console.log(response?.role)
        if (response?.role === 1) {
            console.log('admin')
        } else if (response?.role === 2) {
            console.log('student')
        } else if (response?.role === 2) {
            console.log('hr')
        }
    }

    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="E-mail" onChange={e => updateForm('email', e.target.value)}/>
                    <input type="password" placeholder="Hasło" onChange={e => updateForm('password', e.target.value)}/>
                    <a href="/reset-password">Zapomniałeś hasła?</a>
                    <Btn text="Zaloguj się"></Btn>
                </form>
            </div>
        </div>
    )
}