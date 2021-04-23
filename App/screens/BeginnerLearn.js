import React from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {Header, Card} from 'react-native-elements';


function BeginnerLearn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <View style={{height: '90%'}}>
                    <ScrollView style={styles.scroll}>
                        {/* STEP 1 */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>1: White Cross {/* Card Title*/}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                Solving the white cross is the first step to solving a Rubik's cube.  In order to do this, you have to get the 
                                white edges into place next to the white center and the center with the other color.  This step doesn't have 
                                exact algorithms for all the cases.  {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Instructions {/* Header: Instructions */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom {/* Sub header: Cube Orientation */}
                            </Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textDescripWide}>
                                    1: Find an edge with white and another color on it.
                                    {'\n'}
                                </Text>
                                <Text style={styles.textDescrip}>
                                              2: Insert the edge into the yellow 
                                    {'\n'}    layer so that the white part is 
                                    {'\n'}    facing up.  You can do this by 
                                    {'\n'}    rotating the side that the 
                                    {'\n'}    colored part of the edge is on 
                                    {'\n'}    until the white part of the edge 
                                    {'\n'}    is in the yellow layer.  Repeat 
                                    {'\n'}    this until all white edges are in 
                                    {'\n'}    the yellow layer and you have 
                                    {'\n'}    this "daisy" pattern.
                                </Text>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_wcr_daisy.jpg')}/>
                                <Text style={styles.textDescripWide}>
                                    {'\n'}3: Once all edges are in the yellow layer, choose one and 
                                    {'\n'}    align it with the center that matches the color it has  
                                    {'\n'}    on it using U moves.  Rotate that side twice so that 
                                    {'\n'}    the white part of the edge is now in the white layer.  
                                    {'\n'}    Repeat this until all edges are in the white layer and 
                                    {'\n'}    you have a white cross. {/* Steps */}
                                </Text>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_wcr_aligned.jpg')}/>
                                <Text style={{color: 'white', fontSize: 13, width: '20%', textAlign: 'center', textAlignVertical: 'center'}}>(R2)     </Text>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_wcr_inserted.jpg')}/>
                            </View>
                        </Card>

                        {/* STEP 2 */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>2: White Corners {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                This step consists of inserting the white corners into the white layer in order to complete the white layer.{/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the top {/* Sub header: Cube Orientation */}
                                </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_wco_right.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing to the right and the 
                                    color on the left matches that side
                                    {'\n'}R' D R
                                </Text>

                                <Image style={styles.exImage} source={require('../Assets/beginners/b_wco_left.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing to the left and the 
                                    color on the right matches that side
                                    {'\n'}F D F'
                                </Text>

                                <Image style={styles.exImage} source={require('../Assets/beginners/b_wco_down.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing down
                                    {'\n'}R' D2 R D R' D' R
                                </Text>

                                <Image style={styles.exImage} source={require('../Assets/beginners/b_wco_wrong.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the corner is in the white layer already, but in the wrong spot or oriented incorrectly.
                                    {'\n'}Take it out of the white layer using this algorithm, then you will have one of the cases mentioned
                                    before.
                                    {'\n'}L D L'
                                </Text>
                            </View>
                        </Card>

                        {/* STEP 3 */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>3: Second Layer {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                The next step is solving the second layer of the cube.  In order to do this, the edges are inserted into their 
                                correct spots using one of two algorithms. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom {/* Sub header: Cube Orientation */}
                            </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap', }}>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_sl_right.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the color on the edge that is facing you is lined up with it's matching center, the edge needs to be 
                                    inserted on the right.
                                    {'\n'}U R U' R' U' F' U F
                                </Text>

                                <Image style={styles.exImage} source={require('../Assets/beginners/b_sl_left.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the color on the edge that is facing you is lined up with it's matching center, the edge needs to be 
                                    inserted on the left.
                                    {'\n'}U' L' U L U F U' F'
                                </Text>
                                
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_sl_orient.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the edge is in its correct spot, but it is oriented wrong.  First, you do one of the algorithms from 
                                    above.
                                    {'\n'}(U R U' R' U' F' U F) or {'\n'}(U' L' U L U F U' F')
                                    {'\n'}Then, you will have one of the first two cases.
                                </Text>
                            </View>
                        </Card>

                        {/* STEP 4 */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>4: Orient Yellow Edges {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                This is the first step to solving the last layer.  The goal is to orient the yellow edges which creates a yellow 
                                cross like what was done on the white layer in the first step, except you use algorithms now so that the rest 
                                of the cube does not get messed up. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom {/* Sub header: Cube Orientation */}
                            </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_ye_line.png')}/>
                                <Text style={styles.textDescrip}>Line{'\n'}F (R U R' U') F'</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_ye_L.png')}/>
                                <Text style={styles.textDescrip}>L-shape{'\n'}Fw (R U R' U') Fw'</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_ye_dot.png')}/>
                                <Text style={styles.textDescrip}>Dot{'\n'}F R U R' U' F' Fw (R U R' U') Fw'</Text>
                            </View>
                        </Card>

                        {/* STEP 5 */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>5: Orient Yellow Corners {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In this step, you orient the yellow corners so that they are facing up. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom {/* Sub header: Cube Orientation */}
                            </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_0.png')}/>
                                <Text style={styles.textDescrip}>R2 D' R U2 R' D R U2 R</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_1.png')}/>
                                <Text style={styles.textDescrip}>(F R F' Rw)(U R' U' Rw)</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_2.png')}/>
                                <Text style={styles.textDescrip}>(F R' F' Rw)(U R U' Rw)</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_3.png')}/>
                                <Text style={styles.textDescrip}>R U R' U R U2 R'</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_4.png')}/>
                                <Text style={styles.textDescrip}>R U2 R' U' R U' R'</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_5.png')}/>
                                <Text style={styles.textDescrip}>R U2 (R2 U' R2 U') R2 U2 R</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_6.png')}/>
                                <Text style={styles.textDescrip}>F (R U R' U') (R U R' U') (R U R' U') F'</Text>
                            </View>
                        </Card>

                        {/* STEP 6 */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>6: Permute Yellow Corners {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In this step, you finish solving the cube by permuting the yellow corners so that both of the other colors on 
                                the corners align with their respective sides. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom {/* Sub header: Cube Orientation */}
                            </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {/* adjacent */}
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_pyc_adj.png')}/>
                                <Text style={styles.textDescrip}>R' F R' B2 R F' R' B2 R2</Text>
                            
                                {/* opposite */}
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_pyc_opp.png')}/>
                                <Text style={styles.textDescrip}>F R U' R' U' R U R' F' (R U R' U'){'\n'}(R' F R F')</Text>
                            </View>
                        </Card>

                        {/* STEP 7 */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>7: Permute Yellow Edges {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In this step, you permute the yellow edges so that the other color on the edges align with their respective 
                                colors on the sides. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom {/* Sub Header: Cube Orientation */}
                            </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {/* 3 edge counter clockwise rotation */}
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_pye_cc.png')}/>
                                <Text style={styles.textDescrip}>(R U' R U)(R U R U') R' U' R2</Text>
                            
                                {/* 3 edge clockwise rotation */}
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_pye_c.png')}/>
                                <Text style={styles.textDescrip}>R2 U (R U R' U') R' U' R' U R'</Text>
                            
                                {/* opposite sides */}
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_pye_opp.png')}/>
                                <Text style={styles.textDescrip}>M2 U M2 U2 M2 U M2</Text>
                            
                                {/* adjacent sides */}
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_pye_adj.png')}/>
                                <Text style={styles.textDescrip}>M' U M2 U M2 U M' U2 M2 U'</Text>
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
        backgroundColor:'#121212',
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
        backgroundColor:'#121212',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
})

export default BeginnerLearn;