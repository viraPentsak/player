import React, {Component, createRef, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchVideo} from "../../actions";

import PlayerView from "./PlayerView";
import {POSTER_SRC} from "../../constants/constants";
import Button from "../UI/Button/Button";

import {getPercentage} from "../../utils/functions";

const mapStateToProps = state => {
    return {
        videoSrc: state.videoSrc
    }
};

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoIsLoaded: false,
            playedPercent: '0',
            bufferedPercent: '0'
        };
        this.videoRef = createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.videoRef.current && prevProps.videoSrc !== this.props.videoSrc) {
            this.setState({videoIsLoaded: true}, () => {
                this._loadVideo();
            });
        }
    }

    _loadVideo = () => {
        this.videoRef.current.load();
    };

    _getVideoSrc = () => {
        this.props.fetchVideo();
    };

    _updateState = (key, val) => {
      this.setState({
          [key] : val
      });
    };

    videoProgressHandler = () => {
        const videoElement = this.videoRef.current;
        const {
            buffered,
            duration
        } = videoElement;

        const bufferedTime = this._getBufferedTime(buffered);
        const bufferedPercentage = getPercentage(duration, bufferedTime, 1);

        this._updateState('bufferedPercent', bufferedPercentage)
    };

    _getBufferedTime = (timeRangeObj) => {
        const length = timeRangeObj.length;
        if (length < 1) return 0;
        return  timeRangeObj.end(length - 1);
    };

    videoTimeUpdateHandler = () => {
        const videoElement = this.videoRef.current;
        const {
            currentTime,
            duration
        } = videoElement;

        const platedPercentage = getPercentage(duration, currentTime, 1);
        this._updateState('playedPercent', platedPercentage);
    };


    render() {
        return (
            <Fragment>
                <PlayerView videoSrc={this.props.videoSrc}
                            playedPercent={this.state.playedPercent}
                            bufferedPercent={this.state.bufferedPercent}
                            progressed={this.videoProgressHandler}
                            timeUpdated={this.videoTimeUpdateHandler}
                            videoRef={this.videoRef}
                            videoIsLoaded={this.state.videoIsLoaded}
                            posterSrc={POSTER_SRC}/>
                <Button clicked={this._getVideoSrc}>Get video URL</Button>
            </Fragment>

        );
    }
}

export default connect(mapStateToProps, {fetchVideo})(Player);