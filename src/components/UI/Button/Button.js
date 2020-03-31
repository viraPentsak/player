import React from 'react';
import './Button.css';

const Button = (props) => {
    const {
        children,
        type = 'button',
        clicked
    } = props;
    return (
        <button type={type} className='button' onClick={clicked}>
            {children}
        </button>
    );
};

export default Button;