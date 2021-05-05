import React, { Component,useState, useRef  } from 'react';

import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar, Pressable, SafeAreView, BackHandler} from 'react-native';
import {Header} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import LightVideo from '../Assets/RotatingCube.mp4';
import { Video } from 'expo-av';
import {convertedTimes,storeData, getData,times} from './Timer'


// storeData(convertedTimes)
// getData()


export default class App extends Component {

    render(){
    const {navigate} = this.props.navigation;

    const ButtonHeight=(Dimensions.get('window').height)*.09;
    
    const ButtonWidth=(Dimensions.get('window').width)*.8;
    const ButtonRadius=10; // effects how circular the buttons look
    const ButtonGradientDirection='vertical';
    
    return (
        <View style={styles.ViewContainer}>
        
            <Video
                source={LightVideo}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.image}
            /> 
            
            <Header 
                top={'-0%'}                      
                containerStyle={styles.viewStyle}
                centerContainerStyle={{flex:14}}
                centerComponent={{style: { color: '#121212', letterSpacing:1.5, fontSize:60, fontWeight:'bold', fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-medium'}, text:'Rubiks³'}} 
            />
                    <View style = {{justifyContent: 'space-evenly',flex:1, opacity:0.9,top:'-3%'}}>
                        <GradientButton
                            text="Learn"                        
                            textStyle={styles.textStyle}
                            gradientBegin='#fe0936'
                            gradientEnd='#ff7700'
                            gradientDirection={ButtonGradientDirection}
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact                        
                            onPressAction={() => navigate('Learn')}                        
                        >
                        </GradientButton>
                        
                        <GradientButton
                            text="Timer"
                            textStyle={styles.textStyle}
                            gradientBegin='#ff7700'
                            gradientEnd='#ecc205'
                            gradientDirection={ButtonGradientDirection}
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact
                            onPressAction={() => {storeData(convertedTimes),navigate('Timer')}}
                        >
                        </GradientButton>

                        <GradientButton                        
                            text="Solver"
                            textStyle={styles.textStyle}
                            gradientBegin='#ecc205'
                            gradientEnd='#5ad16c'
                            gradientDirection={ButtonGradientDirection} 
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact
                            onPressAction={() => navigate('Scanner')}
                        >
                        </GradientButton>

                        <GradientButton
                            text="Virtual Cube"
                            textStyle={styles.textStyle}
                            gradientBegin='#5ad16c'
                            gradientEnd='#009FFD'
                            gradientDirection={ButtonGradientDirection}
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact
                            onPressAction={() => navigate('VirtualCube')}
                        >
                        </GradientButton>

                        <GradientButton
                            text="Statistics"
                            textStyle={styles.textStyle}
                            gradientBegin='#009FFD'
                            gradientEnd='#add8e6'
                            gradientDirection={ButtonGradientDirection}
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact
                            onPressAction={() => {storeData(convertedTimes),navigate('Statistics')}}
                        >
                        </GradientButton>
                    </View>            
        </View>
    );
}
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'black',
        flex:1
    },

    ViewContainer:{
        flex: 1, 
        alignItems: 'center', 
        //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },

    image:{        
        width:'140%',
        height:'125%',
        position:'absolute',
        top:-80,
        right:-69
    },

    viewStyle: {
        borderBottomColor: 'transparent',
        marginTop:0,
        backgroundColor:'transparent'        
    },
    

    textStyle:{
        color:'#121212',
        fontSize:30,    
        opacity:1,
        fontWeight:'bold',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-medium'
        
    },
    
    
})

