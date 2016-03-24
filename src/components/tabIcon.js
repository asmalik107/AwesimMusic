'use strict';

import React, {Component, View, Text, StyleSheet} from 'react-native';
var Icon = require('react-native-vector-icons/Ionicons');

class TabIcon extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.icon} ><Icon name={this.props.routeInfo.icon} size={30} color={this.props.selected ? 'red' :'black'} /></Text>
                <Text style={[styles.title,{color: this.props.selected ? 'red' :'black'}]}>{this.props.title}</Text>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 15,
        marginBottom: 5
    },
    icon: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 5
    }
});

module.exports = TabIcon;