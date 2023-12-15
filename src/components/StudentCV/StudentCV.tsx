import './StudentCV.css';
import {Link} from "react-router-dom";
import {StudentInitialInterface} from "types";

interface Props {
    student: StudentInitialInterface,
    onChildClick: () => {}
}

export const StudentCV = (props: Props) => {
    console.log(props.student)
    const handle = () =>{
        props.onChildClick(null)
    }

    return (
        <>
            <Link onClick={handle} to='/hr'>Wróć</Link>
        <p>CV {props.student.profile.firstName}</p></>
    )
}