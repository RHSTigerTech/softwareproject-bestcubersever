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





let fileType= Platform.OS === 'ios' ? 'jpeg':'png'



export default class App extends Component {
  state = {
    image: null,
    uploading: false,
  };
  
  
  render() {
    const {navigate} = this.props.navigation;

    let {
      image
    } = this.state;
    
    console.log(val);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />

        {/* <Text
          style={styles.exampleText}>
          Example: Upload ImagePicker result
        </Text> */}
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
        <Button
          onPress={this._pickImage}
          title="Pick an image from camera roll"
        />

        <Button  onPress={({}) => navigate('Yellow')} title="Go to yellow" />

        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let {
      image
    } = this.state;

    if (!image) {
      return;
    }

    if(image){
        return(
            console.log('yoooo')
        );
    }
  };

  _share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  _takePhoto = async () => {
    const { navigate } = this.props.navigation;

    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri });
      }
      
      this.uploadImageAsync(pickerResult.uri);
      navigate('Yellow')
    }
  };

  _pickImage = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
      });


      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri});
      }

      this.uploadImageAsync(pickerResult.uri);
    }
  };
  
  uploadImageAsync(pictureuri) {
    let apiUrl = 'https://metal-density-310218.wl.r.appspot.com/endpoint';
     
    
  
    
    console.log('red'+val+'.'+fileType)
  
      var data = new FormData();  
      data.append('file', {  
        uri: pictureuri,
        name: 'red'+val+'.'+fileType,
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


  // getImageAsync(pictureuri) {
  //   let apiUrl = 'https://metal-density-310218.wl.r.appspot.com/sendColors?serial='+val+'&extension='+fileType;
     
    
  
  //   if (amount==0){
  //     colorName='white'
  //   }
  //   if (amount==1){
  //     colorName='blue'
  //   }
  //   if (amount==2){
  //     colorName='orange'
  //   }
  //   if (amount==3){
  //     colorName='green'
  //   }
  //   if (amount==4){
  //     colorName='red'
  //   }
  //   if (amount==5){
  //     colorName='yellow'
  //   }
  //   amount++;
  //   if(amount >5){
  //     amount=0;
  //   }
  //   console.log(colorName)
  //   console.log(''+colorName+val+fileType)
  
  //     var data = new FormData();  
  //     data.append('file', {  
  //       uri: pictureuri,
  //       name: ''+colorName+val+'.png',
  //       type: 'image/png'
        
  //     })
      
  //     fetch(apiUrl, {  
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'multipart/form-data'
  //       },
  //       method: 'POST',
  //       body: data
  //     }).then(
  //       response => {
  //         console.log('succ ')
  //         console.log(response)
  //       }
  //       ).catch(err => {
  //       console.log('err ')
  //       console.log(err)
  //       amount--;
  //     } )
  
  
  
  
  //   }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#121212'
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: 'center',
    color:'white'
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  },
  maybeRenderImage: {
    height: 250,
    width: 250,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});