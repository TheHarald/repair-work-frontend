import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../../components/desktop/Navigation/NavigationBar';
import './mainpage.css'


type MainPageProps = {
    
}

function MainPage(props:MainPageProps) {

    return (
        <section className="page">
            <div className="page__container horizontal">
                <NavigationBar/>
                <Outlet/>
            </div>
        </section>
    );
}

export default MainPage;