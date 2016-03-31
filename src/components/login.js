'use strict';

import React, {
    Component,
    Image,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Text,
    View
} from 'react-native';

import qs from 'shitty-qs';
import store from 'react-native-simple-store';
import {Actions} from 'react-native-router-flux';
import Constants from '../app-constants';
import Config from '../config';

class Login extends Component {
    constructor() {
        super();
        this._onPressButton = this._onPressButton.bind(this);
    }
    

    auth() {
        Linking.openURL([
            'https://accounts.spotify.com/authorize?',
            'client_id=' + Config.ids.clientId,
            '&response_type=token',
            '&redirect_uri=' + Config.ids.redirectUri,
            '&scope=user-read-private%20user-read-email',
            '&state=state'

        ].join(''));

        function handleUrl(event) {
            console.log(event.url);
            const url = event.url;

            var [,queryString]  = event.url.match(/\#(.*)/);
            const query = qs(queryString);

            Linking.removeEventListener('url', handleUrl);

            store.save('AwesimMusic', {
                accessToken: query.access_token
            });

            console.log(query.access_token);

            Actions[Constants.TABBAR]();
        }

        Linking.addEventListener('url', handleUrl);
    }

    _onPressButton() {
        this.auth();
    }

    render() {
        return (
            <Image source={require('../../images/cover.jpg')} style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../images/logo.png')}
                           style={styles.logo}/>
                </View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Image source={require('../../images/Spotify_Icon_RGB_White.png')}
                                   style={styles.spotifylogo}/>
                            <Text style={styles.label}>
                                LOGIN WITH SPOTIFY
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null

    },
    logoContainer: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        flex: 0.25
    },
    button: {
        height: 50,
        //width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ED760',
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row'
    },
    label: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    spotifylogo: {
        height: 20,
        width: 20,
        marginRight: 10
    },
    logo: {
        width: 200,
        height: 300
    }
});

export default Login;