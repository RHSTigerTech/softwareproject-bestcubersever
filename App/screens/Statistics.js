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
import {newList} from './NumberList'
import _ from 'lodash';
import {isEqual} from 'lodash/isEqual'





// let timedel=deletetime()
// console.log(timedel)
// console.log('testingkabflabflab')


storeData(convertedTimes)
getData()

// function removeElement(arrayName,arrayElement)
//     {
//       for(var i=0; i<arrayName.length;i++ )
//         { 
//           if(arrayName[i]==arrayElement)
//               arrayName.splice(i,1); 
//               console.log('removed zero')
//         } 
//     }


// console.log('newList')
// console.log(newList)


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
// let arrayName=times()
// let arrayElement=0;
let data=[4,8,9,3,5,7,9]
export const timerthing = () => {
  

  if(times()[times().length-1]!==deletetime()[deletetime().length-1] && deletetime().length>0){
    // removeElement(deletetime(),0)
    data=deletetime();
    data.pop();
    data.pop(); 
      if(data[0]===0 && data.length>1){
        console.log(data[0])
      data.shift();
      }      
  }

  else{
    // removeElement(times(),0)
    data=times();
    if(data[data.length-1]==data[data.length-2]){
    data.pop();
    }
    //data.pop()
    if(data[0]===0 && data.length>1){
      console.log(data[0])
      data.shift();
      }
  }
  
  
}
export {data};
    
  

  export default class Stats extends React.Component { 
    
    // UNSAFE_componentDidMount() {
    //   this.props.fetchData();
    //   this.willFocusSubscription = this.props.navigation.addListener(
    //     'willFocus',
    //     () => {
    //       this.props.fetchData();
    //     }
    //   );
    // }
    
    // UNSAFE_componentWillUnmount() {
    //   this.willFocusSubscription.remove();
    // }
    
    renderTabBar() {
      return <StatusBar hidden />;
      
    }
    

    render() {

      const {navigate} = this.props.navigation;
      
      //this.setState()
     try{
    let width;
    
    //let data;

    let average=0.0;

    let Avg5=0.0;

    let notEnough5='Not enough data'

    let floatnum;

    let besttime;

    let worsttime;

    let deletepoint;

    let changedList=[1];

    const height=360;

    
    



    
    // for(let i=0;i<times().length;i++){
    //   if(times()[i]==0){
    //     console.log(times()[i]+'--------------')
    //     data=times().slice(i)
    //     console.log(times().slice(i,1)+'------------------')
        
    //   }
    // }
    
    
    // removeElement(deletetime(),0)
    // console.log(times())
    // console.log(times().length)
    // console.log('..................................................')
    // console.log(deletetime())
    // console.log(deletetime().length)
        
    timerthing()
    //data=[users]
    //console.log(newList)

    // if(data.length!=newList.length){
    //   data=newList;
    // }
    
    
    //Average
    for(let i=0;i<data.length;i++){
      floatnum=parseFloat(data[i])
      average=floatnum+average
    }
    average=average/data.length
    console.log(average)
    console.log(data.length)


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
    console.log(besttime)

    //Worst Time
    for(let i=0;i<data.length;i++){
      if(i===0){
        worsttime=parseFloat(data[i])
      }
      if(parseFloat(data[i])>worsttime){
        worsttime=parseFloat(data[i])
      }
    }
    console.log(worsttime)

    //Avg 5
    if(data.length>=5){
    for(let i=data.length-1;i>data.length-6;i--){
        floatnum=parseFloat(data[i])
        Avg5=floatnum+Avg5
    }
    Avg5=Avg5/5
    console.log(Avg5)
    }
    
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
        
        <View style={{backgroundColor: '#121212',height:'90%'}} >
          
        <Header                       
          containerStyle={styles,{backgroundColor:'#121212', borderBottomColor:'#121212', paddingBottom:'0%'}}
          centerContainerStyle={{flex:14}}
          centerComponent={{ text: 'Statistics', style: { color: 'white',opacity:.87, fontSize:30, fontWeight:'bold', bottom:'-2%',backgroundColor:'transparent'}}} 
        />
        
        {/* <Card.Title style={styles.textSummary}>yo</Card.Title> */}
        <Card containerStyle={{backgroundColor: '#121212',height:'24%', top:'-1%',zIndex:5}}>
      <ScrollView >
        {/* <Card.Title style={styles.textTitle}>Stats</Card.Title> */}
        <Text style={styles.textSummary}>Average: {average.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Best: {besttime.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Worst: {worsttime.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Avg 5: {Avg5.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Best 3 of 5: not added</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Avg 12: not added</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Best 10 of 12: not added</Text>
        <Card.Divider/>
      </ScrollView>
    </Card>
        <ScrollView bottom={'0%'} directionalLockEnabled='vertical' automaticallyAdjustContentInsets={false} vertical={false} horizontal={true}  scrollEventThrottle={16} renderTabBar={this.renderTabBar}>
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
                // onDataPointClick={({value})=>
                  
                  
                //   data=data.splice(data[data.indexOf(value)])
                //   //console.log(data[data.indexOf(value)]),
                //   //deletepoint=true
                //   //pointDelete()
                
                // }   
                        
              />   
                        
        </ScrollView>        
            );            
          })}          
    </ScrollView>
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
                        onPress={() => navigate('NumberList')}
                    >
                        List View
             </AwesomeButton>

    <FlashMessage duration={1000} floating={true}/>

    
    </View>
    );
  }
  
  catch(err){
    return(
    <View style={styles.ErrorContainer}>
      <Text style={styles.textSummary}>
          No Data Has Been Entered
      </Text>
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

})
