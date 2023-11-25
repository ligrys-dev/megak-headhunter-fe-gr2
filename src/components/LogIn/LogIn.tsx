import React, {FormEvent, useRef, useState} from "react";
import {Btn} from "../common/Btn/Btn";
import {redirect} from "react-router-dom";
import './LogIn.css';

export const LogIn = () => {
    const [loading, setLoading] = useState(false);
    const email = useRef("");
    const password = useRef("");
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log('poszło')
        // const res = await fetch(`http://localhost:3001/user/login`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password
        //     })
        // });
        // const data = await res.json();
        // if (data) {
        //     setLoading(true)
        // } else {
        //     alert("Błędny login lub hasło!");
        // }
    }

    if (loading){
        redirect('/home')
    }
    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="E-mail" onChange={(e) => (email.current = e.target.value)}/>
                    <input type="password" placeholder="Hasło" onChange={(e) => (email.current = e.target.value)}/>
                    <a href="/reset-password">Zapomniałeś hasła?</a>
                    <div className="go_to_registration">
                        <p>Nie masz konta?</p><a href="/signin">Zarejestruj się</a>
                        <Btn text="Zaloguj się"></Btn>
                    </div>
                </form>
            </div>
        </div>
    )
}
