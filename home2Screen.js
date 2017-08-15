import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    SectionList,
    ActivityIndicator,
    Button,
    Alert,
    DatePickerIOS,
    DrawerLayoutAndroid,
    FlatList,
    Image,
    Modal,
    TouchableHighlight,
    Picker,
    ProgressBarAndroid,
    RefreshControl,
    ListView,
    Slider
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import H1DetailScreen from './h1DetailScreen';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home2',
    }

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            modalVisible: false,
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            refreshing: false,
        };
    }

    onPressLearnMore() {
        Alert.alert('You tapped the button!')
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.setState({refreshing: false});
        // fetchData().then(() => {
        //     this.setState({refreshing: false});
        // });
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }>
                <Text style={styles.item} onPress={() => {
                    Alert.alert('ActivityIndi​​cator!')
                }}>1ActivityIndi​​cator显示圆形装载指示器。</Text>
                <ActivityIndicator size='large'/>
                <Text style={styles.item}>2Button</Text>
                <Button
                    onPress={this.onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="按钮"
                />
                <Text style={styles.item}>DatePickerIOS</Text>
                <DatePickerIOS/>
                <Text style={styles.item}>DrawerLayoutAndroid侧滑吧</Text>

                <Text style={styles.item}>FlatList</Text>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <Text style={styles.item}>Image</Text>
                <Image style={{width: 50, height: 50}} source={require('./img/Admin_p.png')}/>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
                <Text style={styles.item}>KeyboardAvoidingView</Text>
                <Text style={styles.item}>ListView</Text>
                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text style={styles.item}>Modal 点击显示</Text>
                </TouchableHighlight>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    // presentationStyle = {""}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <View style={{backgroundColor: '#FFFFFF'}}>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text style={{borderWidth: 1}}>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
                <Text style={styles.item}>NavigatorIOS </Text>
                <Text style={styles.item}>其他方案react-navigation</Text>
                <Text style={styles.item}>其他方案native-navigation</Text>
                <Text style={styles.item}>其他方案react-native-navigation</Text>
                <Text style={styles.item}>Picker</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                    mode={'dropdown'}
                >
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>
                <Text style={styles.item}>ProgressBarAndroid</Text>
                {/*<ProgressBarAndroid styleAttr="Horizontal" indeterminate={false}/>*/}
                <Text style={styles.item}>RefreshControl</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                />
                <Text style={styles.item}>Slider</Text>
                <Slider/>
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        margin: 5,
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: 'gray'
    },
})

export const Home2Screen = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: '组件',
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