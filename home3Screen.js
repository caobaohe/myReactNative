import React, {Component, PureComponent} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    TouchableHighlight,
    Image,
    Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import H1DetailScreen from './h1DetailScreen';

import MyListItem from './api/myListItem';


class HomeScreen extends PureComponent {
    static navigationOptions = {
        title: 'Home3',
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: new Map()
        }
    }

    _keyExtractor = (item, index) => item.id;


    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );


    render() {
        return (
            <TouchableHighlight activeOpacity={0.6} underlayColor={'red'} onPress={() => (
                alert('a')
            )}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export const Home3Screen = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'API',
            headerBackTitle: '返回',
            // header: null,
            headerLeft: <Button
                title="open"
                color="#9370db"
                accessibilityLabel="按钮"
            />,
            headerRight: <Button
                title="open"
                color="#9370db"
                accessibilityLabel="按钮"
            />,
            headerStyle: {
                elevation: 0,//Android去掉导航条底部阴影
                shadowOpacity: 0,//IOS去掉导航条底部阴影
                backgroundColor: '#673AB7',
            },
            headerTitleStyle: {
                alignSelf: 'center',
                color: '#ffffff'
            }
        }
    },
    HomeDetail: {
        screen: H1DetailScreen,
    }
}, {
    initialRouteName: 'Home', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerBackTitle: '返回',
        headerStyle: {
            elevation: 0,//Android去掉导航条底部阴影
            shadowOpacity: 0,//IOS去掉导航条底部阴影
        },
        headerTitleStyle: {
            alignSelf: 'center'
        },
        cardStack: {
            gesturesEnabled: true
        }
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: () => {
        console.log('导航栏切换开始');
    },  // 回调
    onTransitionEnd: () => {
        console.log('导航栏切换结束');
    }  // 回调
});