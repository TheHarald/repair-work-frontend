import React from 'react';
import Title2 from '../Title/Title2';
import './switch.css'

type SwitchProps = {
    text: string,
    initValue: boolean
    onToggle: ()=>void

} 

function Switch(props:SwitchProps) {

    return (
        <div className='switch'>
            <input defaultChecked={props.initValue} onChange={props.onToggle} id='test' className='switch__input' type='checkbox'/>
            <label htmlFor='test'  className='switch__container'>
                <span className='switch__button'></span>
            </label>

            <Title2 text={props.text}/>
            
        </div>
    );
}

export default Switch;