'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { connect } from 'react-redux';
import {fetchPlaylists} from '../actions';
import Playlists from '../components/playlists';


class PlaylistsPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchPlaylists());
    }

    render() {
        return (
            <Playlists playlists={this.props.playlists} />
        );
    }

}


function mapStateToProps(state) {

    return {
        playlists: state.playlists.playlists
    };
}

export default connect(mapStateToProps)(PlaylistsPage);