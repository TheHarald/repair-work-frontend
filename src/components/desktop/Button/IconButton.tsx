import React from 'react';
import CloseCircleLineIcon from 'remixicon-react/CloseLineIcon'
import './button.css'
type IconButtonProps = {
    onClick: ()=>void

}

function IconButton(props:IconButtonProps) {
    return (
        <button className='card-button'>
            <CloseCircleLineIcon/>
        </button>
    );
}

export default IconButton;