import React from 'react';
import './title.css'

type Title2Props = {
    text:string
}

function Title2(props:Title2Props) {
    return (
        <h2 className='title2'>{props.text}</h2>
    );
}

export default Title2;