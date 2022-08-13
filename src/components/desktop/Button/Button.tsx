import React from 'react';
import './button.css'

type ButtonProps = {
    text:string
    type: 'submit' | 'button' | 'reset'
    onClick: ()=>void
}

function Button(props:ButtonProps) {
    return (
        <button 
            className='button' 
            type={props.type}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;