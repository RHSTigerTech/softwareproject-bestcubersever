
import React, { useState, Component, useEffect } from 'react';
import {SafeAreaView,StyleSheet,View,TouchableHighlight,TouchableOpacity,StatusBar, ModalDropdown, Pressable} from 'react-native';
import { TextInput,Modal, Portal, Text, Button, Provider, Dialog } from 'react-native-paper';
import {Header} from 'react-native-elements';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from 'react-native-action-button';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';
//import {storeData, getData} from './storage';


//stores the array of times
export const storeData = async (value) => {
  try {
    let jsonValue = JSON.stringify(value) 
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
  }
}
//gets and uses the stored times
export const getData = async () => {
  try {
    let jsonValue = await AsyncStorage.getItem('@storage_Key')
    
    convertedJson=jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log(convertedJson)
    let jsonstring=JSON.stringify(convertedJson)
    let i=0;
    
    console.log(jsonstring)
    let formattedjsonstring= jsonstring.split('[').join('')
    formattedjsonstring= formattedjsonstring.split(']').join('')
    formattedjsonstring= formattedjsonstring.split('\\').join('')
    formattedjsonstring= formattedjsonstring.split('"').join('')

    console.log(formattedjsonstring)
    timerarray=formattedjsonstring.split(',');
    
    console.log(timerarray)
    console.log('--------------------------------------------------')
    
    array=timerarray.map(Number)
    console.log('-----------')
    console.log(array)
    console.log('-----------')
    console.log(convertedJson)
    const propertyValues = Object.values(convertedJson);
    console.log(propertyValues)


    while (i<timerarray.length){
      if(timerarray[i]==0){
        i++
      }
      else{
      convertedTimes.push(timerarray[i])
      i++
      }
    }

    return convertedJson;
    
    //return (jsonValue)
  } catch(e) {
    // error reading value
  }
}

let finaltime='00:00:000';

let storedTimes=[];

let convertedTimes=[];

let storedData;

let minutes;

let del;

let lastItem='00:00:000';

let testdel=0;

let checkadd=false;


//Takes the times from the timer and pushes them into a list which is used by statistics
//The function first converts the formatted time (ex: 1:28:489) into a float number which is then added to the convertedTimes list
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

    convertedTimes=convertedTimes.filter(function(value){
      return !Number.isNaN(value)
    })
    // removeElement(convertedTimes,0)
    if(del===true){
      console.log(convertedTimes)
      if(convertedTimes[convertedTimes.length-2]==0||convertedTimes[convertedTimes.length-1]==0){
        convertedTimes.splice(convertedTimes.length-3,3)
      }
      else if(convertedTimes[convertedTimes.length-1]==convertedTimes[convertedTimes.length-2]){
        convertedTimes.pop();
        convertedTimes.pop();
      }
      //theres a third scenario where it should just .pop() once instead of twice
      else{
      convertedTimes.pop();
      }
      //storeData(convertedTimes)
      console.log('del is true')
      del=false;
      finaltime='0';
    }
    if(checkadd===true){
      convertedTimes.pop()
      //need to delete one more before the added time
      convertedTimes.splice(convertedTimes-2,1)
      console.log(convertedTimes)
      console.log('after check add')
      checkadd=false;
      finaltime='0'
    }
    
    testdel=convertedTimes[convertedTimes.length-1]
    
    // if(testdel==finaltime){
    //   convertedTimes.pop()
    //   console.log('popping')
    // }
    
    storeData(convertedTimes)
    console.log(convertedTimes)
    console.log(testdel)
    console.log(finaltime)
  }
  
  return (convertedTimes);
  
}


//deletes the most recent time when the delete button is pressed
export const deletetime = () =>{
  
  if(del===true){
    convertedTimes.pop(); 
    storeData(convertedTimes);
    
    // console.log(convertedTimes)
  }
  //times();
  del=false;
  console.log(convertedTimes)
  return (convertedTimes);

}

// clears most of the times
// probably won't be used in the actual app but is useful in resetting the times for testing purposes
export const cleartimes =()=>{
  if(del===true){
    convertedTimes=[convertedTimes[0]];
  }
  del=false;
  return(convertedTimes);
}

//let storagetest=getData()+storeData(convertedTimes)

