import * as actions from './../constants/actions';

const defaultState = {
    videoSrc : ''
};

export const rootReducer = (state = defaultState, action) => {
    if (action.type === actions.FETCH_VIDEO){
        return Object.assign({}, state, {videoSrc : action.payload })
    }

    return state;
};