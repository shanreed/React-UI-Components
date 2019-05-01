import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
    <div className = 'footer'>  
        <div className = 'talk-bubble'><i class='far fa-comment'></i></div>
        <div className = 'circle'><i class="fa fa-envelope-o"></i></div>
        <div className = 'heart'><i class="fa fa-heart-o">4</i></div>
        <div className = 'envelop'><i class="fa fa-envelope-o"></i></div>
    </div>
    );
}

export default Footer;