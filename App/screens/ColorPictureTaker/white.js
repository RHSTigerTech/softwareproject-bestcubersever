

import React, { useState, useRef, useEffect } from "react";
import Svg, {Line, Polygon} from 'react-native-svg'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import * as ImageManipulator from 'expo-image-manipulator';
const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.14);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);
export default function App() {
  const [imageUri, setImageUri]= useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const cameraRef = useRef();
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const onCameraReady = () => {
    setIsCameraReady(true);
  };

 

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true, skipProcessing: true, aspect: [4, 3] };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      
      ImageManipulator.manipulateAsync(data.uri, [{crop:{originX:0,originY:0,width:600, height:480}}], {compress:1, format:ImageManipulator.SaveFormat.JPEG})
      setImageUri(data.uri)
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture source", source);
      }
    }
  };

  const uploadImageAsync = (pictureuri) =>{
    let apiUrl= 'https://metal-density-310218.wl.r.appspot.com/endpoint';
    var data= new FormData();
    data.append('file',{
      uri:pictureuri,
      name:'white666888.jpeg',
      type:'image/jpeg'
    })
    fetch(apiUrl, {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      method: 'POST',
      body:data
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
  const recordVideo = async () => {
    if (cameraRef.current) {
      try {
        const videoRecordPromise = cameraRef.current.recordAsync();
        if (videoRecordPromise) {
          setIsVideoRecording(true);
          const data = await videoRecordPromise;
          const source = data.uri;
          if (source) {
            setIsPreview(true);
            console.log("video source", source);
            setVideoSource(source);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  };
  const stopVideoRecording = () => {
    if (cameraRef.current) {
      setIsPreview(false);
      setIsVideoRecording(false);
      cameraRef.current.stopRecording();
    }
  };
  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  };
  const SendPreview = async () => {
    await cameraRef.current.resumePreview();
    uploadImageAsync(imageUri);
    setIsPreview(false);
    setVideoSource(null);
  };

  
  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      {/* <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View
        style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
      /> */}
      <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Retake</Text>
    </TouchableOpacity>
  );

  const renderSendPreviewButton = () => (
    <TouchableOpacity onPress={SendPreview} style={styles.SendButton}>
      {/* <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View
        style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
      /> */}
      <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Send</Text>
    </TouchableOpacity>
  );
  const renderVideoPlayer = () => (
    <Video
      source={{ uri: videoSource }}
      shouldPlay={true}
      style={styles.media}
    />
  );
  const renderVideoRecordIndicator = () => (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
      <Text style={styles.recordTitle}>{"Recording..."}</Text>
    </View>
  );
  const renderCaptureControl = () => (
    <View style={styles.control}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Text style={styles.text}>{"Flip"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        // onLongPress={recordVideo}
        onPressOut={stopVideoRecording}
        onPress={takePicture}
        style={styles.capture}
      />
      
    </View>
  );

  const renderGrid = () => (
    <Svg height="100%" width="100%">
  <Line x1="12.5%" y1="25%" x2="12.5%" y2="70%" stroke="white" strokeWidth="2" />
  <Line x1="37.5%" y1="25%" x2="37.5%" y2="70%" stroke="white" strokeWidth="2" />
  <Line x1="62.5%" y1="25%" x2="62.5%" y2="70%" stroke="white" strokeWidth="2" />
  <Line x1="87.5%" y1="25%" x2="87.5%" y2="70%" stroke="white" strokeWidth="2" />


  <Line x1="12.5%" y1="25%" x2="87.5%" y2="25%" stroke="white" strokeWidth="2" />
  <Line x1="12.5%" y1="40%" x2="87.5%" y2="40%" stroke="white" strokeWidth="2" />
  <Line x1="12.5%" y1="55%" x2="87.5%" y2="55%" stroke="white" strokeWidth="2" />
  <Line x1="12.5%" y1="70%" x2="87.5%" y2="70%" stroke="white" strokeWidth="2" />
</Svg>
  );

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        //flashMode={Camera.Constants.FlashMode.on}
        onCameraReady={onCameraReady}
        onMountError={(error) => {
          console.log("cammera error", error);
        }}
      />
      <View style={styles.container}>
        {isVideoRecording && renderVideoRecordIndicator()}
        {videoSource && renderVideoPlayer()}
        {isPreview && renderCancelPreviewButton()}
        {isPreview && renderSendPreviewButton()}
        {!videoSource && !isPreview && renderCaptureControl()}
        {renderGrid()}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  closeButton: {
    position: "absolute",
    top: '80%',
    left: '10%',
    height: closeButtonSize,
    width: closeButtonSize*1.5,
    borderRadius: Math.floor(closeButtonSize / 4),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    //opacity: 1,
    zIndex: 2,
  },
  SendButton: {
    position: "absolute",
    top: '80%',
    right: '10%',
    height: closeButtonSize,
    width: closeButtonSize*1.5,
    borderRadius: Math.floor(closeButtonSize / 4),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    //opacity: 1,
    zIndex: 2,
  },
  media: {
    ...StyleSheet.absoluteFillObject,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "#f5f6f5",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
  recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
});