import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    ListView,
    Button,
    TouchableHighlight
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import H1DetailScreen from './h1DetailScreen';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home1',
    }

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8',
                'row 11', 'row 12', 'row 13', 'row 14', 'row 15', 'row 16', 'row 17', 'row 18']),
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (
                        <TouchableHighlight activeOpacity={0.8} underlayColor={'#d3d3d3'} onPress={() => (
                            navigate('HomeDetail', {item: `${rowData}`})
                        )}>
                            <Text style={styles.item}>{rowData}</Text>
                        </TouchableHighlight>)}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 54,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
})

export const Home1Screen = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'aaa',
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
        headerStyle: {
            //elevation: 0,//Android去掉导航条底部阴影
            //shadowOpacity: 0,//IOS去掉导航条底部阴影
            backgroundColor: '#673AB7',
        },
        headerTitleStyle: {
            //alignSelf: 'center',
            //color: '#ffffff'
        },
        headerBackTitle: null,
        headerBackTitleStyle: {
            color: '#ffffff'
        },
        headerTruncatedBackTitle: '返回',
        cardStack: {
            gesturesEnabled: true
        },
        gesturesEnabled: true,//是否支持滑动返回手势，iOS默认支持，安卓默认关闭
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'float', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: () => {
        console.log('导航栏切换开始');
    },  // 回调
    onTransitionEnd: () => {
        console.log('导航栏切换结束');
    }  // 回调
});