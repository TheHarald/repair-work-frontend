import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/desktop/Button/Button';
import Layout from '../../../components/desktop/Layout/Layout';
import Input from '../../../components/desktop/Input/Input';
import IntervalPicker from '../../../components/desktop/Input/IntervalPicker';
import TextArea from '../../../components/desktop/Input/TextArea';
import Title2 from '../../../components/desktop/Title/Title2';
import { useForm } from '../../../hooks/useForm';
import "./createrequestpage.css"
import { postRequest } from '../../../service/requests';
import { RequestData } from '../../../service/types';

type CreateRequestPageProps = {
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>,
    setSuccsessMessage:React.Dispatch<React.SetStateAction<string>>
}


function CreateRequestPage(props:CreateRequestPageProps) {

    const {formData, handleChange} = useForm<RequestData>({
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
        postRequest(formData, props.setErrorMessage, props.setSuccsessMessage)
        navigate('/')

    }

    return (
        <div className='page'>
            <div className='page__container'>
                <Layout>
                    <Title2 text='Заполните поля и отправьте заявку на ремонт.'/>
                    <Input 
                        label='Фамилия имя отчество' 
                        placeholder='Введите ФИО'
                        required={true}
                        inputName='sender_FIO'
                        onChange={handleChange}
                        value={formData.sender_FIO}
                    />
                    <Input 
                        label='Электронная почта' 
                        placeholder='Введите email'
                        required={true}
                        inputName='email'
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <Input 
                        label='номер комнаты' 
                        placeholder='Введите номер комнаты'
                        required={true}
                        inputName='room'
                        onChange={handleChange}
                        value={formData.room}
                    />
                    <TextArea
                        label='Причина заявки'
                        placeholder='Опишите проблему'
                        required={true}
                        inputName='request_task'
                        onChange={handleChange}
                        value={formData.request_task}
                    />
                    <IntervalPicker
                        label='Интервал времени'
                        required={true}
                        startInputName='start_time_to_arrive'
                        endInputName='end_time_to_arrive'
                        requestData={formData}
                        onChange={handleChange}
                    />
                    <Button
                        text='Отправить заявку'
                        type='submit'
                        onClick={handleSubmit} 
                        color="primary" 
                    />
                    
                </Layout>
            </div>
        </div>
    );
}

export default CreateRequestPage;