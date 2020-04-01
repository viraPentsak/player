import React from 'react';
import Loading from "../UI/Loading/Loading";

const Video = (props) => {
    const {
        videoSrc,
        videoRef,
        posterSrc,
        progressed,
        timeUpdated,
        videoIsLoaded,
        fetchInProgress
    } = props;
    return (
        <div className="video__inner">
            {fetchInProgress && <Loading/>}
            <video className='video__element'
                   onProgress={progressed}
                   onTimeUpdate={timeUpdated}
                   ref={videoRef}
                   poster={posterSrc}
                   controls={videoIsLoaded}>
                <source src={videoSrc}/>
            </video>
        </div>
    );
};

export default Video;