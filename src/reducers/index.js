'use strict';

import * as types from '../actions/actionTypes';

import {combineReducers} from 'redux';


function newReleases(state = {
    albums: []
}, action) {
    switch (action.type) {
        case types.RECEIVE_NEW_RELEASES:
            return Object.assign({}, state, {albums: action.albums.items});
        default:
            return state;
    }
}

function album(state = {
    artist: {},
    tracks: []
}, action) {
    switch (action.type) {
        case types.RECEIVE_ALBUM:
            return Object.assign({}, state, {
                id: action.album.id,
                name: action.album.name,
                image: action.album.images[1].url,
                tracks: action.album.tracks.items,
                artist: action.album.artists[0]
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    newReleases,
    album
});

export default rootReducer;
