import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text, Image, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';

function IntermediateLearn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                {/*
                <Image 
                    resizeMode='cover'
                    style={styles.image} source={require('../Assets/MobileRubiksCubeBackground.jpg')} 
                />
                */}
                <View style={{height: '90%'}}>
                    <ScrollView style={styles.scroll}>
                        <View style={styles.pageHeader}>
                            <Text style={styles.textHeader}>Intermediate Method</Text>
                            <Text style={styles.textSubHeader}>
                                All of these steps correspond to steps in the Beginner's Method, they are just more advanced and in turn faster 
                                ways to complete them.  In order to have a smoother transition into this method, you can learn one step at a 
                                time and continue using the Beginner's Method steps for the others.
                                {'\n'}Intermediate Step 1 = Beginner's Step 1
                                {'\n'}Intermediate Step 2 = Beginner's Step 2 and 3
                                {'\n'}Intermediate Step 3 = Beginner's Step 4 and 5
                                {'\n'}Intermediate Step 4 = Beginner's Step 6 and 7
                                {'\n'}Always hold the cube so that white is on the bottom, unless algorithms have a cube rotation in them.
                            </Text>
                        </View>
                        <Card containerStyle={{backgroundColor: 'black'}}>
                            <Card.Title style={styles.textTitle}>1: White Cross</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                Get the white edges into place next to the white center and the center with the other color.  This Is the same 
                                as the first step of the Beginner's Method, just a faster/more advanced way to do it.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Instructions</Text>
                            <Text style={styles.textDescripWide}>
                                1: Find an edge with white and another color on it.{'\n'}2: Line the other color up with the matching center.
                                {'\n'}3: Rotate the side with that color until the edge is 
                                {'\n'}    inserted into the white layer.{'\n'}
                            </Text>
                            <Text style={styles.textHeader}>
                                Special Cases
                            </Text>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>All edges in the white layer, but one is oriented wrong.{'\n'}F U' R U</Text>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>
                                    Last edge is on the correct side, but it is oriented wrong so that you can not simply move it to the top
                                    {'\n'}R' D' R F2
                                </Text>
                            </View>
                        </Card>
                        
                        <Card containerStyle={{backgroundColor: 'black'}}>
                            <Card.Title style={styles.textTitle}>2: First Two Layers (F2L)</Card.Title>
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

                        <Card containerStyle={{backgroundColor: 'black'}}>
                            <Card.Title style={styles.textTitle}>3: Orient Last Layer (OLL)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>Instructions for 1 look</Text>
                        </Card>

                        <Card containerStyle={{backgroundColor: 'black'}}>
                            <Card.Title style={styles.textTitle}>4: Permute Last Layer (PLL)</Card.Title>
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

    exImage: {
        width: '35%', 
        height: (Dimensions.get('window').width)*.35, 
        resizeMode: 'contain', 
        marginRight: '5%', 
    },

    image: {
        // Background image of cube
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },

    pageHeader:{
        // Header
        backgroundColor: 'black',
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17.5,
        textAlign: 'center',
    },

    textDescrip:{
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: 13,
        width: '60%',
    },

    textDescripWide:{
        // Text thats a description but full width
        paddingTop: 10,
        color: 'white',
        fontSize: 13,
    },

    textSubHeader: {
        //Text that goes under headers
        color: 'white',
        fontSize: 13,
        textAlign: 'center'
    },

    textSummary: {
        // the summary of the step
        color: 'white',
        fontSize: 15,
    },

    textTitle: {
        // Titles of the cards
        color: 'white',
        fontSize: 20
    },

    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'gray',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
})

export default IntermediateLearn;