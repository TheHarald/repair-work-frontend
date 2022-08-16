import React from 'react';
import Title3 from '../Title/Title3';
import Home2LineIcon from 'remixicon-react/Home2LineIcon'
import './requestcard.css'

type RequestCardProps = {
    room:string,
    email:string,
    task:string,
    inerval:string,
    sender_FIO:string
    onClick:(id:number)=>void
    id:number
}

function RequestCard(props:RequestCardProps) {
    return (
        <article className='request-card'>
            <header className='request-card__header'>
                <Title3 text={props.sender_FIO}/>
                <div className='request-card__room'>
                    <Home2LineIcon size={24} className='request-card__icon' />
                    <p className='request-card__number'>{props.room}</p>
                </div>
            </header>
            <p className='request-card__email'>{props.email}</p>
            <h3 className='prop-title yellow'>Проблема</h3>
            <p className='request-card__text upper'>{props.task}</p>
            <div className='request-card__header'>
                <div className='request-card__time'>
                    <h3 className='prop-title'>интервал</h3>
                    <p className='request-card__text'>{props.inerval}</p>
                </div>
                <button onClick={()=> props.onClick(props.id)} className='primary-button'>Принять</button>
            </div>
            
        </article>
    );
}

export default RequestCard;