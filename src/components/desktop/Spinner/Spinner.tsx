import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './spinner.css'

type SpinnerProps = {
    isVisible:boolean
}

// style="mask-type:alpha"

function Spinner(props:SpinnerProps) {

    const visivble = props.isVisible?'':'invisible'

    return (
        <div className={`spinner ${visivble}`}>
            <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
            
        
    );
}

export default Spinner;