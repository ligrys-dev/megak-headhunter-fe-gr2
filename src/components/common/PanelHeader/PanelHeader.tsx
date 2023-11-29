import './PanelHeader.css';

interface Props {
    name: string;
    lastName: string;
    urlAccount: string;
    urlLogOut: string;
}

export const PanelHeader = (props: Props) => {
    return (
        <div className="panel_header">
            <img src="/assets/megak.png" alt="MegaK logo"/>
            <div className="user_account">
                <img src="/assets/user.png" alt="Default user"/>
                <p>{props.name} {props.lastName}</p>
                <div className="dropdown_menu">
                    <a href="#"><img src="/assets/arrow.png" alt="Arrow down"/></a>
                    <ul>
                        <li><a href={props.urlAccount}>Konto</a></li>
                        <li><a href={props.urlLogOut}>Wyloguj</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}