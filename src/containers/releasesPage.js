'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { connect } from 'react-redux';
import Releases from '../components/releases';
import {fetchReleases} from '../actions';



class ReleasesPage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.dispatch(fetchReleases());
    }

    render() {
        return (
            <Releases albums={this.props.albums}/>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: 'yellow'
    }
});

function mapStateToProps(state) {

    return {
        albums: state.newReleases.albums
    };
}

export default connect(mapStateToProps)(ReleasesPage);