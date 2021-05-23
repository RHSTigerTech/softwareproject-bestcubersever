import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text, Image, ScrollView, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const B = (props) => <Text style={{ fontWeight: 'bold', fontSize: 17, lineHeight: 18, letterSpacing: .2 }}>{props.children}</Text>

export default class App extends Component {
    
    render() {
        const {navigate} = this.props.navigation;
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <View style={{height: '90%'}}>
                    <ScrollView 
                        ref={ref => (this.scrollViewRef = ref)}
                        style={styles.scroll}>
                            <Card containerStyle={{backgroundColor: '#121212'}}>
                <Card.Title style={styles.ContentsTitle}>Cube Basics{/* Card Title*/}</Card.Title>
                <Card.Divider/>
                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.AlgorithmNotation.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>1: Algorithm Notation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.SideMoves.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>2: Side Moves</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.MiddleMoves.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons} >3: Middle Moves</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            this.scrollViewRef.scrollTo({y: this.OrientationMoves.y,animated: true});
                        }}
                    >
                    <Text style={styles.contentButtons}>4: Orientation Moves</Text>
                    </TouchableOpacity>
                    
                    </Card>
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>Basic Cube Knowledge</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Color Scheme {/* Header: Color Scheme */}</Text>
                            <Text style={styles.textDescripWide}>
                                Most cubes have the same color scheme, which is how the colors are oriented on the cube.  On odd number cubes 
                                (3x3, 5x5, etc.), the centers stay in the same place all the time.  Even number cubes (2x2, 4x4, etc.) are a 
                                little trickier because there isn't a center that stays on it's side so you have to remember the color scheme.
                            </Text>
                            <Text style={styles.textWideCenter}>
                                      Blue and green are always opposites
                            </Text>
                            <Text style={styles.textWideCenter}>
                                Red and orange are always opposites
                            </Text>
                            <Text style={styles.textWideCenter}>
                                White and yellow are always opposites
                            </Text>
                            <Text style={styles.textWideCenter}>
                                When white is on the bottom and yellow is on the top, the colors in the middle layer (starting from the 
                                front facing color going to the right) are in this order: green, orange, blue, then red.{'\n'}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Types of Pieces</Text>
                            <Text style={styles.textSummary}>
                                There are three different types of pieces on a cube.
                            </Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.exImage} source={require('../Assets/basics/cb_centers.jpg')}/>
                                <Text style={styles.textDescrip}><B>Center pieces:</B> These only have one color on them</Text>
                                <Image style={styles.exImage} source={require('../Assets/basics/cb_edges.jpg')}/>
                                <Text style={styles.textDescrip}><B>Edge Pieces:</B> These have two colors on them</Text>
                                <Image style={styles.exImage} source={require('../Assets/basics/cb_corners.jpg')}/>
                                <Text style={styles.textDescrip}><B>Corner Pieces:</B> These have three colors on them</Text>
                            </View>
                        </Card>
                        <Text onLayout={event =>(this.AlgorithmNotation = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>Algorithm Notation</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textDescripWide}>
                                All algorithms are made up of letters, numbers, and apostrophes that represent moves.  Moves are separated with 
                                spaces.  The letter represents which side to turn.  If it doesn't have an apostrophe, you turn that side 
                                clockwise and if it does, you turn that side counter clockwise.  Wide moves are where you move 2 layers of the 
                                cube and they are represented by either lowercase letters or the letter and "w".  There are also three different 
                                types of moves: side, middle, and orientation.  Side moves are when you rotate one or more of the layers on one 
                                side of the cube.  Middle moves are where you rotate just the center of the cube.  Orientation moves are when 
                                you rotate the whole cube.
                                you rotate the whole cube. If a move has a 2 at the end that means you would repeat the move twice to make a full 180 degree turn.
                                {'\n'}{'\n'}Ex: f (R U R' U') f' means wide front turn clockwise, right turn clockwise, up turn clockwise, right turn 
                                counter clockwise, up turn counter clockwise, and wide front turn counter clockwise.{'\n'}
                            </Text>
                            </Card>
                            <Text onLayout={event =>(this.SideMoves = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                            <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Text style={styles.textHeader}>Side Moves</Text>
                            <Text style={styles.textSubHeader}>R moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_rc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>R</B> {'\n'}Rotate the right layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_rcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>R'</B> {'\n'}Rotate the right layer counter clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_rwc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Rw OR r</B> {'\n'}Rotate the right layer and the middle layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_rwcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Rw' OR r'</B> {'\n'}Rotate the right layer and middle layer counter clockwise</Text>
                                </View>
                            </View>
                            <Text style={styles.textSubHeader}>{'\n'}L moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_lc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>L</B> {'\n'}Rotate the left layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_lcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>L'</B> {'\n'}Rotate the left layer counter clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_lwc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Lw OR l</B> {'\n'}Rotate the left layer and the middle layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_lwcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Lw' OR l'</B> {'\n'}Rotate the left layer and middle layer counter clockwise</Text>
                                </View>
                            </View>
                            <Text style={styles.textSubHeader}>{'\n'}U moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_uc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>U</B> {'\n'}Rotate the top layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_ucc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>U'</B> {'\n'}Rotate the top layer counter clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_uwc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Uw OR u</B> {'\n'}Rotate the top layer and the middle layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_uwcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Uw' OR u</B>' {'\n'}Rotate the top layer and middle layer counter clockwise</Text>
                                </View>
                            </View>
                            <Text style={styles.textSubHeader}>{'\n'}D moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_dc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>D</B> {'\n'}Rotate the bottom layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_dcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>D'</B> {'\n'}Rotate the bottom layer counter clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_dwc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Dw OR d</B> {'\n'}Rotate the bottom layer and the middle layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_dwcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Dw' OR d'</B> {'\n'}Rotate the bottom layer and middle layer counter clockwise</Text>
                                </View>
                            </View>
                            <Text style={styles.textSubHeader}>{'\n'}F moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_fc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>F</B> {'\n'}Rotate the front layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_fcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>F'</B> {'\n'}Rotate the front layer counter clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_fwc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Fw OR f</B> {'\n'}Rotate the front layer and the middle layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_fwcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Fw' OR f'</B> {'\n'}Rotate the front layer and middle layer counter clockwise</Text>
                                </View>
                            </View>
                            
                            <Text style={styles.textSubHeader}>{'\n'}B moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_bc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>B</B> {'\n'}Rotate the back layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_bcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>B'</B> {'\n'}Rotate the back layer counter clockwise</Text>
                                </View>
                                
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_bwc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Bw OR b</B> {'\n'}Rotate the back layer and the middle layer clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_bwcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>Bw' OR b'</B> {'\n'}Rotate the back layer and middle layer counter clockwise</Text>
                                </View>
                            </View>
                            </Card>
                            <Text onLayout={event =>(this.MiddleMoves = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                            <Card containerStyle={{backgroundColor:'#121212'}}>
                            
                            <Text style={styles.textHeader}>{'\n'}Middle Moves</Text>
                            <Text style={styles.textSubHeader}>{'\n'}M moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_mc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>M</B> {'\n'}Rotate the middle layer between R and L clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_mcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>M'</B> {'\n'}Rotate the middle layer between R and L counter clockwise</Text>
                                </View>
                            </View>
                            <Text style={styles.textSubHeader}>{'\n'}E moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_ec.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>E</B> {'\n'}Rotate the middle layer between U and D clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_ecc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>E'</B> {'\n'}Rotate the middle layer between U and D counter clockwise</Text>
                                </View>
                            </View>
                            <Text style={styles.textSubHeader}>{'\n'}S moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_sc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>S</B> {'\n'}Rotate the middle layer between F and B clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_scc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>S'</B> {'\n'}Rotate the middle layer between F and B counter clockwise</Text>
                                </View>
                            </View>
                            </Card>
                            <Text onLayout={event =>(this.OrientationMoves = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                            <Card containerStyle={{backgroundColor:'#121212'}}>
                            <Text style={styles.textHeader}>{'\n'}Orientation Moves</Text>
                            <Text style={styles.textSubHeader}>{'\n'}X moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_xc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>x</B> {'\n'}Rotate the cube on its x-axis clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_xcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>x'</B> {'\n'}Rotate the cube on its x-axis counter clockwise</Text>
                                </View>
                            </View>
                            <Text style={styles.textSubHeader}>{'\n'}Y moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_yc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>y</B> {'\n'}Rotate the cube on its y-axis clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_ycc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>y'</B> {'\n'}Rotate the cube on its y-axis counter clockwise</Text>
                                </View>
                            </View>
                            <Text style={styles.textSubHeader}>{'\n'}Z moves</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_zc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>z</B> {'\n'}Rotate the cube on its z-axis clockwise</Text>
                                </View>
                                <View style={styles.viewMove}>
                                    <Image style={styles.movesImage} source={require('../Assets/basics/cb_zcc.jpg')}/>
                                    <Text style={styles.textDescrip2}><B>z'</B> {'\n'}Rotate the cube on its z-axis counter clockwise</Text>
                                </View>
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
    background:{
        backgroundColor:'#121212',
        flex:1
    },
    exImage: {
        width: '35%', 
        height: (Dimensions.get('window').width*.35), 
        resizeMode: 'contain', 
        marginRight: '5%', 
    },
    movesImage: {
        width: '80%', 
        height: (Dimensions.get('window').width*.5)*.8, 
        resizeMode: 'contain', 
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
        backgroundColor: '#121212',
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

    textDescrip: {
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: 14,
        width: '60%',
        lineHeight: 18,
        letterSpacing: .2,
    },

    BottomTabText: {
        //Text used for the bottom menu
        fontSize:10,
        color:'white',
        opacity:1,
        justifyContent:'center',
        left:'-7%',
        paddingHorizontal:'1%'
      },
    textHeader: {
        //headers
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
    },
    textDescrip2:{
        // Text thats a description
        color: 'white',
        fontSize: 13,
        width: '80%',
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
    textWideCenter:{
        // Text thats a description but full width and centered
        paddingTop: 10,
        lineHeight: 18,
        letterSpacing: .2,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    textSubHeader: {
        //Text that goes under headers
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'bold'
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
        fontWeight: 'bold'

    },
    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'#121212',
        //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
    viewMove:{
        //Holds a move's picture and description
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        width: '50%', 
        alignContent: 'center', 
    },
    contentLocal:{
        fontSize:.1,
        color:'transparent',
        alignItems:'center'
    },
    
    contentButtons:{
        color:'#7600ff',
        //textAlign:'center',
        fontSize:20,
        //textDecorationLine: 'underline',
        fontWeight:'bold',
        paddingTop:'5%',
        top:'-30%'
    },
    ContentsTitle: {
        // Table of contents title
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        
    },
})