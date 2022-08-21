import axios from "axios";
import { routes } from "./api.conf";
import { WorkerInfoProps } from "./types";

export async function getWorkers(){
    const token =  localStorage.getItem('token')
    try{
        const result = await axios.get<WorkerInfoProps>(routes.workers,{
            headers: {
                'Authorization': `Bearer ${token}`
            }})
        
        return result
    }catch(e){
        console.log( getWorkers.name ,e);
        return e
    }

    
}