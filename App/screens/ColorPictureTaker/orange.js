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
import { Constants } from 'expo';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import AwesomeButton from "react-native-really-awesome-button";
import {val} from '../PictureTaker';



//const val = Math.floor(100000 + Math.random() * 9999999);


let fileType= Platform.OS === 'ios' ? 'jpeg':'png'



export default class App extends Component {
  state = {
    image: null,
    uploading: false,
  };
//   UNSAFE_componentWillMount() { 
//     this._takePhoto()
// }
  
  render() {
    const {navigate} = this.props.navigation;

    let {
      image
    } = this.state;
    
    console.log(val);
    return (
      <View style={styles.container}>
        <AwesomeButton 
            width={300} 
            height={65}
            backgroundColor='#6d00eb'
            textSize={27}
            borderRadius={10}
            activeOpacity={.8}	
            backgroundDarker='#5c00c7'
            backgroundShadow='transparent'
            raiseLevel={5}
            onPress={this._takePhoto}
            >
            Take Photo
        </AwesomeButton>

        
      </View>
    );
  }

  _takePhoto = async () => {
    const { navigate } = this.props.navigation;

    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri });
        this.uploadImageAsync(pickerResult.uri);
        navigate('Green')
      }      
    }
  };

 uploadImageAsync(pictureuri) {
  let apiUrl = 'https://metal-density-310218.wl.r.appspot.com/endpoint';
  
  console.log('orange'+val+'.'+fileType)

    var data = new FormData();  
    data.append('file', {  
      uri: pictureuri,
      name: 'orange'+val+'.'+fileType,
      type: 'image/'+fileType
      
    })
    
    fetch(apiUrl, {  
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      method: 'POST',
      body: data
    }).then(
      response => {
        console.log('succ ')
        console.log(response)
      }
      ).catch(err => {
      console.log('err ')
      console.log(err)
      amount--;
    } )
    
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