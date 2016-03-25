'use strict';

const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('./config');
const request = require('request');
const app = express();

const spotifyApi = new SpotifyWebApi(config.ids);



const scopes = ['user-read-private', 'user-read-email'];

const authorizeURL = spotifyApi.createAuthorizeURL(scopes, 'state');

console.log(authorizeURL);


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

app.get('/callback', function (req, res) {
    console.log('callback');

    console.log(req.query.code);

    spotifyApi.authorizationCodeGrant(req.query.code)
        .then((data) => {

            /* Ok. We've got the access token!
             Save the access token for this user somewhere so that you can use it again.
             Cookie? Local storage?
             */
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);

            /* Redirecting back to the main page! :-) */
            res.redirect('/');

        })
        .catch((err) => {
            res.status(err.code);
            res.send(err.message);

        });

});


app.get('/login', function (req, res) {

    // your application requests authorization
    res.redirect(authorizeURL);
});


app.get('/new-releases', function (req, res) {
    spotifyApi.getNewReleases({limit: 10, offset: 0, country: 'GB'})
        .then((data) => {
            console.log(data.body);
            res.send(data.body);
        })
        .catch((err) => {
            console.log("Something went wrong!", err);
            res.status(err.code);
            res.send(err.message);
        });
});


app.get('/album/:id', function(req, res){
    spotifyApi.getAlbum(req.params.id)
        .then((data) => {
            console.log(data.body);
            res.send(data.body);
        })
        .catch((err) => {
            console.log("Something went wrong!", err);
            res.status(err.code);
            res.send(err.message);
        });
});

app.listen(process.env.PORT || 8889);
