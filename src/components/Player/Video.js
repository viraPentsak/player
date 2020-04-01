import React from 'react';

const Video = (props) => {
    const {
        videoSrc,
        videoRef,
        posterSrc,
        progressed,
        timeUpdated
    } = props;
    return (
        <video className='video__element'
               onProgress={progressed}
               onTimeUpdate={timeUpdated}
               ref={videoRef}
               poster={posterSrc}
               controls>
            <source src={videoSrc}/>
        </video>
    );
};

export default Video;