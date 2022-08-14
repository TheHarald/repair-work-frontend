import React from 'react';
type CloseButtonProps = {
    onclick:()=>void
}

function CloseButton(props:CloseButtonProps) {
    return (
        <button onClick={props.onclick} className='close-button'>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.69398 0.306019C10.102 0.714045 10.102 1.37559 9.69398 1.78361L6.47833 4.99926L9.69398 8.21639C10.102 8.62441 10.102 9.28595 9.69398 9.69398C9.28595 10.102 8.62441 10.102 8.21639 9.69398L5.00074 6.47685L1.78361 9.69398C1.37559 10.102 0.714045 10.102 0.306019 9.69398C-0.102006 9.28595 -0.102006 8.62441 0.306019 8.21639L3.52315 4.99926L0.306019 1.78361C-0.102006 1.37559 -0.102006 0.714045 0.306019 0.306019C0.714045 -0.102006 1.37559 -0.102006 1.78361 0.306019L5.00074 3.52167L8.21639 0.306019C8.62441 -0.102006 9.28595 -0.102006 9.69398 0.306019Z" fill="#333752"/>
            </svg>
        </button>
    );
}

export default CloseButton;