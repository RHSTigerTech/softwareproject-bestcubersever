import React, { Component,useState, useRef  } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Platform, StatusBar, Text, Image, Button, ScrollView, TouchableOpacity, SafeAreaView, Dimensions, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let shouldRender=1;

export default class App extends React.PureComponent {
  
  

  render() {
    const {navigate} = this.props.navigation;
    // if(shouldRender==1){
    //   navigate('Gradient')
    //   shouldRender=0;
    // }
    // const myScript = 
      
    //   setTimeout(function() { window.alert('hi') }, 2000);
    //   true;
    // ;
    return (
      <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer} >
                <View style={{height: '90%'}}>
        <WebView
          source={{
            uri:
              'http://cube.rider.biz/zz.php',
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
        <View style={{backgroundColor:'#121212', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', left:'1.35%'}}>
                 {/* Home Screen */}
                 <Icon.Button
                        name='home' 
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        alignSelf='center'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Gradient')}
                    >
                    <Text style={styles.BottomTabText}>Home</Text>
                    </Icon.Button>
                    <Icon.Button
                        name='school'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignSelf='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={({}) => navigate('Learn')}
                        >
                        <Text style={styles.BottomTabText}>Learn</Text>
                    </Icon.Button>
                    <Icon.Button
                        name='timer-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignSelf='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Timer')}
                        >
                        <Text style={styles.BottomTabText}>Timer</Text>
                    </Icon.Button>
                    {/* Learn */}
                    <Icon.Button
                        name='camera'
                        backgroundColor='transparent'
                        flexDirection='column'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        alignSelf='center'
                        paddingHorizontal='4%'
                        onPress={() => navigate('Scanner')}
                    >
                    <Text style={styles.BottomTabText}>Solver</Text>
                    </Icon.Button>
                    
            
                    {/* Statistics */}
                    <Icon.Button            
                        name='chart-line'
                        alignSelf='center'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Statistics')}
                    >
                    <Text style={styles.BottomTabText}>Statistics</Text>
                    </Icon.Button>
                   
            </View>
      </View>
      </SafeAreaView>
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

  background:{
    backgroundColor:'#121212',
    flex:1
},

ViewContainer:{
  // Holds the whole screen
  flex: 1, 
  //justifyContent: 'space-evenly', 
  //alignItems: 'center', 
  //backgroundColor:'#121212',
  //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
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