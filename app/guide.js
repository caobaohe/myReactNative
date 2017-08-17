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

export default class Guide extends Component {
    static navigationOptions = {
        title: '指南',
    }

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                title: 'react native',
                uri: 'https://github.com/facebook/react-native'
            }, {
                title: '组件和API',
                uri: 'https://facebook.github.io/react-native/docs/components-and-apis.html'
            }, {
                title: '平台特定代码',
                uri: 'https://facebook.github.io/react-native/docs/platform-specific-code.html'
            }, {
                title: '在屏幕之间浏览',
                uri: 'https://facebook.github.io/react-native/docs/navigation.html'
            }, {
                title: '图片',
                uri: 'https://facebook.github.io/react-native/docs/images.html'
            }, {
                title: '动画',
                uri: 'https://facebook.github.io/react-native/docs/animations.html'
            }, {
                title: '无障碍',
                uri: 'https://facebook.github.io/react-native/docs/accessibility.html'
            }, {
                title: '计时器',
                uri: 'https://facebook.github.io/react-native/docs/timers.html'
            }, {
                title: '调试',
                uri: 'https://facebook.github.io/react-native/docs/debugging.html'
            }, {
                title: '性能',
                uri: 'https://facebook.github.io/react-native/docs/performance.html'
            }, {
                title: '手势响应系统',
                uri: 'https://facebook.github.io/react-native/docs/gesture-responder-system.html'
            }, {
                title: 'JavaScript环境',
                uri: 'https://facebook.github.io/react-native/docs/javascript-environment.html'
            }, {
                title: '直接操纵',
                uri: 'https://facebook.github.io/react-native/docs/direct-manipulation.html'
            }, {
                title: '颜色参考',
                uri: 'https://facebook.github.io/react-native/docs/colors.html'
            }, {
                title: '与现有应用程序集成',
                uri: 'https://facebook.github.io/react-native/docs/integration-with-existing-apps.html'
            }, {
                title: '在设备上运行',
                uri: 'https://facebook.github.io/react-native/docs/running-on-device.html'
            }, {
                title: '升级到新的React Native版本',
                uri: 'https://facebook.github.io/react-native/docs/upgrading.html'
            }]),
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
                            navigate('GuideDetail', {item: rowData})
                        )}>
                            <Text style={styles.item}>{rowData.title}</Text>
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
        padding: 15,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
})