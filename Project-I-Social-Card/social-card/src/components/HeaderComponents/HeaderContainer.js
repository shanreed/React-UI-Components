import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent';



function HeaderContainer() {
    return (
        <div className = 'header-container'>
            <div className = 'top'>
            <ImageThumbnail/>
            <HeaderTitle/>
            </div>
            <HeaderContent/>
        </div>
    );
}

export default HeaderContainer;
