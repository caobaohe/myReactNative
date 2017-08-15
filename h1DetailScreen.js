import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    ListView,
    Button,
} from 'react-native';

export default class H1DetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.item}`,
    })

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>{params.item}</Text>
            </View>

        );
    }
}