import React, { Component } from 'react';
import {
  ActivityIndicator,
  
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Constants } from 'expo';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import AwesomeButton from "react-native-really-awesome-button";
import {Button} from "react-native-elements";


const colors=['white', 'blue', 'darkorange', 'green', 'red', 'yellow' ]
const val = Math.floor(100000 + Math.random() * 9999999);
let amount =0;
let colorName='';

let colorSwitch1=0;
let startColor1=Math.floor(Math.random() * 6);

let colorSwitch2=0;
let startColor2=Math.floor(Math.random() * 6);

let colorSwitch3=0;
let startColor3=Math.floor(Math.random() * 6);



let fileType= Platform.OS === 'ios' ? 'jpeg':'png'








export {val};

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonColor1:colors[startColor1],
            buttonColor2:colors[startColor2],
            buttonColor3:colors[startColor3]
        }
    }

  state = {
    image: null,
    uploading: false,
  };
  onButtonPress1 = () => {
      if(colorSwitch1==1){
        this.setState({buttonColor1: 'white'});
        colorSwitch2--;
        colorSwitch3--;
      }
      if(colorSwitch1==2){
        this.setState({buttonColor1: 'blue'});
        colorSwitch2--;
        colorSwitch3--;
      }
      if(colorSwitch1==3){
        this.setState({buttonColor1: 'darkorange'});
        colorSwitch2--;
        colorSwitch3--;
      }
      if(colorSwitch1==4){
        this.setState({buttonColor1: 'green'});
        colorSwitch2--;
        colorSwitch3--;
      }
      if(colorSwitch1==5){
        this.setState({buttonColor1: 'red'});
        colorSwitch2--;
        colorSwitch3--;
      }
      if(colorSwitch1==6){
        this.setState({buttonColor1: 'yellow'});
        colorSwitch1=0;
        colorSwitch2--;
        colorSwitch3--;
      }

  }
  onButtonPress2 = () => {
    if(colorSwitch2==1){
      this.setState({buttonColor2: 'white'});
      colorSwitch1--;
      colorSwitch3--;
    }
    if(colorSwitch2==2){
      this.setState({buttonColor2: 'blue'});
      colorSwitch1--;
      colorSwitch3--;
    }
    if(colorSwitch2==3){
      this.setState({buttonColor2: 'darkorange'});
      colorSwitch1--;    
      colorSwitch3--;
    }
    if(colorSwitch2==4){
      this.setState({buttonColor2: 'green'});
      colorSwitch1--;    
      colorSwitch3--;
    }
    if(colorSwitch2==5){
      this.setState({buttonColor2: 'red'});
      colorSwitch1--;
      colorSwitch3--;
    }
    if(colorSwitch2==6){
      this.setState({buttonColor2: 'yellow'});
      colorSwitch2=0;
      colorSwitch1--;
      colorSwitch3--;
    }
  }

    onButtonPress3 = () => {
      if(colorSwitch3==1){
        this.setState({buttonColor2: 'white'});
        colorSwitch1--;
        colorSwitch2--;

      }
      if(colorSwitch3==2){
        this.setState({buttonColor3: 'blue'});
        colorSwitch1--;
        colorSwitch2--;

      }
      if(colorSwitch3==3){
        this.setState({buttonColor3: 'darkorange'});
        colorSwitch1--;   
        colorSwitch2--;

      }
      if(colorSwitch3==4){
        this.setState({buttonColor3: 'green'});
        colorSwitch1--;   
        colorSwitch2--;

      }
      if(colorSwitch3==5){
        this.setState({buttonColor3: 'red'});
        colorSwitch1--;
        colorSwitch2--;

      }
      if(colorSwitch3==6){
        this.setState({buttonColor3: 'yellow'});
        colorSwitch3=0;
        colorSwitch1--;
        colorSwitch2--;

      }
  }

  
  render() {
    

    const {navigate} = this.props.navigation;

    let {
      image
    } = this.state;
    
    console.log(val);
    return (
      <View style={{backgroundColor:'#121212', flex:1}}>
<StatusBar barStyle="default" />
      <View style={styles.topcontainer}>
        
        <Button  buttonStyle={{backgroundColor:this.state.buttonColor1, width:70, height:70}} onPress={colorSwitch1++,  this.onButtonPress1} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor2, width:70, height:70}} onPress={colorSwitch2++,  this.onButtonPress2} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor3, width:70, height:70}} onPress={colorSwitch3++,  this.onButtonPress3} />  
         
      </View>

      <View style={styles.middlecontainer}>
        <Button buttonStyle={{backgroundColor:this.state.buttonColor1, width:70, height:70}} onPress={colorSwitch1++,  this.onButtonPress1} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor2, width:70, height:70}} onPress={colorSwitch2++,  this.onButtonPress2} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor3, width:70, height:70}} onPress={colorSwitch3++,  this.onButtonPress3} />   
      </View>

      <View style={styles.bottomcontainer}>
        <Button buttonStyle={{backgroundColor:this.state.buttonColor1, width:70, height:70}} onPress={colorSwitch1++,  this.onButtonPress1} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor2, width:70, height:70}} onPress={colorSwitch2++,  this.onButtonPress2} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor3, width:70, height:70}} onPress={colorSwitch3++,  this.onButtonPress3} />   
      </View>

      </View>
    );
  }


   
  
}

const styles = StyleSheet.create({
  topcontainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    flexWrap:'wrap',
    flexDirection:'row',
    paddingHorizontal:'10%',
    paddingVertical:'5%',
    backgroundColor:'#121212',
    
    //top:'20%',
    
  },
  middlecontainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    flexWrap:'wrap',
    flexDirection:'row',
    paddingHorizontal:'10%',
    //paddingVertical:'5%',
    backgroundColor:'#121212',
    
  },

  bottomcontainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    flexWrap:'wrap',
    flexDirection:'row',
    paddingHorizontal:'10%',
    //paddingVertical:'5%',
    backgroundColor:'#121212',
    
  },
  

});