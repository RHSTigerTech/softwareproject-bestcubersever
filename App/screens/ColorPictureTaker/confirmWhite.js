import React, { Component } from 'react';
import {
  ActivityIndicator,
  
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
import {Button} from "react-native-elements";


const colors=['white', 'blue', 'orange', 'green', 'red', 'yellow' ]
const val = Math.floor(100000 + Math.random() * 9999999);
let amount =0;
let colorName='';

let colorSwitch1=0;
let startColor1=Math.floor(Math.random() * 6);;

let colorSwitch2=0;
let startColor2=Math.floor(Math.random() * 6);;



let fileType= Platform.OS === 'ios' ? 'jpeg':'png'








export {val};

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonColor1:colors[startColor1],
            buttonColor2:colors[startColor2]
        }
    }


  state = {
    image: null,
    uploading: false,
  };
  onButtonPress1 = () => {
      if(colorSwitch1==1){
        this.setState({buttonColor1: 'white'});
        colorSwitch2--;
      }
      if(colorSwitch1==2){
        this.setState({buttonColor1: 'blue'});
        colorSwitch2--;

      }
      if(colorSwitch1==3){
        this.setState({buttonColor1: 'orange'});
        colorSwitch2--;

      }
      if(colorSwitch1==4){
        this.setState({buttonColor1: 'green'});
        colorSwitch2--;

      }
      if(colorSwitch1==5){
        this.setState({buttonColor1: 'red'});
        colorSwitch2--;

      }
      if(colorSwitch1==6){
        this.setState({buttonColor1: 'yellow'});
        colorSwitch1=0;
        colorSwitch2--;

      }

  }
  onButtonPress2 = () => {
    if(colorSwitch2==1){
      this.setState({buttonColor2: 'white'});
      colorSwitch1--;
    }
    if(colorSwitch2==2){
      this.setState({buttonColor2: 'blue'});
      colorSwitch1--;

    }
    if(colorSwitch2==3){
      this.setState({buttonColor2: 'orange'});
      colorSwitch1--;

      
    }
    if(colorSwitch2==4){
      this.setState({buttonColor2: 'green'});
      colorSwitch1--;

      
    }
    if(colorSwitch2==5){
      this.setState({buttonColor2: 'red'});
      colorSwitch1--;

    }
    if(colorSwitch2==6){
      this.setState({buttonColor2: 'yellow'});
      colorSwitch2=0;
      colorSwitch1--;

    }

}
  
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
        

        <Button buttonStyle={{backgroundColor:this.state.buttonColor1, width:70, height:70}} onPress={colorSwitch1++, console.log(colorSwitch1), this.onButtonPress1} />
        <Button buttonStyle={{backgroundColor:this.state.buttonColor2, width:70, height:70}} onPress={colorSwitch2++, console.log(colorSwitch2), this.onButtonPress2} />

        
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

    return (
      <View
        style={styles.maybeRenderContainer}>
        <View
          style={styles.maybeRenderImageContainer}>
          <Image source={{ uri: image }} style={styles.maybeRenderImage} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={styles.maybeRenderImageText}>
          {image}
        </Text>
      </View>
    );
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
   
  

  if (amount==0){
    colorName='white'
  }
  if (amount==1){
    colorName='blue'
  }
  if (amount==2){
    colorName='orange'
  }
  if (amount==3){
    colorName='green'
  }
  if (amount==4){
    colorName='red'
  }
  if (amount==5){
    colorName='yellow'
  }
  amount++;
  if(amount >5){
    amount=0;
  }
  console.log(colorName)
  console.log(''+colorName+val+'.'+fileType)

    var data = new FormData();  
    data.append('file', {  
      uri: pictureuri,
      name: ''+colorName+val+'.'+fileType,
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
  change: {
    
    backgroundColor:colors[colorSwitch1],
    width:70,
    height:70
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