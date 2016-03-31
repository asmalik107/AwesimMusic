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

import {Actions} from 'react-native-router-flux';
import Constants from '../app-constants';

class Playlists extends Component {
    constructor(props) {
        super(props);

        var dataSource = new ListView.DataSource(
            {rowHasChanged: (r1, r2) => r1.id !== r2.id});

        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.playlists)
        };

        this.renderRow = this.renderRow.bind(this);
        this.rowPressed = this.rowPressed.bind(this);
    }

    rowPressed(rowData) {
        //Actions[Constants.ALBUM]({id: rowData});
    }

    renderRow(rowData, sectionID, rowID) {

        let url = null;
        if(rowData.images) {
           url =  rowData.images[0].url;
        }

        return (
            <TouchableHighlight onPress={() => this.rowPressed(rowData.id)}
                                underlayColor='#dddddd'>
                <View >
                    <View style={styles.row}>
                        <Image
                            style={{width: 100, height: 100}}
                            source={{uri: url}}
                        />
                        <View>
                            <Text>{rowData.name}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        );
    }



    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.playlists)
        });
    }


    render() {
        return (
            <ListView contentContainerStyle={styles.container}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                //renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            />
        );
    }
    

}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        paddingTop: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        /*        flexDirection: 'row',
         padding: 10,
         backgroundColor: '#F6F6F6'*/
        backgroundColor: '#CCC',
        margin: 10,
        width: 150,
        height: 150
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    }
});

export default Playlists;