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

import White from './App/screens/ColorPictureTaker/white'
import Blue from './App/screens/ColorPictureTaker/blue'
import Orange from './App/screens/ColorPictureTaker/orange'
import Green from './App/screens/ColorPictureTaker/green'
import Red from './App/screens/ColorPictureTaker/red'
import Yellow from './App/screens/ColorPictureTaker/yellow'

import confirmWhite from './App/screens/confirmWhite'
import confirmBlue from './App/screens/confirmBlue'
import confirmOrange from './App/screens/confirmOrange'
import confirmGreen from './App/screens/confirmGreen'
import confirmRed from './App/screens/confirmRed'
import confirmYellow from './App/screens/confirmYellow'

import Solution from './App/screens/Solution'
import recieveColors from './App/screens/recieveColors'

import {NavigationContainer} from '@react-navigation/native'


import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {BackHandler, Alert, Button} from 'react-native';
import {SafeAreaProvider, SafeAreaView } from 'react-native';

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
          options={{headerShown:false}}

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
        name="NumberList" 
        component={NumberList} 
        options={{headerShown:false,gestureEnabled: false,}}/>
        
        
        {/* <Stack.Screen 
          name="Video" 
          component={Video}
        /> */}



        {/*   Learn Screens    */}
        <Stack.Screen
          name="HowToReadAlg"
          component={HowToReadAlg}
          options={{headerTitle:'Cube Basics', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff', headerForceInset: { top: 'never', bottom: 'never' }}}

        //options={{headerShown:false}}
        />

        <Stack.Screen
          name="BeginnerLearn"
          component={BeginnerLearn}
          options={{headerTitle:'Beginner Method', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff', headerForceInset: { top: 'never', bottom: 'never' }}}
          //mode='screen'
        />

        <Stack.Screen
          name="IntermediateLearn"
          component={IntermediateLearn}
          options={{headerTitle:'Intermediate Method', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff', headerForceInset: { top: 'never', bottom: 'never' }}}
        />

        <Stack.Screen
          name="AdvancedLearn"
          component={AdvancedLearn}
          options={{headerTitle:'Advanced Method', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff', headerForceInset: { top: 'never', bottom: 'never' }}}

        />

        <Stack.Screen
          name="AlgList"
          component={AlgList}
          options={{headerTitle:'List of Algorithms', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff', headerForceInset: { top: 'never', bottom: 'never' }}}

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

        <Stack.Screen
          name='Scanner'
          component={Scanner}
          options={{headerTitle:'Scanner', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff', headerLeft:(<HeaderBackButton onPress={()=>{navigation.navigate('Gradient')}}/>)}}
        />

        <Stack.Screen
        
          name='White'
          component={White}
          options={{ headerTitle:'White Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />

        <Stack.Screen
          name='Blue'
          component={Blue}
          options={{ headerTitle:'Blue Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />
        <Stack.Screen
          name='Orange'
          component={Orange}
          options={{ headerTitle:'Orange Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />
        <Stack.Screen
          name='Green'
          component={Green}
          options={{ headerTitle:'Green Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />

        <Stack.Screen
          name='Red'
          component={Red}
          options={{ headerTitle:'Red Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />

        <Stack.Screen
          name='Yellow'
          component={Yellow}
          options={{ headerTitle:'Yellow Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />

 
        <Stack.Screen
          name='confirmYellow'
          component={confirmYellow}
          options={{headerLeft: null ,headerTitle:'Yellow Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />
        <Stack.Screen
          name='confirmRed'
          component={confirmRed}
          options={{headerLeft: null ,headerTitle:'Red Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />
        <Stack.Screen
          name='confirmGreen'
          component={confirmGreen}
          options={{headerLeft: null ,headerTitle:'Green Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />
        <Stack.Screen
          name='confirmOrange'
          component={confirmOrange}
          options={{headerLeft: null ,headerTitle:'Orange Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />
        <Stack.Screen
          name='confirmBlue'
          component={confirmBlue}
          options={{headerLeft: null ,headerTitle:'Blue Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />

        <Stack.Screen
          name='confirmWhite'
          component={confirmWhite}
          options={{headerLeft: null , headerTitle:'White Side', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff'}}
        />

        <Stack.Screen
          name="Solution"
          component={Solution}
          options={{headerTitle:'Solution', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff', headerForceInset: { top: 'never', bottom: 'never' }}}

          //options={{headerShown:false}}
        />

        <Stack.Screen
          name="recieveColors"
          component={recieveColors}
          options={{headerTitle:'Solution', headerStyle:{backgroundColor:'#121212'}, headerTintColor:'#fff', headerForceInset: { top: 'never', bottom: 'never' }}}

          //options={{headerShown:false}}
        />



      </Stack.Navigator>




    </NavigationContainer>

  );
};

export default App;