import React from 'react';
import {
    AppRegistry
} from 'react-native';
import App from './app';

class MyReactNative extends React.Component {

    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('myReactNative', () => MyReactNative);