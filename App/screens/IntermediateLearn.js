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

function IntermediateLearn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <Image 
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                <View style={{height: '90%'}}>
                    <ScrollView style={styles.scroll}>
                        <Card>
                            <Card.Title>1: White Cross</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.cardText}>Instructions</Text>
                        </Card>
                        
                        <Card>
                            <Card.Title>2: First Two Layers (F2L)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.cardText}>Instructions</Text>
                        </Card>

                        <Card>
                            <Card.Title>3: Orient Last Layer (OLL)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.cardText}>Instructions for 2 look</Text>
                            <Card.Divider/>
                            <Text style={styles.cardText}>Instructions for 1 look</Text>
                        </Card>

                        <Card>
                            <Card.Title>4: Permute Last Layer (PLL)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.cardText}>Instructions for 2 look</Text>
                            <Card.Divider/>
                            <Text style={styles.cardText}>Instructions for 1 look</Text>
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

    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'black',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    
    },

    cardText:{
        // Text for the instructions
        color: 'red',
    },

    image: {
        // Background image of cube
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },

    scroll: {
        // Scroll view
        backgroundColor: "transparent",
    }
})

export default IntermediateLearn;