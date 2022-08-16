import React from 'react';
import NavigationButton from './NavigationButton';
import './navigationbutton.css'
import User3LineIcon from 'remixicon-react/User3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import ToolsFillIcon from 'remixicon-react/ToolsFillIcon'


function NavigationBar() {
    return (
        <nav className='navigation-bar'>
            <NavigationButton to='requests' icon={<ToolsFillIcon size={24}/>} text="Заявки" />
            <NavigationButton to='myrequests' icon={<ContactsBook2LineIcon size={24}/>} text="Мои Заявки" />
            <NavigationButton to='profile' icon={<User3LineIcon size={24}/>} text="Профиль" />
        </nav>
    );
}

export default NavigationBar;