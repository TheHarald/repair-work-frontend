import { routes } from './api.conf';
import axios from "axios";
import { RequestProps } from '../service/types';

export type RequestData = {
    room:string,
    request_task:string,
    sender_FIO:string,
    email:string,
    status:string,
    start_time_to_arrive:string,
    end_time_to_arrive:string
}

export type WorkerLoginProps = {
    password:string,
    login:string
}
export type WorkerRegisterProps = {
    password:string,
    login:string,
    worker_FIO:string
}


export type WorkerInfoProps = {
    id:number,
    worker_FIO:string,
    login:string,
    createdAt:string,
    requestId:string,
    updatedAt:string
}

export async function getRequests(){
    const token =  localStorage.getItem('token')
    try{
        const result = await axios.get<RequestProps>(routes.requests,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        
        return result
    }catch(e){
        console.log( getRequests.name ,e);
        return e
    }

    
}

export async function postRequest(
    requestData:RequestData,
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>,
    setSuccsessMessage:React.Dispatch<React.SetStateAction<string>>
    ){
     axios.post(
        routes.requests,
        requestData)
            .then(response => {
                console.log(response.data)

                setSuccsessMessage('Заявка создана')
            }) 
            .catch(error => {
                console.log(error)
                setErrorMessage(error.response.data.message)
            });
}


export async function register(
    registerData:WorkerRegisterProps,
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>,
    setSuccsessMessage:React.Dispatch<React.SetStateAction<string>>
    ){
    
    await axios.post(routes.registration, registerData)
        .then( response => {
            // console.log('register resp->', response)
            setSuccsessMessage(
                `Пользователь ${response.data.login} зрегистрирован.`
            )

        }).catch( error =>{
            console.log(error.response.data.message);
            setErrorMessage(error.response.data.message)
        })
    
}

export async function login(
    loginData:WorkerLoginProps, 
    setErrorMessage:React.Dispatch<React.SetStateAction<string>>){

    await axios.post(routes.login,loginData)
        .then(response => {
            console.log('login then->',response.data)
            localStorage.setItem('token',response.data)
        })
        .catch(error => {
            console.log('login catch->',error)
            setErrorMessage(error.response.data.message)
        })

    console.log('end');
    

}

export async function getWorkerInfoByToken(){
    const token =  localStorage.getItem('token')
    return await axios.get(routes.workerInfo, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then( response => {
        return response.data
    })
        .catch( error => console.log('getWorkerInfoByToken-> ',error))
}


export async function takeRequest(workerId:number, requestId:number){
    const token =  localStorage.getItem('token')
    try {
        const result = await axios.patch(`${routes.requests}/${requestId}`,{
            workerId: workerId,
            status: "in_work",
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return result
    } catch (error) {
        return error
    }
}
export async function removeRequest(workerId:number, requestId:number){
    const token =  localStorage.getItem('token')
    try {
        const result = await axios.patch(`${routes.requests}/${requestId}`,{
            workerId: null,
            status: "to_do",
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return result
    } catch (error) {
        return error
    }
}
export async function completeRequest(workerId:number, requestId:number){
    const token =  localStorage.getItem('token')
    try {
        const result = await axios.patch(`${routes.requests}/${requestId}`,{
            status: "completed",
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return result
    } catch (error) {
        return error
    }
}