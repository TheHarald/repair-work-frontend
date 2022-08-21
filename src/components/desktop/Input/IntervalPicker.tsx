import React from 'react';
import "./input.css"
import TimePicker from './TimePicker';
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import { handleChangeProps} from '../../../hooks/useForm';
import { RequestData } from '../../../service/types';



type IntervalPickerProps ={
    label:string,
    required:boolean,
    startInputName:string,
    endInputName:string,
    requestData:RequestData,
    onChange:(e:handleChangeProps)=>void
}

function IntervalPicker(props:IntervalPickerProps) {
    return (
        <div className='input'>
              <label className='input__label'>
                {props.label}
                {props.required?
                <span className='input__required'>*</span>:''}
              </label>
              <div className='input__interval-picker'>
                <TimePicker 
                  inputName={props.startInputName}
                  onChange={props.onChange}
                  value={props.requestData.start_time_to_arrive}

                />
                <ArrowRightLineIcon color='#A1A7C4' size={24}/>
                <TimePicker 
                  inputName={props.endInputName}
                  onChange={props.onChange}
                  value={props.requestData.end_time_to_arrive}

                />
              </div>
              

        </div>
    );
}

export default IntervalPicker;