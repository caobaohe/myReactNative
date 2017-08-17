import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import {Home1Screen} from './home1Screen';
import {Home2Screen} from './home2Screen';
import {Home3Screen} from './home3Screen';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home1'
        };
    }

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tabBar}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home1'}
                    title="指南"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.tabIcon} source={require("./img/ic_my.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.selectedTabIcon}
                                                     source={require("./img/ic_my.png")}/>}
                    //badgeText="9"
                    onPress={() => this.setState({selectedTab: 'home1'})}>
                    <Home1Screen/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home2'}
                    title="组件"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.tabIcon} source={require("./img/ic_favorite.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.selectedTabIcon}
                                                     source={require("./img/ic_favorite.png")}/>}
                    onPress={() => this.setState({selectedTab: 'home2'})}>
                    <Home2Screen/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home3'}
                    title="API"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.tabIcon} source={require("./img/ic_unstar.png")}/>}
                    renderSelectedIcon={() => <Image style={styles.selectedTabIcon}
                                                     source={require("./img/ic_unstar.png")}/>}
                    onPress={() => this.setState({selectedTab: 'home3'})}>
                    <Home3Screen/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        // backgroundColor: '#673AB7',
        backgroundColor: '#ffffff',
        borderWidth: 0,
        opacity: 0.9,
    },
    tabText: {
        fontSize: 13,
        // color: '#c0c0c0'
    },
    selectedTabText: {
        fontSize: 13,
        color: '#673AB7'
    },
    tabIcon: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
        // tintColor: '#c0c0c0'
    },
    selectedTabIcon: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
        tintColor: '#673AB7'
    },
    container: {
        flex: 1
    }
})