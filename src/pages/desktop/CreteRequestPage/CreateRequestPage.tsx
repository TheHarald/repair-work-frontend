import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postRequest } from '../../../apiFunctions/requestFuntcions';
import Header from '../../../components/desktop/Header/Header';
import Input from '../../../components/desktop/Input/Input';
import IntervalPicker from '../../../components/desktop/Input/IntervalPicker';
import TextArea from '../../../components/desktop/Input/TextArea';
import { useForm } from '../../../hooks/useForm';
import "./createrequestpage.css"


function CreateRequestPage() {

    const {requestData, handleChange} = useForm({
        room:'',
        request_task:'',
        sender_FIO:'',
        email:'',
        status:'test',
        start_time_to_arrive:'',
        end_time_to_arrive:''
    })

    const navigate = useNavigate()

    function handleSubmit(){
        postRequest(requestData)
        navigate('/')

    }



    return (
        <div className='page'>
            <Header/>
            <div className='page__container'>
                <div className='form'>
                    <Input 
                        label='Фамилия имя отчество' 
                        placeholder='Введите ФИО'
                        required={true}
                        inputName='sender_FIO'
                        onChange={handleChange}
                        value={requestData.sender_FIO}
                    />
                    <Input 
                        label='Электронная почта' 
                        placeholder='Введите email'
                        required={true}
                        inputName='email'
                        onChange={handleChange}
                        value={requestData.email}
                    />
                    <Input 
                        label='номер комнаты' 
                        placeholder='Введите номер комнаты'
                        required={true}
                        inputName='room'
                        onChange={handleChange}
                        value={requestData.room}
                    />
                    <TextArea
                        label='Причина заявки'
                        placeholder='Опишите проблему'
                        required={true}
                        inputName='request_task'
                        onChange={handleChange}
                        value={requestData.request_task}
                    />
                    <IntervalPicker
                        label='Интервал времени'
                        required={true}
                        startInputName='start_time_to_arrive'
                        endInputName='end_time_to_arrive'
                        requestData={requestData}
                        onChange={handleChange}
                    />
                    <button 
                        className='form__button' 
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Отравить заявку
                    </button>
                   
                </div>
            </div>
        </div>
    );
}

export default CreateRequestPage;