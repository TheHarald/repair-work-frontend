import axios from "axios";
import { routes } from "./api.conf";
import { RequestData, RequestProps } from "./types";


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
                setErrorMessage(JSON.stringify(error.response.data.message))
            });
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