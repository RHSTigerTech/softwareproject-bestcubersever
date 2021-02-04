//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import GradientButton from 'react-native-gradient-buttons'
import { Actions, Router, Scene } from "react-native-router-flux";
 

import Constants from 'expo-constants';
import {Button} from 'react-native-elements'
import WelcomeScreen from './App/screens/WelcomeScreen';
import ViewImageScreen from './App/screens/ViewImageScreen';
import Gradient from './App/screens/Gradient';

 
export default function App() {
  return <Gradient/>;
  
}
 
 

