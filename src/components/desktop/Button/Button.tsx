import React from 'react';
import './button.css'

type ButtonProps = {
    text:string
    type: 'submit' | 'button' | 'reset'
    onClick: ()=>void,
    color: "red" | "green" | "primary"
}

function Button(props:ButtonProps) {

    let buttonStyle = `button`
    if(props.color === 'red'){
        buttonStyle+= " red"
    }else if(props.color === "green"){
        buttonStyle+= " green"
    }else{
        buttonStyle+= " primary"
    }
    

    return (
        <button 
            className={buttonStyle}
            type={props.type}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;