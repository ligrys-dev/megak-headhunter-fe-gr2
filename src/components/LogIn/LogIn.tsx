import React from "react";
import './LogIn.css'


export const LogIn = () => {


    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form>
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Hasło"/>
                    <a href="megak-v3-headhunter-fe-gr2/src/components#">Zapomniałeś hasła?</a>
                    <div className="go_to_registration">
                        <p>Nie masz konta?</p><a href="megak-v3-headhunter-fe-gr2/src/components#">Zarejestruj się</a>
                        <button>Zaloguj się</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
