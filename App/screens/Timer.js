//Will hold the components for a rubiks cube timer including:
//The timer itself
//A customizable cube inspect timer
//A Random Scrambler
//Statists

// import React in our code
import React, { useState } from 'react';

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

let finaltime='';


const App = () => {
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
            <Text style={styles.resetbuttonText}>
            {'Previous Time:\n   '+finaltime}
            </Text>
            
          </TouchableOpacity>
          
          {/* <TouchableHighlight style={styles.resetbuttonSize}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
              
            }}>
            <Text style={styles.resetbuttonText}>previous time</Text>
          </TouchableHighlight> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
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
  resetbuttonSize:{
      alignSelf:'stretch',
      height: '10%',
      alignItems:'center'
  },
  startbuttonSize:{
    //position:'absolute',
    width: 500,
    height: '100%',
    alignItems:'center',
        
    

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


