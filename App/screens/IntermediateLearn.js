import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';

function IntermediateLearn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <Image 
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                <View style={{height: '90%', opacity: 0.9}}>
                    <ScrollView style={styles.scroll}>
                        <Card>
                            <Card.Title style={{fontSize: 20}}>1: White Cross</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                Get the white edges into place next to the white center and the center with the other color.  This step doesn't
                                have exact algorithms for all the cases.
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
                            <Card.Title style={{fontSize: 20}}>2: First Two Layers (F2L)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                F2L is when you solve the white corners and the edges in the second later at the same time.  In order to do 
                                this, you create pairs of a corner and an edge piece with corresponding colors.  Then, you insert them into the 
                                spot they are supposed to be in.  This can be done intuitively or with algorithms.  
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <View style={{flexDirection: 'row'}}>
                                
                            </View>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>3: Orient Last Layer (OLL)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>Instructions for 1 look</Text>
                        </Card>

                        <Card>
                            <Card.Title style={{fontSize: 20}}>4: Permute Last Layer (PLL)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>Instructions for 1 look</Text>
                        </Card>
                    </ScrollView>
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

export default IntermediateLearn;