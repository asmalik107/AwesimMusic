'use strict';
import React, {StyleSheet} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';

import Constants from './../app-constants';
import TabIcon from '../components/tabIcon';


import Routes from '../routes/routes';

const album = Routes.album;
const login = Routes.login;
const releases = Routes.releases;
const playlists = Routes.playlists;
const search = Routes.search;
const settings = Routes.settings;

const styles = StyleSheet.create({
    navbar:{
        backgroundColor: '#121314'
    },
    navbarTitle : {
        color:'#dfe0e6'
    },
    tabbar:{
        backgroundColor: '#F5FCFF',
        height :60
    }
});

const scenes = Actions.create(
    <Scene key={Constants.ROOT} hideNavBar={true} >
        <Scene key={login.key} title={login.title} component={login.component} />
        <Scene key={Constants.TABBAR} tabs={true} default={releases.key} initial={true}
               tabBarStyle={styles.tabbar} >
            <Scene key='tab1' title={releases.title} icon={TabIcon} routeInfo={releases}
                   navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} >
                <Scene key={releases.key} component={releases.component} title={releases.title}
                       component={releases.component}/>
                <Scene key={album.key} component={album.component} title={album.title}/>
            </Scene>
            <Scene key={playlists.key} title={playlists.title} icon={TabIcon} component={playlists.component}
                   navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} routeInfo={playlists}>
            </Scene>
            <Scene key={search.key} title={search.title} icon={TabIcon} component={search.component}
                   navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} routeInfo={search}>
            </Scene>
            <Scene key={settings.key} title={settings.title} icon={TabIcon} component={settings.component}
                   navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} routeInfo={settings}>
            </Scene>
        </Scene>
    </Scene>
);




export default scenes;