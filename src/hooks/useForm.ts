import { useState } from 'react';

export type handleChangeProps = React.ChangeEvent<HTMLInputElement> | 
                                React.ChangeEvent<HTMLTextAreaElement> |
                                React.ChangeEvent<HTMLSelectElement> 




export function useForm<T>(initData:T){
    const [formData,setFromData] = useState<T>(initData)

    function handleChange(e:handleChangeProps):void{
        setFromData({...formData, [e.target.name]:e.target.value})
        // console.log(`${e.target.name} : ${e.target.value}`)
    }

    return {formData,handleChange}
}