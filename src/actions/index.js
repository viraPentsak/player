import * as actions from './../constants/actions';
import {VIDEO_SRC} from "../constants/constants";
import {getMockApiResponseTime, maybeThrowApiError} from "../utils/functions";

export const fetchVideo = () => {
    const apiTime = getMockApiResponseTime();
    const throwError = maybeThrowApiError();

    return (dispatch) => {
        dispatch({
           type: actions.FETCHING_IN_PROGRESS
        });

        const promise = new Promise((resolve, reject) => {
           setTimeout(()=> {
               if (throwError){
                   reject('API Error. Try again later');
               }
               resolve()
           }, apiTime);
        });

        promise.then(
            ()=>{
                dispatch({
                    type: actions.FETCH_VIDEO,
                    payload : VIDEO_SRC
                });
            },
            (error)=>{
                dispatch({
                    type: actions.FETCH_ERROR,
                    payload: error
                });
            }
        );
    }
};

