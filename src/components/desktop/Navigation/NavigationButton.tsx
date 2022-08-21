import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigationbutton.css'

type NavigationButtonProps = {
    to: string,
    icon: React.ReactNode
    text:string
}

function NavigationButton(props:NavigationButtonProps) {

    const loaction = useLocation()
    let linkClassName = `navigation-button__link`

    if(loaction.pathname.match(`/${props.to}`)){
        linkClassName += " selected"
    }else{
        linkClassName += " non-selected"
    }

    return (
        <Link to={props.to} className='navigation-button'>
            <div className={linkClassName}>
                {props.icon}
                <p className='navigation-button__text'>{props.text}</p>
            </div>
        </Link>
    );
}

export default NavigationButton;