import React from 'react';
import { Link } from 'react-router-dom';
import LoginBoxLineIcon from 'remixicon-react/LoginBoxLineIcon'
import "./header.css"

function Header() {
    return (
        <header className='header' >
            <section className='header-container'>
                <h2 className='header__title'>Ремонтные заявки</h2>
                <Link to={'/login'} className='login_link'>
                    <p className='login-link__text' >Войти</p>
                    <LoginBoxLineIcon size={24}  className='login-link__icon'/>
                </Link>
            </section>
        </header>
    );
}

export default Header;