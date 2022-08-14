import React, { useEffect, useState } from 'react';
import { getRequests, WorkerInfoProps } from '../../../apiFunctions/requestFuntcions';
import Card from '../../../components/desktop/Card/Card';
import Header from '../../../components/desktop/Header/Header';
import Notification from '../../../components/desktop/Notification/Notification';
import RequestCard from '../../../components/desktop/RequestCard/RequestCard';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Title2 from '../../../components/desktop/Title/Title2';

type MainPageProps = {
    worker:WorkerInfoProps
}

function MainPage(props:MainPageProps) {

    useEffect(()=>{
        getRequests()
    },[])


    return (
        <section className="page">
            <div className="page__container">
                <Card>
                    <Title2 text='MainPage'/>
                    <p>
                        {props.worker.worker_FIO}
                    </p>
                    <RequestCard/>
                </Card>
            </div>
        </section>
    );
}

export default MainPage;