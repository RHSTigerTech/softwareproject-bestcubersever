import React from 'react';
import { StyleSheet, View,
 Platform, StatusBar, Text, Image, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {Header, Card} from 'react-native-elements';
import GradientButton from 'react-native-gradient-buttons';

function AlgList({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <View style={{height: '90%'}}>
                    <ScrollView style={styles.scroll}>
                        <Card containerStyle={{backgroundColor: 'black'}}>
                            <Card.Title style={styles.textTitle}>Beginner's Method</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Step 4: Orient Yellow Edges</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_ye_L.png')}/>
                                <Text style={styles.textDescrip}>L-shape{'\n'}U2 F (R' U' R U) F'</Text>
                            </View>
                        </Card>
                        <Card containerStyle={{backgroundColor: 'black'}}>
                            <Card.Title style={styles.textTitle}>Intermediate Method</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>3: Orient Last Layer (OLL)</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textWideCenter}>All corners oriented</Text>
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_42.png')}/>
                                <Text style={styles.textDescrip}>
                                    (y2) F (R U R' U') F' U2 F (R U F' U') F'
                                    {'\n'}M U' M2 U' M' U2 M U' M 
                                    {'\n'}(y2) F (R U R' U') F2 (L' U' L U) F
                                </Text>
                                
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
        backgroundColor:'#121212',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
})

export default AlgList;