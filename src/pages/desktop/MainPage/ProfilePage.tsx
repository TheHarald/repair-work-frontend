import React from 'react';
import Button from '../../../components/desktop/Button/Button';
import IconButton from '../../../components/desktop/Button/IconButton';
import './mainpage.css'

function ProfilePage() {

    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return (
        <div className='main-page'>
            <h1>{user.worker_FIO}</h1>            
            <h1>{user.login}</h1>            
            <h1>{user.id}</h1>      
            <IconButton onClick={()=>console.log("eee")}/>   
            <Button
                type='button'
                text='Принять'
                color='green'
                onClick={()=>console.log("e")}            
            />  
        </div>
    );
}

export default ProfilePage;