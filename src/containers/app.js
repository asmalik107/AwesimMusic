'use strict';

import React, {
    Component,
    Text,
    View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Constants from '../app-constants';
import store from 'react-native-simple-store';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.get('AwesimMusic')
            .then((data) => {
                if(data) {
                    console.log('didMount', data.accessToken);
                    Actions[Constants.TABBAR]();
                } else {
                    Actions[Constants.LOGIN]();
                }
            });
    }

    render() {
        return (
            <View>
                <Text>
                    App Startup
                </Text>
            </View>
        );
    }
}

export default App;