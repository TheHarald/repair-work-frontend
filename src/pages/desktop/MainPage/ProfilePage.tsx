import React, { useEffect, useState } from 'react';
import ProfileCard from '../../../components/desktop/Card/ProfileCard';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Title2 from '../../../components/desktop/Title/Title2';
import { WorkerInfoProps } from '../../../service/types';
import { getWorkers } from '../../../service/workers';
import './mainpage.css'

function ProfilePage() {

    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const [workers,setWorkers] = useState<WorkerInfoProps[] | []>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getWorkers().then( (response:any) =>{
            setWorkers(response.data)
            setIsLoading(false)
        })
    },[])

    return (
        <div className='main-page'>
            <Spinner isVisible={isLoading}/>
            <div className='profile__container'>
                <div className='profile__info'>
                    <Title2 text='Профиль работника'/>
                    <ProfileCard
                        worker_FIO={user.worker_FIO}
                        login={user.login}
                    />
                </div>
                <div className='profile__info'>
                    <Title2 text='Все работники'/>
                    {
                        workers.map( worker =>{
                            return <ProfileCard key={worker.id} 
                                worker_FIO={worker.worker_FIO}
                                login={worker.login} 
                            />
                        })
                    }
                </div>

            </div>
            
              
        </div>
    );
}

export default ProfilePage;