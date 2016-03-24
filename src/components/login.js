'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';


class Login extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
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

export default Login;