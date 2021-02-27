import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from "react-native-linear-gradient";



function BeginnerLearn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <Image 
                    // Background Image of Cube
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                <View style={{height: '90%', opacity:0.9}}>
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
                            <Text style={styles.textHeader}>Instructions</Text>
                            <Text style={styles.textSubHeader}>Hold the cube so that the white side is on the top</Text>
                            <Text style={styles.textOther}>{/* Basic instructions */}
                                1: Find an edge with white and another color on it.{'\n'}2: Line the other color up with the matching center.
                                {'\n'}3: Rotate the side with that color until the edge is inserted into the white layer.{'\n'}
                            </Text>
                            <Text style={styles.textHeader}>Special Cases</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {/*<Text style={styles.placeHolder}>(image here)</Text>*/}
                                <Image style={{width: '40%'}} source={require('../Assets/beginners/b_wcr_wlayer.jpg')}/>
                                <Text style={styles.imageDescrip}>All edges in the white layer, but one is oriented wrong.{'\n'}F U' R U</Text>
                            
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    Last edge is on the correct side in the top layer, but it is oriented wrong so that you can not simply move it to the top
                                    {'\n'}F' R' D' R F2
                                </Text>

                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    Last edge is on the correct side in the second layer, but it is oriented wrong so that you can not simply move it to the top
                                    {'\n'}R' D' R F2
                                </Text>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>2: White Corners</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                This step consists of inserting the white corners into the white layer in order to complete the white layer.  
                                This step involves learning 2 algorithms.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <Text style={styles.textSubHeader}>Hold the cube so that the white side is on the top</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing to the right and the 
                                    color on the left matches that side
                                    {'\n'}R' D R
                                </Text>

                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing to the left and the 
                                    color on the right matches that side
                                    {'\n'}F D F'
                                </Text>

                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing down
                                    {'\n'}R' D2 R D R' D' R
                                </Text>

                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    When the corner is in the white layer already, but in the wrong spot or oriented incorrectly.
                                    {'\n'}Take it out of the white layer using this algorithm, then you will have one of the cases mentioned
                                    before.
                                    {'\n'}L D L' R' D' R
                                </Text>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>3: Second Layer</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                The next step is solving the second layer of the cube.  In order to do this, the edges are inserted into their 
                                correct spots using one of two algorithms.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <Text style={styles.textSubHeader}>Hold the cube so that the white side is on the bottom</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap', }}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    When the color on the edge that is facing you is lined up with it's matching center, the edge needs to be 
                                    inserted on the right.
                                    {'\n'}U R U' R' U' F' U F
                                </Text>

                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    When the color on the edge that is facing you is lined up with it's matching center, the edge needs to be 
                                    inserted on the left.
                                    {'\n'}U' L' U L U F U' F'
                                </Text>
                                
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.imageDescrip}>
                                    When the edge is in its correct spot, but it is oriented wrong.  First, you do one of the algorithms from 
                                    above.
                                    {'\n'}(U R U' R' U' F' U F) or {'\n'}(U' L' U L U F U' F')
                                    {'\n'}Then, you will have one of the first two cases.
                                </Text>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>4: Orient Yellow Edges</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                This is the first step to solving the last layer.  The goal is to orient the yellow edges which creates a yellow 
                                cross like what was done on the white layer in the first step, except you use algorithms now so that the rest 
                                of the cube does not get messed up.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <Text style={styles.textSubHeader}>Hold the cube so that the white side is on the bottom</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>Line{'\n'}F (R U R' U') F'</Text>
                            
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>L-shape{'\n'}Fw (R U R' U') Fw'</Text>
                            
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>Dot{'\n'}F R U R' U' F' Fw (R U R' U') Fw'</Text>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>5: Orient Yellow Corners</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>In this step, you orient the yellow corners so that they are facing up.</Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <Text style={styles.textSubHeader}>Hold the cube so that the white side is on the bottom</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {/* 
                                    _0_
                                    000
                                    000
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>R2 D' R U2 R' D R U2 R</Text>
                            
                                {/*
                                    _00
                                    000
                                    _00
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>(F R F' Rw)(U R' U' Rw)</Text>
                            
                                {/*
                                    00 |
                                    000
                                    _00
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>(F R' F' Rw)(U R U' Rw)</Text>
                            
                                {/*
                                    _0 |
                                    000
                                    00_
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>R U R' U R U2 R'</Text>
                            
                                {/*
                                    |00
                                    000
                                    _0|
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>R U2 R' U' R U' R'</Text>
                            
                                {/*
                                    |0_
                                    000
                                    |0_
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>R U2 (R2 U' R2 U') R2 U2 R</Text>
                            
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
                            <Card.Title style={{fontSize: 20}}>6: Permute Yellow Corners</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In this step, you finish solving the cube by permuting the yellow corners so that both of the other colors on 
                                the corners align with their respective sides.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <Text style={styles.textSubHeader}>Hold the cube so that the white side is on the bottom</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {/*
                                    adjacent
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>R' F R' B2 R F' R' B2 R2</Text>
                            
                                {/*
                                    opposite
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>F R U' R' U' R U R' F' (R U R' U')(R' F R F')</Text>
                            </View>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>7: Permute Yellow Edges</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In this step, you permute the yellow edges so that the other color on the edges align with their respective 
                                colors on the sides.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <Text style={styles.textSubHeader}>Hold the cube so that the white side is on the bottom</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {/*
                                    3 edge counter clockwise rotation
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>(R U' R U)(R U R U') R' U' R2</Text>
                            
                                {/*
                                    3 edge clockwise rotation
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>R2 U (R U R' U') R' U' R' U R'</Text>
                            
                                {/*
                                    opposite sides
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>M2 U M2 U2 M2 U M2</Text>
                            
                                {/*
                                    adjacent sides
                                */}
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textOther}>M' U M2 U M2 U M' U2 M2 U'</Text>
                            </View>
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

    image: {
        // Background image of cube
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },

    imageDescrip:{
        // Text for the instructions
        color: 'black',
        width: '60%',
    },

    placeHolder: {
        // Text with this style holds the place of something that will be implemented later
        color: 'blue',
        fontWeight: 'bold',
        width: '40%',
    },

    scroll: {
        // Scroll view
        backgroundColor: "transparent",
    },

    textHeader: {
        //headers
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17.5,
        textAlign: 'center',
    },

    textOther:{
        // Text thats not header, description, or main summary
        color: 'black',
        fontSize: 13,
    },

    textSubHeader: {
        //Text that goes under headers
        color: 'black',
        fontSize: 13,
        textAlign: 'center'
    },

    textSummary: {
        // the summary of the step
        color: 'black',
        fontSize: 15,
    },

    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'black',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    
    },
})

export default BeginnerLearn;