import React, { useState, Component } from 'react';
import {SafeAreaView,StyleSheet,Text,View,TouchableHighlight,TouchableOpacity,StatusBar, ModalDropdown, Modal, Pressable} from 'react-native';
import {Header} from 'react-native-elements';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from 'react-native-action-button';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';



export const storeData = async (value) => {
    try {
      let jsonValue = JSON.stringify(value) 
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
    }
  }
export const getData = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem('@storage_Key')
      
      convertedJson=jsonValue != null ? JSON.parse(jsonValue) : null;
      let jsonstring=JSON.stringify(convertedJson)
      let i=0;
      
      console.log(jsonstring)
      let formattedjsonstring= jsonstring.split('[').join('')
      formattedjsonstring= formattedjsonstring.split(']').join('')
      formattedjsonstring= formattedjsonstring.split('\\').join('')
      formattedjsonstring= formattedjsonstring.split('"').join('')

      console.log(formattedjsonstring)
      timerarray=formattedjsonstring.split(',');
      
      console.log(timerarray)
      console.log(timerarray)
      array=timerarray.map(Number)
      console.log('-----------')
      console.log(array)
      console.log('-----------')
      console.log(convertedJson)
      const propertyValues = Object.values(convertedJson);
      console.log(propertyValues)


      while (i<timerarray.length){
        convertedTimes.push(timerarray[i,i+1])
        i++
      }

      return convertedJson;
      
      //return (jsonValue)
    } catch(e) {
      // error reading value
    }
  }
  