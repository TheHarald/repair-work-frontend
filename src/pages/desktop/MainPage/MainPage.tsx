import React, { useState } from 'react';
import { WorkerInfoProps } from '../../../apiFunctions/requestFuntcions';
import Card from '../../../components/desktop/Card/Card';
import Header from '../../../components/desktop/Header/Header';
import Notification from '../../../components/desktop/Notification/Notification';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Title2 from '../../../components/desktop/Title/Title2';

type MainPageProps = {
    worker:WorkerInfoProps
}

function MainPage(props:MainPageProps) {


    return (
        <section className="page">
            {/* <Notification type='ok' title='Заявка отправлена' text='Заявка была успешно отправлена.'/> */}
            {/* <Header/> */}
            <div className="page__container">
                <Card>
                    <Title2 text='MainPage'/>
                    <p>
                        {props.worker.worker_FIO}
                    </p>
                </Card>
            </div>
        </section>
    );
}

export default MainPage;