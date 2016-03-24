'use strict';

import * as types from '../actions/actionTypes';

import {combineReducers} from 'redux';


function newReleases(state = {
    albums:[]
}, action) {
    switch (action.type){
        case types.RECEIVE_NEW_RELEASES:
            return Object.assign({}, state, {albums: action.albums.items});
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    newReleases
});

export default rootReducer;
