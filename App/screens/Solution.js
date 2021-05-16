import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Card} from 'react-native-elements';


import { CrossSolver, F2LSolver } from 'rubiks-cube-solver/src';
import {totalPositionWhiteSide} from './confirmWhite'
import {totalPositionBlueSide} from './confirmBlue'
import {totalPositionOrangeSide} from './confirmOrange'
import {totalPositionGreenSide} from './confirmGreen'
import {totalPositionRedSide} from './confirmRed'
import {totalPositionYellowSide} from './confirmYellow'

const R = require('../Assets/basics/cb_rc.jpg')
const Rprime= require('../Assets/basics/cb_rcc.jpg')
const Rw=require('../Assets/basics/cb_rwc.jpg')
const Rwprime= require('../Assets/basics/cb_rwcc.jpg')

const L=require('../Assets/basics/cb_lc.jpg')
const Lprime=require('../Assets/basics/cb_lcc.jpg')
const Lw=require('../Assets/basics/cb_lwc.jpg')
const Lwprime=require('../Assets/basics/cb_lwcc.jpg')

const U=require('../Assets/basics/cb_uc.jpg')
const Uprime=require('../Assets/basics/cb_ucc.jpg')
const Uw=require('../Assets/basics/cb_uwc.jpg')
const Uwprime=require('../Assets/basics/cb_uwcc.jpg')

const D=require('../Assets/basics/cb_dc.jpg')
const Dprime=require('../Assets/basics/cb_dcc.jpg')
const Dw=require('../Assets/basics/cb_dwc.jpg')
const Dwprime=require('../Assets/basics/cb_dwcc.jpg')

const F=require('../Assets/basics/cb_fc.jpg')
const Fprime=require('../Assets/basics/cb_fcc.jpg')
const Fw=require('../Assets/basics/cb_fwc.jpg')
const Fwprime=require('../Assets/basics/cb_fwcc.jpg')

const B=require('../Assets/basics/cb_bc.jpg')
const Bprime=require('../Assets/basics/cb_bcc.jpg')
const Bw=require('../Assets/basics/cb_bwc.jpg')
const Bwprime=require('../Assets/basics/cb_bwcc.jpg')




//let solver = require('rubiks-cube-solver');

