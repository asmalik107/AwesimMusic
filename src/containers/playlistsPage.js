import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Playlists from '../components/playlists';
import {fetchPlaylists} from '../actions';


class PlaylistsPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Playlists />
        );
    }

    componentDidMount() {
        dispatch(fetchPlaylists());
    }

}


export default PlaylistsPage;