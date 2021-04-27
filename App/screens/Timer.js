
import React, { useState, Component, useEffect } from 'react';
import {SafeAreaView,StyleSheet,View,TouchableHighlight,TouchableOpacity,StatusBar, ModalDropdown, Pressable, KeyboardAvoidingView} from 'react-native';
import { TextInput,Modal, Portal, Text, Button, Provider, Dialog, DefaultTheme, FAB } from 'react-native-paper';
import {Header} from 'react-native-elements';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from 'react-native-action-button';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';
//import { Container, Fab } from 'native-base';

//import {newList} from './NumberList'

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
    //console.log(convertedJson)
    let jsonstring=JSON.stringify(convertedJson)
    let i=0;
    
    //console.log(jsonstring)
    let formattedjsonstring= jsonstring.split('[').join('')
    formattedjsonstring= formattedjsonstring.split(']').join('')
    formattedjsonstring= formattedjsonstring.split('\\').join('')
    formattedjsonstring= formattedjsonstring.split('"').join('')

    //console.log(formattedjsonstring)
    timerarray=formattedjsonstring.split(',');
    
    //console.log(timerarray)
    //console.log('--------------------------------------------------')
    
    array=timerarray.map(Number)
    // console.log('-----------')
    // console.log(array)
    // console.log('-----------')
    // console.log(convertedJson)
    const propertyValues = Object.values(convertedJson);
    //console.log(propertyValues)


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

let delOnce;

let minutes;

let del;

let delExtra;

let confirmClear;

let doubleDel; 

let getrid;

let mayberid =0;

let stopadd;

let gone;

let checkadd;

let lastItem='00:00:000';

let testdel=0;

let amount =0;

let pointerEventsChange='auto';

// if(newList !== undefined){
//   convertedTimes=newList;
// }

//Takes the times from the timer and pushes them into a list which is used by statistics
//The function first converts the formatted time (ex: 1:28:489) into a float number which is then added to the convertedTimes list
export const times = () =>{
  convertedTimes=convertedTimes.filter(function(element){
    return element !== undefined;
  });
  if(convertedTimes[convertedTimes.length-1]===convertedTimes[convertedTimes.length-2]){
    convertedTimes.pop();
  }
  if(stopadd!=true){
    storedTimes.push(finaltime)
  }

  if(storedTimes.length>1){
  lastItem= storedTimes[storedTimes.length-1]
  lastItem=lastItem.replace(":",".");
  lastItem=lastItem.replace(":",".");
      
    //console.log(lastItem.substring(0,2))
    minutes= lastItem.substring(0,2)
    minutes=parseInt(minutes)
    //console.log(minutes)
    if(lastItem.substring(0,1)==='0'){
      lastItem=lastItem.replace('0','')
    }
    
    if(lastItem.substring(0,1)==='0'){
      lastItem=lastItem.replace('0.','')
    }

    if(minutes>=1){
      lastItem=lastItem.replace('.','')
      //console.log(lastItem.substring(1))
      lastItem=lastItem.substring(1)
      
    }
    lastItem=parseFloat(lastItem)
    lastItem=lastItem+(60*minutes)
    convertedTimes.push(lastItem)

    convertedTimes=convertedTimes.filter(function(value){
      return !Number.isNaN(value)
    })

    
  }
  if(checkadd===true){
    //console.log(convertedTimes)
    if(amount==0){
    convertedTimes.splice(convertedTimes.length-3,1)
    convertedTimes.pop()
    }
    else if(amount >1 ){
    convertedTimes.splice(convertedTimes.length-4,2)
    convertedTimes.pop()
    
    
    }
    else{
      convertedTimes.pop()
    }
    finaltime='0';
    //console.log(amount)      
    checkadd=false;
    amount+=1;      
  }

  if(del===true){
    if(convertedTimes[convertedTimes.length-2]==0){
      convertedTimes.splice(convertedTimes.length-3,3)
    }
    else if(convertedTimes[convertedTimes.length-1]==0){
      convertedTimes.splice(convertedTimes.length-2,2)
    }
    else if(convertedTimes[convertedTimes.length-1]==convertedTimes[convertedTimes.length-2]){
      convertedTimes.pop();
      convertedTimes.pop();
    }
    else{
    convertedTimes.pop();
    }
    if(amount>=1){
      convertedTimes.pop()
    }
    if(delExtra==true){
      //console.log(convertedTimes)
      convertedTimes.pop()
      //console.log(convertedTimes)
      //console.log('------------------------')
    }
    //console.log('del is true')
    del=false;
    finaltime='0';
  }
  if(convertedTimes[convertedTimes.length-1]==convertedTimes[convertedTimes.length-3]){
    convertedTimes.pop()
  }
  

  testdel=convertedTimes[convertedTimes.length-1]
  
  
  storeData(convertedTimes)
  //console.log(convertedTimes)
  //console.log(testdel)
  //console.log(finaltime)
  
  return (convertedTimes);
  
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1c1c1c',
    text: '#BB86FC',
    primary:'#BB86FC',
    
    placeholder:'#BB86FC'
  },
};
//deletes the most recent time when the delete button is pressed
//DO NOT DELETE USED ON STATS SCREEN
export const deletetime = () =>{

  if(del===true){
    convertedTimes.pop(); 
    storeData(convertedTimes);
    // console.log(convertedTimes)
  }
  //times();
  del=false;
  //console.log(convertedTimes)
  return (convertedTimes);
}

