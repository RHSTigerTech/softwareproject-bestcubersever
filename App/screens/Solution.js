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
} from 'react-native';
import {cross, phases} from 'rubiks-cube-solver'
import { CrossSolver, F2LSolver } from 'rubiks-cube-solver/src';
import {totalPositionWhiteSide} from './confirmWhite'
import {totalPositionBlueSide} from './confirmBlue'
import {totalPositionOrangeSide} from './confirmOrange'
import {totalPositionGreenSide} from './confirmGreen'
import {totalPositionRedSide} from './confirmRed'
import {totalPositionYellowSide} from './confirmYellow'




let solver = require('rubiks-cube-solver');

export default class App extends Component {
  
  
  render() {

    console.log(totalPositionWhiteSide)
//relative to the front cube

    // f - blue
    // r - orange
    // u - white
    // y - yellow
    // l - red
    // b - green


    let cubeState = [
      totalPositionBlueSide, // front
      totalPositionOrangeSide, // right
      totalPositionWhiteSide, // up
      totalPositionYellowSide, // down
      totalPositionRedSide, // left
      totalPositionGreenSide // back
    ].join('');
    let solveMoves = solver(cubeState);
    console.log(solveMoves);
    console.log('yoooo')


    const {navigate} = this.props.navigation;

   
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>{solveMoves}</Text>

        
      </View>
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
  });