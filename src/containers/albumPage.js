'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {connect} from 'react-redux';
import Album from '../components/album';
import {fetchAlbum} from '../actions';


class AlbumPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchAlbum(this.props.id));
    }

    render() {
        return (
            <Album {...this.props}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    }
});

function mapStateToProps(state) {
    return {
        name: state.album.name,
        image: state.album.image,
        tracks: state.album.tracks,
        artist:state.album.artist
    };
}

export default connect(mapStateToProps)(AlbumPage);