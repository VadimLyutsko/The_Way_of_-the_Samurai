import React from 'react';
import sound from './sound.mp3';
import SuperButton from '../SuperComponents/SuperButton/SuperButton';

export const Music: React.FC = () => {

    function play() {
        new Audio(sound).play();
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <SuperButton title={'Touch me!'} callBack={play}></SuperButton>
        </div>
    );
};