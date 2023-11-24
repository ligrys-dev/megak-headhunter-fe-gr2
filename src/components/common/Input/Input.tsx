import React from "react";
import './Input.css';

interface Props {
    type: string;
    placeholder: string;
}
export const Input = (props:Props) => {
    return <input type={props.type} placeholder={props.placeholder}/>

}