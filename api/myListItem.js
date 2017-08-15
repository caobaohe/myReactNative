/**
 * Created by Administrator on 2017/8/11.
 */
import React,{Component,PureComponent} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    Image
} from 'react-native';

export default class MyListItem extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../img/Admin_gr.png')}/>
                <Text
                    onPress={this._onPress}
                >item</Text>

            </View>
        )
    }
}