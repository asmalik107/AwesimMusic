'use strict';

import * as types from './actionTypes';

/*export function fetchNewReleases() {
    return {
        type: types.FETCH_NEW_RELEASES
    };
}*/


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
                console.log(json);
                dispatch(receiveReleases(json));
            })
            .catch(err => {
                console.log('error', err);
            });
    }
}


export function fetchAlbum(id){
    return dispatch => {
        return fetch('http://localhost:8889/album/' + id)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(receiveAlbum(json));
            })
            .catch(err => {
                console.log('error', err);
            });
    }
}
