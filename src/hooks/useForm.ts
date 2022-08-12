import { useState } from 'react';
export type RequestData = {
    room:string,
    request_task:string,
    sender_FIO:string,
    email:string,
    status:string,
    start_time_to_arrive:string,
    end_time_to_arrive:string
}

export type handleChangeProps = React.ChangeEvent<HTMLInputElement> | 
                                React.ChangeEvent<HTMLTextAreaElement> |
                                React.ChangeEvent<HTMLSelectElement> 




export function useForm(initData:RequestData){
    const [requestData,setRequestData] = useState<RequestData>(initData)

    function handleChange(
        e:handleChangeProps):void{
        setRequestData({...requestData, [e.target.name]:e.target.value})
        // console.log(`${e.target.name} : ${e.target.value}`)
    }

    return {requestData,handleChange}
}