import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginBoxLineIcon from 'remixicon-react/LoginBoxLineIcon'
import LogoutBoxLineIcon from 'remixicon-react/LogoutBoxLineIcon'
import User3LineIcon from 'remixicon-react/User3LineIcon'
import { getWorkerInfoByToken, WorkerInfoProps } from '../../../apiFunctions/requestFuntcions';
import Divider from '../Divider/Divider';
import "./header.css"

type HeaderProps = {
    login:string
    setUser: React.Dispatch<React.SetStateAction<WorkerInfoProps>>
    setIsLoading:React.Dispatch<React.SetStateAction<boolean>>

}

function Header(props:HeaderProps) {

    const navigate = useNavigate()

    function handleLogIn(){
        props.setIsLoading(true)
        getWorkerInfoByToken().then( (data)=>{
                console.log('token get ->', data);
                if(data){
                    props.setUser(data)
                    navigate('/main/requests')
        }}).catch( e => console.log('failed->',e))
        props.setIsLoading(false)
    }

    function handleLogOut(){
        localStorage.removeItem('token')
        navigate('/')
        location.reload();
    }

    return (
        <header className='header' >
            <section className='header-container'>
                <Link to={'/'} className='header__title'>Ремонтные заявки</Link>

                {
                    props.login.length > 0
                    ?
                    <div className='worker-actions'>
                        <button onClick={handleLogOut}  className='login_link'>
                            <p className='login-link__text' >{props.login}</p>
                            <LogoutBoxLineIcon size={24}  className='login-link__icon'/>
                        </button >
                        <Divider color='#fff'/>
                        <Link to={'/main/profile'} className='login_link' >
                            <User3LineIcon size={24}  className='login-link__icon'/>
                        </Link>
                    </div>
                    :
                    <Link onClick={handleLogIn} to={'/auth'} className='login_link'>
                        <p className='login-link__text' >Войти</p>
                        <LoginBoxLineIcon size={24}  className='login-link__icon'/>
                    </Link>
                }

                

                
            </section>
        </header>
    );
}

export default Header;