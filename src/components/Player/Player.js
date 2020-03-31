import React, {Component, createRef, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchVideo} from "../../actions";

import PlayerView from "./PlayerView";
import {VIDEO_SRC, POSTER_SRC} from "../../constants/constants";
import Button from "../UI/Button/Button";

const mapStateToProps = state => {
    return {
        videoSrc: state.videoSrc
    }
};

class Player extends Component {
    constructor(props) {
        super(props);
        this.videoRef = createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.videoRef.current && prevProps.videoSrc !== this.props.videoSrc){
            this.videoRef.current.load();
        }
    }

    _getVideoSrc = () => {
        this.props.fetchVideo();
    };

    render() {
        return (
            <Fragment>
                <PlayerView videoSrc={this.props.videoSrc}
                            videoRef={this.videoRef}
                            posterSrc={POSTER_SRC}/>
                <Button clicked={this._getVideoSrc}>Get video URL</Button>
            </Fragment>

        );
    }
}

export default connect(mapStateToProps, {fetchVideo})(Player);