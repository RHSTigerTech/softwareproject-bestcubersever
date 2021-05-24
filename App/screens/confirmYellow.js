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
  Alert
} from 'react-native';
import Svg, {Line, Polygon} from 'react-native-svg'

import {Button} from "react-native-elements";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {defaultCube} from './PictureTaker'
import {Card} from 'react-native-elements';


const B = (props) => <Text style={{fontWeight: 'bold',fontSize:25}}>{props.children}</Text>

let show=true;

let checkState=defaultCube;
const colors=['white', 'blue', 'darkorange', 'green', 'red', 'yellow' ]

const colorPosition=['u', 'b', 'l', 'f', 'r', 'd']
let amount =1;
let colorName='';

let colorSwitch1;
let startColor1;
let PhotoColor1;

let colorSwitch2;
let startColor2;
let PhotoColor2;

let colorSwitch3;
let startColor3;
let PhotoColor3;

let colorSwitch4;
let startColor4;
let PhotoColor4;

let colorSwitch5;
let startColor5;
let PhotoColor5;

let colorSwitch6;
let startColor6;
let PhotoColor6;

let colorSwitch7;
let startColor7;
let PhotoColor7;

let colorSwitch8;
let startColor8;
let PhotoColor8;

let colorSwitch9;
let startColor9;
let PhotoColor9;


  
let data1;
let data2;
let data3;
let data4;
let data5;
let data6;
let data7;
let data8;
let data9;







let totalPositionYellowSide=[]
//console.log(totalPositionYellowSide)
export{totalPositionYellowSide}

// if(usedImage=true){
//   //set to colors used in images
// }



// let WhiteData='u'
// let BlueData='f'
// let OrangeData='r'
// let YelloData='d'
// let RedData='l'
// let GreenData='b'


let fileType= Platform.OS === 'ios' ? 'jpeg':'png'









export default class App extends Component {
      
    constructor(props){
        super(props);
        if(defaultCube==true){
          
          colorSwitch1=0
          colorSwitch2=0
          colorSwitch3=0                          
          colorSwitch4=0                          
          colorSwitch5=0                          
          colorSwitch6=0                          
          colorSwitch7=0                          
          colorSwitch8=0                          
          colorSwitch9=0
          startColor1=0
          startColor2=0
          startColor3=0
          startColor4=0
          startColor5=5
          startColor6=0
          startColor7=0
          startColor8=0
          startColor9=0
           data1=colorPosition[startColor1]

 data2=colorPosition[startColor2]

 data3=colorPosition[startColor3]

 data4=colorPosition[startColor4]

 data5=colorPosition[startColor5]

 data6=colorPosition[startColor6]

 data7=colorPosition[startColor7]

 data8=colorPosition[startColor8]

 data9=colorPosition[startColor9]
          totalPositionYellowSide=[
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
          ].join('');
        this.state = {
          buttonColor1:'grey',
          buttonColor2:'grey',
          buttonColor3:'grey',
          buttonColor4:'grey',
          buttonColor5:colors[5],
          buttonColor6:'grey',
          buttonColor7:'grey',
          buttonColor8:'grey',
          buttonColor9:'grey',
          isLoading:false
        }
      }
      else{
        PhotoColor1=Math.floor(Math.random() * 6)
        PhotoColor2=Math.floor(Math.random() * 6)
        PhotoColor3=Math.floor(Math.random() * 6)
        PhotoColor4=Math.floor(Math.random() * 6)
        PhotoColor5=Math.floor(Math.random() * 6)
        PhotoColor6=Math.floor(Math.random() * 6)
        PhotoColor7=Math.floor(Math.random() * 6)
        PhotoColor8=Math.floor(Math.random() * 6)
        PhotoColor9=Math.floor(Math.random() * 6)
        data1=colorPosition[startColor1]

data2=colorPosition[PhotoColor2]

data3=colorPosition[PhotoColor3]

data4=colorPosition[PhotoColor4]

 data5=colorPosition[PhotoColor5]

 data6=colorPosition[PhotoColor6]

 data7=colorPosition[PhotoColor7]

 data8=colorPosition[PhotoColor8]

 data9=colorPosition[PhotoColor9]

        totalPositionYellowSide=[
          data1,
          data2,
          data3,
          data4,
          data5,
          data6,
          data7,
          data8,
          data9,
        ].join('')
        this.state = {
          buttonColor1:colors[PhotoColor1],
            buttonColor2:colors[PhotoColor2],
            buttonColor3:colors[PhotoColor3],
            buttonColor4:colors[PhotoColor4],
            buttonColor5:colors[PhotoColor5],
            buttonColor6:colors[PhotoColor6],
            buttonColor7:colors[PhotoColor7],
            buttonColor8:colors[PhotoColor8],
            buttonColor9:colors[PhotoColor9],
          
          
      }
      }
      //this.isLoading=this.isLoading.bind(this);

    }

  
  //this.addUser=this.addUser.bind(this);


