import * as types from './actionTypes';

import SpotifyWebApi from 'spotify-web-api-node';

var spotifyApi = new SpotifyWebApi({
    clientId: '4eb644869f014b70b971464562b21653',
    clientSecret: '16342aaebdf44b17ba67df360fe1db2e',
    redirectUri: 'http://localhost:8889/callback'
});

spotifyApi.setAccessToken('BQC6lt8rK4UwuCTRPs6QePxhi06GtEKfUe0FXT34s5RRJLjiBb3WYco9l9Mj_M94cpPlZOndekirPdVb4EyIjY23HyvSZqTTYjs4LlGRweR8Vc8DunfZobNdXBysg7iRa_-mRaSbE6sMZ88');

/*export function fetchNewReleases() {
    return {
        type: types.FETCH_NEW_RELEASES
    };
}*/


function receivePosts(json) {
    return {
        type: types.RECEIVE_NEW_RELEASES,
        posts: json,//json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}


export function fetchPlaylists() {
   /* spotifyApi.getNewReleases({limit: 5, offset: 0, country: 'GB'})
        .then((result) => {
            dispatch(receivePosts(result));
        })
        .catch((err) => {
            console.log('error', err);
        });*/
}