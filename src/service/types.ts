export type RequestProps = {
    createdAt: string
    email: string
    end_time_to_arrive: string
    id: number
    request_task: string
    room: string
    sender_FIO: string
    start_time_to_arrive: string
    status: RequestStatuses
    updatedAt: string
}

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

export type RequestStatuses = 'in_work' | 'to_do' | 'completed'
