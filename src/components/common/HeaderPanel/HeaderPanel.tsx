import {FormEvent, useState} from "react";
import {Btn} from "../Btn/Btn";
import {Navigate} from "react-router-dom";
import './HeaderPanel.css';

interface Props {
    name: string;
    lastName?: string;
    urlAccount: string;
    avatar?: string;
    onChildClick: () => {}
}

export const HeaderPanel = (props: Props) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [data, setData] = useState(false);
    const [password, setPassword] = useState(true);

    const showHideMenu = () => {
        if (toggleMenu) {
            setToggleMenu(false)
        } else {
            setToggleMenu(true)
        }
    }

    const changePassword = () => {
        if (password) {
            setPassword(false);
        } else {
            setPassword(true)
        }
        props.onChildClick(password);
        setToggleMenu(false)
    };

    const logOut = async (e: FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
        const data = await res.json();
        setData(data.ok)
    }

    if (data) {
        localStorage.removeItem('id');
        localStorage.removeItem('role');
        return <Navigate replace to="/"/>;
    }

    return (
        <div className="panel_header">
            <a href={props.urlAccount}><img src="/assets/logo_header.png" alt="MegaK headhunter logo"/></a>
            <div className="user_account">
                <img src={props.avatar ? `https://github.com/${props.avatar}.png` : "/assets/user.png"}
                     alt="Default user"/>
                <p>{props.name ? props.name : 'Brak'} {props.lastName ? props.lastName : ' danych'}</p>
                <div className="dropdown_menu">
                    <img onClick={showHideMenu} src="/assets/arrow.png" alt="Arrow down"/>
                    <ul className={toggleMenu ? "show" : ""}>
                        <li><Btn onClick={changePassword} text={password ? "Zmień hasło" : "Konto"}></Btn></li>
                        <li><Btn onClick={logOut} text="Wyloguj"></Btn></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}