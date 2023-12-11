import { EditStudentDataContext } from "src/context/EditStudentDataContext";
import {useContext} from 'react';

interface Props {
    onChange: Function,
    text: Function,
}

export const StatusBtn = (props: Props) => {
    const {form} = useContext(EditStudentDataContext)
    
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();

        if (form.status === 0)
        props.onChange('status', 1)
        if (form.status === 1)
        props.onChange('status', 2)
        if (form.status === 2)
        props.onChange('status', 0)
    }

    return (
        <button onClick={e => handleClick(e)}>{props.text()}</button>
    )
}