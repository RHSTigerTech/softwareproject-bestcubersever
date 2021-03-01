//Will hold the components for a rubiks cube timer including:
//The timer itself
//A customizable cube inspect timer
//A Random Scrambler
//Statists

// import React in our code
import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import GradientButton from 'react-native-gradient-buttons';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  
  TouchableHighlight,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {Header} from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
//importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IconButton, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


  
  
let finaltime='';

const possiblemoves = ["R", "L", "D", "U", "F", "B", "R'","L'","D'","U'","F'","B'","R2", "L2", "D2", "U2", "F2", "B2"]
//                      0    1    2   3     4     5   6     7   8     9   10    11  12    13    14    15    16    17
function k(){
  let l=null;
  let j=100;
  let s=[];


    for(let i=0; i<20;i++){
      
      console.log('--')
      l =Math.floor(Math.random()*possiblemoves.length)
      console.log(l)
      console.log(j)
      if(j===l){ 
        s.pop();
        i--
      }
      else if ((l===0 || l===6 || l===12)&&(j===0 || j===6 || j===12)) {
        s.pop();
        i--
      } 
      else if ((l===1 || l===7 || l===13)&&(j===1 || j===7 || j===13)) {
        s.pop();
        i--
      }
      else if ((l===2 || l===8 || l===14)&&(j===2 || j===8 || j===14)) {
        s.pop();
        i--
      }
      else if ((l===3 || l===9 || l===15)&&(j===3 || j===9 || j===15)) {
        s.pop();
        i--
      }
      else if ((l===4 || l===10 || l===16)&&(j===4 || j===10 || j===16)) {
        s.pop();
        i--
      }
      else if ((l===5 || l===11 || l===17)&&(j===5 || j===11 || j===17)) {
        s.pop();
        i--
      }    
      else {}
      j=l;
      s.push(possiblemoves[l])
    }
    s=s.join(' ')
    console.log(s)
    return(s)
}


console.log('--------------')

const App = ({navigation}) => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(9000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  
  
  
 
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
        
          <Stopwatch
            
            msecs
            start={isStopwatchStart}
                
            //To start
            reset={resetStopwatch}
            //To reset
            options={options}
            //options for the styling
            getTime={(time) => {
              //console.log(time);
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
            
            
            
            <Text style={styles.ScrambleText}>
            
            {!isStopwatchStart ? k() : ''}
            
            </Text>
            
            
          </TouchableOpacity>
          {/* {Complete()} */}
          {/* <TouchableHighlight style={styles.resetbuttonSize}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
              
            }}>
            <Text style={styles.resetbuttonText}>previous time</Text>
          </TouchableHighlight> */}
          <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%'}}>
          <Icon.Button
            
            name='chart-line'
            
            backgroundColor='black'
            //color={Colors.red500}
            size={30}
            onPress={() => navigation.navigate('Statistics')}
          />
          <IconButton
            
            icon="graph"
            color={Colors.red500}
            size={30}
            onPress={() => navigation.navigate('Gradient')}
          />
          <IconButton
            
            icon="camera"
            color={Colors.red500}
            size={30}
            onPress={() => navigation.navigate('Statistics')}
          />
          </View>
        </View>
      </View>
    </SafeAreaView>
    
  );
}

export default App;

const styles = StyleSheet.create({

  viewStyle: {
    borderBottomColor: 'transparent',
    marginBottom:0,
    backgroundColor:'blue'        
  },
  container: {
    flex: 1,
    //padding: 10,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },
  
  sectionStyle: {
    flex: 1,
    //marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startbuttonText: {
    fontSize: 80,
    //marginTop: 10,
    color:'#FFF',
    top:320,
    
  },
  resetbuttonText: {
    fontSize: 40,
    //marginTop: 10,
    color:'#FFF',
    position:'absolute',
    bottom:0,
  },
  ScrambleText: {
    
    fontSize: 25,
    //width: '70%',
    width:'60%',
    
    //marginTop: 10,
    color:'#FFF',
    position:'absolute',
    top:0,
    textAlign:'center',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
  },
  resetbuttonSize:{
      alignSelf:'stretch',
      height: '10%',
      alignItems:'center'
  },
  startbuttonSize:{
    //position:'absolute',
    width: 500,
    height: '90%',
    alignItems:'center',
  },
  ViewContainer:{
    //flex: 1, 
    //alignItems: 'center', 
    position:'absolute',
    bottom:0,
    
  },
  textStyle:{
    color:'black',
    fontSize:30,    
    opacity:0.9,
}

});

const options = {
  container: {
    //flex: 1,
    //padding: 10,
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
    height:70
  },
  text: {
    fontSize: 70,
    //fontFamily:'Helvetica Neue',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'monospace',
    color: '#FFF',
    marginLeft: 0,
    top:-150,
  },
};


