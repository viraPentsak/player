import * as actions from './../constants/actions';

const defaultState = {
    videoSrc : '',
    fetchInProgress : false,
    error: ''
};

export const rootReducer = (state = defaultState, action) => {
    if (action.type === actions.FETCH_VIDEO){
        return Object.assign({}, state, {
            videoSrc : action.payload,
            fetchInProgress : false
        })
    }

    if (action.type === actions.FETCH_ERROR){
        return Object.assign({}, state, { error : action.payload, fetchInProgress : false })
    }

    if (action.type === actions.FETCHING_IN_PROGRESS){
        return Object.assign({}, state, {fetchInProgress : true, error : '' })
    }


    return state;
};