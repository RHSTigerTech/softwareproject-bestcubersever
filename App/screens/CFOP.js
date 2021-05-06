
import React, { Component,useState, useRef  } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Platform, StatusBar, Text, Image, Button, ScrollView, TouchableOpacity, SafeAreaView, Dimensions, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default class App extends React.PureComponent {
  
  

  render() {
    const {navigate} = this.props.navigation;

    // const myScript = 
      
    //   setTimeout(function() { window.alert('hi') }, 2000);
    //   true;
    // ;
    return (
      <View style={{ flex: 1 }}>
        <View style={{height:'90%'}}>
        <WebView
          source={{
            uri:
              'https://www.rubiks.com/en-us/blog/how-to-solve-the-rubiks-cube-fridrich-method-cfop-stage-1',
          }}
          startInLoadingState={true}
  renderLoading={() => (
    <ActivityIndicator
      color='black'
      size='large'
      style={styles.flexContainer}
    />
  )}
          //injectedJavaScript={myScript}
        />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BottomTabText:{
    //Text used for the bottom menu
    fontSize:10,
    color:'white',
    opacity:1,
    justifyContent:'center',
    left:'-7%',
    paddingHorizontal:'1%'
  },
})

// import React, {Component} from 'react';
// import { WebView } from 'react-native-webview';

// export default class App extends Component {
//   render() {
//     return( 
//       <WebView source={{uri:'https://rhstigertech.github.io/softwareproject-bestcubersever/cuber/'}} />
//     );
//   }
// }
