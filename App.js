import 'react-native-gesture-handler';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'	
import GradientButton from 'react-native-gradient-buttons'	
import { Actions, Router, Scene } from "react-native-router-flux";	
import Constants from 'expo-constants';	
import { StyleSheet, SafeAreaView, Text, View,
  TouchableOpacity, TouchableHighlight,Platform, Dimensions, StatusBar, Header } from 'react-native';
import {Button} from 'react-native-elements'	
import WelcomeScreen from './App/screens/WelcomeScreen';	
import ViewImageScreen from './App/screens/ViewImageScreen';	
import Gradient from './App/screens/Gradient';
import Learn from './App/screens/Learn';
import BeginnerLearn from './App/screens/BeginnerLearn'
import Video from './App/screens/video.js';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
//testing
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Gradient" 
          component={Gradient} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="ViewImageScreen" 
          component={ViewImageScreen}
        />
        <Stack.Screen 
          name="Learn" 
          component={Learn}
        />
        <Stack.Screen
          name="BeginnerLearn"
          component={BeginnerLearn}
        />
        <Stack.Screen 
          name="Video" 
          component={Video}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
    
};

export default App;
