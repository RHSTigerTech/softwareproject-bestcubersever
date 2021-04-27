import React from 'react';
import { StyleSheet, View,Platform, StatusBar, Image, SafeAreaView, Text } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



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

                        text="Cube Basics"
                        textStyle={styles.textStyle}

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
                        Cube Basics
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
            <View style={{backgroundColor:'#121212', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                
            <Icon.Button
                        name='cube-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignItems='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={({}) => navigation.navigate('VirtualCube')}
                        >
                        <Text style={styles.BottomTabText}>3DCube</Text>
                    </Icon.Button>
                    {/* Statistics */}
                    <Icon.Button            
                        name='chart-line'
                        alignItems='center'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => navigation.navigate('Statistics')}
                    >
                    <Text style={styles.BottomTabText}>Statistics</Text>
                    </Icon.Button>
                    {/* Home Screen */}
                    <Icon.Button
                        name='home' 
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => navigation.navigate('Gradient')}
                    >
                    <Text style={styles.BottomTabText}>Home</Text>
                    </Icon.Button>
                    {/* Learn */}
                    <Icon.Button
                        name='camera'
                        backgroundColor='transparent'
                        flexDirection='column'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => navigation.navigate('Scanner')}
                    >
                    <Text style={styles.BottomTabText}>Solver</Text>
                    </Icon.Button>
                    <Icon.Button
                        name='timer-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignItems='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => navigation.navigate('Timer')}
                        >
                        <Text style={styles.BottomTabText}>Timer</Text>
                    </Icon.Button>
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
    },
    BottomTabText:{
        //Text used for the bottom menu
        fontSize:10,
        color:'white',
        opacity:1,
        justifyContent:'center',
        left:'-7%',
        paddingHorizontal:'1%'
      },
})

export default Learn;