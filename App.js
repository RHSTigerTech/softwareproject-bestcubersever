import 'react-native-gesture-handler';

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
import Scanner from './App/screens/PictureTaker';

import VirtualCube from './App/screens/VirtualCube.js';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
          options={{headerShown:false}}
        />

        <Stack.Screen 
        name='Timer' 
        component={Timer}
        options={{headerShown:false}}
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

        <Stack.Screen 
        name="Scanner" 
        component={Scanner} 
        options={{headerShown:false}}/>
        
        
        {/* <Stack.Screen 
          name="Video" 
          component={Video}
        /> */}



        {/*   Learn Screens    */}
        <Stack.Screen
          name="HowToReadAlg"
          component={HowToReadAlg}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name="BeginnerLearn"
          component={BeginnerLearn}
          options={{headerShown:false}}
        />
        
        <Stack.Screen 
          name="IntermediateLearn"
          component={IntermediateLearn}
          options={{headerShown:false}}
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