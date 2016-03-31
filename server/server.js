'use strict';

const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('./../src/config');
const request = require('request');
const app = express();

const spotifyApi = new SpotifyWebApi(config.ids);


const scopes = ['user-read-private', 'user-read-email'];

const authorizeURL = spotifyApi.createAuthorizeURL(scopes, 'state');
let currentUser;

console.log(authorizeURL);


app.use(errorHandler);

/*
 spotifyApi.getMe()
 .then((data) => {
 console.log('Some information about the authenticated user', data.body);
 }).catch((err) => {
 console.log('Something went wrong!', err);
 });
 */

app.get('/', function (req, res) {
    res.send('Hey there! Thanks for visting the site!');
});

app.get('/test', function (req, res) {
    res.send({test: 'test'});
});

app.get('/callback', function (req, res, next) {
    console.log('callback');

    console.log(req.query.code);

    /*spotifyApi.authorizationCodeGrant(req.query.code)
        .then((data) => {

            /!* Ok. We've got the access token!
             Save the access token for this user somewhere so that you can use it again.
             Cookie? Local storage?
             *!/
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);

            /!* Redirecting back to the main page! :-) *!/
            res.redirect('/');

        })
        .catch((err) => {
            next(err);
        });*/

});


app.get('/login', function (req, res) {
    // your application requests authorization
    res.redirect(authorizeURL);
});


app.get('/new-releases', function (req, res, next) {
    spotifyApi.getNewReleases({limit: 10, offset: 0, country: 'GB'})
        .then((data) => {
            res.send(data.body);
        })
        .catch((err) => {
            next(err);
        });
});


app.get('/album/:id', function (req, res, next) {
    spotifyApi.getAlbum(req.params.id)
        .then((data) => {
            res.send(data.body);
        })
        .catch((err) => {
            next(err);
        });
});

app.get('/album/:id/tracks', function (req, res, next) {
    spotifyApi.getAlbumTracks(req.params.id)
        .then((data) => {
            res.send(data.body);
        })
        .catch((err) => {
            next(err);
        });
});

app.get('/playlists', function (req, res, next) {
    console.log(currentUser);
    spotifyApi.getUserPlaylists(currentUser)
        .then((data) => {
            res.send(data.body);
        })
        .catch((err) => {
            next(err);
        });
});


app.get('/user/:id', function (req, res, next) {
    console.log(currentUser);
    spotifyApi.getUser(req.params.id)
        .then((data) => {
            res.send(data.body);
        })
        .catch((err) => {
            next(err);
        });
});

app.get('/users/:userId/playlists/:playlistId/tracks', function (req, res, next) {

    console.log('user playlists');
    spotifyApi.getPlaylistTracks(req.params.userId, req.params.playlistId)
        .then((data) => {
            res.send(data.body);
        })
        .catch((err) => {
            next(err);
        });
});



app.get('/me', function (req, res, next) {
    spotifyApi.getMe()
        .then((data) => {
            currentUser = data.body.id;
            res.send(data.body);
        })
        .catch((err) => {
            next(err);
        });
});


function errorHandler(err, req, res, next) {
    res.status(err.statusCode);
    res.render('error', {error: err});
}


app.listen(process.env.PORT || 8889);
