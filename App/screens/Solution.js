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
import { F2LSolver } from 'rubiks-cube-solver/src';




export default class App extends Component {
  
  
  render() {

    const solver = require('rubiks-cube-solver');
//relative to the front cube

    // f - blue
    // r - orange
    // u - white
    // y - yellow
    // l - red
    // b - green


    let cubeState = [
      'ddrffrurl', // front
      'fudurubdd', // right
      'fdruublrd', // up
      'rbuldbrrf', // down
      'lfblldbbf', // left
      'blulbflfu' // back
    ].join('');
    let solveMoves = solver(cubeState,cross);
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