import React from 'react';
import './Button.css';

const Numbers = props => {
    return (
        <div className = 'numbers-button'>
            <p>{props.numbers.name}</p>
        </div>
    )
}

export default Numbers;