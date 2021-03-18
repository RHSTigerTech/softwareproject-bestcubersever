
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
        formattedjsonstring= formattedjsonstring.split('\\').join('')
        formattedjsonstring= formattedjsonstring.split('"').join('')

        console.log(formattedjsonstring)
        timerarray=formattedjsonstring.split(',');
        
        console.log(timerarray)
        console.log(timerarray)
        array=timerarray.map(Number)
        console.log('-----------')
        console.log(array)
        console.log('-----------')
        console.log(convertedJson)
        const propertyValues = Object.values(convertedJson);
        console.log(propertyValues)


        while (i<timerarray.length){
          convertedTimes.push(timerarray[i,i+1])
          i++
        }

        return convertedJson;
        
        //return (jsonValue)
      } catch(e) {
        // error reading value
      }
    }



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
    
    console.log(convertedTimes)
  }

  
  return (convertedTimes);
  
}


//deletes the most recent time when the delete button is pressed
export const deletetime = () =>{
  
  if(del===true){
    convertedTimes.pop();
    
  }
  del=false;
  
  return (convertedTimes);

}


//a scrambler that gives 20 scramble nonredundant notations
const possiblemoves = ["R", "L", "D", "U", "F", "B", "R'","L'","D'","U'","F'","B'","R2", "L2", "D2", "U2", "F2", "B2"]
//                      0    1    2   3     4     5   6     7   8     9   10    11  12    13    14    15    16    17
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
function add(){
    convertedTimes.push(inputVal)
    console.log(inputVal)
    hideModal()
    setInputVal('')
    check=true;
    console.log(check)
}
function cancel(){
  hideModal()
  setInputVal('')
  check=true;
  console.log(check)

}
function openAdd(){
  check=true;
  showModal()
  console.log(check)

}
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
                <Button color='black' onPress={() => {add()}}>Add</Button>
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
            
{/* where scramble text is called*/}
        
            {store()}
          
            <Text style={{color:'transparent'}}>{!isStopwatchStart ? times() : ''}</Text>
        
          </TouchableOpacity>
          {/* where the modal is called */}
          {addTimes()}

          
         
            
{/* bottom icon buttons */}
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
            onPress={() => {navigation.navigate('Gradient')}}
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
        
        
        
    
          <ActionButton.Item spaceBetween={-5} buttonColor='transparent' title="Add" 
          onPress={()=>{openAdd()}}>
          
          {/* <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal> */}

            <Icon name="plus" style={styles.actionButtonIcon} />
            
            
            {/* <Modal isVisible={isModalVisible}>
              <View style={{flex:.5, position:'center',top:'50%',transparent:'true'}}>
                <TextInput
                  label="Add Time"
                  value={text}
                  onChangeText={text => setText(text)}
                  numeric
                  keyboardType={'decimal-pad'}
                />
                <Button title='cancel' onPress={toggleModal}/>

              </View>
            </Modal> */}
            {/* </Provider> */}
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
  dialogContainer: {
      backgroundColor: 'white', 
      paddingHorizontal:'7%',
      opacity:1
      
  },

  // IconButtonStyle:{
  //   flexDirection:'column',
  //   backgroundColor:'black',
  //   alignItems:'center',
  //   color:'white',
  //   size:30,
  //   paddingHorizontal:Platform.OS === 'ios' ? '3%':'4.5%',
  // },

  

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
