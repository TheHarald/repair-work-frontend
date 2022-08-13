import React from 'react';
import Button from '../../../components/desktop/Button/Button';
import LinkButton from '../../../components/desktop/Button/LinkButton';
import Card from '../../../components/desktop/Card/Card';
import Header from '../../../components/desktop/Header/Header';
import Input from '../../../components/desktop/Input/Input';
import Title2 from '../../../components/desktop/Title2/Title2';

function AuthPage() {

    function handleSubmit(){

    }

    return (
        <div className='page'>
            <Header/>
            <div className='page__container'>
                <Card>
                    <Title2 text='Введите логин и пароль, чтобы авторизоваться в системе.'/>
                    <Input
                        label='логин'
                        required={true}
                        placeholder='Введите логин'
                        value='some'
                        onChange={()=>{console.log('test')}}
                        inputName="TEST"
                    />
                    <Input
                        label='пароль'
                        required={true}
                        placeholder='Введите пароль'
                        value='some'
                        onChange={()=>{console.log('test')}}
                        inputName="TEST"
                        type='password'
                    />

                    <Button
                         text='Войти'
                         type='submit'
                         onClick={handleSubmit} 
                    />
                    <LinkButton
                        to='/register'
                        text='Зарегистрироваться'
                    />
                </Card>
            </div>
            
        </div>
    );
}

export default AuthPage;