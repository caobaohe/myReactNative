import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    ListView,
    Button,
    WebView,
    ActivityIndicator,

    BackHandler,
} from 'react-native';

export default class GuideDetail extends Component {

    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.item.title}`,
        headerRight: <Button title="exit" onPress={() => {
            BackHandler.exitApp();
        }}/>,
    })

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        const {params} = this.props.navigation.state;
        console.log(this.props.navigation.state);
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <WebView
                    source={{uri: params.item.uri}}
                    // style={{marginTop: 0}}
                    startInLoadingState={true}
                    // contentInset={{top: 10, left: 20, bottom: 30, right: 40}}
                    // onLoadStart={() => this.setState({loading: true})}
                    // onLoadEnd={() => this.setState({loading: false})}
                ></WebView>
            </View>
        )
    }
}