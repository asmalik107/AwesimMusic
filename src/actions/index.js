'use strict';

import * as types from './actionTypes';

/*export function fetchNewReleases() {
 return {
 type: types.FETCH_NEW_RELEASES
 };
 }*/

import {normalize, arrayOf} from 'normalizr';
import {playlistSchema} from './schemas'


function receiveReleases(json) {
    return {
        type: types.RECEIVE_NEW_RELEASES,
        albums: json.albums,//json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}


export function fetchReleases() {
    return dispatch => {
        return fetch('http://localhost:8889/new-releases')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveReleases(json));
            })
            .catch(err => {
                console.log('error', err);
            });
    }
}


function receiveAlbum(json) {
    return {
        type: types.RECEIVE_ALBUM,
        album: json,//json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export function fetchAlbum(id) {
    return dispatch => {
        return fetch(`http://localhost:8889/album/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveAlbum(json));
            })
            .catch(err => {
                console.log('error', err);
            });
    }
}


function receivePlaylists(json) {
    return {
        type: types.RECEIVE_PLAYLISTS,
        playlists: json.entities.items,
        receivedAt: Date.now()
    }
}




export function fetchPlaylists() {
    return dispatch => {
        return fetch('http://localhost:8889/playlists/')
            .then(response => response.json())
            .then(json => {
                //console.log('normalized', json, normalize(json, {items: arrayOf(playlistSchema)}));
                const normalized = normalize(json, {items: arrayOf(playlistSchema)});
                console.log(json);

                dispatch(receivePlaylists(normalized));

                for (var owner in normalized.entities.owner) {
                    dispatch(fetchUser(owner));
                }

            })
            .catch(err => {
                console.log('error', err);
            });
    }
}


function receiveUsers(json) {
    return {
        type: types.RECEIVE_USERS,
        user: json,
        receivedAt: Date.now()
    }
}


export function fetchUser(userId) {
    return (dispatch, getState) => {
        return fetch(`http://localhost:8889/user/${userId}`)
            .then(response => response.json())
            .then(json => {
                //console.log('normalized', json, normalize(json, {items: arrayOf(playlistSchema)}));
                //json = normalize(json, {items: arrayOf(playlistSchema)});
                console.log(json);

                dispatch(receiveUsers(json));
            })
            .catch(err => {
                console.log('error', err);
            });
    }
}
