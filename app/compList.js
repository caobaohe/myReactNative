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

export default class CompList extends Component {

    static navigationOptions = {
        title: '组件',
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

    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <ScrollView style={styles.container}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item} onPress={() => {
                        Alert.alert('ActivityIndi​​cator!')
                    }}>1ActivityIndi​​cator显示圆形装载指示器。
                    </Text>
                    <ActivityIndicator size='large'/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.item}>2Button</Text>
                    <Button
                        onPress={this.onPressLearnMore}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="按钮"
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item}>DatePickerIOS</Text>
                    <DatePickerIOS/>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item}>DrawerLayoutAndroid侧滑吧</Text>
                </View>

                <Text style={styles.item}>FlatList</Text>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item}>Image</Text>
                    <Image style={{width: 50, height: 50}} source={require('../img/Admin_p.png')}/>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item}>KeyboardAvoidingView</Text>
                </View>

                <Text style={styles.item}>ListView</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <Text style={styles.item}>Modal 点击显示</Text>
                    </TouchableHighlight>
                </View>

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
                    <View style={[styles.modalContainer]}>
                        <View style={[styles.innerContainer]}>
                            <View style={{
                                flex: 1.5,
                                padding: 20,
                                alignItems: 'center',
                            }}>
                                <Text>这是一个Modal?</Text>
                                <Text>(此操作同时会删除已下载本地文件)</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                borderTopColor: '#ccc',
                                borderTopWidth: 1,
                            }}>
                                <TouchableHighlight
                                    activeOpacity={0.6} underlayColor={'#ccc'}
                                    onPress={this._setModalVisible.bind(this, false)}
                                    style={{flex: 1, alignItems: 'center',}}><Text style={styles.modalButton}>确定</Text></TouchableHighlight>
                                <TouchableHighlight
                                    activeOpacity={0.6} underlayColor={'#ccc'}
                                    onPress={this._setModalVisible.bind(this, false)}
                                    style={{
                                        flex: 1, alignItems: 'center',
                                        borderRadius: 10,
                                    }}><Text style={styles.modalButton}>取消</Text></TouchableHighlight>
                            </View>
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
        backgroundColor: '#fff'
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
        padding: 15,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#d3d3d3'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    innerContainer: {
        backgroundColor: '#fff',
        height: 120,
        borderRadius: 10,
        // alignItems: 'center',
    },
    modalButton: {
        flex: 1,
        // alignItems: 'center',
    }
})