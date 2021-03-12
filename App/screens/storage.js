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
      const jsonValue = JSON.stringify(value) 
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
    }
  }
  export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      console.log(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
  
      //return (jsonValue)
    } catch(e) {
      // error reading value
    }
  }

  getData()
  