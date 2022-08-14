import React from 'react';
import "./divider.css"

type DividerProps = {
    color: string
}

function Divider(props:DividerProps) {
    return (
        <div className="divivder" style={{background: props.color}}>
            
        </div>
    );
}

export default Divider;