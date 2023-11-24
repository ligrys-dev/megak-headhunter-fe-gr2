import React from "react";
import {Btn} from "../common/Btn/Btn";
import './LogIn.css';
import {Input} from "../common/Input/Input";

export const LogIn = () => {
    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form>
                    <Input type="text" placeholder="E-mail"/>
                    <Input type="password" placeholder="Hasło"/>
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
