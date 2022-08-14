import React from 'react';
import CloseButton from '../Button/CloseButton';
import Title3 from '../Title/Title3';
import './notification.css'

type NotificationProps = {
    type: 'error' | 'ok',
    title:string,
    text:string
}

function Notification(props:NotificationProps) {

    const error = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.7" cx="12" cy="12" r="10" fill="#F12B43"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.9393 12L7.46906 15.4703L8.53099 16.5297L12 13.0607L15.4691 16.5298L16.531 15.4704L13.0607 12L16.531 8.52972L15.4691 7.47034L12 10.9394L8.531 7.47035L7.46906 8.52972L10.9393 12Z" fill="white"/>
    </svg>

    const ok = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.7" cx="12" cy="12" r="10" fill="#1FD286"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.561 9.1768L11.061 15.5704C10.7479 15.8784 10.2449 15.8763 9.93433 15.5657L6.93433 12.5657L8.0657 11.4343L10.5047 13.8733L16.439 8.03613L17.561 9.1768Z" fill="white"/>
    </svg>

    const icon = props.type==='error'?error:ok



    return (
        <div className='notification'>
            {icon}
            <div className='notification__text-container'>
                <Title3 text={props.title}/>
                <p className='notification__text'>{props.text}</p>
            </div>
            <CloseButton onclick={()=>console.log('test')}/>  
        </div>
    );
}

export default Notification;