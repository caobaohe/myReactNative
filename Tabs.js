/**
 * tabs导航
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const TabsComponent = ({selected})=>(
    <Tabs
        selected={selected}
        selectedStyle={{backgroundColor:'#ffffff'}}
        style={{backgroundColor:'#eeeeee', height:64}}>
        <View name="home1" style={{alignItems:'center'}}>
            <Icon name="rocket" size={20} color="#900"/>
            <Text onPress={()=>(Alert.alert('a'))}>home1</Text>
        </View>

        <View name="home2" style={{alignItems:'center'}}>
            <Icon name="rocket" size={20} color="#900"/>
            <Text>home2</Text>
        </View>

        <View name="home3" style={{alignItems:'center'}}>
            <Icon name="rocket" size={20} color="#900"/>
            <Text>home3</Text>
        </View>
    </Tabs>
);

export default TabsComponent;