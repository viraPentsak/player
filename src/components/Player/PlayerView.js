import React from 'react';

import Video from "./Video";
import Timeline from "./Timeline/Timeline";

import './PlayerVideo.css';

const PlayerView = (props) => {
    const {
        playedPercent,
        bufferedPercent,
        videoIsLoaded,
    } = props;
    return (
        <div className='video'>
            <div className="video__wrapper">
                <Video {...props} />
                <div className="video__timeline">
                    <Timeline
                        videoIsLoaded={videoIsLoaded}
                        buffered={bufferedPercent}
                        played={playedPercent}/>
                </div>
            </div>
        </div>
    );
};

export default PlayerView;