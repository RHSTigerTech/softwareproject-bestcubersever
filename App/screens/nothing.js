import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
  let PhotoUri;
  let photo;
  
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
    
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;
  }}>
        <View
          style={{
            flex: 1,
            //backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>

          
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
            photo = await cameraRef.takePictureAsync();
            
            if(cameraRef){
              //let photo = await cameraRef.takePictureAsync();
              console.log('photo', photo);
              
              PhotoUri=photo.uri;
              //FileSystem.makeDirectoryAsync('file://C:\Users\Nathan\Desktop\tempFolder')
              // FileSystem.moveAsync({
              //  from:photo.uri,
              //  to: 'C:\Users\Nathan\Desktop\temp'
              // })
              
            }
            console.log(PhotoUri)
            //let yourPicture = require (PhotoUri);
            
          }}>
            <View style={{ 
               borderWidth: 2,
               borderRadius:50,
               borderColor: 'white',
               height: 70,
               width:70,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:50,
                 borderColor: 'white',
                 height: 60,
                 width:60,
                 backgroundColor: 'white'}} >
              </View>
            </View>
          </TouchableOpacity>
        
          
        </View>
      </Camera>
      
    </View>
    
  );
 
}


  


