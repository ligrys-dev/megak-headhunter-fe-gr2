import './NoAccess.css';
import {Link} from "react-router-dom";

interface Props {
    role: number;
}

export const NoAccess = (props:Props) => {
    let url;
    if (props.role === 1) {
        url = "/admin"
    } else if (props.role === 2) {
        url = "/student"
    } else if (props.role === 3) {
        url = "/hr"
    }

    return (
        <div className="no-access-container">
            <h2>Nie masz dostępu!</h2>
            <Link to={url}>Wróć do strony głównej</Link>
        </div>
    )
}