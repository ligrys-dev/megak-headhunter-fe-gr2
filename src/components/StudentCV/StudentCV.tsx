import './StudentCV.css';
import {Link} from "react-router-dom";

interface Props {
    id: string,
    onChildClick: () => {}
}

export const StudentCV = (props: Props) => {

    const handle = () =>{
        props.onChildClick('')
    }

    return (
        <>
            <Link onClick={handle} to='/hr'>Wróć</Link>
        <p>CV {props.id}</p></>
    )
}