//a scrambler that gives 20 scramble nonredundant notations
const possiblemoves = ["R", "L", "D", "U", "F", "B", "R'","L'","D'","U'","F'","B'","R2", "L2", "D2", "U2", "F2", "B2"]
//                      0    1    2    3    4    5    6    7    8    9    10   11   12    13    14    15    16    17
function k(){
  let l=null;
  let j=100;
  let s=[];


    for(let i=0; i<20;i++){
      
      l =Math.floor(Math.random()*possiblemoves.length)
     
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
  
//stopwatch constants. Sets stopwatch and resets stopwatch
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  
//modal constants to set modal as either visible or invisible
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [visible, setVisible] = React.useState(false);
//sets the input value
  const [inputVal, setInputVal] = useState('');

//function used when the add button is pressed on the modal
let check=false;
function store(){
  if(check===false){
    return(
      <Text style={styles.ScrambleText}>{!isStopwatchStart ? k() : ''}</Text>
    )
  }
  else if(check===true){
    return(
      <Text> none</Text>
    )
  }
}
//adds the time to the stats when the add button is pressed
function add(){
    convertedTimes.push(inputVal)
    checkadd=true;
    console.log(inputVal)
    hideModal()
    setInputVal('')
    check=true;
    console.log(check)    
}
function afteradd(){
  convertedTimes.pop()
}

//removes anything written as input and closes out of the modalview
function cancel(){
  hideModal()
  setInputVal('')
  check=true;
  console.log(check)
}

//opens the modalview when the add button is pressed
function openAdd(){
  check=true;
  showModal()
  console.log(check)
}

//closes the modal when the user clicks anywhere else
function dismissed(){
  check=true;
  hideModal()
  console.log(check)

}




//modal function that allows user to enter a new time to put into statistics
  let value=inputVal;
  const addTimes = () => (
    <Provider>
      <Portal>
        <Dialog visible={visible} onDismiss={() => {dismissed()}} style={styles.dialogContainer}>
        <Dialog.Title>Add Time</Dialog.Title>
        <Dialog.Content>
          <TextInput
                  label="Add A Time (In Seconds)"
                  value={value}
                  onChangeText={text => setInputVal(text)}
                  numeric
                  keyboardType={'decimal-pad'}
                />
                </Dialog.Content>
                <Dialog.Actions>
                <Button color='black' onPress={() => {add(),times()}}>Add</Button>
              <Button color='black' onPress={() => {cancel()}}>Cancel</Button>
              
            </Dialog.Actions>
        </Dialog>
      </Portal>
      
      </Provider>
      
    
    );

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
{/* calls certain parameters from the stopwatch library  */}
          <Stopwatch            
            msecs
            start={isStopwatchStart}                
            options={options}
            getTime={(time) => {
              finaltime=time;
            }}
            
            
          />
         {/*starts and resets stopwatch using the same button  */}
          <TouchableOpacity style={styles.startbuttonSize}
            onPress={() => {  
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false); 
              storeData(convertedTimes);              
            }}>
            <Text style={styles.startbuttonText}>{!isStopwatchStart ? 'READY' : 'STOP'}</Text>
            {/* <Text style={{color:'transparent'}}>{!isStopwatchStart ? deletetime() : ''}</Text> */}
            
{/* where scramble text is called*/}
        
            {store()}
          
            <Text style={{color:'transparent'}}>{!isStopwatchStart ? times() : ''}</Text>
        
          </TouchableOpacity>
          {/* where the modal is called */}
          {addTimes()}

          
         
            
{/* bottom icon buttons */}
    <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%', left:Platform.OS === 'ios' ? '-13.5%':'-12%'}}>

        <View style={{flex:1,flexDirection:'column',bottom:Platform.OS === 'ios' ? '4.5%': '3.9%', right:Platform.OS === 'ios' ? '-558%':'-625%',backgroundColor: 'transparent'}}>
            {/* Options */}
              <ActionButton
              buttonColor="transparent"
              size={45}
              spacing={0}
              offsetX={0}
              offsetY={0}
              buttonText="+"
              >
              
            {/* Add */}
              <ActionButton.Item 
                spaceBetween={-5} 
                buttonColor='transparent'
               
                title="Add" 
                onPress={()=>{openAdd()}}>
                <Icon name="plus" style={styles.actionButtonIcon} />
              </ActionButton.Item>

            {/* Delete  */}
              <ActionButton.Item 
                spaceBetween={-5} 
                buttonColor='transparent' 
                title="Delete" 
                onPress={() => {del=true, times()}}>
                <Icon name="delete" style={styles.actionButtonIcon} />
              </ActionButton.Item>

            {/* Clear */}
              <ActionButton.Item 
                spaceBetween={-5} 
                buttonColor='transparent' 
                title="Clear" 
                onPress={() => {del=true, cleartimes()}}>
                <Icon name="school" style={styles.actionButtonIcon} />
              </ActionButton.Item>          
            </ActionButton>
            <Text style={styles.OptionsButton}>Options</Text> 
            </View>



{/* Virtual Cube */}
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
{/* Statistics */}
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
{/* Home Screen */}
          <Icon.Button
            name='home' 
            flexDirection='column'
            backgroundColor='black'
            color='white'
            size={30}
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
            onPress={() => {navigation.navigate('Gradient'), storeData(convertedTimes)}}
          >
          <Text style={styles.BottomTabText}>Home   </Text>
          </Icon.Button>
{/* Learn */}
          <Icon.Button
            name='school'
            backgroundColor='transparent'
            flexDirection='column'
            color='white'
            zIndex={3}
            //position='absolute'
            size={30}
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
            onPress={() => {navigation.navigate('Learn')}}
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
    //basic container that encompases the screen
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black'
  },

  sectionStyle: {
    //encompases the entire app
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  startbuttonText: {
    //text used for the start and stop button
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
    //text used for the bottom menu
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
    //size of the actionbutton icons. Icons only used in the action button
      fontSize: 30,
      height: 33,
      color: 'white',      
  },

  dialogContainer: {
    //container used for the dialog modal
      backgroundColor: 'white', 
      paddingHorizontal:'7%',
      opacity:1      
  },

  OptionsButton:{
    fontSize:10, 
    left:Platform.OS === 'android' ? '54%':'58%', 
    bottom:Platform.OS === 'android' ?'-92%':'-96%', 
    color:'white',
    justifyContent:'center'
  },
});


//don't know if this is used. Might be able to be deleted
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
