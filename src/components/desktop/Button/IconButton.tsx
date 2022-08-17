import React from 'react';
import CloseLineIcon from 'remixicon-react/CloseLineIcon'
import './button.css'
type IconButtonProps = {
    onClick: any
    id: number

}

function IconButton(props:IconButtonProps) {
    return (
        <button onClick={()=>props.onClick(props.id)} className='card-button'>
            <CloseLineIcon size={24}/>
        </button>
    );
}

export default IconButton;