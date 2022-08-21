import React, { useState } from 'react';
import Title3 from '../Title/Title3';

type ProfileCardProps = {
    worker_FIO: string,
    login: string
}

function ProfileCard(props: ProfileCardProps) {



    return (
        <div className='card'>
            <Title3 text={props.worker_FIO} />
            <p className='card__subtitle upper'>{props.login}</p>
        </div>
    );
}

export default ProfileCard;