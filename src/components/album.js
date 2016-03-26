'use strict';

import React, {
    Component,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

import Tracks from './tracks';


class Album extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={{uri:this.props.image}}/>
                <Text>{this.props.artist.name}</Text>
                <Text>{this.props.name}</Text>
                <Tracks tracks={this.props.tracks} />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        justifyContent: 'center',
        //flexDirection: 'row',
/*        flexWrap: 'wrap'*/
    },
    img: {
        height: 300,
        width: 300
    }
});

export default Album;