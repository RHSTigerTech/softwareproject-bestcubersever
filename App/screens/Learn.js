import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar,} from 'react-native';
import {Header} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors'

function Learn({navigation}) {
    return (
        <View style={styles.ViewContainer}>
            <GradientButton
                style={{marginVertical: 8}}
                text="Beginner's Method"
                textStyle={{ fontSize: 20 }}
                gradientBegin="blue" //change color
                gradientEnd="purple" //change color
                gradientDirection="vertical"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => navigation.navigate('BeginnerLearn')} //navigate to the beginner's screen
            />
            <GradientButton
                style={{marginVertical: 8}}
                text="Intermediate Method"
                textStyle={{ fontSize: 20 }}
                gradientBegin="blue" //change color
                gradientEnd="purple" //change color
                gradientDirection="vertical"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                //navigate to the intermediate screen
            />
            <GradientButton
                style={{marginVertical: 8}}
                text="Advanced Method"
                textStyle={{ fontSize: 20 }}
                gradientBegin="blue" //change color
                gradientEnd="purple" //change color
                gradientDirection="vertical"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                //navigate to the advanced screen
            />

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
    image: {
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        top: 24,
    },
    viewStyle: {
        borderBottomColor: 'black',
        marginBottom:10,
    },

})

export default Learn;