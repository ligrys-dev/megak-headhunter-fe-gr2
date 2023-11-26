import React from "react";
import './AuthorizationInfo.css';

interface Props {
    text: string;
}

export const AuthorizationInfo = (props: Props) => {
    return (
        <div className="authorization_info">
            <p>{props.text}</p>
            <a href="/">Przejdz do strony logowania</a>
        </div>
    )
}