export default class App extends Component {
  
  
  render() {

    //console.log(totalPositionWhiteSide)


//relative to the front cube

    // f - blue
    // r - orange
    // u - white
    // y - yellow
    // l - red
    // b - green


    // let cubeState = [
    //   totalPositionBlueSide, // front
    //   totalPositionOrangeSide, // right
    //   totalPositionWhiteSide, // up
    //   totalPositionYellowSide, // down
    //   totalPositionRedSide, // left
    //   totalPositionGreenSide // back
    // ].join('');
    // let solveMoves = solver(cubeState);
    // console.log(solveMoves);
    // console.log('yoooo')
    const solver = require('rubiks-cube-solver');
    let CrossStepImages=[];
    let CrossStepText=[];

    let cubeState = [
      'flulfbddr', // front
      'rudrruddl', // right
      'dbbburrfb', // up
      'llffdrubf', // down
      'rludlubrf', // left
      'lubfbfudl' // back
    ].join('');
    let options = { partitioned: true };
    let solveMoves = solver(cubeState, options);
    let solveMovesString = solver(cubeState);
    //console.log(solveMoves, options);


    console.log(solveMoves.cross)
    let crossSteps= solveMoves.cross.join(',')
    crossSteps=crossSteps.replace(/,/g, ' ')
    crossSteps=crossSteps.split(' ')
    console.log(crossSteps)

    console.log(solveMoves.f2l)
    let f2lSteps= solveMoves.f2l
    console.log(solveMoves.oll)
    let ollSteps= solveMoves.oll
    console.log(solveMoves.pll)
    let pllSteps= solveMoves.pll
    console.log(solveMovesString)

    const {navigate} = this.props.navigation;
//create function that return a text input depending on the the string type
//create for loop function that calls function as many times as there are moves
   
let steps= pllSteps.split(' ');
console.log(steps)



    // function amount(){
    //   for(let i=0;i<crossSteps.length;i++){
        
    //   return(
    //     <Text style={{color:'white'}}>yo</Text>
    //   )
    //   }
    // }
    function testIT(){
      return(
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_rc.jpg')}/>
                                    <Text style={styles.textDescrip2}>R {'\n'}Rotate the right layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_rcc.jpg')}/>
                                    <Text style={styles.textDescrip2}>R' {'\n'}Rotate the right layer counter clockwise</Text>
                                </View>

                                </View>
      )
    }

    function renderCrossSteps() {
      for( let i=0; i<crossSteps.length;i++){
        if(crossSteps[i]=='R'){
          CrossStepImages.push(R)
          CrossStepText.push('R \n Rotate the right layer clockwise')
        }
        if(crossSteps[i]=='Rprime'){
          CrossStepImages.push(Rprime)
          CrossStepText.push('R\' \n Rotate the right layer counter clockwise')
        }
        if(crossSteps[i]=='r'){
          CrossStepImages.push(Rw)
          CrossStepText.push('Rw OR r \nRotate the right layer and the middle layer clockwise')

        }
        if(crossSteps[i]=='rprime'){
          CrossStepImages.push(Rwprime)
          CrossStepText.push('Rw\' OR r\' \nRotate the right layer and middle layer counter clockwise')

        }
        if(crossSteps[i]=='L'){
          CrossStepImages.push(L)
          CrossStepText.push('L \nRotate the left layer clockwise')

        }
        if(crossSteps[i]=='Lprime'){
          CrossStepImages.push(Lprime)
          CrossStepText.push('L\' \nRotate the left layer counter clockwise')

        }
        if(crossSteps[i]=='l'){
          CrossStepImages.push(Lw)
          CrossStepText.push('Lw OR l \nRotate the left layer and the middle layer clockwise')

        }
        if(crossSteps[i]=='lprime'){
          CrossStepImages.push(Lwprime)
          CrossStepText.push('Lw\' OR l\' \nRotate the left layer and middle layer counter clockwise')

        }
        if(crossSteps[i]=='U'){
          CrossStepImages.push(U)
          CrossStepText.push('U \nRotate the top layer clockwise')

        }
        if(crossSteps[i]=='Uprime'){
          CrossStepImages.push(Uprime)
          CrossStepText.push('U\' \nRotate the top layer counter clockwise')

        }
        if(crossSteps[i]=='u'){
          CrossStepImages.push(Uw)
          CrossStepText.push('Uw OR u \nRotate the top layer and the middle layer clockwise')

        }
        if(crossSteps[i]=='uprime'){
          CrossStepImages.push(Uwprime)
          CrossStepText.push('Uw\' OR u\' \nRotate the top layer and middle layer counter clockwise')

        }
        if(crossSteps[i]=='D'){
          CrossStepImages.push(D)
          CrossStepText.push('D \nRotate the bottom layer clockwise')

        }
        if(crossSteps[i]=='Dprime'){
          CrossStepImages.push(Dprime)
          CrossStepText.push('D\' \nRotate the bottom layer counter clockwise')

        }
        if(crossSteps[i]=='d'){
          CrossStepImages.push(Dw)
          CrossStepText.push('Dw OR d \nRotate the bottom layer and the middle layer clockwise')

        }
        if(crossSteps[i]=='dprime'){
          CrossStepImages.push(Dwprime)
          CrossStepText.push('Dw\' OR d\' \nRotate the bottom layer and middle layer counter clockwise')

        }
        if(crossSteps[i]=='F'){
          CrossStepImages.push(F)
          CrossStepText.push('F \nRotate the front layer clockwise')

        }
        if(crossSteps[i]=='Fprime'){
          CrossStepImages.push(Fprime)
          CrossStepText.push('F\' \nRotate the front layer counter clockwise')

        }
        if(crossSteps[i]=='f'){
          CrossStepImages.push(Fw)
          CrossStepText.push('Fw OR f \nRotate the front layer and the middle layer clockwise')

        }
        if(crossSteps[i]=='fprime'){
          CrossStepImages.push(Fwprime)
          CrossStepText.push('Fw\' OR f\' \nRotate the front layer and middle layer counter clockwise')

        }
        if(crossSteps[i]=='B'){
          CrossStepImages.push(B)
          CrossStepText.push('B \nRotate the back layer clockwise')

        }
        if(crossSteps[i]=='Bprime'){
          CrossStepImages.push(Bprime)
          CrossStepText.push('B\' \nRotate the back layer counter clockwise')

        }
        if(crossSteps[i]=='b'){
          CrossStepImages.push(Bw)
          CrossStepText.push('Bw OR b \nRotate the back layer and the middle layer clockwise')

        }
        if(crossSteps[i]=='bprime'){
          CrossStepImages.push(Bwprime)
          CrossStepText.push('Bw\' OR b\' \nRotate the back layer and middle layer counter clockwise')

        }
        // else{
        //   CrossStepImages.push('yo')
        // }
      }
      
    }

    // function renderT() {

    //   // Ensure arr is defined in scope of, or is "visible" to, renderT()
    //   const arr = ['Hello', 'Awesome', 'Stack','Over','Flow', 'Have', 'A', 'Nice', 'Day'];
    
    //   return arr.map((obj, index) => {
    //     // Compose a unique key for the text element. A unique key is need when 
    //     // rendering lists of components
    //     const key = index;
    
    //     // Add return to ensure the text element is returned from map callback
    //     return <Text key={key}>{obj}</Text>;
    //   });
    // }


    return (
      
      <SafeAreaView style={styles.background}>
        <View style={styles.ViewContainer}>
          <View style={{height: '90%'}}>
              <ScrollView 
                  style={styles.scroll}>

                    <Card containerStyle={{backgroundColor: '#121212'}}>
                    <Card.Title style={styles.ContentsTitle}>Cross Step{/* Card Title*/}</Card.Title>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
      
      
      {renderCrossSteps()}
      <>
       {CrossStepImages.map(img =>  <ImageBackground style={styles.movesImage} source={img} >{CrossStepText.map(txt => <Text style={styles.textDescrip2}>{txt}</Text>)}</ImageBackground> )}
       {CrossStepText.map(txt => <Text style={styles.textDescrip2}>{txt}</Text>)}
     </>
     </View>
     </View>
      

  
  </Card>
  
  </ScrollView>
  </View>
  </View>
  </SafeAreaView>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#121212'
    },
    movesImage: {
      width: '80%', 
      height: (Dimensions.get('window').width*.5), 
      resizeMode: 'contain', 
      flexDirection:'row'
      
    },
    textDescrip2:{
      // Text thats a description
      color: 'white',
      fontSize: 13,
      width: '80%',
    },
    viewMove:{
      //Holds a move's picture and description
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      width: '100%', 
      alignContent: 'center', 
      
    },
    background:{
      backgroundColor:'#121212',
      flex:1
  },
  scroll: {
    // Scroll view
    backgroundColor: "transparent",
},
ViewContainer:{
  // Holds the whole screen
  flex: 1, 
  //justifyContent: 'space-evenly', 
  alignItems: 'center', 
  backgroundColor:'#121212',
  //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
},
ContentsTitle: {
  // Table of contents title
  color: 'white',
  fontSize: 25,
  fontWeight:'bold',
  
},
  });