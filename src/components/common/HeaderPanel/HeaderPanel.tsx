import {FormEvent, useState} from "react";
import {Btn} from "../Btn/Btn";
import {Navigate} from "react-router-dom";
import './HeaderPanel.css';

interface Props {
    name: string;
    lastName?: string;
    urlAccount: string;
    avatar?: string;
}

export const HeaderPanel = (props: Props) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [data, setData] = useState(false);

    const showHideMenu = () => {
        if (toggleMenu) {
            setToggleMenu(false)
        } else {
            setToggleMenu(true)
        }
    }

    const logOut = async (e: FormEvent) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
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
            <img src="/assets/megak.png" alt="MegaK logo"/>
            <div className="user_account">
                <img src={props.avatar ? `https://github.com/${props.avatar}.png` : "/assets/user.png"}
                     alt="Default user"/>
                <p>{props.name} {props.lastName}</p>
                <div className="dropdown_menu">
                    <img onClick={showHideMenu} src="/assets/arrow.png" alt="Arrow down"/>
                    <ul className={toggleMenu ? "show" : ""}>
                        {/*<li><Link to={props.urlAccount}>Konto</Link></li>*/}
                        {/*<li><a href={props.urlAccount}>Konto</a></li>*/}
                        <li><Btn onClick={logOut} text="Wyloguj"></Btn></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}