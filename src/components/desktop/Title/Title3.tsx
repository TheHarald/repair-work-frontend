import React from 'react';
import './title.css'

type Title3Props = {
    text:string
}

function Title3(props:Title3Props) {
    return (
        <h2 className='title3'>{props.text}</h2>
    );
}

export default Title3;