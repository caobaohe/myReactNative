import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';
import {TabNavigator, StackNavigator} from "react-navigation";

import Guide from './app/guide';
import GuideDetail from './app/guideDetail';
import CompList from './app/compList';
import Api from './app/api';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain',
        padding: 0,
        margin: 0,
    }
});

class OtherPage extends React.Component {

    static navigationOptions = {
        title: '其他',//设置标题内容
    }

    constructor(props) {
        super(props);
    }

    _onPressButton() {
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TouchableHighlight activeOpacity={0.6} underlayColor={'red'} onPress={() => (
                    alert('a')
                )}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                </TouchableHighlight>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                        <Text>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity activeOpacity={0.6} focusedOpacity={0.2} onPress={() => (
                    alert('a')
                )}>
                    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                           style={{width: 40, height: 40}}/>
                </TouchableOpacity>
                <Text style={{padding: 10}}>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'Sybil'})}
                    title="点击跳转"/>
            </View>
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Guide: {
        screen: Guide,
        navigationOptions: {
            // tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./img/ic_unstar.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />)
        }
    },
    CompList: {
        screen: CompList,
        navigationOptions: {
            // tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./img/ic_favorite.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />)
        }
    },
    Api: {
        screen: Api,
        navigationOptions: {
            // tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./img/ic_my.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />)
        }
    },
    OtherPage: {
        screen: OtherPage,
        navigationOptions: {
            // tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./img/ios7-bookmarks.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />)
        }
    }
}, {
    initialRouteName: 'Api',//第一次加载时初始标签路由的routeName
    tabBarPosition: 'bottom',//标签栏的位置可以是或'top''bottom'
    swipeEnabled: true,//是否允许在标签之间进行滑动
    tabBarOptions: {
        activeTintColor: '#FFF',
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）
            backgroundColor: '#673AB7',
            height: 0,
        },
        labelStyle: {
            fontSize: 12,
            margin: 0,
            padding: 0
        },
        scrollEnabled: false,// - 是否启用可滚动选项卡
        tabStyle: {//标签的样式对象
            // width: 100,
            // backgroundColor: '#fff',
        },
        iconStyle: {//标签图标的样式对象

        },
        style: {//标签栏的样式对象
            backgroundColor: '#673AB7',
            // borderTopWidth: 1,
            // borderColor: '#673AB7',
            // opacity: 1.0,
        },
        showIcon: true,//是否显示标签的图标，android默认值为false
        showLabel: true,// 是否显示标签的标签，android默认为true
    },
});

export const Hello = StackNavigator({
    Home: {
        screen: MainScreenNavigator,
        navigationOptions: {}
    },
    GuideDetail: {
        screen: GuideDetail,
        navigationOptions: {}
    }
}, {
    initialRouteName: 'Home', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerTintColor: '#fff',
        headerStyle: {
            // elevation: 0,//Android去掉导航条底部阴影
            // shadowOpacity: 0,//IOS去掉导航条底部阴影
            backgroundColor: '#673AB7',
        },
        headerTitleStyle: {
            // alignSelf: 'center',
            // color: '#ffffff'
        },
        //headerBackTitle: null,//Title string used by the back button on iOS or null to disable label. Defaults to scene title
        // headerBackTitleStyle: {}
        // headerTruncatedBackTitle: 'kkk'//Title string used by the back button when headerBackTitle doesn't fit on the screen. "Back" by default.
        // headerPressColorAndroid: 'red'//Color for material ripple (Android >= 5.0 only)
        gesturesEnabled: true//Whether you can use gestures to dismiss this screen. Defaults to true on iOS, false on Android
    },
    mode: 'card',  // 页面切换模式, card 使用标准的iOS和Android屏幕转换。这是默认值。modal使屏幕从底部滑入，这是普通的iOS模式。只适用于iOS，对Android无影响。
    headerMode: 'float', // 导航栏的显示模式, float - 渲染一个保持在顶部的标题，并且随着画面的改变而呈现动画。这是iOS上的常见模式。screen - 每个屏幕都有一个标题，标题与屏幕一起淡入淡出。这是Android上的常见模式。none - 不会显示标题。
    onTransitionStart: () => {
        console.log('导航栏切换开始');
    },  // 回调
    onTransitionEnd: () => {
        console.log('导航栏切换结束');
    }  // 回调
});