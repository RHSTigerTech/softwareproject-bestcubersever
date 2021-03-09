//Will hold the components for a rubiks cube timer including:
//The timer itself
//A customizable cube inspect timer
//A Random Scrambler
//Statists

// import React in our code
import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

//importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//y

let finaltime='';
const possiblemoves = ["R", "L", "D", "U", "F", "B", "R'","L'","D'","U'","F'","B'","R2", "L2", "D2", "U2", "F2", "B2"]
let l=null;
let j=100;
let s=[];


  for(let i=0; i<20;i++){
    
    console.log('--')
    l =Math.floor(Math.random()*possiblemoves.length)
    console.log(l)
    console.log(j)
    //add more conditions to scrmabler so there aren't any uneccessary notations given
    if(j===l){ 
      s.pop();
      i--
    }
    j=l;
    s.push(possiblemoves[l])
  }
  s=s.join(' ')

console.log('--------------')
const App = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  
  const [resetStopwatch, setResetStopwatch] = useState(false);
  
  
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
        
          <Stopwatch            
            msecs
            start={isStopwatchStart}
                
            options={options}

            getTime={(time) => {
              finaltime=time;
            }}
            
            
          />
         
          <TouchableOpacity style={styles.startbuttonSize}
            onPress={() => {  
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false); 
              
              
              
            }}>
            <Text style={styles.startbuttonText}>
              {!isStopwatchStart ? 'READY' : 'STOP'}
                
            
            </Text>
            
            <Text style={styles.resetbuttonText}>
            {'Previous Time:\n   '+finaltime}
            </Text>
            <Text style={styles.ScrambleText}>
            {s}
            </Text>
            
            
          </TouchableOpacity>
          
          <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%'}}>
          <Icon.Button
            
            name='cube-outline'
            flexDirection='column'
            backgroundColor='black'
            alignItems='center'
            color='white'
            size={30}
            onPress={() => navigation.navigate('VirtualCube')}
          >
          <Text style={styles.BottomTabText}>3DCube   </Text>
          </Icon.Button>
          <Icon.Button
            
            name='chart-line'
            alignItems='center'
            flexDirection='column'
            backgroundColor='black'
            color='white'
            size={30}
            onPress={() => {navigation.navigate('Statistics')}}
          >
          <Text style={styles.BottomTabText}>Statistics   </Text>
          </Icon.Button>

          
          <Icon.Button
            
            name='home' 
            flexDirection='column'
            backgroundColor='black'
            color='white'
            size={30}
            onPress={() => {navigation.navigate('Gradient')}}
          >
          <Text style={styles.BottomTabText}>Home   </Text>
          </Icon.Button>
          <Icon.Button
            
            name='delete'
            flexDirection='column'
            backgroundColor='black'
            color='white'
            size={30}
            
            onPress={() => {del=true,deletetime()}}
            
          >
          
          
          
          <Text style={styles.BottomTabText}>Delete   </Text>
          </Icon.Button>
          <Icon.Button
            
            name='school'
            flexDirection='column'
            backgroundColor='black'
            color='white'
            size={30}
            onPress={() => navigation.navigate('Learn')}
          >
          <Text style={styles.BottomTabText}>Learn   </Text>
          </Icon.Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
    
  );
}

export default App;

  

const styles = StyleSheet.create({

  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  resetbuttonText: {
    fontSize: 40,
    //marginTop: 10,
    color:'#FFF',
    position:'absolute',
    bottom:0,
  },
  sectionStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  startbuttonText: {
    fontSize: 80,
    color:'#FFF',
    top:320, 
  },

  ScrambleText: {
    fontSize: 25,
    width:'60%',
    color:'#FFF',
    position:'absolute',
    top:10,
    textAlign:'center',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
  },
  ScrambleText: {
    
    fontSize: 30,
    //width: '70%',
    width:'60%',
    
    //marginTop: 10,
    color:'#FFF',
    position:'absolute',
    top:0,
    textAlign:'center'
  },
  resetbuttonSize:{
      alignSelf:'stretch',
      height: '10%',
      alignItems:'center'
  },

  startbuttonSize:{
    width: 500,
    height: '87%',
    alignItems:'center',
  },

});

const options = {
  container: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
    height:70
  },
  
  text: {
    fontSize: 70,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'monospace',
    color: '#FFF',
    marginLeft: 0,
    top:-150,
  },
};
