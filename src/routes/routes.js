'use strict';

import Constants from '../app-constants';


import Playlists from '../containers/playlistsPage';
import Releases from '../containers/releasesPage';
import Search from '../components/search';
import Settings from '../containers/settingsPage';

var Routes = {
    newReleases: {
        title: Constants.NEW_RELEASES,
        component: Releases
    },
    playlists: {
        title: Constants.PLAYLISTS,
        component: Playlists
    },
    search: {
        title: Constants.SEARCH,
        component: Search
    },
    settings: {
        title: Constants.SETTINGS,
        component: Settings
    }

};

export default Routes;