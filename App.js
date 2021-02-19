import 'react-native-gesture-handler';
import WelcomeScreen from './App/screens/WelcomeScreen';	
import ViewImageScreen from './App/screens/ViewImageScreen';	
import Gradient from './App/screens/Gradient';
import Timer from './App/screens/Timer';
import ThreeJSTest from './App/screens/ThreeJSTest.js';
import VirtualCube from './App/screens/VirtualCube.js';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gradient" component={Gradient} options={{headerShown:false}}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ViewImageScreen" component={ViewImageScreen} options={{headerShown:false}}/>
        <Stack.Screen name='VirtualCube' component={VirtualCube}/>
        {/*<Stack.Screen name='Timer' component={Timer}/> */}
        {/* <Stack.Screen name='ThreeJSTest' component={ThreeJSTest}/> */}
        
      </Stack.Navigator>

    </NavigationContainer>
  );
    
};

export default App;
