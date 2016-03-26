'use strict';

import React, {
    Component,
    StyleSheet,
    Image,
    ListView,
    RecyclerViewBackedScrollView,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import {msToMinutes} from '../utils/formatters';


class Tracks extends Component {
    constructor(props) {
        super(props);

        var dataSource = new ListView.DataSource(
            {rowHasChanged: (r1, r2) => r1.id !== r2.id});
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.tracks)
        };

        this.renderRow = this.renderRow.bind(this);
    }


    renderRow(rowData, sectionID, rowID) {
        console.log(rowData, this);

        return (
                <View >
                    <View style={styles.row}>
                        <View>
                            <Text>{rowData.name}</Text>
                            <Text>{msToMinutes(rowData.duration_ms)}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
        );
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.tracks)
        });
    }


    render() {
        return (
            /*  <View style={styles.container}>
             <Text>{this.props.albums}</Text>
             </View>*/

            <ListView contentContainerStyle={styles.container}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            />
        );
    }

}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        paddingTop: 60
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#F6F6F6'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    }
});

export default Tracks;