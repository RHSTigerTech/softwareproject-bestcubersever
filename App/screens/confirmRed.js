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

import {Button} from "react-native-elements";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



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

let colorSwitch4=0;
let startColor4=Math.floor(Math.random() * 6);

let colorSwitch5=0;
let startColor5=Math.floor(Math.random() * 6);

let colorSwitch6=0;
let startColor6=Math.floor(Math.random() * 6);

let colorSwitch7=0;
let startColor7=Math.floor(Math.random() * 6);

let colorSwitch8=0;
let startColor8=Math.floor(Math.random() * 6);

let colorSwitch9=0;
let startColor9=Math.floor(Math.random() * 6);



let fileType= Platform.OS === 'ios' ? 'jpeg':'png'








export {val};

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonColor1:colors[startColor1],
            buttonColor2:colors[startColor2],
            buttonColor3:colors[startColor3],
            buttonColor4:colors[startColor4],
            buttonColor5:colors[startColor5],
            buttonColor6:colors[startColor6],
            buttonColor7:colors[startColor7],
            buttonColor8:colors[startColor8],
            buttonColor9:colors[startColor9],
        }
    }

  state = {
    image: null,
    uploading: false,
  };

  UNSAFE_componentWillMount() { 
    colorSwitch1=0;
    colorSwitch2=0;
    colorSwitch3=0;
    colorSwitch4=0;
    colorSwitch5=0;
    colorSwitch6=0;
    colorSwitch7=0;
    colorSwitch8=0;
    colorSwitch9=0;
    // startColor1=Math.floor(Math.random() * 6);
    // startColor2=Math.floor(Math.random() * 6);
    // startColor3=Math.floor(Math.random() * 6);
    // startColor4=Math.floor(Math.random() * 6);
    // startColor5=Math.floor(Math.random() * 6);
    // startColor6=Math.floor(Math.random() * 6);
    // startColor7=Math.floor(Math.random() * 6);
    // startColor8=Math.floor(Math.random() * 6);
    // startColor9=Math.floor(Math.random() * 6);



    
}
  onButtonPress1 = () => {
      if(colorSwitch1==1){
        this.setState({buttonColor1: 'white'});
        colorSwitch2--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
        
      }
      if(colorSwitch1==2){
        this.setState({buttonColor1: 'blue'});
        colorSwitch2--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
      }
      if(colorSwitch1==3){
        this.setState({buttonColor1: 'darkorange'});
        colorSwitch2--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
      }
      if(colorSwitch1==4){
        this.setState({buttonColor1: 'green'});
        colorSwitch2--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
      }
      if(colorSwitch1==5){
        this.setState({buttonColor1: 'red'});
        colorSwitch2--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
      }
      if(colorSwitch1==6){
        this.setState({buttonColor1: 'yellow'});
        colorSwitch1=0;
        colorSwitch2--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
      }

  }
  onButtonPress2 = () => {
    if(colorSwitch2==1){
      this.setState({buttonColor2: 'white'});
      colorSwitch1--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
    }
    if(colorSwitch2==2){
      this.setState({buttonColor2: 'blue'});
      colorSwitch1--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
    }
    if(colorSwitch2==3){
      this.setState({buttonColor2: 'darkorange'});
      colorSwitch1--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
    }
    if(colorSwitch2==4){
      this.setState({buttonColor2: 'green'});
      colorSwitch1--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
    }
    if(colorSwitch2==5){
      this.setState({buttonColor2: 'red'});
      colorSwitch1--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
    }
    if(colorSwitch2==6){
      this.setState({buttonColor2: 'yellow'});
      colorSwitch2=0;
      colorSwitch1--;
        colorSwitch3--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;
    }
  }
  onButtonPress3 = () => {
      if(colorSwitch3==1){
        this.setState({buttonColor3: 'white'});
        colorSwitch1--;
        colorSwitch2--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;

      }
      if(colorSwitch3==2){
        this.setState({buttonColor3: 'blue'});
        colorSwitch1--;
        colorSwitch2--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;

      }
      if(colorSwitch3==3){
        this.setState({buttonColor3: 'darkorange'});
        colorSwitch1--;
        colorSwitch2--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;

      }
      if(colorSwitch3==4){
        this.setState({buttonColor3: 'green'});
        colorSwitch1--;
        colorSwitch2--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;

      }
      if(colorSwitch3==5){
        this.setState({buttonColor3: 'red'});
        colorSwitch1--;
        colorSwitch2--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;

      }
      if(colorSwitch3==6){
        this.setState({buttonColor3: 'yellow'});
        colorSwitch3=0;
        colorSwitch1--;
        colorSwitch2--;
        colorSwitch4--;
        colorSwitch5--;
        colorSwitch6--;
        colorSwitch7--;
        colorSwitch8--;
        colorSwitch9--;

      }
  }
  onButtonPress4 = () => {
    if(colorSwitch4==1){
      this.setState({buttonColor4: 'white'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch3--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch9--;

    }
    if(colorSwitch4==2){
      this.setState({buttonColor4: 'blue'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch3--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch9--;

    }
    if(colorSwitch4==3){
      this.setState({buttonColor4: 'darkorange'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch3--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch9--;

    }
    if(colorSwitch4==4){
      this.setState({buttonColor4: 'green'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch3--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch9--;

    }
    if(colorSwitch4==5){
      this.setState({buttonColor4: 'red'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch3--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch9--;

    }
    if(colorSwitch4==6){
      this.setState({buttonColor4: 'yellow'});
      colorSwitch4=0;
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch3--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch9--;

    }
  }
  onButtonPress5 = () => {
  if(colorSwitch5==1){
    this.setState({buttonColor5: 'white'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch3--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch5==2){
    this.setState({buttonColor5: 'blue'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch3--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch5==3){
    this.setState({buttonColor5: 'darkorange'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch3--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch5==4){
    this.setState({buttonColor5: 'green'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch3--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch5==5){
    this.setState({buttonColor5: 'red'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch3--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch5==6){
    this.setState({buttonColor5: 'yellow'});
    colorSwitch5=0;
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch3--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  }
  onButtonPress6 = () => {
  if(colorSwitch6==1){
    this.setState({buttonColor6: 'white'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch3--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch6==2){
    this.setState({buttonColor6: 'blue'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch3--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch6==3){
    this.setState({buttonColor6: 'darkorange'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch3--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch6==4){
    this.setState({buttonColor6: 'green'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch3--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch6==5){
    this.setState({buttonColor6: 'red'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch3--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch6==6){
    this.setState({buttonColor6: 'yellow'});
    colorSwitch6=0;
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch3--;
    colorSwitch7--;
    colorSwitch8--;
    colorSwitch9--;

  }
  }
  onButtonPress7 = () => {
  if(colorSwitch7==1){
    this.setState({buttonColor7: 'white'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch3--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch7==2){
    this.setState({buttonColor7: 'blue'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch3--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch7==3){
    this.setState({buttonColor7: 'darkorange'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch3--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch7==4){
    this.setState({buttonColor7: 'green'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch3--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch7==5){
    this.setState({buttonColor7: 'red'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch3--;
    colorSwitch8--;
    colorSwitch9--;

  }
  if(colorSwitch7==6){
    this.setState({buttonColor7: 'yellow'});
    colorSwitch7=0;
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch3--;
    colorSwitch8--;
    colorSwitch9--;

  }
  }
  onButtonPress8 = () => {
  if(colorSwitch8==1){
    this.setState({buttonColor8: 'white'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch3--;
    colorSwitch9--;

  }
  if(colorSwitch8==2){
    this.setState({buttonColor8: 'blue'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch3--;
    colorSwitch9--;

  }
  if(colorSwitch8==3){
    this.setState({buttonColor8: 'darkorange'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch3--;
    colorSwitch9--;

  }
  if(colorSwitch8==4){
    this.setState({buttonColor8: 'green'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch3--;
    colorSwitch9--;

  }
  if(colorSwitch8==5){
    this.setState({buttonColor8: 'red'});
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch3--;
    colorSwitch9--;

  }
  if(colorSwitch8==6){
    this.setState({buttonColor8: 'yellow'});
    colorSwitch8=0;
    colorSwitch1--;
    colorSwitch2--;
    colorSwitch4--;
    colorSwitch5--;
    colorSwitch6--;
    colorSwitch7--;
    colorSwitch3--;
    colorSwitch9--;

  }
  }
  onButtonPress9 = () => {
    if(colorSwitch9==1){
      this.setState({buttonColor9: 'white'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch4--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch3--;

    }
    if(colorSwitch9==2){
      this.setState({buttonColor9: 'blue'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch4--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch3--;

    }
    if(colorSwitch9==3){
      this.setState({buttonColor9: 'darkorange'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch4--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch3--;

    }
    if(colorSwitch9==4){
      this.setState({buttonColor9: 'green'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch4--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch3--;

    }
    if(colorSwitch9==5){
      this.setState({buttonColor9: 'red'});
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch4--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch3--;

    }
    if(colorSwitch9==6){
      this.setState({buttonColor9: 'yellow'});
      colorSwitch9=0;
      colorSwitch1--;
      colorSwitch2--;
      colorSwitch4--;
      colorSwitch5--;
      colorSwitch6--;
      colorSwitch7--;
      colorSwitch8--;
      colorSwitch3--;

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
<View style={{flex:2}}></View>
      <View style={styles.topcontainer}>
      
        <Button buttonStyle={{backgroundColor:this.state.buttonColor1, width:70, height:70}} onPress={colorSwitch1++,  this.onButtonPress1} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor2, width:70, height:70}} onPress={colorSwitch2++,  this.onButtonPress2} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor3, width:70, height:70}} onPress={colorSwitch3++,  this.onButtonPress3} />  
        

      </View>

      <View style={styles.middlecontainer}>
        <Button buttonStyle={{backgroundColor:this.state.buttonColor4, width:70, height:70}} onPress={colorSwitch4++,  this.onButtonPress4} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor5, width:70, height:70}} onPress={colorSwitch5++,  this.onButtonPress5} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor6, width:70, height:70}} onPress={colorSwitch6++,  this.onButtonPress6} />   
      </View>

      <View style={styles.bottomcontainer}>
        <Button buttonStyle={{backgroundColor:this.state.buttonColor7, width:70, height:70}} onPress={colorSwitch7++,  this.onButtonPress7} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor8, width:70, height:70}} onPress={colorSwitch8++,  this.onButtonPress8} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor9, width:70, height:70}} onPress={colorSwitch9++,  this.onButtonPress9} />   
      </View>
      <View style={{flex:2}}>
      
      </View>
      <View style={{bottom:'5%',justifyContent:'center', flexDirection:'row'}}>
        <View style={{paddingRight:'25%%'}}>
      <Icon.Button
                        name='arrow-left-bold' 
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        alignSelf='center'
                        alignItems='center'
                        opacity={1}
                        size={40}
                        //paddingHorizontal='4%'
                        onPress={() => navigate('confirmGreen')}
                    >
                    <Text style={styles.BottomTabTextLeft}>Back</Text>
                    </Icon.Button>
                    </View>

                    <View style={{paddingLeft:'25%'}}>

                    <Icon.Button
                        name='arrow-right-bold' 
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        alignSelf='center'
                        opacity={1}
                        size={40}
                        //paddingHorizontal='4%'
                        onPress={() => navigate('confirmYellow')}
                    >
                    <Text style={styles.BottomTabTextRight}>Next</Text>
                    </Icon.Button>
                    </View>

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
    paddingVertical:'5%',
    backgroundColor:'#121212',
    
  },

  bottomcontainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    flexWrap:'wrap',
    flexDirection:'row',
    paddingHorizontal:'10%',
    paddingVertical:'5%',
    backgroundColor:'#121212',
    
  },
  BottomTabTextLeft:{
    //Text used for the bottom menu
    fontSize:15,
    color:'white',
    opacity:1,
    justifyContent:'center',
    right:'6%',
    //paddingHorizontal:'1%'
  },
  BottomTabTextRight:{
    //Text used for the bottom menu
    fontSize:15,
    color:'white',
    opacity:1,
    justifyContent:'center',
    left:'-11%',
    //paddingHorizontal:'1%'
  },
  

});