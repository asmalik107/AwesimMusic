import * as types from './actionTypes';

import SpotifyWebApi from 'spotify-web-api-node';


export function fetchNewReleases() {
    return {
        type: types.FETCH_NEW_RELEASES
    };
}