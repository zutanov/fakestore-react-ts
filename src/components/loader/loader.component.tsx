import React from 'react';
import { Sloader, SloaderImg } from './loader';
import spinner from '../../assets/icons/spinner.gif';

const Loader = () => {
    return (
        <Sloader>
            <SloaderImg src={spinner} alt='loader' />
        </Sloader>
    );
};

export default Loader;
