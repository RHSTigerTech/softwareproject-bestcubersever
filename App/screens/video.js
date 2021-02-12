import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput} from 'react-native';


import LightVideo from '../Assets/RubiksCubeVideo.mp4';

import { Video } from 'expo-av';

export default class YourClass extends Component {
    render() {
        return (
            <View>
                <Video
                source={LightVideo}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                isLooping
                style={{ width: 500, height: 500, right:50 }}
                /> 
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
        fontSize:30,
        backgroundColor: 'transparent',
        color: '#FFF'
    }
    
})

