import React from 'react';
import Header from '../../../components/desktop/Header/Header';
import Input from '../../../components/desktop/Input/Input';
import "./createrequestpage.css"

function CreateRequestPage() {
    return (
        <div className='page'>
            <Header/>
            <div className='page__container'>
                <div className='form'>
                    <Input 
                    label='Фамилия имя отчество' 
                    placeholder='Введите ФИО'
                    required={true}
                    />
                    <Input 
                    label='Электронная почта' 
                    placeholder='Введите email'
                    required={true}
                    />
                    <Input 
                    label='номер комнаты' 
                    placeholder='Введите номер комнаты'
                    required={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default CreateRequestPage;