import React from 'react';
import './layout.css'

type CardProps = {
    children?: JSX.Element|JSX.Element[]
}

function Layout(props:CardProps) {
    return (
        <div className='layout'>
            {props.children}
        </div>
    );
}

export default Layout;