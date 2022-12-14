import React from 'react';
import Title3 from '../Title/Title3';
import Home2LineIcon from 'remixicon-react/Home2LineIcon'
import './card.css'
import IconButton from '../Button/IconButton';
import { RequestStatuses } from '../../../service/types';

type defaultOptions = {
    onClickButton: ((id:number)=>void) | (()=>void)
}

type personalOptions = {
    onClickButton: ((id:number)=>void) | (()=>void),
    onClickIconButton: ((id:number)=>void)
}


type RequestCardProps = {
    room:string,
    email:string,
    task:string,
    inerval:string,
    sender_FIO:string,
    onClickButton: ((id:number)=>void) | (()=>void),
    onClickIconButton?: (id:number)=>void,
    id:number,
    status: RequestStatuses
}

function RequestCard(props:RequestCardProps) {

    let options:JSX.Element;

    switch(props.status){
        case 'to_do':
            options = <button onClick={()=> props.onClickButton(props.id)} className='primary-button'>Принять</button>
            break;
        case 'in_work':
            options = <div className='request-card__actions'>
                            <IconButton onClick={props.onClickIconButton} id={props.id}/>
                            <button onClick={()=> props.onClickButton(props.id)} className='primary-button accept'>Завершить</button>
                        </div>
             break;
        case 'completed':
            options = <div className='request-card__actions'>
           
                    </div>
            break;

    }

    return (
        <article className='card'>
            <header className='request-card__header'>
                <Title3 text={props.sender_FIO}/>
                <div className='request-card__room'>
                    <Home2LineIcon size={24} className='request-card__icon' />
                    <p className='request-card__number'>{props.room}</p>
                </div>
            </header>
            <p className='card__subtitle upper'>{props.email} | {props.status}</p>
            <h3 className='prop-title yellow'>Проблема</h3>
            <p className='request-card__text upper'>{props.task}</p>
            <div className='request-card__header'>
                <div className='request-card__time'>
                    <h3 className='prop-title'>интервал</h3>
                    <p className='request-card__text'>{props.inerval}</p>
                </div>
                    { options}
            </div>
            
        </article>
    );
}

export default RequestCard;