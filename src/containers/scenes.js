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
        <Scene key={login.key} title={login.title} component={login.component} initial={true} />
        <Scene key={Constants.TABBAR} tabs={true} default={releases.key} initial={false}
               tabBarStyle={styles.tabbar} >
            <Scene key='tab1' title={releases.title} icon={TabIcon} iconName={releases.icon}
                   navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} >
                <Scene key={releases.key} component={releases.component} title={releases.title}
                       component={releases.component}/>
                <Scene key={album.key} component={album.component} title={album.title}/>
            </Scene>
            <Scene key='tab2' title={playlists.title} icon={TabIcon}
                   navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} iconName={playlists.icon}>
                <Scene key={playlists.key} component={playlists.component} title={playlists.title}
                       component={playlists.component}/>
            </Scene>
            <Scene key={search.key} title={search.title} icon={TabIcon} component={search.component}
                   navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} iconName={search.icon}>
            </Scene>
            <Scene key={settings.key} title={settings.title} icon={TabIcon} component={settings.component}
                   navigationBarStyle={styles.navbar} titleStyle={styles.navbarTitle} iconName={settings.icon}>
            </Scene>
        </Scene>
    </Scene>
);




export default scenes;