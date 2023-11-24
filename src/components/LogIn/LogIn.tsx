import React from "react";
import {Btn} from "../common/Btn";
import './LogIn.css';

export const LogIn = () => {
    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form>
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Hasło"/>
                    <a href="#">Zapomniałeś hasła?</a>
                    <div className="go_to_registration">
                        <p>Nie masz konta?</p><a href="#">Zarejestruj się</a>
                       <Btn text="Zaloguj się"></Btn>
                    </div>
                </form>
            </div>
        </div>
    )
}
