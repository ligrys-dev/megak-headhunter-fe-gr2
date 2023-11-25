import {Btn} from "../common/Btn/Btn";
import {AuthorizationInfo} from "../common/AuthorizationInfo/AuthorizationInfo";
import './ResetPassword.css';

export const ResetPassword = () => {
    return (
        <div className="authorization_container">
            <div className="authorization_wrapper">
                <img src="/assets/megak.png" alt="MegaK logo"/>
                <form>
                    <input type="text" placeholder="E-mail"/>
                    <Btn text="Wyślij wiadomość"></Btn>
                </form>
                <AuthorizationInfo text="Wysłano e-mail. Sprawdz skrzynkę odbiorczą. - !!Do zrobiania!!"/>
            </div>
        </div>
    )
}