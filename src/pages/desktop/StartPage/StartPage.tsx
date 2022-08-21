import React from 'react';
import RepairMan from '../../../components/svg/RepairMan';
import "./startpage.css"
import FileList3LineIcon from 'remixicon-react/FileList3LineIcon'
import { Link } from 'react-router-dom';

function StartPage() {
    return (
        <div className='page'>
            <div className='page__container'>
                <RepairMan size={400}/>
                <p className='start-page__text'>
                    Если у вас что-то сломалось, то оставьте заявку и ремонтники починят это.
                </p>

                <Link to={"/request"} className='request-button'>
                    <p className='request-button__text'>Заполнить заявку</p>
                    <FileList3LineIcon className='request-button__icon' size={18}/>
                </Link>
            </div>

        </div>
    );
}

export default StartPage;