import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../config/colors'

function BeginnerLearn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <Image 
                    // Background Image of Cube
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                <View style={{height: '90%'}}>
                    {/* Holds the section that scrolls so that it is the right size on the screen */}
                    <ScrollView style={styles.scroll}>
                        <Card>
                            {/* First Step */}
                            <Card.Title style={{fontSize: 20}}>1: White Cross</Card.Title>
                            <Card.Divider/>{/*------------------------------*/}
                            <Text style={styles.textSummary}>{/* Summary of step */}
                                Solving the white cross is the first step to solving a Rubik's cube.  In order to do this, you have to get the 
                                white edges into place next to the white center and the center with the other color.  This step doesn't have 
                                exact algorithms for all the cases.  
                            </Text>
                            <Card.Divider/>{/*------------------------------*/}
                            <Text style={styles.textOther}>{/* Basic instructions */}
                                1: Find an edge with white and another color on it.{'\n'}2: Line the other color up with the matching center.
                                {'\n'}3: Rotate the side with that color until the edge is inserted into the white layer.{'\n'}
                            </Text>
                            <Text style={styles.textHeader}>
                                Special Cases
                            </Text>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>All edges in the white layer, but one is oriented wrong.{'\n'}F U' R U</Text>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    Last edge is on the correct side, but it is oriented wrong so that you can not simply move it to the top
                                    {'\n'}R' D' R F2
                                </Text>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>2: White Corners</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>This step consists of inserting the white corners into the white layer.</Text>
                            <Card.Divider/>
                            <Text style={styles.textOther}>
                                basic instructions
                            </Text>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>3: Second Layer</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>The third step to solving a 3x3 Rubik's Cube is solving the second layer.</Text>
                            <Card.Divider/>
                            <Text style={styles.textOther}>
                                basic instructions
                            </Text>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>4: Yellow Cross</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                This is the first step to solving the last layer.  The goal is to create a yellow cross like what was done on
                                the white layer in the first step, except you use algorithms now so that the rest of the cube is not messed up.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>Line{'\n'}F (R U R' U') F'</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>L-shape{'\n'}Fw (R U R' U') Fw'</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>Dot{'\n'}F R U R' U' F' Fw (R U R' U') Fw'</Text>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>5: Yellow Corners</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>In this step, the corners are solved so that yellow is facing up.</Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <View style={{flexDirection: 'row'}}>
                                {/* 
                                    000
                                    000
                                    _0_
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>R2 D R' U2 RD' R' U2 R'</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                {/*
                                    00_
                                    000
                                    00_                   
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}></Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                {/*
                                    00 |
                                    000
                                    _00
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}></Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                {/*
                                    _0 |
                                    000
                                    00_
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}></Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                {/*
                                    |00
                                    000
                                    _0|
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}></Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                {/*
                                    |0_
                                    000
                                    |0_
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}></Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                {/*
                                    _0_
                                    000
                                    _0_
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>F (R U R' U') (R U R' U') (R U R' U') F'</Text>
                            </View>
                        </Card>
                        
                        <Card>
                            <Card.Title style={{fontSize: 20}}>6: Orient Yellow Corners</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>The sixth and final step to solving a 3x3 Rubik's Cube is orienting the yellow corners.</Text>
                            <Card.Divider/>
                        </Card>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

/*
<View style={{flexDirection: 'row'}}>
    {/*                     
    }
    <Text style={styles.placeHolder}>(image here)</Text>
    <Text style={styles.textOther}></Text>
</View>
*/
const styles = StyleSheet.create({
    background:{
        backgroundColor:'black',
        flex:1
    },

    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'black',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    
    },

    image: {
        // Background image of cube
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },

    scroll: {
        // Scroll view
        backgroundColor: "transparent",
    },

    placeHolder: {
        // Text with this style holds the place of something that will be implemented later
        color: 'blue',
        fontWeight: 'bold',
        width: '40%',
    },

    textSummary: {
        // the summary of the step
        color: 'black',
        fontSize: 15,
    },

    textHeader: {
        //headers
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17.5,
        textAlign: 'center',
    },

    imageDescrip:{
        // Text for the instructions
        color: 'black',
        width: '60%',
    },

    textOther:{
        // Text thats not header, description, or main summary
        color: 'black',
        fontSize: 13,
    },
})

export default BeginnerLearn;