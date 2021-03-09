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
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}></Text>

                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>
                                    
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
                            <Text style={styles.textHeader}>Basic Algorithms</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textDescripWide}>
                                    Inserting Algorithms:
                                    {'\n'}Inserts the top left corner and the top middle edge into the bottom right corner
                                    {'\n'}R U' R'
                                    {'\n'}Inserts the top right corner and the top middle edge into the bottom left corner
                                    {'\n'}L' U L
                                </Text>
                                <Text style={styles.textDescripWide}>
                                    Removing Algorithm: 
                                    {'\n'}Removes the bottom right corner and the middle right edge and moves them to the top layer
                                    {'\n'}R U R'
                                    {'\n'}Removes the bottom left corner and the middle left edge and moves them to the top layer.
                                    {'\n'}L' U' L
                                </Text>
                            </View>
                            <Text style={styles.textHeader}>Instructions and Cases</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textDescripWide}>
                                    First, you want to get the corner and its matching edge into the yellow layer.  If you find the corner in 
                                    the first layer, use one of the removing algorithms.  If you find the edge in the second layer, use one of 
                                    the removing algorithms.  Be sure to remove them in a way that the edge and corner aren't touching in the 
                                    wrong orientation. 
                                    {'\n'}
                                    {'\n'}Next, you need to position them so that you can insert them.  The position depends on how the corner 
                                    and edge pieces are oriented.  In order to position them, hold the cube so that the spot that the pair needs 
                                    to be inserted into is in the front right corner.  Then, move the corner so that it is in the back right 
                                    corner of the top layer.  Then, you can do (R) and then (U) or (U') until the edge is in the correct 
                                    position.
                                </Text>

                                <Text style={styles.textWideCenter}>Top of the edge and top of the corner are the same</Text>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>
                                    If the colored side of the corner is matched with its corresponding center and the white side of the corner 
                                    is facing right, position them like this and insert using:
                                    {'\n'}L' U L
                                </Text>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>
                                    If the colored side of the corner is matched with its corresponding center and the white side of the corner 
                                    is facing left, position them like this and insert using:
                                    {'\n'}R U' R'
                                </Text>

                                <Text style={styles.textWideCenter}>Top of the edge and top of the corner are different</Text>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>
                                    If the colored side of the corner is matched with its corresponing center and the white side of the corner 
                                    is facing right, position them like this and insert using:
                                    {'\n'}R U R'
                                </Text>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>
                                    If the colored side of the corner is matched with its corresponing center and the white side of the corner 
                                    is facing left, position them like this and insert using:
                                    {'\n'}L' U' L
                                </Text>

                                <Text style={styles.textWideCenter}>Top of the corner is white</Text>
                                <Text style={styles.textDescripWide}>
                                    Position the edge so that it is on the side that corresponds with the color on the top of the edge.
                                </Text>
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>
                                    If the edge is on the right, insert using this:
                                    {'\n'}R (U until the corner is in the top back right corner) R2 F R F'
                                </Text>
{/*
                                <Text style={styles.placeHolder}>(image here)</Text>
                                <Text style={styles.textDescrip}>
                                    If the color on the top of the corner is white, use the inserting and removing algorithms to position them 
                                    like this.  Insert using:
                                    {'\n'}
                                </Text>
            */}
                            </View>
                        </Card>

                        <Card containerStyle={{backgroundColor: 'black'}}>
                            <Card.Title style={styles.textTitle}>3: Orient Last Layer (OLL)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In order to orient the last layer in this method, you use one algorithms to orient both the yellow edges and 
                                corners with one algorithm.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

                            </View>
                        </Card>

                        <Card containerStyle={{backgroundColor: 'black'}}>
                            <Card.Title style={styles.textTitle}>4: Permute Last Layer (PLL)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In order to permute the last layer in this method, you use one algorithm to permute both the yellow edges and 
                                corners with one algorithm.
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                
                            </View>
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
        width: '100%'
    },

    textWideCenter:{
        // Text thats a description but full width and centered
        paddingTop: 10,
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
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