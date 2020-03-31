import * as actions from './../constants/actions';
import {VIDEO_SRC} from "../constants/constants";

export const fetchVideo = () => {
    return (dispatch) => {
        return setTimeout(()=> {
            dispatch({
                type: actions.FETCH_VIDEO,
                payload : VIDEO_SRC
            });
        }, 1000)
    }
};