// clears most of the times
// probably won't be used in the actual app but is useful in resetting the times for testing purposes
export const cleartimes =()=>{
  if(del===true){
    convertedTimes=[convertedTimes[0]];
    convertedTimes.pop()
    finaltime='0'
  }
  del=false;
  storeData(convertedTimes)
  return(convertedTimes);
}

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
    //console.log(s)
    return(s)
}

//console.log('--------------')
let effect=0;

const App = ({navigation}) => {
  useEffect(()=>{
    if(amount>1){
      convertedTimes.pop()
      //console.log(convertedTimes)  
      storeData(convertedTimes)
    }
    if(getrid==true && mayberid<1 && delOnce==false){
      convertedTimes.pop()
      //console.log(convertedTimes)
      //console.log('showing delete screen')
      getrid=false;
      storeData(convertedTimes)
    } 
    if(confirmClear==true){
      //console.log('cleared time')
      convertedTimes.pop()
      storeData(convertedTimes)
      confirmClear=false;
      delOnce=false
    }
    if(delOnce==true){
      delExtra=true;
    }
  },[]);

  //console.log('maybe'+mayberid)
  
  

 

//stopwatch constants. Sets stopwatch and resets stopwatch
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  
//modal constants to set modal as either visible or invisible
  const showAddModal = () => setAddVisible(true);
  const hideAddModal = () => setAddVisible(false);
  const [Addvisible, setAddVisible] = React.useState(false);

  const showDelModal = () => setDelVisible(true);
  const hideDelModal = () => setDelVisible(false);
  const [Delvisible, setDelVisible] = React.useState(false);

  const showClearModal = () => setClearVisible(true);
  const hideClearModal = () => setClearVisible(false);
  const [ClearVisible, setClearVisible] = React.useState(false);

  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
   

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

function fixnum(input){
  var index = input.indexOf( '.' );

    if ( index > -1 ) {
        input = input.substr( 0, index + 1 ) + 
                input.slice( index ).replace( /\./g, '' );
    }
    input=input.replace(/[- #*;,<>\{\}\[\]\\\/]/gi, '');
                                            
    //console.log(input)
    //console.log('is this working')
    return input;
}
let value=inputVal;
//adds the time to the stats when the add button is pressed
function add(){
    value=fixnum(value)
    if (value=='.'){
      value=0
    }
    convertedTimes.push(value)
    //console.log(value)
    hideAddModal()
    setInputVal('')
    check=true;
    checkadd=true;
    //console.log(check)
    //finaltime='0'    
}

//removes anything written as input and closes out of the modalview
function cancel(){
  //console.log(convertedTimes)
  //console.log('amount'+amount)
  if(amount>1){
    if(convertedTimes[convertedTimes.length-1]==convertedTimes[convertedTimes.length-2]){
      convertedTimes.pop()
      doubleDel=true;
    }
    convertedTimes.pop()
    //console.log(convertedTimes)
    
  }
  finaltime='0'
  hideAddModal()
  hideDelModal()
  hideClearModal()
  setInputVal('')
  check=true;
  //console.log(check)
  stopadd=false;
  storeData(convertedTimes)
}

function onCancel(){
  if(amount>1 && doubleDel==true){
    convertedTimes.pop()
    storeData(convertedTimes)
    doubleDel=false;
  }
}

//opens the modalview when the add button is pressed
function openAdd(){
  check=true;
  showAddModal()
  //console.log(check)
}




//closes the modal when the user clicks anywhere else
function dismissed(){
  check=true;
  hideDelModal()
  hideAddModal()
  hideClearModal()
  stopadd=false;
  //console.log(check)

}








//modal function that allows user to enter a new time to put into statistics
  
  const addTimes = () => (
    
    <Provider theme={theme}>
      <Portal>
        <Dialog visible={Addvisible} onDismiss={() => {cancel(),onCancel()}} style={styles.dialogContainer}>
        <Dialog.Title style={{color:'#BB86FC'}}>Add</Dialog.Title>
        <Dialog.Content style={{color:'#BB86FC'}}>    
          <TextInput
                  label="Add A Time (In Seconds)"
                  keyboardAppearance='dark'  
                  //backgroundColor='black'
                  value={value}
                  onChangeText={text => setInputVal(text)}
                  numeric
                  keyboardType={'decimal-pad'}
                />
                </Dialog.Content>
                <Dialog.Actions>
                <Button color='#BB86FC' onPress={() => {add(),times(),mayberid++,confirmClear=false,delOnce=false}}>Add</Button>  
              <Button color='#BB86FC' onPress={() => {cancel()}}>Cancel</Button> 
            </Dialog.Actions>
        </Dialog>
      </Portal>      
      </Provider>
      
    );
    let convertedtimestext=convertedTimes[convertedTimes.length-1];
    if(convertedTimes[convertedTimes.length-1]==0){
      convertedtimestext=convertedTimes[convertedTimes.length-2]
      if(convertedTimes[convertedTimes.length-2]==0){
        convertedtimestext=convertedTimes[convertedTimes.length-3]
      }
    }
    

    const delperm = () => (
      <Provider theme={theme}>
        <Portal>
          <Dialog visible={Delvisible} onDismiss={()=> {dismissed()}} style={styles.dialogContainer}>
          <Dialog.Title>Would you like to delete: {convertedtimestext}</Dialog.Title>
            <Dialog.Actions>
                <Button color='#BB86FC' onPress={() => {hideDelModal(),amount=0,del=true, times(),amount=2,stopadd=false,getrid=true,confirmClear=false, delOnce=true}}>Delete</Button>                
                <Button color='#BB86FC' onPress={() => {cancel()}}>Cancel</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    )


    const clearAll = () => (
      <Provider theme={theme}>
        <Portal>
          <Dialog visible={ClearVisible} onDismiss={()=> {dismissed()}} style={styles.dialogContainer}>
          <Dialog.Title>Warning:{'\n'}This will delete all your times!</Dialog.Title>
            <Dialog.Actions>
                <Button color='#BB86FC' onPress={() => {hideClearModal(),del=true, cleartimes(), confirmClear=true, delOnce=false}}>Confirm</Button>                
                <Button color='#BB86FC' onPress={() => {cancel()}}>Cancel</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    )

    const PopUpButton = () => (
      <Provider>
      <Portal>
        <FAB.Group
        zIndex={5}
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
    )

  return (

    <View style={styles.container} >
    
      {/* <View style={styles.container}> */}
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
              amount=0;  
              mayberid=0; 
              confirmClear=false; 
              delOnce=false        
            }}>
            <Text style={styles.startbuttonText}>{!isStopwatchStart ? 'READY' : 'STOP'}</Text>
            {/* <Text style={{color:'transparent'}}>{!isStopwatchStart ? deletetime() : ''}</Text> */}
            
{/* where scramble text is called*/}
        
            {store()}
          
            <Text style={{color:'transparent'}}>{!isStopwatchStart ? times() : ''}</Text>
        
          </TouchableOpacity>
          {/* where the modal is called */}
          {addTimes()}
          {delperm()}
          {clearAll()}

          
         
            
{/* bottom icon buttons */}
 {/* <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%', left:Platform.OS === 'ios' ? '-13.5%':'-12%',bottom:'-17%'}}>

          <View style={{flex:1,flexDirection:'column',height:180,bottom:Platform.OS === 'ios' ? '37%': '32.5%', right:Platform.OS === 'ios' ? '-178%':'-207%',backgroundColor: 'transparent'}} pointerEvents='box-none'>
            
              <ActionButton
              buttonColor="#121212"
              hideShadow={true}
              //zIndex={100}
              //paddingHorizontal={50}
              size={45}
              spacing={0}
              offsetX={0}
              offsetY={0}
              
              
              buttonText="+"
              >
              
            
              <ActionButton.Item 
                spaceBetween={-5} 
                //buttonColor='transparent'
                zIndex={999}
                
                title="Add" 
                
                onPress={()=>{openAdd()}}>
                <Icon name="plus" style={styles.actionButtonIcon} />
              </ActionButton.Item>

            
            <ActionButton.Item 
              // zIndex={100}
                spaceBetween={-5} 
                //buttonColor='#121212' 
                title="Delete" 
                onPress={() => {showDelModal(),stopadd=true}}>
                <Icon name="delete" style={styles.actionButtonIcon} />
              </ActionButton.Item>

            
              <ActionButton.Item 
                spaceBetween={-5} 
                //buttonColor='#121212' 
                
                title="Clear" 
                onPress={() => {showClearModal()}}>
                
                <Icon name="broom" style={styles.actionButtonIcon} />
              </ActionButton.Item>          
            </ActionButton>
            <Text style={styles.OptionsButton}>Options</Text> 
            </View>
</View>
console.log('yo') */}

</View>
{PopUpButton()}
<View style={{flexDirection:'row'}} pointerEvents='box-none'>
{/* <View> */}
{/* Virtual Cube */}
          <Icon.Button
            name='cube-outline'
            flexDirection='column'
            backgroundColor='transparent'
            //backgroundColor='#121212'
            alignItems='center'
            color='white'
            opacity={1}
            size={30}
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
            onPress={() => navigation.navigate('VirtualCube')}
          >
          <Text style={styles.BottomTabText}>3DCube</Text>
          </Icon.Button>
{/* Statistics */}
          <Icon.Button            
            name='chart-line'
            alignItems='center'
            flexDirection='column'
            backgroundColor='transparent'
            //backgroundColor='#121212'
            color='white'
            opacity={1}
            size={30}
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
            onPress={() => {navigation.push('Statistics')}}
          >
          <Text style={styles.BottomTabText}>Statistics</Text>
          </Icon.Button>
{/* Home Screen */}
          <Icon.Button
            name='home' 
            flexDirection='column'
            backgroundColor='transparent'
            //backgroundColor='#121212'
            color='white'
            opacity={1}
            size={30}
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
            onPress={() => {navigation.navigate('Gradient'), storeData(convertedTimes)}}
          >
          <Text style={styles.BottomTabText}>Home</Text>
          </Icon.Button>
{/* Learn */}
          <Icon.Button
            name='school'
            backgroundColor='transparent'
            flexDirection='column'
            //backgroundColor='#121212'
            color='white'
            opacity={1}
            size={30}
            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
            onPress={() => {navigation.navigate('Learn')}}
          >
          <Text style={styles.BottomTabText}>Learn</Text>
          </Icon.Button>
          {/* <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          pointerEventsChange='none'
          
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
              //small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              pointerEventsChange='auto'
              console.log('opened')
              // do something if the speed dial is open
            }
            
            
          }}
        />
      </Portal>
    </Provider> */}
</View>
   </View> 

  

    
    
  );
}

