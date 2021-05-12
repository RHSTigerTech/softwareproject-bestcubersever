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






export default class App extends Component {
  
  
  render() {

    const solver = require('rubiks-cube-solver');
//relative to the front cube

    let cubeState = [
      'ddrffrurl', // front
      'fudurubdd', // right
      'fdruublrd', // up
      'rbuldbrrf', // down
      'lfblldbbf', // left
      'blulbflfu' // back
    ].join('');

    let solveMoves = solver(cubeState);
    console.log(solveMoves);
    
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