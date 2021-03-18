import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Image, SafeAreaView, } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

const ButtonHeight=65;
const ButtonWidth=320;
const ButtonRadius=30; // effects how circular the buttons look
const ButtonGradientDirection='vertical';

function Learn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                {/*
                <Image 
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                */}
                <View style={{justifyContent: 'space-evenly', flex: 1, opacity:0.9}}>
                    <GradientButton
                        style={{marginVertical: 8}}

                        text="How to Read Algorithms"
                        textStyle={{fontSize: 27, color: 'black',}}

                        gradientBegin="#ffffff" //change color
                        gradientEnd="#ffffff" //change color
                        gradientDirection={ButtonGradientDirection}
                        height={ButtonHeight}
                        width={ButtonWidth}
                        radius={ButtonRadius}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('HowToReadAlg')} //navigate to the how to read screen
                    />

                    <GradientButton
                        style={{marginVertical: 8}}

                        text="Beginner's Method"
                        textStyle={styles.textStyle}

                        gradientBegin="#ffffff" //change color
                        gradientEnd="#ffffff" //change color
                        gradientDirection={ButtonGradientDirection}
                        height={ButtonHeight}
                        width={ButtonWidth}
                        radius={ButtonRadius}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('BeginnerLearn')} //navigate to the beginner's screen
                    />

                    <GradientButton
                        style={{marginVertical: 8}}

                        text="Intermediate Method"
                        textStyle={styles.textStyle}

                        gradientBegin="#ffffff" //change color
                        gradientEnd="#ffffff" //change color
                        gradientDirection={ButtonGradientDirection}
                        height={ButtonHeight}
                        width={ButtonWidth}
                        radius={ButtonRadius}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('IntermediateLearn')}//navigate to the intermediate screen
                    />

                    <GradientButton
                        style={{marginVertical: 8}}

                        text="Advanced Method"
                        textStyle={styles.textStyle}

                        gradientBegin="#ffffff" //change color
                        gradientEnd="#ffffff" //change color
                        gradientDirection={ButtonGradientDirection}
                        height={ButtonHeight}
                        width={ButtonWidth}
                        radius={ButtonRadius}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('AdvancedLearn')} //navigate to the advanced screen
                    />

                    <GradientButton
                        style={{marginVertical: 8}}

                        text="List of Algorithms"
                        textStyle={styles.textStyle}

                        gradientBegin="#ffffff" //change color
                        gradientEnd="#ffffff" //change color
                        gradientDirection={ButtonGradientDirection}
                        height={ButtonHeight}
                        width={ButtonWidth}
                        radius={ButtonRadius}

                        impact
                        impactStyle='Light'
                        onPressAction={() => navigation.navigate('AlgList')} //navigate to the algorithm list screen
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   
    background:{
        backgroundColor:'black',
        flex:1
    },
    ViewContainer:{
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
        backgroundColor: 'black'
    },
    image: {
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },
    viewStyle: {
        borderBottomColor: 'black',
        //marginBottom:10,
        marginTop: 0,
        backgroundColor: 'transparent'
    },

    textStyle: {
        color: 'black',
        fontSize:30, 
    }
})

export default Learn;