import React,{
    Component,
    StyleSheet,
    View,
    Text,
    TabBarIOS
} from 'react-native';


class App extends Component {
    constructor() {
        super();

        this.state = {
            selectedTab: 'releases'
        }
    }


    setSelectedTab(tabId) {
        this.setState({selectedTab: tabId});
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="New Releases"
                    selected={this.state.selectedTab === 'releases'}
                    onPress={() => this.setSelectedTab('releases')}
                >
                    <Text>Test1</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="PlayLists"
                    selected={this.state.selectedTab === 'playlists'}
                    onPress={() => this.setSelectedTab('playlists')}
                >
                    <Text>Test1</Text>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Settings"
                    selected={this.state.selectedTab === 'settings'}
                    onPress={() => this.setSelectedTab('settings')}
                >
                    <Text>Test2</Text>
                </TabBarIOS.Item>
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

module.exports = App;