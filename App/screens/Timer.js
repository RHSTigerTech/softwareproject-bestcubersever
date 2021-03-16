
import React, { useState, Component, useEffect } from 'react';
import {SafeAreaView,StyleSheet,Text,View,TouchableHighlight,TouchableOpacity,StatusBar, ModalDropdown, Modal, Pressable} from 'react-native';
import {Header} from 'react-native-elements';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from 'react-native-action-button';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';
//import {getData, storeData} from './storage'
//import { loadTextureAsync } from 'expo-three';




//getData()




let finaltime='00:00:000';

let storedTimes=[];

let convertedTimes=[0];

let storedData;

let minutes;

let del;

let lastItem='00:00:000';

const storeData = async (value) => {
      try {
        let jsonValue = JSON.stringify(value) 
        await AsyncStorage.setItem('@storage_Key', jsonValue)
        //console.log(jsonValue)
      } catch (e) {
      }
    }

const getData = async () => {
      try {
        let jsonValue = await AsyncStorage.getItem('@storage_Key')
        
        convertedJson=jsonValue != null ? JSON.parse(jsonValue) : null;
        let jsonstring=JSON.stringify(convertedJson)
        let i=0;
        
        console.log(jsonstring)
        let formattedjsonstring= jsonstring.split('[').join('')
        formattedjsonstring= formattedjsonstring.split(']').join('')
        
        console.log(formattedjsonstring)
        timerarray=formattedjsonstring.split(',');
        
        console.log(timerarray)
        // timerarray=timerarray.split('/').join('')
        console.log(timerarray)
        array=timerarray.map(Number)
        console.log('-----------')
        console.log(array)
        console.log('-----------')
        // console.log(typeof timerarray)
        console.log(convertedJson)
        console.log(convertedJson.length)
        // console.log(convertedJson.substring(0,1))
        const propertyValues = Object.values(convertedJson);
        console.log(propertyValues)
        // console.log(typeof propertyValues)
        // console.log(typeof convertedTimes)
        //console.log(propertyValues.slice(1,2))

        while (i<timerarray.length){
          //timerarray=parseFloat(timerarray[i,i+1])
          //timerrray.parseFloat[i,i+1]
          //timerarray=timerarray.split('\\').join('')
          convertedTimes.push(timerarray[i,i+1])
          //console.log(convertedJson.substring(i,i+1))
          i++
        }

        return convertedJson;
        
        //return (jsonValue)
      } catch(e) {
        // error reading value
      }
    }



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
  //lastItem= lastItem.split('\\').join('')
      
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
    //lastItem=lastitem.spit('\\').join('')
    lastItem=parseFloat(lastItem)
    lastItem=lastItem+(60*minutes)
    convertedTimes.push(lastItem)
    
    console.log(convertedTimes)
  }
  //storeData(convertedTimes)
  //getData()

  //storedData=convertedTimes;
  
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
//console.log(storagetest)

const possiblemoves = ["R", "L", "D", "U", "F", "B", "R'","L'","D'","U'","F'","B'","R2", "L2", "D2", "U2", "F2", "B2"]
//                      0    1    2   3     4     5   6     7   8     9   10    11  12    13    14    15    16    17
function k(){
  let l=null;
  let j=100;
  let s=[];


    for(let i=0; i<20;i++){
      
      // console.log('--')
      l =Math.floor(Math.random()*possiblemoves.length)
      // console.log(l)
      // console.log(j)
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
//   useEffect(() =>
// {
//   getData();
// },[]);

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
              storeData(convertedTimes)

              
              
              
            }}>
            <Text style={styles.startbuttonText}>
              {!isStopwatchStart ? 'READY' : 'STOP'}
                
            
            </Text>
            

            <Text style={styles.ScrambleText}>
            
            {!isStopwatchStart ? k() : ''}

            </Text>

            <Text style={{color:'transparent'}}>{!isStopwatchStart ? times() : ''}</Text>
            
          </TouchableOpacity>
          
          
          

            

          <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%', left:Platform.OS === 'ios' ? '2.8%':'.7%'}}>

          
          <Icon.Button
            
            name='cube-outline'
            flexDirection='column'
            backgroundColor='black'
            alignItems='center'
            color='white'
            size={30}
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
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
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
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
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
            onPress={() => {navigation.navigate('Gradient')}}
          >
          <Text style={styles.BottomTabText}>Home   </Text>
          </Icon.Button>
          {/* <Icon.Button
            
            name='delete'
            flexDirection='column'
            backgroundColor='black'
            color='white'
            size={30}
            
            onPress={() => {del=true,deletetime()}}
            
          >
          
          
          
          <Text style={styles.BottomTabText}>Delete   </Text>
          </Icon.Button> */}
          <Icon.Button
            
            name='school'
            flexDirection='column'
            backgroundColor='black'
            color='white'
            size={30}
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
            onPress={() => navigation.navigate('Learn')}
          >
          <Text style={styles.BottomTabText}>Learn   </Text>
          </Icon.Button>
          <View style={{flex:1,flexDirection:'column',bottom:Platform.OS === 'ios' ? '4.5%': '3.9%', right:Platform.OS === 'ios' ? '90%':'55%',backgroundColor: 'transparent'}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        
        <ActionButton
        buttonColor="transparent"
        size={45}
        spacing={0}
        offsetX={0}
        offsetY={0}
        //position='center'
        buttonText="+"
        >
        
          
          <ActionButton.Item spaceBetween={-5} buttonColor='transparent' title="Add" onPress={() => {}}>
            <Icon name="plus" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item spaceBetween={-5} buttonColor='transparent' title="Delete" onPress={() => {del=true,deletetime()}}>
            <Icon name="delete" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
        </ActionButton>
        <Text style={{fontSize:10, left:Platform.OS === 'android' ? '54%':'58%', bottom:Platform.OS === 'android' ?'-92%':'-96%',
    color:'white',
    justifyContent:'center'}}>Options</Text> 
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
    top:Platform.OS === 'android' ? StatusBar.currentHeight+13:13,
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
      fontSize: 30,
      height: 33,
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
