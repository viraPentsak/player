import React from 'react';
import {connect} from 'react-redux';

import './ErrorBoundary.css';

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

const ErrorBoundary = (props) => {
    const {children} = props;

    return (
        <div className='error'>
            {props.error && <h2 className='error__text'>{props.error}</h2>}
            {children}
        </div>
    );
};


export default connect(mapStateToProps)(ErrorBoundary);