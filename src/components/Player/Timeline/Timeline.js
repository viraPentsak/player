import React from 'react';
import './Timeline.css';

const Timeline = (props) => {
    const {
        videoIsLoaded,
        buffered,
        played
    } = props;

    let cssClass = 'timeline';
    if (videoIsLoaded){
        cssClass += ' is-loaded';
    }
    const playedStyle = { width: played + '%'};
    const bufferedStyle = { width: buffered + '%'};

    return (
        <div className={cssClass}>
            <div className="timeline__buffered" style={bufferedStyle}/>
            <div className="timeline__played" style={playedStyle}/>
        </div>
    );
};

export default Timeline;