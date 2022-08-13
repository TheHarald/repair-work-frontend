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

export function postRequest(requestData:RequestData){
    axios.post(
        routes.requests,
        requestData)
            .then(response => console.log(response.data)) 
            .catch(error => console.log(error));
}

export function login(loginData:WorkerLoginProps){
    axios.post(routes.login,loginData)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}