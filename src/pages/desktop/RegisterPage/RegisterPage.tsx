import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/desktop/Button/Button';
import Card from '../../../components/desktop/Card/Card';
import Header from '../../../components/desktop/Header/Header';
import Input from '../../../components/desktop/Input/Input';
import Title2 from '../../../components/desktop/Title2/Title2';
import { useForm } from '../../../hooks/useForm';

type WorkerRegisterProps = {
    password:string,
    login:string,
    worker_FIO:string
}

function RegisterPage() {

    const navigate = useNavigate()

    const {formData, handleChange } = useForm<WorkerRegisterProps>({
        password:'',
        login:'',
        worker_FIO:''
    })


    function handleSubmit(){
        alert(JSON.stringify(formData))
        navigate('/auth')
        
    }

    return (
        <div className='page'>
            <Header/>
            <div className='page__container'>
                <Card>
                    <Title2 text='Зарегистрируйтесь, чтобы войти.'/>

                    <Input
                        label='логин'
                        required={true}
                        placeholder='Введите логин'
                        value={formData.login}
                        onChange={handleChange}
                        inputName="login"
                    />
                    <Input
                        label='пароль'
                        required={true}
                        placeholder='Введите пароль'
                        value={formData.password}
                        onChange={handleChange}
                        inputName='password'
                        type='password'
                    />
                    <Input
                        label='Фамилия имя отвчетсво'
                        required={true}
                        placeholder='Введите ФИО'
                        value={formData.worker_FIO}
                        onChange={handleChange}
                        inputName='worker_FIO'
                    />

                    <Button
                         text='Зарегистрироваться'
                         type='submit'
                         onClick={handleSubmit} 
                    />
                    
                </Card>
            </div>
            
        </div>
    );
}

export default RegisterPage;