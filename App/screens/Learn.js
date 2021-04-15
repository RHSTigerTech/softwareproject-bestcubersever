import React from 'react';
import { StyleSheet, View,Platform, StatusBar, Image, SafeAreaView } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import {Header} from 'react-native-elements'


const ButtonHeight=65;
const ButtonWidth=320;
const ButtonRadius=10; // effects how circular the buttons look
const ButtonGradientDirection='vertical';

function Learn({navigation}) {
    return (
        
        <SafeAreaView style={styles.background}>
        {/* <Header                       
          containerStyle={styles,{backgroundColor:'#121212', borderBottomColor:'#121212', paddingBottom:'0%'}}
          centerContainerStyle={{flex:14}}
          centerComponent={{ text: 'Learn', style: { color: 'white',opacity:1, fontSize:30, fontWeight:'bold', bottom:'-2%',backgroundColor:'transparent'}}} 
        /> */}
        
        
            <View style={styles.ViewContainer}>
            
                {/*
                <Image 
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                */}
                
                <View style={{justifyContent: 'space-evenly', flex: 1, opacity:1}}>
                
                    {/* <GradientButton
                        style={{marginVertical: 8}}

                        text="How to Read Algorithms"
                        textStyle={{fontSize: 27, color: 'white',}}

                        gradientBegin="#7701ff" //change color
                        gradientEnd="#7701ff" //change color
                        gradientDirection={ButtonGradientDirection}
                        height={ButtonHeight}
                        width={ButtonWidth}
                        radius={ButtonRadius}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('HowToReadAlg')} //navigate to the how to read screen
                    /> */}
                    <AwesomeButton 
                        width={ButtonWidth} 
                        height={ButtonHeight}
                        backgroundColor='#6d00eb'
                        textSize={27}
                        borderRadius={ButtonRadius}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        onPress={() => navigation.navigate('HowToReadAlg')}
                        
                        
                    >
                        How to Read Algorithms
                    </AwesomeButton>
                    

                    <AwesomeButton 
                        width={ButtonWidth} 
                        height={ButtonHeight}
                        backgroundColor='#6d00eb'
                        textSize={27}
                        borderRadius={ButtonRadius}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        onPress={() => navigation.navigate('BeginnerLearn')}
                        
                        
                    >
                        Beginner's Method
                    </AwesomeButton>

                    <AwesomeButton 
                        width={ButtonWidth} 
                        height={ButtonHeight}
                        backgroundColor='#6d00eb'
                        textSize={27}
                        borderRadius={ButtonRadius}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        onPress={() => navigation.navigate('IntermediateLearn')}
                        
                        
                    >
                        Intermediate Method
                    </AwesomeButton>

                    <AwesomeButton 
                        width={ButtonWidth} 
                        height={ButtonHeight}
                        backgroundColor='#6d00eb'
                        textSize={27}
                        borderRadius={ButtonRadius}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        onPress={() => navigation.navigate('AdvancedLearn')}
                        
                        
                    >
                        Advanced Method
                    </AwesomeButton>

                    <AwesomeButton 
                        width={ButtonWidth} 
                        height={ButtonHeight}
                        backgroundColor='#6d00eb'
                        textSize={27}
                        borderRadius={ButtonRadius}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        onPress={() => navigation.navigate('AlgList')}
                        
                        
                    >
                        List of Algorithms
                    </AwesomeButton>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   
    background:{
        backgroundColor:'#121212',
        flex:1
    },
    ViewContainer:{
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
        backgroundColor: '#121212'
    },
    image: {
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },
    viewStyle: {
        borderBottomColor: '#121212',
        //marginBottom:10,
        marginTop: 0,
        backgroundColor: 'transparent'
    },

    textStyle: {
        color: 'white',
        fontSize:30, 
    }
})

export default Learn;