import React, { useEffect, useState } from 'react';
import { getRequests, removeRequest } from '../../../apiFunctions/requestFuntcions';
import RequestCard from '../../../components/desktop/RequestCard/RequestCard';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Title2 from '../../../components/desktop/Title/Title2';
import { RequestProps } from '../../../service/types';
import './mainpage.css'

type MyRequestPageProps = {
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>,
    setSuccsessMessage:React.Dispatch<React.SetStateAction<string>>
}

function MyRequestsPage(props:MyRequestPageProps) {

    const [myRequests, setMyrequests] = useState<RequestProps[] | []>([])
    const [isLoading, setIsLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('user') || '{}')


    function handleDelete(id:number){
        removeRequest(user.id, id).then( (response:any) =>{
            props.setSuccsessMessage("Заявка удалена")
            setMyrequests( myRequests.filter( myRequest => myRequest.id !== id))
         }).catch( error => console.log(error))
        
    }
    function handleAccept(id:number){
        console.log("accept", id);
        
    }
    
    useEffect(()=>{
        setIsLoading(true)
        getRequests().then(
            (response:any) => {

                let requests = response.data.filter( (item:any) => item.workerId === user.id)
                setMyrequests(requests)
                setIsLoading(false)
                console.log(requests);
            }
        )

    },[])
    return (
        <div className='main-page'>
            <Title2 text='Мои заявки' />

            <div className='main-page__requests'>
                {isLoading?
                <Spinner isVisible={isLoading}/>
                :
                myRequests.map( myRequest => {
                    return <RequestCard key={myRequest.id}
                        task={myRequest.request_task}
                        email={myRequest.email}
                        room={myRequest.room}
                        inerval={`${myRequest.start_time_to_arrive} - ${myRequest.end_time_to_arrive}`}
                        sender_FIO={myRequest.sender_FIO}
                        onClickButton={handleAccept}
                        onClickIconButton={handleDelete}   
                        id={myRequest.id}   
                        type= 'personal'
                    />
                })

            }
            </div>
        </div>
    );
}

export default MyRequestsPage;