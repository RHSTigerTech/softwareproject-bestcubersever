import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar, Pressable } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors'

 function Gradient({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', marginVertical: 24}}>
            <GradientButton
                
                style={{ marginVertical: 8 }}
                text="Gradient Button #1"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#ffafbd"
                gradientEnd="#ffc3a0"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => navigation.navigate('WelcomeScreen')}
                
            />

            <GradientButton
                style={{ marginVertical: 8 }}
                textStyle={{ fontSize: 20 }}
                gradientBegin="#2F4353"
                gradientEnd="#696969"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Light'
                onPressAction={() => alert('You pressed me!')}
            >
            Gradient Button #2
            </GradientButton>

            <AwesomeButton
                
                size="small"
                type="primaryFlat"
                backgroundActive="rgba(0,0,0,0)"
                activeOpacity={0.5}
                textColor="#FFFFFF"
                width={250}
                onPress={() => navigation.navigate("ViewImageScreen")}
                
            >
                <Text>ok</Text>
            </AwesomeButton>


            <GradientButton text="Violet Pink" width='90%' violetPink impact />
            <GradientButton text="Pink Dark Green" width='90%' pinkDarkGreen impact />
            <GradientButton text="Blue Violet" width='90%' blueViolet impact />
            <GradientButton text="Blue Marine" width='90%' blueMarine impact />
            <GradientButton text="Deep Blue" width='90%' deepBlue impact />
            <GradientButton text="Disabled" width='90%' disabled impact />
        </View>

            );


}

export default Gradient;