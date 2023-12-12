import {Btn} from "../Btn/Btn";
import {FormEvent, useRef, useState} from "react";
import './ChangePassword.css';

export const ChangePassword = () => {
    const [response, setResponse] = useState<boolean | null>(null);
    const [form, setForm] = useState<string>({
        oldPwd: '',
        newPwd: '',
        userId: ''
    });
    const text = useRef('');

    const updateForm = async (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/user/change-pass', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(form)
        });
        const data = await res.json();
        console.log(data)

        if (res.status === 400 || res.status === 401 || res.status === 404 || res.status === 500) {
            alert('Stare hasło jest błędne, wpisz poprawne.');
            return;
        } else {
            setResponse(data.ok);
        }
    }

    if (response) {
        text.current = 'Poprawnie zmieniono hasło.'
    }

    return (
        <div className="change-password">
            <h2>Zmień hasło</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Stare hasło
                    <input type="text" placeholder="Stare hasło" onChange={e => updateForm('oldPwd', e.target.value)}/>
                </label>
                <label>
                    Nowe hasło
                    <input type="text" placeholder="Nowe hasło" onChange={e => updateForm('newPwd', e.target.value)}/>
                </label>

                <Btn text="Zmień hasło"></Btn>
            </form>
            <p>{text.current}</p>
        </div>
    )
}