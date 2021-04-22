import { Dimensions, ScrollView, StatusBar, Flex, SafeAreaView, StyleSheet } from "react-native";
import React, { useState, Component, useEffect } from 'react';
import {Header, Card} from 'react-native-elements';
import {storeData, getData} from './Timer';
import { times,deletetime, convertedItem, convertedTimes, storedTimes } from './Timer';
import ScrollableTabView from "react-native-scrollable-tab-view";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { Button, Menu, Divider, Provider, Text, Dialog, Portal } from 'react-native-paper';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import { View } from "react-native";
import AwesomeButton from "react-native-really-awesome-button";
import {newList, randomthing} from './NumberList'
import _ from 'lodash';
import {isEqual} from 'lodash/isEqual'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ErrorBoundary from "./ErrorBoundary";
import {setJSExceptionHandler, setNativeExceptionHandler} from 'react-native-exception-handler'

// setJSExceptionHandler((error, isFatal) => {
//   console.log(error, isFatal)
//   alert(error.name)
// // return(
// //   <View>

// //   </View>
// // )
// }, true);

storeData(convertedTimes)
getData()

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   componentDidCatch(error, info) {
//     // Display fallback UI
//     this.setState({ hasError: true });
//     // You can also log the error to an error reporting service
//     logErrorToMyService(error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }


const chartConfigs = [    
    {
      backgroundColor: "#121212",      
      fillShadowGradient:'#764abc',
      fillShadowGradientOpacity:.3,
      backgroundGradientFrom: "#121212",
      backgroundGradientTo: "#121212",
      color: (opacity = 1) => `rgba(${170}, ${119}, ${252}, ${opacity})`
    },    
  ];

let data=[]
let removeZero=[]
let undef;
//removeZero=times()
// for(let i=0;i<times().length;i++){
//   if(times()[1]!=0){
//     removeZero.push(parseFloat(times()[i])) 
//   }            
// }


export const timerthing = () => {
  if(typeof data== 'undefined'){
    undef=true;
    console.log('data is undefined')
}
console.log(typeof data)
  if(times()[times().length-1]!==deletetime()[deletetime().length-1] && deletetime().length>0){
    data=deletetime();
    data.pop();
    data.pop(); 
      if(data[0]===0 && data.length>1){
        //console.log(data[0])
      data.shift();
      }      
  }

  else{
    data=times();
    if(data[data.length-1]==data[data.length-2]){
    data.pop();
    }
    if(data[0]===0 && data.length>1){
      //console.log(data[0])
      data.shift();
      }
  }
  
}
export {data};
// console.log(times().length)
// console.log('whhhhhhhhhy isnt this woooooooooooooooorking')
  export default class Stats extends React.Component { 
    
    UNSAFE_componentWillMount() {
         
  }
    renderTabBar() {
      return <StatusBar hidden />;
      
    }
    

    render() {
      
      const {navigate} = this.props.navigation;
      const {push} = this.props.navigation;
    //ZeroRemove()
    // if(removeZero.length>=1){

    
  try{ 
     
    let width;
    

    let average=0.0;

    let Avg5=0.0;

    let notEnough5='Not enough data'

    let floatnum;

    let besttime;

    let worsttime;

    let deletepoint;

    let changedList=[1];

    const height=360;

        
    timerthing()
    
    

    let numData=[];
    for(let i=0;i<data.length;i++){
      if(data[1]!=0){
        numData.push(parseFloat(data[i])) 
      }            
    }
    console.log(numData)
    

    //Average
    for(let i=0;i<data.length;i++){
      floatnum=parseFloat(data[i])
      average=floatnum+average
    }
    average=average/data.length
    // console.log(average)
    // console.log(data.length)

    //Best Time
    for(let i=0;i<data.length;i++){
      if(data[i]==0){
        data.splice(i,1);
      }
      if(i===0){
        besttime=parseFloat(data[i])
      }
      if(parseFloat(data[i])<besttime){
        besttime=parseFloat(data[i])
      }
      
    }
    //console.log(besttime)

    //Worst Time
    for(let i=0;i<data.length;i++){
      if(i===0){
        worsttime=parseFloat(data[i])
      }
      if(parseFloat(data[i])>worsttime){
        worsttime=parseFloat(data[i])
      }
    }
    //console.log(worsttime)

    //Median
    function sorter(a, b){
      return a - b;
    }
    let len=numData.length;
    let arrSort=numData.slice(0).sort(sorter);
    console.log(arrSort)
    let mid = Math.ceil(len/2);
    //console.log(arrSort[mid-1])
    let Median= len % 2 == 0 ? (arrSort[mid] + arrSort[mid-1]) / 2 :arrSort[mid-1]
    //console.log(Median)
 

    //Avg 5
    if(data.length>=5){
    for(let i=data.length-1;i>data.length-6;i--){
        floatnum=parseFloat(data[i])
        Avg5=floatnum+Avg5
    }
    Avg5=Avg5/5
    //console.log(Avg5)
    }
    
    //Best 3 of 5
    // if(data.length>=5){
    //   for(let i=data.length-1;i>data.length-6;i--){

    //   }
    // }

    // else{
    //   Avg5='Not Enough Data'
    // }

    let xcords=[]
    for(let i=1;i<=data.length;i++){
      xcords.push(i)
    }

    if (data.length>8){
        width = data.length*50;
    }
    else{
        width = Dimensions.get("window").width;
    }

      return (
       
      <View style={{backgroundColor:'#121212', height:'100%'}}>
        <View style={{backgroundColor: '#121212',height:'90%'}} >
         
        <View style={{top:'7%', alignItems:'center'}}>
        <AwesomeButton 
                        
                        width={300} 
                        height={40}
                        backgroundColor='#6d00eb'
                        textSize={27}
                        borderRadius={10}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        onPress={() => push('NumberList')}
                    >
                        List View
             </AwesomeButton>
             </View>
        {/* <Card.Title style={styles.textSummary}>yo</Card.Title> */}
        <Card containerStyle={{backgroundColor: '#121212',height:'28%', top:'7%',zIndex:5}}>
      <ScrollView >
        {/* <Card.Title style={styles.textTitle}>Stats</Card.Title> */}
        <Text style={styles.textSummary}>Best: {besttime.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Worst: {worsttime.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Average: {average.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Median: {Median.toFixed(3)} </Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Avg 5: {Avg5.toFixed(3)}</Text>
        <Card.Divider/>
        {/* start at the first 5 numbers and sort them.
            remove the fastest and slowest times and take that average of the other 3
            assign this average to best 3 of 5
            then do the same for numbers 1-6 then 2-7 etc...
            if one of these averages is lower than the assigned average replace it
             */}
        <Text style={styles.textSummary}>Best 3 of 5: not added</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Avg 12: not added</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Best 10 of 12: not added</Text>
        <Card.Divider/>
      </ScrollView>
    </Card>
        <ScrollView bottom={'-17%'} directionalLockEnabled='vertical' automaticallyAdjustContentInsets={false} vertical={false} horizontal={true}  scrollEventThrottle={16} renderTabBar={this.renderTabBar}>
          {chartConfigs.map(chartConfig => {
            const labelStyle = {
              color: 'white',
              opacity:.87,
              marginVertical: 0,
              textAlign: "center",
              fontSize: 16
            };
            const graphStyle = {
            strokeWidth:2,           
            bottom:0,
              ...chartConfig.style
            };
            <Text style={labelStyle}>Bezier Line Chart</Text>
            return (
              <ScrollView
                directionalLockEnabled='vertical'
                automaticallyAdjustContentInsets={false} 
                vertical={false} 
                horizontal={true}
                style={{
                  backgroundColor: chartConfig.backgroundColor
                }}
              >

              <LineChart               
                //bezier
                data={{
                  labels: xcords,                  
                  datasets: [{data}]}
                }
                width={width}
                height={height}
                yAxisLabel=""
                chartConfig={chartConfig}                
                style={graphStyle}
                verticalLabelRotation={0}
                onDataPointClick={({ value, getColor }) =>
                  
                  showMessage({
                    message: `${value} seconds`,
                    type:'info',
                    backgroundColor: '#121212',                    
                  })
                  
                }       
 
                        
              />   
                        
        </ScrollView>        
            );            
          })}          
    </ScrollView>

    <FlashMessage duration={1000} floating={true}/>

    
    </View>
      <View style={{backgroundColor:'#121212', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                
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
                    name='camera'
                    alignItems='center'
                    flexDirection='column'
                    backgroundColor='transparent'
                    //backgroundColor='#121212'
                    color='white'
                    opacity={1}
                    size={30}
                    paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                    onPress={() => navigate('Scanner')}
                >
                <Text style={styles.BottomTabText}>Solver</Text>
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
    
    );
  }
  
  catch(err){
    return(
    <View style={styles.ErrorContainer}>
      <Text style={styles.textSummary}>
          No Data Has Been Entered
      </Text>
      <AwesomeButton 
                        width={300} 
                        height={40}
                        backgroundColor='#6d00eb'
                        textSize={27}
                        borderRadius={10}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        onPress={() => navigate('Gradient')}
                    >
                        Exit
             </AwesomeButton>
    </View>
    )
  }
        
        }
  
   }
  
  
  

const styles = StyleSheet.create({
    ViewContainer:{
        flex: 1, 
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },  
    ErrorContainer:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent:'center',
      paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
      backgroundColor:'#121212'


    },
    AverageTime:{
      color:'white',
      opacity:.87,
      top:'-3%',
      textAlign:'center',
      fontSize:30,
      borderColor:'white',
    },
    scroll:{
      backgroundColor:'transparent'
    },
    textTitle: {
        // Titles of the cards
        color: 'white',
        opacity:87,
        fontSize: 30
    },
    textSummary: {
        // the summary of the step
        color: 'white',
        opacity:87,
        fontSize: 25,
        textAlign:'center'
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

})
