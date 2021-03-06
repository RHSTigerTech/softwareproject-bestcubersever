import { Dimensions, ScrollView, StatusBar, Flex, SafeAreaView, StyleSheet, FlatList } from "react-native";
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
import _, { last } from 'lodash';
import {isEqual} from 'lodash/isEqual'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ErrorBoundary from "./ErrorBoundary";
import {setJSExceptionHandler, setNativeExceptionHandler} from 'react-native-exception-handler'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Platform } from "react-native";

// setJSExceptionHandler((error, isFatal) => {
//   console.log(error, isFatal)
//   alert(error.name)
// // return(
// //   <View>

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


let data=[];
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
    //console.log('data is undefined')
}
//console.log(typeof data)
  if(times()[times().length-1]!==deletetime()[deletetime().length-1] && deletetime().length>0){
    data=deletetime();
    
    data.pop();
    data.pop(); 
      if(data[0]==0){
        //console.log(data[0])
      data.shift();
      }      
  }

  else{
    data=times();
    
    if(data[data.length-1]==data[data.length-2]){
    data.pop();
    }
    if(data[0]==0){
      //console.log(data[0])
      data.shift();
      }
  }
  
        
    
  
  //console.log(data)
  //console.log('---------------------')
}


export {data};
// console.log(times().length)
// console.log('whhhhhhhhhy isnt this woooooooooooooooorking')
  export default class Stats extends React.PureComponent { 
    
    
    renderTabBar() {
      return <StatusBar hidden />;
      
    }
    UNSAFE_componentDidMount(){
      this.scrollViewRef.scrollToEnd({ animated: true })
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

    let Avg10=0.0;

    

    let notEnough5='Not enough data'

    let floatnum;

    let besttime;

    let worsttime;

    let deletepoint;

    let changedList=[1];

    const height= Platform.OS === 'android' ? ((Dimensions.get('window').height)*.50) : ((Dimensions.get('screen').height)*.50-getStatusBarHeight())
    
    // console.log(height)

    // console.log('height of window')
    // console.log((Dimensions.get('window').height))

    // console.log('height of screen')
    // console.log((Dimensions.get('screen').height))


    // let iosStatusBar=getStatusBarHeight(true);

    // console.log(iosStatusBar)

    


    

    
    

        
    timerthing()
    
    

    let numData=[];
    for(let i=0;i<data.length;i++){
      if(data[i]!=0){
        numData.push(parseFloat(data[i])) 
      }    
      floatnum=parseFloat(data[i])
      
      average=floatnum+average 
      
      if(data[i]==0){
        data.splice(i,1);
      }
      if(i===0){
        besttime=parseFloat(data[i])
      }
      if(parseFloat(data[i])<besttime){
        besttime=parseFloat(data[i])
      }       
      if(i===0){
        worsttime=parseFloat(data[i])
      }
      if(parseFloat(data[i])>worsttime){
        worsttime=parseFloat(data[i])
      }
    }
    //console.log(numData)
    

    //Average
    
    average=average/data.length
    // console.log(average)
    // console.log(data.length)

    //Best Time

    //console.log(besttime)

    //Worst Time
    
    //console.log(worsttime)

    //Median
    function sorter(a, b){
      return a - b;
    }
    let len=numData.length;
    let arrSort=numData.slice(0).sort(sorter);
    //console.log(arrSort)
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

    //3 of 5
    let stored3of5=[];
    stored3of5 = arrSort.slice(Math.max(arrSort.length - 5, 0))
    let last5= numData.slice(Math.max(arrSort.length - 5, 0))
    let last5sorted=last5.slice(0).sort(sorter)
    last5sorted.pop()
    last5sorted.shift()
    let total5=0.0;
    if(data.length>=5){
    for(let i=0;i<3;i++){
      total5=last5sorted[i]+total5
    }
    total5=total5/3
  }

  //3 of 5
  let stored10of12=[];
  stored10of12 = arrSort.slice(Math.max(arrSort.length - 12, 0))
  let last12= numData.slice(Math.max(arrSort.length - 12, 0))
  let last12sorted=last12.slice(0).sort(sorter)
  last12sorted.pop()
  last12sorted.shift()
  //console.log(last12sorted)
  let total12=0.0;
  if(data.length>=12){
  for(let i=0;i<10;i++){
    total12=last12sorted[i]+total12
  }
  total12=total12/10
}

let best10=[];
let best10Avg=0.0;

if(data.length>=10){
    best10=arrSort.slice(0,10)
    for(let i=0;i<10;i++){
      best10Avg=best10[i]+best10Avg
    }
    best10Avg=best10Avg/10
}


//console.log(best10)

    if(data.length>=10){
      for(let i=data.length-1;i>data.length-11;i--){
          floatnum=parseFloat(data[i])
          Avg10=floatnum+Avg10
      }
      Avg10=Avg10/10
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

    



    // overflowdata=data;
    //console.log(newArray.length)

    
    
    
    

    let xcords=[]
    for(let i=1;i<=data.length;i++){
      xcords.push(i)
    }

    if (data.length>15){
        width = data.length*25;
    }
    else{
        width = Dimensions.get("window").width;
    }

      return (
       
        
      <SafeAreaView style={styles.background}>
        <View style={styles.ViewContainer} >
        <StatusBar
          hidden={true}
          
        />
            <View style={{height: '90%'}}>
         
        <AwesomeButton 
                        style={{alignSelf:'center',top: Platform.OS== 'android' ? ((Dimensions.get('window').height)*.03):0}}
                        width={(Dimensions.get('window').width)*.8} 
                        height={(Dimensions.get('window').height)*.067}
                        backgroundColor='#6d00eb'
                        textSize={27}
                        bottom={0}
                        borderRadius={10}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                       
                        raiseLevel={5}
                        onPress={() => push('NumberList')}
                    >
                        List View
             </AwesomeButton>
             
        {/* <Card.Title style={styles.textSummary}>yo</Card.Title> */}
        <Card containerStyle={{backgroundColor: '#121212',top:((Dimensions.get('window').height)*.03),height:((Dimensions.get('window').height)*.29)}}>
      <ScrollView indicatorStyle='white' showsVerticalScrollIndicator={true} persistentScrollbar={true}>
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
        <Text style={styles.textSummary}>3 of 5: {total5.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Avg 10: {Avg10.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>10 of 12: {total12.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Best 10 Avg: {best10Avg.toFixed(3)}</Text>
        <Card.Divider/>
      </ScrollView>
    </Card>
        <ScrollView ref={ref => (this.scrollViewRef = ref)}  directionalLockEnabled='vertical' automaticallyAdjustContentInsets={false} vertical={false} horizontal={true}  scrollEventThrottle={16} renderTabBar={this.renderTabBar}>
          
          {
            chartConfigs.map(chartConfig => {
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
                  backgroundColor: chartConfig.backgroundColor,
                  top:((Dimensions.get('window').height)*.05)
                  
                
                }}
              >

              <LineChart            
                bezier
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
      <View style={{flexDirection:'row', left:Platform.OS=='android' ? '1.1%':'1.1%'}}>
                {/* Home Screen */}
                <Icon.Button
                    name='home' 
                    flexDirection='column'
                    backgroundColor='transparent'
                    //backgroundColor='#121212'
                    color='white'
                    opacity={1}
                    size={30}
                    paddingHorizontal='4%'
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
                    paddingHorizontal='4%'
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
                    paddingHorizontal='4%'
                    onPress={() => navigate('Timer')}
                    >
                    <Text style={styles.BottomTabText}>Timer</Text>
                </Icon.Button>
                <Icon.Button            
                    name='camera'
                    alignItems='center'
                    flexDirection='column'
                    backgroundColor='transparent'
                    //backgroundColor='#121212'
                    color='white'
                    opacity={1}
                    size={30}
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
                    alignItems='center'
                    color='white'
                    opacity={1}
                    size={30}
                    paddingHorizontal='4%'
                    onPress={({}) => navigate('VirtualCube')}
                    >
                    <Text style={styles.BottomTabText}>3DCube</Text>
                </Icon.Button>
                {/* Statistics */}
                
                
            </View>
    </View> 
    </SafeAreaView>  
    
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
    
    ErrorContainer:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent:'center',
      paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
      backgroundColor:'#121212'


    },
    ViewContainer:{
      // Holds the whole screen
      flex: 1, 
      //justifyContent: 'space-evenly', 
      alignItems: 'center', 
      backgroundColor:'#121212',
      //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
  },
    background:{
      //backgroundColor:'#121212',
      flex:1,
      backgroundColor: "#121212",
      //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      
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
    AndroidSafeArea: {
      
    }

})
