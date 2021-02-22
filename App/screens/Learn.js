import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Image, SafeAreaView, } from 'react-native';
import {Header} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors'

function Learn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <Image 
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />

               {/* <Header
                            
                    containerStyle={styles.viewStyle}
                    centerContainerStyle={{flex:10}}
                    centerComponent={{ text: 'Learn', style: { color: 'white', fontSize:40,}}}
                    // ViewComponent={LinearGradient} // Don't forget this!        
                                    
               /> */}

                <View style={{justifyContent: 'space-evenly', flex: 1, marginTop: 0}}>
                    <GradientButton
                        style={{marginVertical: 8}}

                        text="How to Read Algorithms"
                        textStyle={{ fontSize: 20 }}

                        gradientBegin="#FE0944" //change color
                        gradientEnd="#FF4E00" //change color
                        gradientDirection="vertical"

                        height={60}
                        width={300}
                        radius={15}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('HowToReadAlg')} //navigate to the how to read screen
                    />

                    <GradientButton
                        style={{marginVertical: 8}}

                        text="Beginner's Method"
                        textStyle={{ fontSize: 20 }}

                        gradientBegin="#FF4E00" //change color
                        gradientEnd="#EC9F05" //change color
                        gradientDirection="vertical"

                        height={60}
                        width={300}
                        radius={15}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('BeginnerLearn')} //navigate to the beginner's screen
                    />

                    <GradientButton
                        style={{marginVertical: 8}}

                        text="Intermediate Method"
                        textStyle={{ fontSize: 20 }}

                        gradientBegin="#EC9F05" //change color
                        gradientEnd="#64e764" //change color
                        gradientDirection="vertical"

                        height={60}
                        width={300}
                        radius={15}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('IntermediateLearn')}//navigate to the intermediate screen
                    />

                    <GradientButton
                        style={{marginVertical: 8}}

                        text="Advanced Method"
                        textStyle={{ fontSize: 20 }}

                        gradientBegin="#64e764" //change color
                        gradientEnd="#009FFD" //change color
                        gradientDirection="vertical"

                        height={60}
                        width={300}
                        radius={15}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('AdvancedLearn')} //navigate to the advanced screen
                    />

                    <GradientButton
                        style={{marginVertical: 8}}

                        text="List of Algorithms"
                        textStyle={{ fontSize: 20 }}

                        gradientBegin="#009FFD" //change color
                        gradientEnd="#add8e6" //change color
                        gradientDirection="vertical"

                        height={60}
                        width={300}
                        radius={15}

                        impact
                        impactStyle='Light'
                        //navigate to the algorithm list screen
                    />
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
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    
    },
    image: {
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },
    viewStyle: {
        borderBottomColor: 'black',
        //marginBottom:10,
        marginTop: 0,
        backgroundColor: 'transparent'
    },

})

export default Learn;