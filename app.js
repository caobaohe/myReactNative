import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    DrawerLayoutAndroid
} from 'react-native';
import Hello from './hello';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 22, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid drawerBackgroundColor="#673AB7"
                                 statusBarBackgroundColor="#673AB7"
                                 drawerWidth={250}
                                 drawerPosition={DrawerLayoutAndroid.positions.Left}
                                 renderNavigationView={() => navigationView}>
                <Hello/>
            </DrawerLayoutAndroid>
        );
    }
}
