import React from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import { ImageBackground, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} 
            source={require('../Assets/background.jpg')}
        >
            
            <Image style={styles.logo} source={require('../Assets/logo-red.png')} />
            <Text style={styles.textlogo}>Sell What You Don't Need</Text>
            
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>        
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:"center",
    },
    loginButton: {
        width:'100%',
        height: 70,
        backgroundColor:'#fc5c65',
        
    },
    logo:{
        width:100,
        height:100,
        position:'absolute',
        top:70,
        alignItems:'center'
                
    },
    textlogo:{
        position:'absolute',
        top:170,
        alignItems:'center'                
    },
    
        
    registerButton: {
        width:'100%',
        height: 70,
        backgroundColor:'#4ECDC4',
        
    },
    
    
    

})


export default WelcomeScreen;