import React from 'react';
import logo from '../../assets/logo.png';
import './index.scss';

export const Header = () => {
    return <div className="header">
        <div className="containerLogo">
            <a href={`/`}>
                <img src={logo} height="70px" data-testid="logo" alt="description"/> 
            </a>
        </div>
    </div>
}