import React from 'react';
import './Button.css';

const Numbers = props => {
    return (
        <div className = 'numbers-button'>
            {props.numbers.name}
        </div>
    )
}

export default Numbers;