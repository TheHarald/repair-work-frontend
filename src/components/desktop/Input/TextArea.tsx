import React from 'react';
import { handleChangeProps } from '../../../hooks/useForm';
import "./input.css"

type TextAreaProps = {
    label:string,
    placeholder:string,
    required:boolean,
    value:string,
    inputName:string
    onChange: (e:handleChangeProps)=>void
}


const test = ()=>{
    console.log('test')
} 

function TextArea(props:TextAreaProps) {
    return (
        <div className='input'>
            <label className='input__label'>{props.label}
            {props.required?<span className='input__required'>*</span>:''}
            </label>
            <textarea  
                name={props.inputName}
                onChange={props.onChange}
                value={props.value}
                className='input__field input__field-textarea' 
                placeholder={props.placeholder}
                >
            </textarea>
            
        </div>
    );
}

export default TextArea;