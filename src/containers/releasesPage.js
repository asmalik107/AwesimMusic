import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Releases from '../components/releases';


class ReleasesPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Releases />
        );
    }

}


export default ReleasesPage;