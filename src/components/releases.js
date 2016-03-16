import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';


class Releases extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Releases</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

module.exports = Releases;