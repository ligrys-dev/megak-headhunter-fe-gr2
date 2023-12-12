import './WelcomeView.css';

interface Props {
    name: string
}

export const WelcomeView = (props: Props) => {
    return (
        <div className="welcome-view">
            <h2>Witaj {props.name}</h2>

            <p className="welcome-view-text">Wybierz odpowiednią zakładkę aby zacząć.</p>
        </div>
    )
}