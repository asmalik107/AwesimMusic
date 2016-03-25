'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { connect } from 'react-redux';
import Releases from '../components/releases';
//import {fetchAlbum} from '../actions';



class AlbumPage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        //this.props.dispatch(fetchReleases());
        console.log('Albums', this.props);
    }

    render() {
        return (
            //<Releases albums={this.props.albums}/>
            <View>
                <Text>Album</Text>
            </View>
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
        //albums: state.newReleases.albums
    };
}

export default connect(mapStateToProps)(AlbumPage);