  doSignup = () => {
    this.setState({ isLoading: true });
    // await asyncSignupFunction();
    // this.setState({ isLoading: false })
    
  };

  createTwoButtonAlert = () =>{
    const {navigate} = this.props.navigation;
    this.setState({ isLoading: true });
    //navigate('Solution')
    Alert.alert(
      "Loading Solution",
      "This can take a while the first time. Press OK to start loading.",
      [
        
        { text: "OK", onPress: () => {navigate('Solution')} }
      ]
    );
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
        data1=colorPosition[colorSwitch1-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data1=colorPosition[colorSwitch1-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data1=colorPosition[colorSwitch1-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data1=colorPosition[colorSwitch1-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data1=colorPosition[colorSwitch1-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
      }
      if(colorSwitch1==6){
        this.setState({buttonColor1: 'yellow'});
        data1=colorPosition[colorSwitch1-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data2=colorPosition[colorSwitch2-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data2=colorPosition[colorSwitch2-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data2=colorPosition[colorSwitch2-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data2=colorPosition[colorSwitch2-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data2=colorPosition[colorSwitch2-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data2=colorPosition[colorSwitch2-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data3=colorPosition[colorSwitch3-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data3=colorPosition[colorSwitch3-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data3=colorPosition[colorSwitch3-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data3=colorPosition[colorSwitch3-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data3=colorPosition[colorSwitch3-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
        data3=colorPosition[colorSwitch3-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data4=colorPosition[colorSwitch4-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data4=colorPosition[colorSwitch4-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data4=colorPosition[colorSwitch4-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data4=colorPosition[colorSwitch4-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data4=colorPosition[colorSwitch4-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data4=colorPosition[colorSwitch4-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data5=colorPosition[colorSwitch5-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data5=colorPosition[colorSwitch5-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data5=colorPosition[colorSwitch5-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data5=colorPosition[colorSwitch5-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data5=colorPosition[colorSwitch5-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data5=colorPosition[colorSwitch5-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data6=colorPosition[colorSwitch6-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data6=colorPosition[colorSwitch6-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data6=colorPosition[colorSwitch6-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data6=colorPosition[colorSwitch6-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data6=colorPosition[colorSwitch6-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data6=colorPosition[colorSwitch6-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data7=colorPosition[colorSwitch7-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data7=colorPosition[colorSwitch7-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data7=colorPosition[colorSwitch7-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data7=colorPosition[colorSwitch7-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data7=colorPosition[colorSwitch7-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data7=colorPosition[colorSwitch7-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data8=colorPosition[colorSwitch8-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data8=colorPosition[colorSwitch8-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data8=colorPosition[colorSwitch8-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data8=colorPosition[colorSwitch8-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data8=colorPosition[colorSwitch8-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    data8=colorPosition[colorSwitch8-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data9=colorPosition[colorSwitch9-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data9=colorPosition[colorSwitch9-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data9=colorPosition[colorSwitch9-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data9=colorPosition[colorSwitch9-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data9=colorPosition[colorSwitch9-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
      data9=colorPosition[colorSwitch9-1]
        totalPositionYellowSide=[data1,data2,data3,data4,data5,data6,data7,data8,data9,].join('')
        console.log(totalPositionYellowSide)
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
    console.log(totalPositionYellowSide)
    let {
      image
    } = this.state;
    
    const Item= ({}) => (
      <View style={{marginHorizontal: '-15%', left:'29%', paddingBottom:'30%'}}>
        <Text style={{color:'white', fontSize:30}}>YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
      </View>
      );
    function LoadingSolver(){
      return(
        <View style={{position:'absolute'}} >
          
          {console.log('yoooooo')}

          <ActivityIndicator size="large" color="white" />
          <Text style={styles.Warning}>Calculating Solve. Depeding on your phone and connection this may take a while.</Text>

        </View>
      )
    }
  

    
    return (

      <View style={{backgroundColor:'#121212', flex:1}}>
        
<StatusBar barStyle="default" />
<View style={{position:'absolute',left:0, right:0}}>
<Card containerStyle={{backgroundColor:'#121212'}}>

  <Text style={styles.Warning}><B>Warning:</B> Going back will reset the state of the current side.</Text>
  </Card>
</View>
<View style={{flex:2}}></View>

      <View style={styles.topcontainer}>
        <Button buttonStyle={{backgroundColor:this.state.buttonColor7, width:70, height:70}} onPress={colorSwitch7++,  this.onButtonPress7} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor4, width:70, height:70}} onPress={colorSwitch4++,  this.onButtonPress4} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor1, width:70, height:70}} onPress={colorSwitch1++, this.onButtonPress1} />

        

      </View>

      <View style={styles.middlecontainer}>
        <Button buttonStyle={{backgroundColor:this.state.buttonColor8, width:70, height:70}} onPress={colorSwitch8++,  this.onButtonPress8} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor5, width:70, height:70}} onPress={colorSwitch5++,  this.onButtonPress5} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor2, width:70, height:70}} onPress={colorSwitch2++,  this.onButtonPress2} />

      </View>

      <View style={styles.bottomcontainer}>
        <Button buttonStyle={{backgroundColor:this.state.buttonColor9, width:70, height:70}} onPress={colorSwitch9++,  this.onButtonPress9} />   
        <Button buttonStyle={{backgroundColor:this.state.buttonColor6, width:70, height:70}} onPress={colorSwitch6++,  this.onButtonPress6} />   
        <Button buttonStyle={{backgroundColor:this.state.buttonColor3, width:70, height:70}} onPress={colorSwitch3++,  this.onButtonPress3} />  


      </View>
      <Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="10%" y1="37%" x2="90%" y2="37%" stroke="white" strokeWidth="2" pointerEvents="none"/>
</Svg>
<Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="10%" y1="53%" x2="90%" y2="53%" stroke="white" strokeWidth="2" pointerEvents="none"/>
  </Svg>
<Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="10%" y1="53%" x2="90%" y2="53%" stroke="white" strokeWidth="2" pointerEvents="none"/>
  </Svg>
      <Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="10%" y1="20%" x2="10%" y2="70%" stroke="blue" strokeWidth="10" pointerEvents="none"  />
  </Svg>
  <Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="37.5%" y1="20%" x2="37.5%" y2="70%" stroke="white" strokeWidth="2" pointerEvents="none"/>
</Svg>
<Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="62.5%" y1="20%" x2="62.5%" y2="70%" stroke="white" strokeWidth="2" pointerEvents="none"/>
  </Svg>
  <Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="90%" y1="20%" x2="90%" y2="70%" stroke="green" strokeWidth="10" pointerEvents="none"/>
  </Svg>


  <Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="8.5%" y1="20%" x2="91.5%" y2="20%" stroke="darkorange" strokeWidth="10" pointerEvents="none"/>
</Svg>


  <Svg height="100%" width="100%" position='absolute' pointerEvents='none' >
  <Line x1="8.5%" y1="70%" x2="91.5%" y2="70%" stroke="red" strokeWidth="10" pointerEvents="none"/>
  </Svg>
      <View style={{flex:2}}>
      <Card containerStyle={{backgroundColor:'#121212', top:'15%'}}>
  <Text style={styles.Warning}> Make sure the outside grid colors correspond with each faces center.</Text>
  </Card>
      </View>
      <View style={{bottom:'5%',justifyContent:'center', flexDirection:'row'}}>
        <View style={{paddingRight:'25%'}}>
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
                        onPress={() => navigate('confirmOrange')}
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
                        onPress={this.createTwoButtonAlert}
                      >
                    <Text style={styles.BottomTabTextRight}>Next</Text>
                    </Icon.Button>
                    </View>
                    <View style={{position:'absolute'}}>
                      {console.log(this.state.isLoading)}
                    <ActivityIndicator size="large" color="white" animating={this.state.isLoading} />


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
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
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
  Warning:{
    //Text used for the bottom menu
    fontSize:20,
    color:'white',
    opacity:1,
    //justifyContent:'center',
    textAlign:'center',
    //paddingHorizontal:'5%',
    
    //top:'5%',
    //flexWrap:'wrap',

    //left:'-11%',
    //paddingHorizontal:'1%'
  },
  

});