import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar } from 'react-native';
 import GradientButton from 'react-native-gradient-buttons';

 import colors from '../config/colors'

 function ViewImageScreen(navigation) {
    return (
        <SafeAreaView style={styles.background}>
            <Image resizeMode='cover'
                style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
            />        

            <View style={styles.blue}/>
            <View style={styles.red}/>
            <GradientButton
                style={{ marginVertical: 8 }}
                textStyle={{ fontSize: 20 }}
                gradientBegin="#874f00"
                gradientEnd="#f5ba57"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => alert('You pressed me!')}
            ></GradientButton>
        </SafeAreaView>
    );


}
const styles = StyleSheet.create({
    image:{
        width:'100%',
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
