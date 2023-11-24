import './App.css'
import React from "react";

function App() {

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
                        <button>Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default App
