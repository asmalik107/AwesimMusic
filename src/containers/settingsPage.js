'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Settings from '../components/settings';


class SettingsPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Settings />
        );
    }

}


export default SettingsPage;