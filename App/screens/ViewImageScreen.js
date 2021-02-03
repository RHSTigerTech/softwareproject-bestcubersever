import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar } from 'react-native';

 function WelcomeScreen(props) {
    return (
        <SafeAreaView
            style={{
                backgroundColor:"black",
                flex:1,
                flexDirection: 'row', //horizontal
                justifyContent:'center',//main
                alignItems:"center", //secondary
                //flexWrap:'wrap',
                alignContent: "center",
            }}
        >
            <View 
                style={{
                    backgroundColor:'#4ECDC4',//blue
                    
                    width:'15%',
                    height:60,
                    top:20,
                    right:20,
                    position: 'absolute'
                }}
            />
            <View 
                style={{
                    backgroundColor:'#fc5c65',//red
                    width:'15%',
                    height:60,
                    top:20,
                    left:20,
                    position: 'absolute', //changes based on whole screen rather than container/relative
                    paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0
                }}
            />
            <ImageBackground>
                style={styles.background}
                source={require('../assets/background.jpg')}

            </ImageBackground>
            
        </SafeAreaView>
                
    );
}
