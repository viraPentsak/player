import React from 'react';
import './Button.css';

const Button = (props) => {
    const {
        children,
        disabled,
        type = 'button',
        clicked
    } = props;
    return (
        <button type={type} className='button' onClick={clicked} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;