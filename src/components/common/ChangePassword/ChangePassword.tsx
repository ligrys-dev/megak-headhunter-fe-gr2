import {Btn} from "../Btn/Btn";
import {FormEvent, useRef, useState} from "react";
import './ChangePassword.css';

interface formType {
    oldPwd: string,
    newPwd: string,
}

export const ChangePassword = () => {
    const [response, setResponse] = useState<boolean | null>(null);
    const [formData, setFormData] = useState<formType>({
        oldPwd: '',
        newPwd: '',
    });
    const text = useRef('');

    const updateForm = async (key: string, value: any) => {
        setFormData(form => ({
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
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (res.status === 403 || res.status === 500) {
            alert('Stare hasło jest błędne, wpisz poprawne.');
            return;
        }
        if (res.ok) {
            setResponse(data.ok);
            setFormData({
                oldPwd: '',
                newPwd: '',
            });
        }
    }

    if (response === true) {
        text.current = 'Poprawnie zmieniono hasło.';
    }

    return (
        <div className="change-password">
            <h2>Zmień hasło</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Stare hasło
                    <input type="text" placeholder="Stare hasło" value={formData.oldPwd} onChange={e => updateForm('oldPwd', e.target.value)}/>
                </label>
                <label>
                    Nowe hasło
                    <input type="text" placeholder="Nowe hasło" value={formData.newPwd} onChange={e => updateForm('newPwd', e.target.value)}/>
                </label>

                <Btn text="Zmień hasło"></Btn>
            </form>
            <p className="change-password-text">{text.current}</p>
        </div>
    )
}