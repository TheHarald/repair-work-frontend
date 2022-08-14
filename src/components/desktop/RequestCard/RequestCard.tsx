import React from 'react';
import Title3 from '../Title/Title3';
import Home2LineIcon from 'remixicon-react/Home2LineIcon'
import './requestcard.css'

type RequestCardProps = {
    
}

function RequestCard() {
    return (
        <article className='request-card'>
            <header className='request-card__header'>
                <Title3 text='Фамилия Имя Отчество'/>
                <div className='request-card__room'>
                    <Home2LineIcon size={24} className='request-card__icon' />
                    <p className='request-card__number'>501</p>
                </div>
            </header>
            <p className='request-card__email'>email@email</p>
            <h3 className='prop-title yellow'>проблема</h3>
            <p className='request-card__text upper'>Починить кран</p>
            <div className='request-card__header'>
                <div className='request-card__time'>
                    <h3 className='prop-title'>интервал</h3>
                    <p className='request-card__text'>17:00 - 18:00</p>
                </div>
                <button className='primary-button'>Принять</button>
            </div>
            
        </article>
    );
}

export default RequestCard;