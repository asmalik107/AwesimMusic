'use strict';

import Constants from '../app-constants';


import Album from '../containers/albumPage';
import Login from '../components/login';
import Playlists from '../containers/playlistsPage';
import Releases from '../containers/releasesPage';
import Search from '../components/search';
import Settings from '../containers/settingsPage';

var Routes = {
    album: {
        key: Constants.ALBUM,
        title: Constants.ALBUM,
        component: Album
    },
    login: {
        key: Constants.LOGIN,
        title: Constants.LOGIN,
        component: Login
    },
    releases: {
        key: Constants.NEW_RELEASES,
        title: Constants.NEW_RELEASES,
        component: Releases,
        icon: 'ios-home-outline'
    },
    playlists: {
        key: Constants.PLAYLISTS,
        title: Constants.PLAYLISTS,
        component: Playlists,
        icon:'ios-list-outline'
    },
    search: {
        key: Constants.SEARCH,
        title: Constants.SEARCH,
        component: Search,
        icon:'ios-search'
    },
    settings: {
        key: Constants.SETTINGS,
        title: Constants.SETTINGS,
        component: Settings,
        icon: 'ios-gear-outline'
    }

};

export default Routes;