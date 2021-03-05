import 'react-native-gesture-handler';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import GradientButton from 'react-native-gradient-buttons';
import { Actions, Router, Scene } from "react-native-router-flux";	
import Constants from 'expo-constants';	
import { StyleSheet, SafeAreaView, Text, View,
  TouchableOpacity, TouchableHighlight,Platform, Dimensions, StatusBar, Header } from 'react-native';
import {Button} from 'react-native-elements';
import WelcomeScreen from './App/screens/WelcomeScreen';	
import ViewImageScreen from './App/screens/ViewImageScreen';	
import Gradient from './App/screens/Gradient';
import Learn from './App/screens/Learn';
import BeginnerLearn from './App/screens/BeginnerLearn';
import IntermediateLearn from './App/screens/IntermediateLearn';
import HowToReadAlg from './App/screens/HowToReadAlg';
import AdvancedLearn from './App/screens/AdvancedLearn';
import AlgList from './App/screens/AlgList';
//import Video from './App/screens/video.js';
import * as React from 'react';
import Timer from './App/screens/Timer.js';
import Statistics from './App/screens/Statistics';
import ThreeJSTest from './App/screens/ThreeJSTest.js';
import VirtualCube from './App/screens/VirtualCube.js';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/*   Home Screens   */}

        <Stack.Screen 
          name="Gradient" 
          component={Gradient} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Learn" 
          component={Learn}
          // options={{headerShown:false}}
        />

        <Stack.Screen 
        name='Timer' 
        component={Timer}
        />

        <Stack.Screen 
          name='VirtualCube' 
          component={VirtualCube}
        />

        <Stack.Screen
          name='Statistics'
          component={Statistics}
          options={{headerShown:false}}
        />

        

        {/* <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{headerShown:false}}
        /> */}

        <Stack.Screen 
        name="ViewImageScreen" 
        component={ViewImageScreen} 
        options={{headerShown:false}}/>
        
        
        {/* <Stack.Screen 
          name="Video" 
          component={Video}
        /> */}



        {/*   Learn Screens    */}
        <Stack.Screen
          name="HowToReadAlg"
          component={HowToReadAlg}
        />

        <Stack.Screen
          name="BeginnerLearn"
          component={BeginnerLearn}
        />
        
        <Stack.Screen 
          name="IntermediateLearn"
          component={IntermediateLearn}
        />

        <Stack.Screen 
          name="AdvancedLearn" 
          component={AdvancedLearn}
        />

        <Stack.Screen
          name="AlgList"
          component={AlgList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;