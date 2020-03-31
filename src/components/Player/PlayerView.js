import React from 'react';
import Button from "../UI/Button/Button";

import './PlayerVideo.css';

const PlayerView = (props) => {
    const {
        videoSrc,
        videoRef,
        posterSrc
    } = props;
    return (
        <div className='video'>

            <div className="video__wrapper">
                <video controls className='video__element' ref={videoRef} poster={posterSrc}>
                    <source src={videoSrc}/>
                </video>
            </div>
        </div>
    );
};

export default PlayerView;