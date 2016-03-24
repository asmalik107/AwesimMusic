'use strict';

import React, {
    Component,
    StyleSheet,
    Image,
    ListView,
    Text,
    View
} from 'react-native';


class Releases extends Component {
    constructor(props) {
        super(props);

        var dataSource = new ListView.DataSource(
            {rowHasChanged: (r1, r2) => r1.id !== r2.id});
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.albums)
        };

        this.renderRow.bind(this);
    }

    renderRow(rowData, sectionID, rowID) {
        console.log(rowData);

        return (

            <View style={styles.row}>
                <Image
                    style={styles.logo}
                    source={{uri: rowData.images[1].url}}
                />
                <Text>{rowData.name}</Text>
            </View>

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

            <ListView style={styles.container}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
            />
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    }
});

export default Releases;