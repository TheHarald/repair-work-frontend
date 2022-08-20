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


export type RequestStatuses = 'in_work' | 'to_do' | 'completed'