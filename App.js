import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, 
  Image, Alert, TouchableWithoutFeedback, 
  TouchableOpacity, TouchableHighlight, 
  SafeAreaView, Platform, Dimensions } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'

import {Button} from 'react-native-elements'

export default function App() {
  return (
    <View
      style={{
        backgroundColor:"#fff",
        flex:1,
      }}
    >
      <View 
        style={{
          backgroundColor:'dodgerblue',
          flex: 1,
        }}
      />
      <View 
        style={{
          backgroundColor:'gold',
          flex: 1,
        }}
      />
      <View 
        style={{
          backgroundColor:'tomato',
          flex: 1,
        }}
      />
    </View>
  );
}

