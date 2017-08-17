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
    Button,

    AccessibilityInfo,
    Alert,
    Animated,
    AppState,
    AsyncStorage,
    BackAndroid,
    BackHandler,
    CameraRoll
} from 'react-native';


export default class Api extends PureComponent {

    static navigationOptions = {
        title: 'API',
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: new Map(),
            screenReaderEnabled: false,
            fadeAnim: new Animated.Value(0), //设置初始值
            bounceValue: new Animated.Value(0),
            appState: AppState.currentState,
            asyncStorage: '获取本地存储数据'
        }
    }

    componentDidMount() {
        AccessibilityInfo.addEventListener('change', this._handleScreenReaderToggled);
        AccessibilityInfo.fetch().done((isEnabled) => {
            this.setState({
                screenReaderEnabled: isEnabled
            });
        });
    }

    componentWillUnmount() {
        AccessibilityInfo.removeEventListener(
            'change',
            this._handleScreenReaderToggled
        );
    }

    _handleScreenReaderToggled = (isEnabled) => {
        this.setState({
            screenReaderEnabled: isEnabled,
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        Alert.alert('ActivityIndi​​cator!')
                    }}>1、AccessibilityInfo
                    </Text>
                    <Text>
                        The screen reader is {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Animated.Text style={[styles.item]} onPress={() => {
                        Alert.alert(
                            'Alert Title',
                            'My Alert Msg',
                            [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            {cancelable: false}
                        )
                    }}>2、Alert
                    </Animated.Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        Animated.timing(                            // Animate value over time
                            this.state.fadeAnim,                      // The value to drive
                            {
                                toValue: 1,                             // Animate to final value of 1
                            }
                        ).start();                                  // Start the animation

                        this.state.bounceValue.setValue(1.5);     // 动画开始的时候 设置一个比较大的值
                        Animated.spring(                          // 动画可选类型: spring, decay, timing
                            this.state.bounceValue,                 // Animate `bounceValue`
                            {
                                toValue: 0.8,                         // Animate to smaller size
                                friction: 1,                          // Bouncier spring
                            }
                        ).start();                                // 开始执行动画
                    }}>3、Animated</Text>
                    <Animated.Text style={[{opacity: this.state.fadeAnim}]}>
                        ssss
                    </Animated.Text>
                    <Animated.Image                         // 基础组件: Image, Text, View
                        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                        style={{
                            flex: 1,
                            transform: [                        // `transform`   有顺序的数组
                                {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                            ]
                        }}
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        Alert.alert(
                            'Alert Title',
                            'My Alert Msg',
                            [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            {cancelable: false}
                        )
                    }}>4、AppRegistry
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        Alert.alert(
                            'Alert Title',
                            'My Alert Msg',
                            [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            {cancelable: false}
                        )
                    }}>5、AppState
                    </Text>
                    <Text>{this.state.appState}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        try {
                            AsyncStorage.setItem('caobaohe', 'I like to save it.');
                        } catch (error) {
                            // Error saving data
                        }
                        try {
                            let value = AsyncStorage.getItem('caobaohe');
                            if (value !== null) {
                                // We have data!!
                                console.log(value);
                                this.setState({asyncStorage: value._65});
                            }
                        } catch (error) {
                            // Error retrieving data
                        }
                    }}>6、AsyncStorage
                    </Text>
                    <Text>{this.state.asyncStorage}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        BackAndroid.exitApp();
                    }}>7、BackAndroid 退出app
                    </Text>
                </View>


                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        BackHandler.exitApp();
                    }}>8、BackHandler
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        alert('CameraRoll');
                    }}>9、CameraRoll
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        Alert.alert(
                            'Alert Title',
                            'My Alert Msg',
                            [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            {cancelable: false}
                        )
                    }}>2、Alert
                    </Text>
                </View><View style={{flexDirection: 'row'}}>
                <Text style={styles.item} onPress={() => {
                    Alert.alert(
                        'Alert Title',
                        'My Alert Msg',
                        [
                            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )
                }}>2、Alert
                </Text>
            </View><View style={{flexDirection: 'row'}}>
                <Text style={styles.item} onPress={() => {
                    Alert.alert(
                        'Alert Title',
                        'My Alert Msg',
                        [
                            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )
                }}>2、Alert
                </Text>
            </View><View style={{flexDirection: 'row'}}>
                <Text style={styles.item} onPress={() => {
                    Alert.alert(
                        'Alert Title',
                        'My Alert Msg',
                        [
                            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )
                }}>2、Alert
                </Text>
            </View><View style={{flexDirection: 'row'}}>
                <Text style={styles.item} onPress={() => {
                    Alert.alert(
                        'Alert Title',
                        'My Alert Msg',
                        [
                            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )
                }}>2、Alert
                </Text>
            </View>

                <TouchableHighlight activeOpacity={0.6} underlayColor={'red'} onPress={() => (
                    alert('a')
                )}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                </TouchableHighlight>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        padding: 15,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
})