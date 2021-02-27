import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors'

function AdvancedLearn({navigation}) {
    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <Image 
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                <View style={{height: '90%', opacity: 0.9}}>
                    <ScrollView style={styles.scroll}> 
                        <Card>
                            <Card.Title>advanced method</Card.Title>
                        </Card>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'black',
        flex:1
    },

    image: {
        // Background image of cube
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },

    imageDescrip:{
        // Text for the instructions
        color: 'black',
        width: '60%',
    },

    placeHolder: {
        // Text with this style holds the place of something that will be implemented later
        color: 'blue',
        fontWeight: 'bold',
        width: '40%',
    },

    scroll: {
        // Scroll view
        backgroundColor: "transparent",
    },

    textHeader: {
        //headers
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17.5,
        textAlign: 'center',
    },

    textOther:{
        // Text thats not header, description, or main summary
        color: 'black',
        fontSize: 13,
    },

    textSummary: {
        // the summary of the step
        color: 'black',
        fontSize: 15,
    },

    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'black',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    
    },
})

export default AdvancedLearn;