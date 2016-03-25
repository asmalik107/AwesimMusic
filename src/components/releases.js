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


class Releases extends Component {
    constructor(props) {
        super(props);

        var dataSource = new ListView.DataSource(
            {rowHasChanged: (r1, r2) => r1.id !== r2.id});
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.albums)
        };

        this.renderRow = this.renderRow.bind(this);
        this.rowPressed = this.rowPressed.bind(this);
    }

    rowPressed(rowData) {
        Actions[Constants.ALBUM]({data: rowData});
    }

    renderRow(rowData, sectionID, rowID) {
        console.log(rowData, this);

        return (
            <TouchableHighlight onPress={() => this.rowPressed(rowData)}
                                underlayColor='#dddddd'>
                <View >
                    <View style={styles.row}>
                        <Image
                            style={{width: 100, height: 100}}
                            source={{uri: rowData.images[1].url}}
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
            dataSource: this.state.dataSource.cloneWithRows(nextProps.albums)
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
    },
});

export default Releases;