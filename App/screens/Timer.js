
import { Text } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import { ImageBackground, StyleSheet } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://iamthecu.be/' }} style={{ marginTop: 20 }} />;
  }
}