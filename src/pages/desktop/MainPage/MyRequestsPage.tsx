import React, { useEffect, useState } from 'react';
import RequestCard from '../../../components/desktop/Card/RequestCard';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Switch from '../../../components/desktop/Switch/Switch';
import Title2 from '../../../components/desktop/Title/Title2';
import { completeRequest, getRequests, removeRequest } from '../../../service/requests';
import { RequestProps } from '../../../service/types';
import './mainpage.css'

type MyRequestPageProps = {
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>,
    setSuccsessMessage:React.Dispatch<React.SetStateAction<string>>
}

function MyRequestsPage(props:MyRequestPageProps) {

    const [myRequests, setMyrequests] = useState<RequestProps[] | []>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isShow, setIsShow] = useState(false)
    
    const user = JSON.parse(localStorage.getItem('user') || '{}')


    function handleDelete(id:number){
        removeRequest(user.id, id).then( (response:any) =>{
            props.setSuccsessMessage("Заявка удалена")
            setMyrequests( myRequests.filter( myRequest => myRequest.id !== id))
         }).catch( error => console.log(error))
        
    }

    function handleComplete(id:number){
        completeRequest(user.id, id).then( (response:any) =>{
            props.setSuccsessMessage("Заявка завершена")
            setMyrequests( myRequests.filter( myRequest => myRequest.id !== id))
         }).catch( error => console.log(error))
        
    }
    
    useEffect(()=>{
        setIsLoading(true)
        getRequests().then(
            (response:any) => {
                let requests = response.data.filter( (item:any) => item.workerId === user.id)
                setMyrequests(requests)
                setIsLoading(false)
            }
        )

    },[])

    
    function onShow(){
        setIsShow(!isShow)   
    }

    function requestFilter(requests:RequestProps[]) {
        if(isShow){
            return requests
        }else{
            return requests.filter(item => item.status === 'in_work')
        }
    }
    return (
        <div className='main-page'>
            <Title2 text='Мои заявки' />
            <Switch 
                text='Показать все заявки'
                initValue={isShow}
                onToggle={onShow}
            />

            <div className='main-page__requests'>
                {isLoading?
                <Spinner isVisible={isLoading}/>
                :
                requestFilter(myRequests).map( myRequest => {
                    return <RequestCard key={myRequest.id}
                        task={myRequest.request_task}
                        email={myRequest.email}
                        room={myRequest.room}
                        inerval={`${myRequest.start_time_to_arrive} - ${myRequest.end_time_to_arrive}`}
                        sender_FIO={myRequest.sender_FIO}
                        onClickButton={handleComplete}
                        onClickIconButton={handleDelete}   
                        id={myRequest.id}   
                        status={myRequest.status}
                    />
                })

            }
            </div>
        </div>
    );
}

export default MyRequestsPage;