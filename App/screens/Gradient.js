import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar, Pressable} from 'react-native';
import {Header} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors'
import { ImageBackground } from 'react-native';

 function Gradient({navigation}) {
    return (
        <View style={styles.ViewContainer}>
            <Image resizeMode='cover'
                style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} />
                
                    <Header
                        
                        containerStyle={styles.viewStyle}
                        centerContainerStyle={{flex:10}}
                        centerComponent={{ text: 'Rubiks Cube App', style: { color: 'white', fontSize:40,}}}
                        // ViewComponent={LinearGradient} // Don't forget this!
                        
                        
                        />
                
                <View style = {{justifyContent: 'space-evenly',flex:1,}}>
                    <GradientButton
                        
                        style={{ marginVertical: 10, }}
                        text="Learn"
                        
                        textStyle={{ fontSize: 20,}}
                        gradientBegin='#FE0944'
                        gradientEnd='#FF4E00'
                        gradientDirection="vertical"
                        height={60}
                        width={300}
                        radius={15}
                        impact
                        
                        onPressAction={() => navigation.navigate('WelcomeScreen')}
                        
                    />

                    <GradientButton
                        style={{ marginVertical: 10 }}
                        text="Solver"
                        textStyle={{ fontSize: 20 }}
                        gradientBegin='#FF4E00'
                        gradientEnd='#EC9F05'
                        gradientDirection="vertical"
                        height={60}
                        width={300}
                        radius={15}
                        impact
                        onPressAction={() => navigation.navigate('ViewImageScreen')}

                    >
                    </GradientButton>

                    <GradientButton
                        style={{ marginVertical: 10, }}
                        textStyle={{textColor:'black'}}
                        text="Timer and Scrambler"
                        textStyle={{ fontSize: 20 }}
                        gradientBegin='#EC9F05'
                        gradientEnd='#64e764'
                        gradientDirection="vertical"
                        
                        height={60}
                        width={300}
                        radius={15}
                        impact
                        onPressAction={() => navigation.navigate('ViewImageScreen')}
                    >
                    </GradientButton>

                    <GradientButton
                        style={{ marginVertical: 10 }}
                        text="Virtual Cube"
                        textStyle={{ fontSize: 20 }}
                        gradientBegin='#64e764'
                        gradientEnd='#009FFD'
                        gradientDirection="vertical"
                        height={60}
                        width={300}
                        radius={15}
                        impact
                        onPressAction={() => navigation.navigate('ViewImageScreen')}

                    >
                    </GradientButton>

                    <GradientButton
                        style={{ marginVertical: 10 }}
                        text="Statistics"
                        textStyle={{ fontSize: 20 }}
                        gradientBegin='#009FFD'
                        gradientEnd='#add8e6'
                        gradientDirection="vertical"
                        height={60}
                        width={300}
                        radius={15}
                        impact
                        onPressAction={() => navigation.navigate('Video')}

                    >
                    </GradientButton>

                    {/* <AwesomeButton
                        
                        size="small"
                        type="primaryFlat"
                        backgroundActive="rgba(0,0,0,0)"
                        activeOpacity={0.5}
                        textColor="#FFFFFF"
                        width={250}
                        onPress={() => navigation.navigate("ViewImageScreen")}
                        
                    >
                        <Text>ok</Text>
                    </AwesomeButton> */}


                    {/* Different colored gradient buttons that can be used */}
                        {/* <GradientButton text="Violet Pink" width='90%' violetPink impact />
                        <GradientButton text="Pink Dark Green" width='90%' pinkDarkGreen impact />
                        <GradientButton text="Blue Violet" width='90%' blueViolet impact />
                        <GradientButton text="Blue Marine" width='90%' gradientBegin="#52A0FD"
                        gradientEnd="#00e2fa" impact />
                        <GradientButton text="Deep Blue" width='90%' deepBlue impact />
                        <GradientButton text="Disabled" width='90%' disabled impact /> */}
                </View>

            
            
        </View>
            
        

            );


}


const styles = StyleSheet.create({
   
    ViewContainer:{
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    
    },
    image:{
        
        width:'100%',
        height:'100%',
        position:'absolute',
        //color:'transparent'
        top:24,
    },
    viewStyle: {
        borderBottomColor: 'transparent',
        //marginBottom:10,
        marginTop:0,
        backgroundColor:'transparent'        

    },

})

export default Gradient;

