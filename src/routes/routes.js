import Constants from '../app-constants';


import Playlists from '../components/playlists';
import Releases from '../components/releases';
import Settings from '../components/settings';

var Routes = {
    newReleases: {
        title: Constants.NEW_RELEASES,
        component: Releases
    },
    playlists: {
        title: Constants.PLAYLISTS,
        component: Playlists
    },
    settings: {
        title: Constants.SETTINGS,
        component: Settings
    }

};


module.exports = Routes;