import React from "react";
import './Btn.css';

interface Props {
    text: string;
    onClick?: React.MouseEventHandler
}

export const Btn = (props: Props) => {
    return (
        <>
        <button onClick={props.onClick}>{props.text}</button></>
    )
}