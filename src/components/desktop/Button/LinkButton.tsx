import React from 'react';
import { Link } from 'react-router-dom';
import './button.css'

type LinkButtonProps = {
    text:string,
    to:string
}

function LinkButton(props:LinkButtonProps) {
    return (
        <Link className='link-button' to={props.to}>{props.text}</Link>
    );
}

export default LinkButton;