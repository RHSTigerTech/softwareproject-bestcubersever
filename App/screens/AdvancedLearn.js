import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image, Button, ScrollView, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import {Header, Card} from 'react-native-elements';
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

                    <Card containerStyle={{backgroundColor: '#121212'}}>

                {/* dont actually know what are considered advanced methods so i just put random ones down. Should probably be changed idk. 
                The websites they naviagte to need to also be added/changed. Not sure what the best site to learn this would be */}

                {/* it also might make more sense to give advanced ways to solve each step rather than just three full advanced methods. 
                Might be easier to find sites that have the steps to do a certain step of solving a rubiks cube rather than an entire method due to the length*/}
                <Text style={styles.textDescripWideTip}>CFOP Method</Text>
                <Text style={styles.textDescripWide}>Description</Text>
                <Text style={styles.textDescripWide}>Pros:</Text>
                <Text style={styles.textDescripWide}>Cons:</Text>
                <Text style={styles.NavigateScreenButtons} onPress={() => navigate('CFOP')}> Cube Basics </Text>

                </Card>
                <Card containerStyle={{backgroundColor: '#121212'}}>
                <Text style={styles.textDescripWideTip}>ZZ Method</Text>
                <Text style={styles.textDescripWide}>Description</Text>
                <Text style={styles.textDescripWide}>Pros:</Text>
                <Text style={styles.textDescripWide}>Cons:</Text>
                <Text style={styles.NavigateScreenButtons} onPress={() => navigate('ZZ')}> Cube Basics </Text>

                </Card>
                <Card containerStyle={{backgroundColor: '#121212'}}>
                <Text style={styles.textDescripWideTip}>Roux Method</Text>
                <Text style={styles.textDescripWide}>Description</Text>
                <Text style={styles.textDescripWide}>Pros:</Text>
                <Text style={styles.textDescripWide}>Cons:</Text>
                <Text style={styles.NavigateScreenButtons} onPress={() => navigate('Roux')}> Cube Basics </Text>

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

