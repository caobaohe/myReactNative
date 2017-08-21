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
    TextInput,

    AccessibilityInfo,
    Alert,
    Animated,
    AppState,
    AsyncStorage,
    BackAndroid,
    BackHandler,
    CameraRoll,
    Clipboard,
    DatePickerAndroid,
    Dimensions,
    ImageEditor,
    Keyboard,
    NetInfo,
    PermissionsAndroid,
    Settings,
    Share,
    TimePickerAndroid,
    ToastAndroid,
    Vibration
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
            asyncStorage: '获取本地存储数据',
            clipboardContent: 'clipboardContent',
            date: new Date().toLocaleDateString(),
            time: '时间',
            position: '点击获取位置信息',
            uri: 'https://facebook.github.io/react/img/logo_og.png'
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

    async _getContent() {
        let content = await Clipboard.getString();
        console.log(content);
        alert(content);
    }

    async _getDate() {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                // date: new Date(2020, 4, 25),
                // date: new Date(),
                mode: 'spinner' // (enum('calendar', 'spinner', 'default'))
            });
            if (action !== DatePickerAndroid.dismissedAction) {//用户没用取消选择日期
                // Selected year, month (0-11), day
                // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
                console.log({action, year, month, day});
                this.setState({
                    date: new Date(year, month, day).toLocaleDateString()
                });
            } else {
                alert('取消选择日期');
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    async _getTime() {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                is24Hour: false, // Will display '2 PM'
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)
                this.setState({
                    time: hour + ':' + minute
                });
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    }

    async _requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    'title': 'Cool Photo App Camera Permission',
                    'message': 'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                alert("You can use the camera")
            } else {
                alert("Camera permission denied")
            }
        } catch (err) {
            alert(err)
        }
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
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
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
                    <Text style={styles.item} onPress={this._getContent}>10、Clipboard {this.state.clipboardContent}
                    </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={this._getDate.bind(this)}>11、DatePickerAndroid {this.state.date}
                    </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        var {height, width} = Dimensions.get('window');
                        alert(height + ':' + width);
                    }}>12、Dimensions获取设备屏幕的宽高。
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        var {height, width} = Dimensions.get('window');
                        alert(height + ':' + width);
                    }}>13、Easing
                    </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                var position = JSON.stringify(position);
                                this.setState({position});
                            },
                            (error) => alert(error.message),
                            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
                        );
                        this.watchID = navigator.geolocation.watchPosition((position) => {
                            var position = JSON.stringify(position);
                            this.setState({position});
                        });
                    }}>14、Geolocation{this.state.position}
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        ImageEditor.cropImage('https://facebook.github.io/react/img/logo_og.png', {
                            offset: {
                                x: 500,
                                y: 300,
                            },
                            size: {
                                width: 100,
                                height: 100,
                            }
                        }, (uri) => this.setState({uri: uri}), (e) => alert('error' + e))
                    }}>15、ImageEditor裁剪下面的图片
                    </Text>
                </View>
                <View>
                    <Image source={{uri: this.state.uri}} style={{width: 100, height: 100}}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {

                    }}>16、Keyboard
                    </Text>
                </View>
                <View>
                    <TextInput
                        onSubmitEditing={Keyboard.dismiss}
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        NetInfo.fetch().then((reach) => {
                            alert('Initial: ' + reach);
                        });
                    }}>17、NetInfo
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={this._requestCameraPermission}>
                        18、PermissionsAndroid
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        Settings.get()
                    }}>
                        19、Settings
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                    }}>
                        20、Share
                    </Text>
                </View>
                <View>
                    <TouchableHighlight style={styles.wrapper}
                                        onPress={this._shareMessage}>
                        <View style={styles.button}>
                            <Text>Click to share message</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.wrapper}
                                        onPress={this._shareText}>
                        <View style={styles.button}>
                            <Text>Click to share message, URL and title</Text>
                        </View>
                    </TouchableHighlight>
                    <Text>{this.state.result}</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={this._getTime.bind(this)}>
                        21、TimePickerAndroid {this.state.time}
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
                        ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }}>
                        22、ToastAndroid
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        Vibration.vibrate([0, 500, 200, 500], false)
                    }}>
                        23、Vibration
                    </Text>
                </View>

            </ScrollView>
        )
    }

    _shareMessage() {
        Share.share({
            message: 'React Native | A framework for building native apps using React'
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _shareText() {
        Share.share({
            message: 'A framework for building native apps using React',
            url: 'http://facebook.github.io/react-native/',
            title: 'React Native'
        }, {
            dialogTitle: 'Share React Native website',
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ],
            tintColor: 'red'
        })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _showResult(result) {
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                this.setState({result: 'shared with an activityType: ' + result.activityType});
            } else {
                this.setState({result: 'shared'});
            }
        } else if (result.action === Share.dismissedAction) {
            this.setState({result: 'dismissed'});
        }
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
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
})