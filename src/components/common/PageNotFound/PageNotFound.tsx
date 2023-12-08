import './PageNotFound.css';
import {Link} from "react-router-dom";

export const PageNotFound = () => {
    return (
        <div className="page-not-found-container">
            <h2>Nie ma takiej strony!</h2>
            <Link to='/'>Wróć do widoku logowania</Link>
        </div>
    )
}