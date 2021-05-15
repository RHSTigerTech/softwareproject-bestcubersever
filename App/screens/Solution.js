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
  ScrollView
} from 'react-native';
import {Card} from 'react-native-elements';


import { CrossSolver, F2LSolver } from 'rubiks-cube-solver/src';
import {totalPositionWhiteSide} from './confirmWhite'
import {totalPositionBlueSide} from './confirmBlue'
import {totalPositionOrangeSide} from './confirmOrange'
import {totalPositionGreenSide} from './confirmGreen'
import {totalPositionRedSide} from './confirmRed'
import {totalPositionYellowSide} from './confirmYellow'




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
    console.log(solveMoves, options);


    console.log(solveMoves.cross)
    console.log(solveMoves.f2l)
    console.log(solveMoves.oll)
    console.log(solveMoves.pll)

    console.log(solveMovesString)

    const {navigate} = this.props.navigation;
//create function that return a text input depending on the the string type
   
    return (
      <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
            <View style={{height: '90%'}}>
                    <ScrollView 
                        style={styles.scroll}>
                          <Card containerStyle={{backgroundColor: '#121212'}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <View style={styles.viewMove}>
          <Image style={styles.movesImage} source={require('../Assets/basics/cb_rc.jpg')}/>
          <Text style={styles.textDescrip2}>R {'\n'}Rotate the right layer clockwise</Text>
      </View>
      <View style={styles.viewMove}>
          <Image style={styles.movesImage} source={require('../Assets/basics/cb_rcc.jpg')}/>
          <Text style={styles.textDescrip2}>R' {'\n'}Rotate the right layer counter clockwise</Text>
          <Text style={{color:'white'}}>{solveMoves.f2l}</Text>
      </View>

      <View style={styles.viewMove}>
          <Image style={styles.movesImage} source={require('../Assets/basics/cb_rwc.jpg')}/>
          <Text style={styles.textDescrip2}>Rw OR r {'\n'}Rotate the right layer and the middle layer clockwise</Text>
      </View>
      <View style={styles.viewMove}>
          <Image style={styles.movesImage} source={require('../Assets/basics/cb_rwcc.jpg')}/>
          <Text style={styles.textDescrip2}>Rw' OR r' {'\n'}Rotate the right layer and middle layer counter clockwise</Text>
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
      height: (Dimensions.get('window').width*.5)*.8, 
      resizeMode: 'contain', 
    },
    textDescrip2:{
      // Text thats a description
      color: 'white',
      fontSize: 13,
      width: '80%',
    },
    viewMove:{
      //Holds a move's picture and description
      flexDirection: 'column', 
      flexWrap: 'wrap', 
      width: '50%', 
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
  });