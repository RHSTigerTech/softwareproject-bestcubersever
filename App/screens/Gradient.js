import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

import colors from '../config/colors'

 function Gradient(props) {
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
                onPressAction={() => alert('You pressed me!')}
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

            <GradientButton text="Purple Violet" width='90%' purpleViolet impact />
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