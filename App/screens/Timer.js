
import React, { useState, Component } from 'react';
import {SafeAreaView,StyleSheet,Text,View,TouchableHighlight,TouchableOpacity,StatusBar, ModalDropdown, Modal, Pressable} from 'react-native';
import {Header} from 'react-native-elements';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from 'react-native-action-button';
import Ionicon from 'react-native-vector-icons/Ionicons';



const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value) 
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
  }
}
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    console.log(jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;

    //return (jsonValue)
  } catch(e) {
    // error reading value
  }
}



let finaltime='00:00:000';

let storedTimes=[];

let convertedTimes=[0];

let storedData;

let minutes;

let del;

let lastItem='00:00:000';

export const times = () =>{
  
  convertedTimes=convertedTimes.filter(function(element){
    return element !== undefined;
  });
  if(convertedTimes[convertedTimes.length-1]===convertedTimes[convertedTimes.length-2]){
    convertedTimes.pop();
  }
  storedTimes.push(finaltime)
  
  
  if(storedTimes.length>1){
  lastItem= storedTimes[storedTimes.length-1]
  lastItem=lastItem.replace(":",".");
  lastItem=lastItem.replace(":",".");
      
    console.log(lastItem.substring(0,2))
    minutes= lastItem.substring(0,2)
    minutes=parseInt(minutes)
    console.log(minutes)
    if(lastItem.substring(0,1)==='0'){
      lastItem=lastItem.replace('0','')
    }
    
    if(lastItem.substring(0,1)==='0'){
      lastItem=lastItem.replace('0.','')
    }

    if(minutes>=1){
      lastItem=lastItem.replace('.','')
      console.log(lastItem.substring(1))
      lastItem=lastItem.substring(1)
      
    }
    
    lastItem=parseFloat(lastItem)
    lastItem=lastItem+(60*minutes)
    convertedTimes.push(lastItem)
    
    console.log(convertedTimes)
  }
  
  storeData(convertedTimes)
  getData()

  storedData=convertedTimes;
  return (convertedTimes);
  
}

export const deletetime = () =>{
  
  if(del===true){
    convertedTimes.pop();
    
  }
  del=false;
  
  return (convertedTimes);
  
}

function addtime(){
  //give the abilty to add a time 
}

function convert(){
  times()
  console.log(convertedTimes)
  return (convertedTimes);
}

let storagetest=getData()+storeData(convertedTimes)
console.log(storagetest)

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
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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
            

            <Text style={styles.ScrambleText}>
            
            {!isStopwatchStart ? k() : ''}

            </Text>

            <Text style={{color:'transparent'}}>{!isStopwatchStart ? times() : ''}</Text>
            
            
          </TouchableOpacity>
          
          
          

            

          <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%', left:10}}>

          
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
          <View style={{flex:1,flexDirection:'column',bottom:25, backgroundColor: 'black', left:5}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)"
        size={45}>
          
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
          <Icon.Button
            
            name='delete'
            flexDirection='column'
            backgroundColor='transparent'
            color='white'
            size={22}
            left={3}
            alignItems='center'
            
            onPress={() => {del=true,deletetime()}}
            
          >
          
          </Icon.Button>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
          <Icon.Button
            
            name='delete'
            flexDirection='column'
            backgroundColor='transparent'
            color='white'
            size={22}
            left={3}
            alignItems='center'
            
            onPress={() => {del=true,deletetime()}}
            
          >
          
          
          
          
          </Icon.Button>
          </ActionButton.Item>
        </ActionButton>
      </View>
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

  BottomTabText:{
    fontSize:10,
    color:'white',
    justifyContent:'center'
  },

  startbuttonSize:{
    width: 500,
    height: '87%',
    alignItems:'center',
  },


  
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
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
