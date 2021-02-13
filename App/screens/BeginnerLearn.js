import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text,} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors'

function BeginnerLearn({navigation}) {
    return (
        <View style={styles.ViewContainer}>
            <Card>
                <Card.Title>1: White Cross</Card.Title>
                <Card.Divider/>
                <Text style={styles.textPlaceHolder}>This is where the instructions will go, right here. lets make this sentence longer</Text>
            </Card>
            <Card>
                <Card.Title>2: White Corners</Card.Title>
                <Card.Divider/>
                <Text style={styles.textPlaceHolder}>Instructions for step 2 which is the white corners</Text>
            </Card>
            <Card>
                <Card.Title>3: </Card.Title>
                <Card.Divider/>
                <Text style={styles.textPlaceHolder}>Instructions for step 3 which is the edges</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({

    ViewContainer:{
        flex: 1, 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'black',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    
    },

    textPlaceHolder:{
        color: 'red',
    },

    cardStyle: {
        width: '100%'
    }
})

export default BeginnerLearn;