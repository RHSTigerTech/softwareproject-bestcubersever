import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';

function HowToReadAlg({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <Image 
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                <View style={{height: '90%', opacity: 0.9}}>
                    <ScrollView style={styles.scroll}>
                        <Card>
                            <Card.Title>how to read algorithm screen</Card.Title>
                        </Card>
                        {
                            //two cards wide, clockwise and counter clockwise for each side, also add wide turns (f and Fw)
                            //also add color scheme (which colors are always opposite on most cubes)
                            //
                        }
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

export default HowToReadAlg;