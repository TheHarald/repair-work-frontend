import React from 'react';
import "./input.css"
import FileList3LineIcon from 'remixicon-react/FileList3LineIcon'
import { RemixiconReactIconComponentType } from 'remixicon-react';
import { handleChangeProps } from '../../../hooks/useForm';

type InputProps = {
    label:string,
    placeholder:string,
    required:boolean
    value:string,
    inputName:string,
    type?:string
    onChange: (e:handleChangeProps)=>void
}

function Input(props:InputProps) {
    return (
        <div className='input'>
            <label className='input__label'>{props.label}
            {props.required?<span className='input__required'>*</span>:''}
            </label>
            <input 
                name={props.inputName}
                className='input__field' 
                type={props.type} 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                
                >
            </input>
            
        </div>
    );
}

export default Input;