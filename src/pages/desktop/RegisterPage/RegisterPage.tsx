import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/desktop/Button/Button';
import Layout from '../../../components/desktop/Layout/Layout';
import Input from '../../../components/desktop/Input/Input';
import Title2 from '../../../components/desktop/Title/Title2';
import { useForm } from '../../../hooks/useForm';
import { register } from '../../../service/auth';

type WorkerRegisterProps = {
    password:string,
    login:string,
    worker_FIO:string
}


type RegisterPageProps = {
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>,
    setSuccsessMessage:React.Dispatch<React.SetStateAction<string>>
}

function RegisterPage(props:RegisterPageProps) {

    const navigate = useNavigate()

    const {formData, handleChange } = useForm<WorkerRegisterProps>({
        password:'',
        login:'',
        worker_FIO:''
    })


    function handleSubmit(){
        register(formData, props.setErrorMessage , props.setSuccsessMessage)
        // navigate('/auth')
        
    }

    return (
        <div className='page'>
            <div className='page__container'>
                <Layout>
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
                         color="primary"
                    />
                    
                </Layout>
            </div>
            
        </div>
    );
}

export default RegisterPage;