import React,{
    Component,
    StyleSheet,
    View,
    Text,
    TabBarIOS,
    Navigator
} from 'react-native';

import Icon  from '../../node_modules/react-native-vector-icons/Ionicons';
import Constants from './../app-constants';
import Routes from './../routes/routes.js';

class App extends Component {
    constructor() {
        super();

        this.state = {
            selectedTab: Constants.RELEASES
        };

        this.renderScene = this.renderScene.bind(this);
    }


    setSelectedTab(tabId) {
        this.setState({selectedTab: tabId});
    }


    renderScene(route, navigator) {
        var Component = route.component;
        return <Component route={route} navigator={navigator}/>;
    }

    renderView() {
        return (
            <Navigator
                initialRoute={Routes.newReleases}
            renderScene={this.renderScene}
            configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
            />
        );
    }

    render() {
        return (
            <TabBarIOS>
                <Icon.TabBarItemIOS
                    title={Constants.NEW_RELEASES}
                    iconName='ios-home-outline'
                    selected={this.state.selectedTab === Constants.RELEASES}
                    onPress={() => this.setSelectedTab(Constants.RELEASES)}
                >
                    {this.renderView()}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title={Constants.PLAYLISTS}
                    iconName='ios-list-outline'
                    selected={this.state.selectedTab === Constants.PLAYLISTS}
                    onPress={() => this.setSelectedTab(Constants.PLAYLISTS)}
                >
                    <Text>Test1</Text>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title={Constants.SEARCH}
                    iconName='ios-search'
                    selected={this.state.selectedTab === Constants.SEARCH}
                    onPress={() => this.setSelectedTab(Constants.SEARCH)}
                >
                    <Text>Search</Text>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title={Constants.SETTINGS}
                    iconName='ios-gear-outline'
                    selected={this.state.selectedTab === Constants.SETTINGS}
                    onPress={() => this.setSelectedTab(Constants.SETTINGS)}
                >
                    <Text>Test2</Text>
                </Icon.TabBarItemIOS>
            </TabBarIOS>
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

export default App;