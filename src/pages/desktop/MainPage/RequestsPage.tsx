import { ServerResponse } from 'http';
import React, { useEffect, useState } from 'react';
import { getRequests, takeRequest, WorkerInfoProps } from '../../../apiFunctions/requestFuntcions';
import RequestCard from '../../../components/desktop/RequestCard/RequestCard';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import { RequestProps } from '../../../service/types';
import './mainpage.css'

type RequestPageProps = {
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>,
    setSuccsessMessage:React.Dispatch<React.SetStateAction<string>>
    user:WorkerInfoProps
}

function RequestsPage(props:RequestPageProps) {

    const [requests,setRequests] = useState<RequestProps[] | []>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        getRequests().then( 
            (response:any) => {
                setRequests(response.data)
                setIsLoading(false)
                console.log(response.data);
            });
    },[])


    function handleClick(id:number){
        console.log("click", id, props.user.id);
        takeRequest(props.user.id, id).then( (response:any) =>{
           props.setSuccsessMessage("Заявка принята")
        })
    }
    
    return (
        <div className='main-page'>
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
                        onClick={handleClick}   
                        id={request.id}   
                    />
                })

            }
            </div>
            
        </div>
    );
}

export default RequestsPage;