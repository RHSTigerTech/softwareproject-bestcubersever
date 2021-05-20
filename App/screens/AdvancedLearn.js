//very rought emplate. Should probably be changed. atleast font size.


import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image, Button, ScrollView, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';
import AwesomeButton from "react-native-really-awesome-button";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



// use to bold certain word or phrases. Such as Pros and Cons ex: <Text><B>Pros:</B> pros of method/step </Text>
const B = (props) => <Text style={{fontWeight: 'bold',fontSize:17, lineHeight:18,letterSpacing:.2}}>{props.children}</Text>

 
export default class App extends Component {
    
    render() {
        const {navigate} = this.props.navigation;
        const navi = (routeBack) => { navigation.popToTop(), navigate(routeBack) }
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer} >
                <View style={{height: '90%'}}>
                    <ScrollView
                        ref={ref => (this.scrollViewRef = ref)}
                        style={styles.scroll}>

                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            {/* should probably add or change description. */}
                            <Text style={styles.textDescripWideTip}>Intro to Advanced Methods.</Text>
                            <Text style={styles.textDescripWideTip}>
                                There are plenty of advanced methods used to solve a rubiks cube. 
                                They all have there pros and cons and it really comes down to which one 
                                makes the most sense to you personally.  
                            </Text>
                        </Card>
                        
                {/* dont actually know what are considered advanced methods so i just put random ones down. Should probably be changed idk. 
                The websites they naviagte to need to also be added/changed. Not sure what the best site to learn this would be */}
                            {/* CFOP is what i did for intermediate so i'll take that out then try to find a different one to take its place so we still have 3 */}

                {/* it also might make more sense to give advanced ways to solve each step rather than just three full advanced methods. 
                Might be easier to find sites that have the steps to do a certain step of solving a rubiks cube rather than an entire method due to the length*/}

                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Text style={styles.textDescripWideTip}>ZZ Method</Text>
                            <Text style={styles.textDescripWide}>
                                This method has 3 steps and is focused on low move count and high turning speed.  During most of F2L, the 
                                solver only has to make L, U, and R moves which reduces time taken up by cube rotations or hand 
                                repositioning.  When the solver reaches the last layer, the edges are already oriented.
                            </Text>
                            <Text style={styles.textDescripWide}>
                                Pros: 
                                {'\n'}{'\t'}<B>1:</B> Reduced Move Set: The F2L step only uses R, U, and L moves and no cube rotations
                                {'\n'}{'\t'}<B>2:</B> Lookahead: Having the edges pre-oriented greatly reduces the time spent on F2L.  Having 
                                the cube in one orientation because you know where the edges are also reduces time because you aren't making 
                                cube rotations.
                                {'\n'}{'\t'}<B>3:</B> Efficiency: With pre-orientation of LL edges and blockbuilding-based F2L, this method 
                                can be completed in around 55 moves.  
                                {'\n'}{'\t'}<B>4:</B> Ease of Learning: The EOLine stage is the most difficult in ZZ and it is where most of 
                                the difficulty is confined.  Intuitive blockbuilding in F2L and the 20 algorithms for a 2-look last layer are 
                                easy to pick up and memorize.
                                {'\n'}{'\t'}<B>5:</B> Felxibility: There are many systems to complete the last layer in a ZZ solve since edges 
                                are preoriented.  Short cuts and tricks are easy to develop with blockbuilding F2L.
                            </Text>
                            <Text style={styles.textDescripWide}>
                                Cons:
                                {'\n'}{'\t'}<B>1:</B> Reliance on Inspection: If no inspection time is given, it becomes a problem because this 
                                method is so reliant on it.
                                {'\n'}{'\t'}<B>2:</B> Difficulty of EOLine: The EOLine step takes a long time to master.  It could take months 
                                to have full EOLine inspection in 15 seconds.
                                {'\n'}{'\t'}<B>3:</B> 2 Extra F2L Cubies to Solve: There are 2 more "cubies" to solve in ZZ F2L than CFOP F2L.
                                {'\n'}{'\t'}<B>4:</B> Switching between L and R moves: This takes some time to get used to.
                            </Text>
                            <Text style={styles.NavigateScreenButtons} onPress={() => navigate('ZZ')}> Cube Basics </Text>
                        </Card>

                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Text style={styles.textDescripWideTip}>Roux Method</Text>
                            <Text style={styles.textDescripWide}>
                                This method is based on blockbuilding and "corners first" methods.  It has a low move count, low number of 
                                rotations, high number of M moves in the last step, and it can be adapted to One-Handed solving.
                            </Text>
                            <Text style={styles.textDescripWide}>
                                Pros:
                                {'\n'}{'\t'}<B>1:</B> Fewer Moves: This method uses less moves than CFOP.
                                {'\n'}{'\t'}<B>2:</B> Intuitive: There is less algorithms to memorize.
                                {'\n'}{'\t'}<B>3:</B> Fewer Rotations: The cube can be solved with mostly R, r, M, and U moves after the first 
                                block is built.
                                {'\n'}{'\t'}<B>4:</B> Fast and Few Algorithms: CMLL only has 42 cases and most are fast algorithms from OLLCPs 
                                from CFOP.
                                {'\n'}{'\t'}<B>5:</B> Lookahead and Inspection: This method allows for rapid improvement of lookahead and 
                                inspection because of the intuitiveness and blockbuilding nature.
                            </Text>
                            <Text style={styles.textDescripWide}>
                                Cons:
                                {'\n'}{'\t'}<B>1:</B> Block Building: This can be difficult to get used to for beginners.
                                {'\n'}{'\t'}<B>2:</B> Larger Chance of DNE: There is a larger chance of a DNE instead of a +2 in competitions 
                                because M is used so often.
                                {'\n'}{'\t'}<B>3:</B> M on Larger Puzzles: Once you get to puzzles like 7x7x7 and 6x6x6 or larger, the M moves 
                                get increasingly difficult.
                                {'\n'}{'\t'}<B>4:</B> M on One-Handed: M moves are hard to do one handed without a table to set the cube on.
                            </Text>
                            <Text style={styles.NavigateScreenButtons} onPress={() => navigate('Roux')}> Cube Basics </Text>
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
        height: (Dimensions.get('window').width)*.35, 
        resizeMode: 'contain', 
        marginRight: '5%', 
    },
    InstructionsImage: {
        width: '35%', 
        height: (Dimensions.get('window').width)*.35, 
        resizeMode: 'contain', 
        marginLeft: '5%', 
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

    BottomTabText:{
        //Text used for the bottom menu
        fontSize:10,
        color:'white',
        opacity:1,
        justifyContent:'center',
        left:'-7%',
        paddingHorizontal:'1%'
      },

    scroll: {
        // Scroll view
        backgroundColor: "transparent",
    },

    textHeader: {
        //headers
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
        //letterSpacing:1,
        //textDecorationLine:'underline'
        
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
        //top:'20%',
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
    ContentsTitle: {
        // Table of contents title
        color: 'white',
        fontSize: 25,
        fontWeight:'bold',
        
    },

    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'#121212',
        //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
})

