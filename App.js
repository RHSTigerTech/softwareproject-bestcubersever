import 'react-native-gesture-handler';

import Gradient from './App/screens/Gradient';
import Learn from './App/screens/Learn';
import BeginnerLearn from './App/screens/BeginnerLearn';
import IntermediateLearn from './App/screens/IntermediateLearn';
import HowToReadAlg from './App/screens/HowToReadAlg';
import AdvancedLearn from './App/screens/AdvancedLearn';
import AlgList from './App/screens/AlgList';
//import Video from './App/screens/video.js';
import React, { useState, Component, useEffect } from 'react';
import Timer from './App/screens/Timer.js';
import Statistics from './App/screens/Statistics';
import Scanner from './App/screens/PictureTaker';
import NumberList from './App/screens/NumberList'
import VirtualCube from './App/screens/VirtualCube.js';
import CFOP from './App/screens/CFOP.js'
import ZZ from './App/screens/ZZ.js'
import Roux from './App/screens/Roux.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackHandler, Alert } from 'react-native';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




const App = () => {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])
  return (

    <NavigationContainer>

      <Stack.Navigator>
        {/*   Home Screens   */}
        <Stack.Screen
          name='VirtualCube'
          component={VirtualCube}
          options={{ headerTitle: 'Virtual Cube', headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' }}

        />



        <Stack.Screen
          name="Gradient"
          component={Gradient}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Learn"
          component={Learn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Timer'
          component={Timer}
          options={{ headerShown: false, gestureEnabled: false }}
        />



        <Stack.Screen
          name='Statistics'
          component={Statistics}
          options={{ headerShown: false, gestureEnabled: false, }}
        />

        <Stack.Screen
          name='Scanner'
          component={Scanner}
        //options={{headerShown:false}}
        />



        {/* <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{headerShown:false}}
        /> */}

        <Stack.Screen
          name="NumberList"
          component={NumberList}
          options={{ headerShown: false, gestureEnabled: false, }} />


        {/* <Stack.Screen 
          name="Video" 
          component={Video}
        /> */}



        {/*   Learn Screens    */}
        <Stack.Screen
          name="HowToReadAlg"
          component={HowToReadAlg}
          options={{ headerTitle: 'Cube Basics', headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' }}

        //options={{headerShown:false}}
        />

        <Stack.Screen
          name="BeginnerLearn"
          component={BeginnerLearn}
          options={{ headerTitle: 'Beginner Method', headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' }}
        //mode='screen'
        />

        <Stack.Screen
          name="IntermediateLearn"
          component={IntermediateLearn}
          options={{ headerTitle: 'Intermediate Method', headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' }}
        />

        <Stack.Screen
          name="AdvancedLearn"
          component={AdvancedLearn}
          options={{ headerTitle: 'Advanced Method', headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' }}

        />

        <Stack.Screen
          name="AlgList"
          component={AlgList}
          options={{ headerTitle: 'List of Algorithms', headerStyle: { backgroundColor: '#121212' }, headerTintColor: '#fff' }}

        />


        <Stack.Screen
          name='CFOP'
          component={CFOP}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name='ZZ'
          component={ZZ}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name='Roux'
          component={Roux}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>




    </NavigationContainer>

  );
};

export default App;