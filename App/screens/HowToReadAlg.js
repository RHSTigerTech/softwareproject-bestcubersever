import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image, Button, ScrollView, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import {Header, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const B = (props) => <Text style={{fontWeight: 'bold',fontSize:17, lineHeight:18,letterSpacing:.2}}>{props.children}</Text>

export default class App extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView style={styles.background}>
                <View style={styles.ViewContainer}>
                    <View style={{ height: '90%' }}>
                        <ScrollView 
                            ref={ref => (this.scrollViewRef = ref)}
                            style={styles.scroll}
                        >
                            <Card containerStyle={{backgroundColor: '#121212'}}>
                                <Card.Title style={styles.ContentsTitle}>Basic Cube Knowledge</Card.Title>
                                <Card.Divider/>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.scrollViewRef.scrollTo({y: this.ColorScheme.y, animated: true});
                                    }}
                                >
                                    <Text style={styles.contentButtons}>Color Scheme</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                    onPress={() => {
                                        this.scrollViewRef.scrollTo({y: this.Types.y, animated: true});
                                    }}
                                >
                                    <Text style={styles.contentButtons}>Types of Pieces</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.scrollViewRef.scrollTo({y: this.AlgNotation.y, animated: true});
                                    }}
                                >
                                    <Text style={styles.contentButtons}>Algorithm Notation</Text>
                                </TouchableOpacity>
                            </Card>
                            
                            {/* Color Scheme */}
                            <Text onLayout={event => (this.ColorScheme = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                            <Card containerStyle={{ backgroundColor: 'black' }}>
                                <Card.Title style={styles.textTitle}>Color Scheme {/* Card Title */}</Card.Title>
                                <Card.Divider />
                                <Text style={styles.textDescripWide}>
                                    Most cubes have the same color scheme, which is how the colors are oriented on the cube.  On odd number cubes
                                    (3x3, 5x5, etc.), the centers stay in the same place all the time.  Even number cubes (2x2, 4x4, etc.) are a
                                    little trickier because there isn't a center that stays on it's side so you have to remember the color scheme.
                                </Text>
                                <Text style={styles.textWideCenter}>
                                    Blue and green are always opposites
                                {'\n'}Red and orange are always opposites
                                {'\n'}White and yellow are always opposites
                                {'\n'}When white is on the bottom and yellow is on the top, the colors in the middle layer (starting from the
                                front facing color going to the right) are in this order: blue, red, green, then orange.{'\n'}
                                </Text>
                            </Card>

                            {/* Types of Pieces */}
                            <Text onLayout={event => (this.Types = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                            <Card containerStyle={{ backgroundColor: 'black'}}>
                                <Card.Title style={styles.textTitle}>Types of Pieces {/* Card Title */}</Card.Title>
                                <Card.Divider />
                                <Text style={styles.textDescripWide}>
                                    There are three different types of pieces on a cube.
                                </Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Image style={styles.imageEx} source={require('../Assets/basics/cb_centers.jpg')} />
                                    <Text style={styles.textDescrip}>Center pieces: These only have one color on them</Text>

                                    <Image style={styles.imageEx} source={require('../Assets/basics/cb_edges.jpg')} />
                                    <Text style={styles.textDescrip}>Edge Pieces: These have two colors on them</Text>

                                    <Image style={styles.imageEx} source={require('../Assets/basics/cb_corners.jpg')} />
                                    <Text style={styles.textDescrip}>Corner Pieces: These have three colors on them</Text>
                                </View>
                            </Card>

                            {/* Algorithm Notation */}
                            <Text onLayout={event => (this.AlgNotation = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                            <Card containerStyle={{ backgroundColor: 'black' }}>
                                <Card.Title style={styles.textTitle}>Algorithm Notation</Card.Title>
                                <Card.Divider />
                                <Text style={styles.textDescripWide}>
                                    All algorithms are made up of letters, numbers, and apostrophes that represent moves.  Moves are seperated with
                                    spaces.  The letter represents which side to turn.  If it doesn't have an apostrophe, you turn that side
                                    clockwise and if it does, you turn that side counter clockwise.  Wide moves are where you move 2 layers of the
                                    cube and they are represented by either lowercase letters or the letter and "w".  There are also three different
                                    types of moves: side, middle, and orientation.  Side moves are when you rotate one or more of the layers on one
                                    side of the cube.  Middle moves are where you rotate just the center of the cube.  Orientation moves are when
                                    you rotate the whole cube.
                                {'\n'}{'\n'}Ex: f (R U R' U') f' means wide front turn clockwise, right turn clockwise, up turn clockwise, right turn
                                counter clockwise, up turn counter clockwise, and wide front turn counter clockwise.{'\n'}
                                </Text>
                                <Card.Divider />
                                <Text style={styles.textHeader}>Side Moves</Text>
                                <Text style={styles.textSubHeader}>R moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_rc.jpg')} />
                                        <Text style={styles.textDescrip2}>R {'\n'}Rotate the right layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_rcc.jpg')} />
                                        <Text style={styles.textDescrip2}>R' {'\n'}Rotate the right layer counter clockwise</Text>
                                    </View>

                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_rwc.jpg')} />
                                        <Text style={styles.textDescrip2}>Rw OR r {'\n'}Rotate the right layer and the middle layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_rwcc.jpg')} />
                                        <Text style={styles.textDescrip2}>Rw' OR r' {'\n'}Rotate the right layer and middle layer counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textSubHeader}>{'\n'}L moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_lc.jpg')} />
                                        <Text style={styles.textDescrip2}>L {'\n'}Rotate the left layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_lcc.jpg')} />
                                        <Text style={styles.textDescrip2}>L' {'\n'}Rotate the left layer counter clockwise</Text>
                                    </View>

                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_lwc.jpg')} />
                                        <Text style={styles.textDescrip2}>Lw OR l {'\n'}Rotate the left layer and the middle layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_lwcc.jpg')} />
                                        <Text style={styles.textDescrip2}>Lw' OR l' {'\n'}Rotate the left layer and middle layer counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textSubHeader}>{'\n'}U moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_uc.jpg')} />
                                        <Text style={styles.textDescrip2}>U {'\n'}Rotate the top layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_ucc.jpg')} />
                                        <Text style={styles.textDescrip2}>U' {'\n'}Rotate the top layer counter clockwise</Text>
                                    </View>

                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_uwc.jpg')} />
                                        <Text style={styles.textDescrip2}>Uw OR u {'\n'}Rotate the top layer and the middle layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_uwcc.jpg')} />
                                        <Text style={styles.textDescrip2}>Uw' OR u' {'\n'}Rotate the top layer and middle layer counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textSubHeader}>{'\n'}D moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_dc.jpg')} />
                                        <Text style={styles.textDescrip2}>D {'\n'}Rotate the bottom layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_dcc.jpg')} />
                                        <Text style={styles.textDescrip2}>D' {'\n'}Rotate the bottom layer counter clockwise</Text>
                                    </View>

                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_dwc.jpg')} />
                                        <Text style={styles.textDescrip2}>Dw OR d {'\n'}Rotate the bottom layer and the middle layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_dwcc.jpg')} />
                                        <Text style={styles.textDescrip2}>Dw' OR d' {'\n'}Rotate the bottom layer and middle layer counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textSubHeader}>{'\n'}F moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_fc.jpg')} />
                                        <Text style={styles.textDescrip2}>F {'\n'}Rotate the front layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_fcc.jpg')} />
                                        <Text style={styles.textDescrip2}>F' {'\n'}Rotate the front layer counter clockwise</Text>
                                    </View>

                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_fwc.jpg')} />
                                        <Text style={styles.textDescrip2}>Fw OR f {'\n'}Rotate the front layer and the middle layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_fwcc.jpg')} />
                                        <Text style={styles.textDescrip2}>Fw' OR f' {'\n'}Rotate the front layer and middle layer counter clockwise</Text>
                                    </View>
                                </View>
                                <Text style={styles.textSubHeader}>{'\n'}B moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_bc.jpg')} />
                                        <Text style={styles.textDescrip2}>B {'\n'}Rotate the back layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_bcc.jpg')} />
                                        <Text style={styles.textDescrip2}>B' {'\n'}Rotate the back layer counter clockwise</Text>
                                    </View>

                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_bwc.jpg')} />
                                        <Text style={styles.textDescrip2}>Bw OR b {'\n'}Rotate the back layer and the middle layer clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_bwcc.jpg')} />
                                        <Text style={styles.textDescrip2}>Bw' OR b' {'\n'}Rotate the back layer and middle layer counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textHeader}>{'\n'}Middle Moves</Text>
                                <Text style={styles.textSubHeader}>{'\n'}M moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_mc.jpg')} />
                                        <Text style={styles.textDescrip2}>M {'\n'}Rotate the middle layer between R and L clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_mcc.jpg')} />
                                        <Text style={styles.textDescrip2}>M' {'\n'}Rotate the middle layer between R and L counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textSubHeader}>{'\n'}E moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_ec.jpg')} />
                                        <Text style={styles.textDescrip2}>E {'\n'}Rotate the middle layer between U and D clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_ecc.jpg')} />
                                        <Text style={styles.textDescrip2}>E' {'\n'}Rotate the middle layer between U and D counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textSubHeader}>{'\n'}S moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_sc.jpg')} />
                                        <Text style={styles.textDescrip2}>S {'\n'}Rotate the middle layer between F and B clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_scc.jpg')} />
                                        <Text style={styles.textDescrip2}>S' {'\n'}Rotate the middle layer between F and B counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textHeader}>{'\n'}Orientation Moves</Text>
                                <Text style={styles.textSubHeader}>{'\n'}X moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_xc.jpg')} />
                                        <Text style={styles.textDescrip2}>x {'\n'}Rotate the cube on its x-axis clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_xcc.jpg')} />
                                        <Text style={styles.textDescrip2}>x' {'\n'}Rotate the cube on its x-axis counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textSubHeader}>{'\n'}Y moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_yc.jpg')} />
                                        <Text style={styles.textDescrip2}>y {'\n'}Rotate the cube on its y-axis clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_ycc.jpg')} />
                                        <Text style={styles.textDescrip2}>y' {'\n'}Rotate the cube on its y-axis counter clockwise</Text>
                                    </View>
                                </View>

                                <Text style={styles.textSubHeader}>{'\n'}Z moves</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_zc.jpg')} />
                                        <Text style={styles.textDescrip2}>z {'\n'}Rotate the cube on its z-axis clockwise</Text>
                                    </View>
                                    <View style={styles.viewMove}>
                                        <Image style={styles.imageMoves} source={require('../Assets/basics/cb_zcc.jpg')} />
                                        <Text style={styles.textDescrip2}>z' {'\n'}Rotate the cube on its z-axis counter clockwise</Text>
                                    </View>
                                </View>
                            </Card>
                        </ScrollView>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon.Button
                            name='cube-outline'
                            flexDirection='column'
                            backgroundColor='transparent'
                            //backgroundColor='#121212'
                            alignItems='center'
                            color='white'
                            opacity={1}
                            size={30}
                            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                            onPress={({}) => navigate('VirtualCube')}
                            >
                            <Text style={styles.BottomTabText}>3DCube</Text>
                        </Icon.Button>
                        {/* Statistics */}
                        <Icon.Button            
                            name='chart-line'
                            alignItems='center'
                            flexDirection='column'
                            backgroundColor='transparent'
                            //backgroundColor='#121212'
                            color='white'
                            opacity={1}
                            size={30}
                            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                            onPress={() => navigate('Statistics')}
                        >
                        <Text style={styles.BottomTabText}>Statistics</Text>
                        </Icon.Button>
                        {/* Home Screen */}
                        <Icon.Button
                            name='home' 
                            flexDirection='column'
                            backgroundColor='transparent'
                            //backgroundColor='#121212'
                            color='white'
                            opacity={1}
                            size={30}
                            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                            onPress={() => navigate('Gradient')}
                        >
                        <Text style={styles.BottomTabText}>Home</Text>
                        </Icon.Button>
                        {/* Learn */}
                        <Icon.Button
                            name='school'
                            backgroundColor='transparent'
                            flexDirection='column'
                            //backgroundColor='#121212'
                            color='white'
                            opacity={1}
                            size={30}
                            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                            onPress={() => navigate('Learn')}
                        >
                        <Text style={styles.BottomTabText}>Learn</Text>
                        </Icon.Button>
                        <Icon.Button
                            name='timer-outline'
                            flexDirection='column'
                            backgroundColor='transparent'
                            //backgroundColor='#121212'
                            alignItems='center'
                            color='white'
                            opacity={1}
                            size={30}
                            paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                            onPress={() => navigate('Timer')}
                            >
                            <Text style={styles.BottomTabText}>Timer</Text>
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

    BottomTabText:{
        //Text used for the bottom menu
        fontSize:10,
        color:'white',
        opacity:1,
        justifyContent:'center',
        left:'-7%',
        paddingHorizontal:'1%'
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

    contentLocal:{
        fontSize:.1,
        color:'transparent',
        alignItems:'center'
    },

    ContentsTitle: {
        // Table of contents title
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
    },

    image: {
        // Background image of cube
        width:'100%',
        height: '100%',
        position: 'absolute',
    },

    imageEx: {
        width: '35%', 
        height: (Dimensions.get('window').width)*.35, 
        resizeMode: 'contain', 
        marginRight: '5%', 
    },

    imageInstructions: {
        width: '35%', 
        height: (Dimensions.get('window').width)*.35, 
        resizeMode: 'contain', 
        marginLeft: '5%', 
    },

    imageMoves: {
        width: '80%', 
        height: (Dimensions.get('window').width*.5)*.8, 
        resizeMode: 'contain', 
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

    textDescrip:{
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: 14,        
        width: '60%',
        lineHeight:18,
        letterSpacing:.2,
    },

    textDescrip2: {
        paddingTop: 10,
        color: 'white',
        fontSize: 14,
        lineHeight:18,
        letterSpacing:.2,
        width: '80%'
    },

    textDescripWrap:{
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: RFPercentage(2.1),  
               
        width: '60%',
        lineHeight:18,
        letterSpacing:.2,  
        height: (Dimensions.get('window').width)*.35, 
        //flexGrow:10,  
        
    },

    textDescripPlus:{
        fontWeight: 'bold',
        fontSize:17, 
        lineHeight:25,
        letterSpacing:.2,
        paddingTop: 10,
        color: 'white',
        width: '60%',
    },

    textDescripWide:{
        // Text thats a description but full width
        paddingTop: 10,
        color: 'white',
        //fontSize: RFPercentage(2.1), 
        fontSize: 14,
        width: '100%',
        lineHeight:18,
        letterSpacing:.2
    },

    textDescripWideTip:{
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

    textHeader: {
        //headers
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
    },

    textSubHeader: {
        //Text that goes under headers
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        lineHeight:18,
        letterSpacing:.2,
        paddingTop:2,
        paddingBottom:5
    },

    textSummary: {
        // the summary of the step
        color: 'white',
        fontSize: 16,
        paddingBottom:'6%',
        lineHeight:20,
        letterSpacing:.2
    },

    textTitle: {
        // Titles of the cards
        color: 'white',
        fontSize: 25,
        fontWeight:'bold'
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

    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'#121212',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },

    viewMove:{
        //Holds a move's picture and description
        flexDirection: 'column', 
        flexWrap: 'wrap', 
        width: '50%', 
        alignContent: 'center', 
    },
})