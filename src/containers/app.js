'use strict';

import React, {
    Component
} from 'react-native';

import {Router} from 'react-native-router-flux';
import scenes from './scenes';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router scenes={scenes}/>
        );
    }
}

export default App;