export default App;

const styles = StyleSheet.create({ 

  container: {
    //basic container that encompases the screen
    
    
      // Holds the whole screen
      flex: 1, 
      //justifyContent: 'space-evenly', 
      alignItems: 'center', 
      backgroundColor:'#121212',
      paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
  
  },

  sectionStyle: {
    //encompases the entire app
    zIndex:1,
    flex: 1,
    position:'relative',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'transparent'
  },

  startbuttonText: {
    //text used for the start and stop button
    fontSize: 80,
    color:'#FFF',
    opacity:.87,
    top:'100%', 
  },

  ScrambleText: {
    fontSize: 25,
    width:'60%',
    color:'#FFF',
    opacity:.87,
    position:'absolute',
    top:Platform.OS === 'android' ? StatusBar.currentHeight+13:13,
    textAlign:'center',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
  },

  BottomTabText:{
    //text used for the bottom menu
    fontSize:10,
    color:'white',
    opacity:1,
    justifyContent:'center',
    left:'-7%',
    paddingHorizontal:'1%'
  },

  startbuttonSize:{
    
    width: 500,
    height: '150%',
    bottom:-70,
    
    alignItems:'center',
    backgroundColor:'#FFF',
    zIndex:1,
  },

  actionButtonIcon: {
    //size of the actionbutton icons. Icons only used in the action button
      zIndex:999,
      position:'relative',
      fontSize: 30,
      height: 33,
      color: 'white', 
      opacity:1, 
  },

  textInputStyle: {
    color: 'white',
    },


  dialogContainer: {
    //container used for the dialog modal
      backgroundColor: '#121212', 
      paddingHorizontal:'7%',
      opacity:1      
  },

  OptionsButton:{
    fontSize:10, 
    left:Platform.OS === 'android' ? '54%':'60%', 
    bottom:Platform.OS === 'android' ?'-96%':'-99%', 
    color:'white',
    opacity:1,      
    //justifyContent:'center'
  },
});



const options = {
  container: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#121212',
    height:70
  }, 
  text: {
    fontSize: 70,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'monospace',
    color: '#FFF',
    opacity:.87,
    marginLeft: 0,
    top:'90%',
  },
};
