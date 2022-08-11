import React from 'react';
import "./input.css"
import FileList3LineIcon from 'remixicon-react/FileList3LineIcon'
import { RemixiconReactIconComponentType } from 'remixicon-react';

type InputProps = {
    label:string,
    placeholder:string,
    required:boolean
}

function Input(props:InputProps) {
    return (
        <div className='input'>
            <label className='input__label'>{props.label}
            {props.required?<span className='input__required'>*</span>:''}
            </label>
            <input className='input__field' type={"text"} placeholder={props.placeholder}>
            </input>
            
        </div>
    );
}

export default Input;