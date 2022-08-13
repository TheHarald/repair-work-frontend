import React from 'react';
import Card from '../../../components/desktop/Card/Card';
import Header from '../../../components/desktop/Header/Header';
import Spinner from '../../../components/desktop/Spinner/Spinner';
import Title2 from '../../../components/desktop/Title2/Title2';

function MainPage() {
    return (
        <section className="page">
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