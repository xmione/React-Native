import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator} from 'react-navigation';

class DashboardScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Dashboard Screen</Text>
            </View>
        );
    }
}
export default DashboardScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});