import { routes } from './api.conf';
import axios from "axios";
import { RequestData } from "../hooks/useForm";

export function postRequest(requestData:RequestData){
    axios.post(
        routes.requests,
        requestData)
        .then( response => console.log(response.data)) 
        .catch(error => console.log(error));
}