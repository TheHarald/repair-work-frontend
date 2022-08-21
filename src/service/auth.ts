import axios from "axios";
import { routes } from "./api.conf";
import { WorkerLoginProps, WorkerRegisterProps } from "./types";



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