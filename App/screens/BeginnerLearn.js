import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image, Button, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Header, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const B = (props) => <Text style={{ fontWeight: 'bold', fontSize: 17, lineHeight: 18, letterSpacing: .2 }}>{props.children}</Text>
//const WrapText = (props) => <Text style={{paddingTop: 10,color: 'white',fontSize: RFPercentage(2.1),width: '100%',lineHeight:18,letterSpacing:.2}}>{props.children}</Text>
//change
 
export default class App extends Component {
    
    render() {
        const {navigate} = this.props.navigation;
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer} >
                <View style={{height: '90%'}}>
                
                    <ScrollView
                        ref={ref => (this.scrollViewRef = ref)}
                        style={styles.scroll}>

                    
                <Card containerStyle={{backgroundColor: '#121212'}}>
                <Card.Title style={styles.ContentsTitle}>Beginner Steps{/* Card Title*/}</Card.Title>
                <Card.Divider/>
                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.WhiteCross.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>1: White Cross</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.WhiteCorners.y,animated: true});
                        }}
                    >
                    <Text paddingTop='-3%' style={styles.contentButtons} >2: White Corners</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.SecondLayer.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>3: Second Layer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.OrientYellowEdges.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>4: Orient Yellow Edges</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.OrientYellowCorners.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>5: Orient Yellow Corners</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.PermuteYellowCorners.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>6: Permute Yellow Corners</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.PermuteYellowEdges.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>7: Permute Yellow Edges</Text>
                    </TouchableOpacity>
                    </Card>
                    <Card containerStyle={{backgroundColor: '#121212'}}>
                        
                            <Card.Title style={styles.textTitle}>Things To Remember{/* Card Title*/}</Card.Title>
                            <Card.Divider/>
                            
                            
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textDescripWide}>
                                    <B>1:</B> If this is your first time learning how to solve a rubiks cube or you keep messing up an algorithm,
                             it's strongly recommended that you first view our
                                <Text style={styles.NavigateScreenButtons} onPress={() => navigate('HowToReadAlg')}> Cube Basics </Text>
                            page so you have a basic understanding of the cube and its notations.
                                    {'\n'}
                                </Text>

                                <Text style={styles.textDescripWide}>
                                    <B>2:</B> Don't rotate the entire cube while executing an algorithm. 
                                    Keep the same face in the front.
                                    {'\n'}
                                </Text>

                                <Text style={styles.textDescripWide}>
                                    <B>3:</B> A <B>'</B> after a notation <B>(Ex: R')</B> is a counter clockwise turn.
                                    {'\n'}
                                </Text>
                                <Text style={styles.textDescripWide}>
                                    <B>4:</B> Sometimes a step wont make sense the first time you read it.
                                     Go back and read it slower or even outloud.
                                    {'\n'}
                                </Text>
                                <Text style={styles.textDescripWide}>
                                    <B>5:</B> If part of an algoithm is in parentheses. For example, <B>F (R U R' U') F'</B>. It's 
                                    simply signifying when a series of moves are very fast to execute and are encountered frequently.
                                    Treat moves inside the parentheses like any other move.   
                                    {'\n'}
                                </Text>
                                <Text style={styles.textDescripWide}>
                                    <B>6:</B> It's inevitable that in the beginning you'll make a few mistakes performing some of the algorithms. 
                                            When you get back to the same step again just go slower 
                                            and confirm every move is correct.
                                    {'\n'}
                                </Text>
                                
                                {/* maybe turn this into another step */}
                                
                                
                            </View>
                        </Card>
                        {/* STEP 1 */}
                        <Text onLayout={event =>(this.WhiteCross = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                        
                            <Card.Title style={styles.textTitle}>1: White Cross {/* Card Title*/}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                The first step to solving a rubiks cube is forming the white cross. To accomplish this, you first have to align the 
                                white edges with the white center and the center of the corresponding color. This step doesn't require an algorithm
                                to complete and is intuitive. Some may find it easier to refer to the diagrams on how the cube is supposed to look rather than read the instructions. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            
                            <Text style={styles.textHeader}>Instructions {/* Header: Instructions */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white center is on the bottom. {/* Sub header: Cube Orientation */}
                            </Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textDescripWide}>
                                    <B>1:</B> Find any edge piece that has a white tile. 
                                    An edge piece is where two visible colors meet. 
                                    There are four of these edge pieces with white tiles 
                                    located on the cube.
                                     
                                    {'\n'}
                                </Text>
                                {/* maybe turn this into another step */}
                                <Text style={styles.textDescrip}>
                                    <B>2:</B> Create a "daisy" pattern by
                                    inserting the white edge piece next to the 
                                    yellow center so that the edge piece's white 
                                    tile is facing up. You can accomplish this by 
                                    rotating the colored tile sides face until the white 
                                    edge tile piece is adjacent to the yellow center. Move
                                    on to step 3 if you have not white edge pieces in your
                                    middle layer.
                                    
                                    {'\n'}
                                </Text>
                                <Image style={styles.imageInstructions} source={require('../Assets/beginners/b_wcr_daisy.jpg')}/>
                                <Text style={styles.textDescripWideTip}>
                                    <B>Tip:</B> Be careful not to bump out the white
                                    edge pieces you've already placed at the top of the cube. 
                                    By rotating the top yellow layer you
                                    can move edge pieces already at the top out of the way.
                                     
                                    {'\n'}
                                </Text>
                                <Text style={styles.textDescripWide}>
                                    <B>3:</B> If one of the white edge pieces is located 
                                    at the the bottom of the cube, or is located at
                                    the top but facing the wrong way, rotate the face 
                                    once so that the white edge piece is located
                                    in the middle layer of the cube then repeat step 2. Repeat until all 
                                    white edges are in the yellow layer and you have 
                                    the "daisy" pattern.
                                     
                                    {'\n'}
                                </Text>
                                <Text style={styles.textDescripWide}>
                                    <B>4:</B> Once all edges are in the yellow layer, choose one of the white 
                                        edge pieces and 
                                        align it with the center that matches the edge tiles color by 
                                        rotating the top yellow layer. Now rotate that side twice so that 
                                        the edge piece's white tile is now in the white layer. 
                                        Repeat this until all edges are in the white layer and 
                                        you have a white cross. {/* Steps */}
                                        {'\n'}
                                        
                                </Text>
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_wcr_aligned.jpg')}/>
                                <Text style={{color: 'white', fontSize: 16, width: '19.9%', textAlign: 'center', alignSelf:'center',left:Platform.OS === 'android' ? 0:'0%', textAlignVertical: 'center'}}><B>(R2)</B></Text>
                                <Image style={styles.imageInstructions} source={require('../Assets/beginners/b_wcr_inserted.jpg')}/>
                            </View>
                        </Card>

                        {/* STEP 2 */}
                        <Text onLayout={event =>(this.WhiteCorners = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>2: White Corners {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                This step consists of inserting the white corners into the white layer in order to complete the white layer.{/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the yellow center is on the bottom. {/* Sub header: Cube Orientation */}
                                </Text>
                            <Text style={styles.textDescripWideTip}>
                                <B>Tip:</B> Make sure you're inserting the white corners into
                                the right slot. The corner pieces color's should match with the 
                                colors of the center pieces to the left and right of the corner piece.                                     
                            </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_wco_right.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing to the right and the 
                                    color on the left matches that side
                                    {'\n'}<B>R' D R</B>
                                </Text>

                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_wco_left.jpg')}/>
                                
                                
                                <Text style={styles.textDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing to the left and the 
                                    color on the right matches that side
                                    {'\n'}<B>F D F'</B>
                                </Text>
                                
                                
          

                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_wco_down.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the corner is below the slot it needs to be inserted into, with white facing down
                                    {'\n'}<B>R' D2 R D R' D' R</B>
                                </Text>

                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_wco_wrong.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the corner is in the white layer already, but in the wrong spot or oriented incorrectly.
                                    {'\n'}Take it out of the white layer using this algorithm, then you will have one of the cases mentioned
                                    before.
                                    {'\n'}<B>L D L'</B>
                                </Text>
                            </View>
                        </Card>

                        {/* STEP 3 */}
                        <Text onLayout={event =>(this.SecondLayer = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>3: Second Layer {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                The next step is solving the second layer of the cube. In order to do this, the edges are inserted into their 
                                correct spots using one of two algorithms. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text 
                             style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom. {/* Sub header: Cube Orientation */}
                            </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap', }}>
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_sl_right.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the color on the edge that is facing you is lined up with it's matching center, the edge needs to be 
                                    inserted on the right.
                                    {'\n'}<B>U R U' R' U' F' U F</B>
                                </Text>

                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_sl_left.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the color on the edge that is facing you is lined up with it's matching center, the edge needs to be 
                                    inserted on the left.
                                    {'\n'}<B>U' L' U L U F U' F'</B>
                                </Text>
                                
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_sl_orient.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    When the edge is in its correct spot, but it is oriented wrong. First, you do one of the algorithms from 
                                    above.
                                    {'\n'}<B>(U R U' R' U' F' U F) or {'\n'}(U' L' U L U F U' F')</B>
                                    {'\n'}Then, you will have one of the first two cases.
                                </Text>
                            </View>
                        </Card>

                        {/* STEP 4 */}
                        <Text onLayout={event =>(this.OrientYellowEdges = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>4: Orient Yellow Edges {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                This is the first step to solving the last layer. The goal is to orient the yellow edges which creates a yellow 
                                cross like what was done on the white layer in the first step, except you use algorithms now so that the rest 
                                of the cube does not get messed up. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom. {/* Sub header: Cube Orientation */}
                            </Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_ye_line.png')}/>
                                <Text style={styles.textDescripPlus}>Line{'\n'}F (R U R' U') F'</Text>
                            
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_ye_L.png')}/>
                                <Text style={styles.textDescripPlus}>L-shape{'\n'}Fw (R U R' U') Fw'</Text>
                            
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_ye_dot.png')}/>
                                <Text style={styles.textDescripPlus}>Dot{'\n'}F R U R' U' F' Fw (R U R' U') Fw'</Text>
                            </View>
                        </Card>

                        {/* STEP 5 */}
                        <Text onLayout={event =>(this.OrientYellowCorners = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>5: Orient Yellow Corners {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In this step, you orient the yellow corners so that they are facing up. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>


                            
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom. {/* Sub header: Cube Orientation */}
                            </Text>
                            
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_0.png')}/>
                                <Text style={styles.textDescripPlus}>R2 D' R U2 R' D R U2 R</Text>
                            
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_1.png')}/>
                                <Text style={styles.textDescripPlus}>(F R F' Rw)(U R' U' Rw)</Text>
                            
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_2.png')}/>
                                <Text style={styles.textDescripPlus}>(F R' F' Rw)(U R U' Rw)</Text>
                            
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_3.png')}/>
                                <Text style={styles.textDescripPlus}>R U R' U R U2 R'</Text>
                            
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_4.png')}/>
                                <Text style={styles.textDescripPlus}>R U2 R' U' R U' R'</Text>
                            
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_5.png')}/>
                                <Text style={styles.textDescripPlus}>R U2 (R2 U' R2 U') R2 U2 R</Text>
                            
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_6.png')}/>
                                <Text style={styles.textDescripPlus}>F (R U R' U') (R U R' U') (R U R' U') F'</Text>
                            </View>
                        </Card>
                        
                                
                        {/* STEP 6 */}
                        <Text onLayout={event =>(this.PermuteYellowCorners = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
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
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_pyc_adj.png')}/>
                                <Text style={styles.textDescripPlus}>R' F R' B2 R F' R' B2 R2</Text>
                            
                                {/* opposite */}
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_pyc_opp.png')}/>
                                <Text style={styles.textDescripPlus}>F R U' R' U' R U R' F' (R U R' U'){'\n'}(R' F R F')</Text>
                            </View>
                        </Card>

                        {/* STEP 7 */}
                        <Text onLayout={event =>(this.PermuteYellowEdges = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
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
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_pye_cc.png')}/>
                                <Text style={styles.textDescripPlus}>(R U' R U)(R U R U') R' U' R2</Text>
                            
                                {/* 3 edge clockwise rotation */}
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_pye_c.png')}/>
                                <Text style={styles.textDescripPlus}>R2 U (R U R' U') R' U' R' U R'</Text>
                            
                                {/* opposite sides */}
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_pye_opp.png')}/>
                                <Text style={styles.textDescripPlus}>M2 U M2 U2 M2 U M2</Text>
                            
                                {/* adjacent sides */}
                                <Image style={styles.imageEx} source={require('../Assets/beginners/b_pye_adj.png')}/>
                                <Text style={styles.textDescripPlus}>M' U M2 U M2 U M' U2 M2 U'</Text>
                            </View>
                        </Card>
                    </ScrollView>
                </View>
                
                <View style={{backgroundColor:'#121212', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', left:'1.35%'}}>
                 {/* Home Screen */}
                 <Icon.Button
                        name='home' 
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        alignSelf='center'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Gradient')}
                    >
                    <Text style={styles.BottomTabText}>Home</Text>
                    </Icon.Button>
                    <Icon.Button
                        name='timer-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignSelf='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Timer')}
                        >
                        <Text style={styles.BottomTabText}>Timer</Text>
                    </Icon.Button>
                    {/* Learn */}
                    <Icon.Button
                        name='camera'
                        backgroundColor='transparent'
                        flexDirection='column'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        alignSelf='center'
                        paddingHorizontal='4%'
                        onPress={() => navigate('Scanner')}
                    >
                    <Text style={styles.BottomTabText}>Solver</Text>
                    </Icon.Button>
                    
            <Icon.Button
                        name='cube-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignSelf='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={({}) => navigate('VirtualCube')}
                        >
                        <Text style={styles.BottomTabText}>3DCube</Text>
                    </Icon.Button>
                    {/* Statistics */}
                    <Icon.Button            
                        name='chart-line'
                        alignSelf='center'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Statistics')}
                    >
                    <Text style={styles.BottomTabText}>Statistics</Text>
                    </Icon.Button>
                   
            </View>
            </View>
        </SafeAreaView>
    );
        }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#121212',
        flex: 1
    },

    BottomTabText: {
        //Text used for the bottom menu
        fontSize: 10,
        color: 'white',
        opacity: 1,
        justifyContent: 'center',
        left: '-7%',
        paddingHorizontal: '1%'
    },

    contentButtons: {
        color: '#7600ff',
        //textAlign:'center',
        fontSize: 20,
        //textDecorationLine: 'underline',
        fontWeight: 'bold',
        paddingTop: '5%',
        top: '-30%'
    },

    contentLocal: {
        fontSize: .1,
        color: 'transparent',
        alignItems: 'center'
    },

    ContentsTitle: {
        // Table of contents title
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center'
    },
   

    image: {
        // Background image of cube
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    imageEx: {
        width: '35%',
        height: (Dimensions.get('window').width) * .35,
        resizeMode: 'contain',
        marginRight: '5%',
    },

    imageInstructions: {
        width: '35%',
        height: (Dimensions.get('window').width) * .35,
        resizeMode: 'contain',
        marginLeft: '5%',
    },

    placeHolder: {
        // Text with this style holds the place of something that will be implemented later
        color: 'blue',
        fontWeight: 'bold',
        width: '40%',
    },

    BottomTabText: {
        //Text used for the bottom menu
        fontSize: 10,
        color: 'white',
        opacity: 1,
        justifyContent: 'center',
        left: '-7%',
        paddingHorizontal: '1%'
    },

    scroll: {
        // Scroll view
        backgroundColor: "transparent",
    },

    textDescrip: {
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: 14,
        width: '60%',
        lineHeight: 18,
        letterSpacing: .2,
    },

    textDescripWrap: {
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: RFPercentage(2.1),

        width: '60%',
        lineHeight: 18,
        letterSpacing: .2,
        height: (Dimensions.get('window').width) * .35,
        //flexGrow:10,
    },

    textDescripPlus: {
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 25,
        letterSpacing: .2,
        paddingTop: 10,
        color: 'white',
        width: '60%',
    },

    textDescripWide: {
        // Text thats a description but full width
        paddingTop: 10,
        color: 'white',
        //fontSize: RFPercentage(2.1), 
        fontSize: 14,
        width: '100%',
        lineHeight: 18,
        letterSpacing: .2
    },
    textDescripWideTip: {
        // Text thats a description but full width
        paddingTop: 10,
        color: 'white',
        //opacity:.8,
        //fontSize: RFPercentage(2.1), 
        fontSize: 14,
        width: '100%',
        lineHeight:18,
        letterSpacing:.2,
        paddingLeft:'5%',
        paddingRight:'5%',
        textAlign:'center'
        
    },


    contentLocal:{
        fontSize:.1,
        color:'transparent',
        alignItems:'center'
    },

    textHeader: {
        //headers
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
    },
    NavigateScreenButtons:{
        color:'#7600ff',
        //textAlign:'center',
        fontSize:18,
        //textDecorationLine: 'underline',
        fontWeight:'bold',
        textAlign: 'center',
        lineHeight:20,
        letterSpacing:.2,
        //paddingTop:2,
        top:'20%',
        //bottom:-10,
        textDecorationLine: 'underline',
        //paddingTop:5
        //paddingTop:'5%',
        //top:'-30%'
    },
    NavigateScreenButtons:{
        color:'#7600ff',
        //textAlign:'center',
        fontSize:18,
        //textDecorationLine: 'underline',
        fontWeight:'bold',
        textAlign: 'center',
        lineHeight:20,
        letterSpacing:.2,
        //paddingTop:2,
        top:'20%',
        //bottom:-10,
        textDecorationLine: 'underline',
        //paddingTop:5
        //paddingTop:'5%',
        //top:'-30%'
    },

    textSubHeader: {
        //Text that goes under headers
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        lineHeight:20,
        letterSpacing:.2,
        paddingTop:2,
        paddingBottom:5
    },

    textSummary: {
        // the summary of the step
        color: 'white',
        fontSize: 16,
        paddingBottom: '6%',
        lineHeight: 20,
        letterSpacing: .2
    },

    textTitle: {
        // Titles of the cards
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign:'center'
    },

    ViewContainer: {
        // Holds the whole screen
        flex: 1,
        //justifyContent: 'space-evenly', 
        alignItems: 'center',
        backgroundColor: '#121212',
        //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
})

