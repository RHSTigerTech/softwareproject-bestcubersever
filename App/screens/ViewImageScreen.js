import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar } from 'react-native';

 import colors from '../config/colors'

 function ViewImageScreen(props) {
    return (
        <SafeAreaView style={styles.background}>

            <Image resizeMode='contain'
            style={styles.image} source={require('../Assets/chair.jpg')} />        
            <View style={styles.blue}/>
            <View style={styles.red}/>
        </SafeAreaView>
    );


}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:'100%',
    },
    background:{
        backgroundColor:'black',
        flex:1
    },
    blue:{
        backgroundColor:'#4ECDC4',//blue           
        width:50,
        height:50,
        top:20,
        right:20,
        position: 'absolute',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0

    },
    red:{
        backgroundColor:colors.primary,//red
        width:50,
        height:50,
        top:20,
        left:20,
        position: 'absolute', //changes based on whole screen rather than container/relative
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0

    }
})

export default ViewImageScreen;
