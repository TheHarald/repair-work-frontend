import React from 'react';
import Card from '../../../components/desktop/Card/Card';
import Header from '../../../components/desktop/Header/Header';
import Notification from '../../../components/desktop/Notification/Notification';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Title2 from '../../../components/desktop/Title/Title2';

function MainPage() {
    return (
        <section className="page">
            <Notification type='ok' title='Заявка отправлена' text='Заявка была успешно отправлена.'/>
            <Header/>
            <div className="page__container">
                <Card>
                    <Title2 text='MainPage'/>
                    <Spinner isVisible={true}/>
                </Card>
            </div>
        </section>
    );
}

export default MainPage;