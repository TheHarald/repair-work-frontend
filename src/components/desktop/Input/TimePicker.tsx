import React from 'react';
import { useState } from 'react';
import { handleChangeProps, RequestData } from '../../../hooks/useForm';
import "./input.css"


type TimePickerProps ={
    onChange:(e:handleChangeProps)=>void,
    value:string,
    inputName:string

}

function getHours():Array<string>{
    let arr:Array<string> = []
    for(let i = 8; i< 23;i++){
        arr.push(`${i}:00`)
    }
    return arr
}

function TimePicker(props:TimePickerProps) {
    const options = getHours()

    return (
        <select 
            className='input__field time-picker'
            onChange={props.onChange}
            value={props.value}
            name={props.inputName}
        >
            {options.map(((option,index)=>{
                return(
                    <option key={index} >
                        {option}
                    </option>
                )
            }))}
        </select>
    );
}

export default TimePicker;