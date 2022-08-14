import { routes } from './api.conf';
import axios from "axios";

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

export type WorkerInfoProps = {
    id:number,
    worker_FIO:string,
    login:string,
    createdAt:string,
    requestId:string,
    updatedAt:string
}

export function postRequest(requestData:RequestData){
    axios.post(
        routes.requests,
        requestData)
            .then(response => console.log(response.data)) 
            .catch(error => console.log(error));
}

export async function login(loginData:WorkerLoginProps){
    await axios.post(routes.login,loginData)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('token',response.data)
        })
        .catch(error => {
            console.log(error)
        })

    console.log('end');
    

}

export async function getWorkerInfoByToken(){
    const token =  localStorage.getItem('token')
    return await axios.get(routes.workerInfo, {
        headers: {
            'Authorization': `Bearier ${token}`
        }
    }).then( response => {
        // console.log('cl response in f ->',response)
        return response.data
    })
        .catch( error => console.log(error))
}