'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Playlists from '../components/playlists';


class PlaylistsPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Playlists/>
        );
    }

}



export default PlaylistsPage;