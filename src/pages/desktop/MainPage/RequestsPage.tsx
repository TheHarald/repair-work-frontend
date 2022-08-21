import { ServerResponse } from 'http';
import React, { useEffect, useState } from 'react';
import RequestCard from '../../../components/desktop/Card/RequestCard';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Title2 from '../../../components/desktop/Title/Title2';
import { getRequests, takeRequest } from '../../../service/requests';
import { RequestProps } from '../../../service/types';
import './mainpage.css'

type RequestPageProps = {
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>,
    setSuccsessMessage:React.Dispatch<React.SetStateAction<string>>
}

function RequestsPage(props:RequestPageProps) {

    const [requests,setRequests] = useState<RequestProps[] | []>([])
    const [isLoading, setIsLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('user') || '{}')

    useEffect(()=>{
        setIsLoading(true)
        getRequests().then( 
            (response:any) => {
                setRequests(response.data.filter( (item:any) => item.workerId === null))
                setIsLoading(false)
                console.log(response.data);
            });
    },[])


    function handleClick(id:number){
        takeRequest(user.id, id).then( (response:any) =>{
           props.setSuccsessMessage("Заявка принята")
           setRequests( requests.filter( request => request.id !== id))
        }).catch( error => console.log(error))
    }
    
    return (
        <div className='main-page'>
            <Title2 text='Активные заявки' />
            <div className='main-page__requests'>
                {isLoading?
                <Spinner isVisible={isLoading}/>
                :
                requests.map( request => {
                    return <RequestCard key={request.id}
                        task={request.request_task}
                        email={request.email}
                        room={request.room}
                        inerval={`${request.start_time_to_arrive} - ${request.end_time_to_arrive}`}
                        sender_FIO={request.sender_FIO}
                        onClickButton={handleClick}
                        id={request.id}   
                        status={request.status}
                    />
                })

            }
            </div>
            
        </div>
    );
}

export default RequestsPage;