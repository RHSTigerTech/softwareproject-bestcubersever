//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
 Platform, Dimensions, StatusBar } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import GradientButton from 'react-native-gradient-buttons'
import { Actions, Router, Scene } from "react-native-router-flux";
import {createAppContainer, createNavigationContainer } from "react-navigation"; 
import { createStackNavigator} from "react-navigation-stack";
import Constants from 'expo-constants';
import {Button} from 'react-native-elements'
import {WelcomeScreen} from './App/screens/WelcomeScreen';
import {ViewImageScreen} from './App/screens/ViewImageScreen';
import {Gradient} from './App/screens/Gradient';
import { render } from 'react-dom';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabTabNavigator} from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createDrawerNavigator();
const MaterialBottomTabs= createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabTabNavigator();

export default class App extends Component {
  render() {
    createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Gradient" component={Gradient}/>
    </Stack.Navigator>

  
      return( 
        <NavigationContainer>
            <Drawer.Navigation>
              <Drawer.Screen name="Home"/>
              <Drawer.Screen name="Container" component={WelcomeScreen} />
              <Drawer.Screen name="Favorites" component={ViewImageScreen}/>
              <Drawer.Screen name="Settings"/>

            </Drawer.Navigation>
        </NavigationContainer>
      );

  }

}
 

