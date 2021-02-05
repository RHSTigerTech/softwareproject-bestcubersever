import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'	
import GradientButton from 'react-native-gradient-buttons'	
import { Actions, Router, Scene } from "react-native-router-flux";	
import Constants from 'expo-constants';	
import { StyleSheet, SafeAreaView, Text, View,
  TouchableOpacity, TouchableHighlight,Platform, Dimensions, StatusBar } from 'react-native';
import {Button} from 'react-native-elements'	
import WelcomeScreen from './App/screens/WelcomeScreen';	
import ViewImageScreen from './App/screens/ViewImageScreen';	
import Gradient from './App/screens/Gradient';
import React from 'react';



export default function App() {	
  return <Gradient/>;
 
}
