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

function playlists(state = {
    playlists: []
}, action) {
    switch (action.type) {
        case types.RECEIVE_PLAYLISTS:
            return Object.assign({}, state, {
                playlists: action.playlists
            });
        default:
            return state;
    }
}


function users(state = {
    users: {}
}, action) {
    switch (action.type) {
        case types.RECEIVE_USERS:
            return Object.assign({}, state, {
                users: action.users
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    newReleases,
    album,
    playlists,
    users
});

export default rootReducer;
