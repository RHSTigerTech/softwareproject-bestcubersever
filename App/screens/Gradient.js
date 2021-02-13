import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, 
  Image, Platform, Dimensions, StatusBar, Pressable} from 'react-native';
import {Header} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';

const ButtonHeight=80;
const ButtonWidth=300;
const ButtonRadius=15; // effects how circular the buttons look
const ButtonGradientDirection='vertical';
const ButtonFont=25 

function Gradient({navigation}) {    
    return (
        <View style={styles.ViewContainer}>
            <Image resizeMode='cover'
                style={styles.image}
                style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} />

                <Header                       
                    containerStyle={styles.viewStyle}
                    centerContainerStyle={{flex:10}}
                    centerComponent={{ text: 'Rubiks Cube App', style: { color: 'white', fontSize:40,}}} 
                    />
                
                    <View style = {{justifyContent: 'space-evenly',flex:1,}}>
                        <GradientButton
                            text="Learn"                        
                            textStyle={{ fontSize: ButtonFont,}}
                            gradientBegin='#fe0936'
                            gradientEnd='#ff7700'
                            gradientDirection={ButtonGradientDirection}
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact                        
                            onPressAction={() => navigation.navigate('WelcomeScreen')}                        
                        />

                        <GradientButton
                            text="Solver"
                            textStyle={{ fontSize: ButtonFont }}
                            gradientBegin='#ff7700'
                            gradientEnd='#ecc205'
                            gradientDirection={ButtonGradientDirection}
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact
                            onPressAction={() => navigation.navigate('ViewImageScreen')}
                        >
                        </GradientButton>

                        <GradientButton                        
                            text="Timer and Scrambler"
                            textStyle={{ fontSize: ButtonFont }}
                            gradientBegin='#ecc205'
                            gradientEnd='#5ad16c'
                            gradientDirection={ButtonGradientDirection} 
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact
                            onPressAction={() => navigation.navigate('ViewImageScreen')}
                        >
                        </GradientButton>

                        <GradientButton
                            text="Virtual Cube"
                            textStyle={{ fontSize: ButtonFont }}
                            gradientBegin='#5ad16c'
                            gradientEnd='#009FFD'
                            gradientDirection={ButtonGradientDirection}
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact
                            onPressAction={() => navigation.navigate('ViewImageScreen')}
                        >
                        </GradientButton>

                        <GradientButton
                            text="Statistics"
                            textStyle={{ fontSize: ButtonFont }}
                            gradientBegin='#009FFD'
                            gradientEnd='#add8e6'
                            gradientDirection={ButtonGradientDirection}
                            height={ButtonHeight}
                            width={ButtonWidth}
                            radius={ButtonRadius}
                            impact
                            onPressAction={() => navigation.navigate('Video')}
                        >
                        </GradientButton>
                    </View>            
        </View>
    );
}

const styles = StyleSheet.create({
   
    ViewContainer:{
        flex: 1, 
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
    image:{        
        width:'100%',
        height:'100%',
        position:'absolute',
        top:24,
    },
    viewStyle: {
        borderBottomColor: 'transparent',
        marginTop:0,
        backgroundColor:'transparent'        
    },
})

export default Gradient;

