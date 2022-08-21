import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/desktop/Button/Button';
import LinkButton from '../../../components/desktop/Button/LinkButton';
import Layout from '../../../components/desktop/Layout/Layout';
import Input from '../../../components/desktop/Input/Input';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Title2 from '../../../components/desktop/Title/Title2';
import { useForm } from '../../../hooks/useForm';
import { WorkerLoginProps } from '../../../service/types';
import { getWorkerInfoByToken, login } from '../../../service/auth';


type AuthPageProps = {
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

function AuthPage(props:AuthPageProps) {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const {formData, handleChange } = useForm<WorkerLoginProps>({
        password:'',
        login:'' 
    })

    function  handleSubmit(){
        setIsLoading(true)
        login(formData, props.setErrorMessage).then( ()=>{
                getWorkerInfoByToken().then( (data)=>{
                // console.log('token get ->', data);
                if(data){
                    localStorage.setItem('user', JSON.stringify(data))
                    // props.setUser(data)
                    navigate('/main/requests')
                }
                setIsLoading(false)
            })
            
        }).catch( ()=>{
            console.log('not auth');
        })    
        
    }

    return (
        <div className='page'>
            <Spinner isVisible={isLoading}/>
            <div className='page__container'>
                <Layout>
                    <Title2 text='Введите логин и пароль, чтобы авторизоваться в системе.'/>
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

                    <Button
                         text='Войти'
                         type='submit'
                         onClick={handleSubmit} 
                         color="primary"
                    />
                    <LinkButton
                        to='/register'
                        text='Зарегистрироваться'
                    />
                </Layout>
            </div>
            
        </div>
    );
}

export default AuthPage;