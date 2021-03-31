import { Dimensions, ScrollView, StatusBar, Flex, SafeAreaView, StyleSheet } from "react-native";
import React, { Component } from "react";
import {Header, Card} from 'react-native-elements';
import {storeData, getData} from './Timer';
import { times,deletetime, convertedItem, convertedTimes, storedTimes } from './Timer';
import ScrollableTabView from "react-native-scrollable-tab-view";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { Button, Menu, Divider, Provider, Text } from 'react-native-paper';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import { View } from "react-native";


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

const chartConfigs = [    
    {
      backgroundColor: "black",      
      fillShadowGradient:'white',
      fillShadowGradientOpacity:.4,
      backgroundGradientFrom: "black",
      backgroundGradientTo: "black",
      color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
    },    
  ];
// let arrayName=times()
// let arrayElement=0;
  

  export default class App extends React.Component {  
    renderTabBar() {
      return <StatusBar hidden />;
    }
    
    render() {
     
    let width;
    
    let data;

    let average=0.0;

    let floatnum;

    let besttime;

    let worsttime;


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
        
    if(times()[times().length-1]!==deletetime()[deletetime().length-1] && deletetime().length>0){
      // removeElement(deletetime(),0)
      data=deletetime();
      data.pop();
      data.pop(); 
        if(data[0]===0 && data.length>1){
          console.log(data[0])
          console.log('ksadbjsadljblsjbvls')
        data.shift();
        }      
    }

    else{
      // removeElement(times(),0)
      data=times();
      data.pop();

      if(data[0]===0 && data.length>1){
        console.log(data[0])
        console.log('ksadbjsadljblsjbvls')

        data.shift();
        }
    }
    //removeElement(data,0)

    

    // console.log(convertedTimes)
    // console.log('yoooooooooooooo')
    // console.log(times())
    // console.log('----------------------p')
    
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

    let xcords=[]
    for(let i=1;i<=data.length;i++){
      xcords.push(i)
    }

    if (data.length>10){
        width = data.length*50;
    }
    else{
        width = Dimensions.get("window").width;
    }

      return (
        <View style={{backgroundColor: 'black'}} >
        <Header                       
          containerStyle={styles,{backgroundColor:'black', borderBottomColor:'black'}}
          centerContainerStyle={{flex:14}}
          centerComponent={{ text: 'Session 1', style: { color: 'white', fontSize:30, fontWeight:'bold', bottom:-5,backgroundColor:'transparent'}}} 
        />
        <ScrollView directionalLockEnabled='vertical' automaticallyAdjustContentInsets={false} vertical={false} horizontal={true}  scrollEventThrottle={16} renderTabBar={this.renderTabBar}>
          {chartConfigs.map(chartConfig => {
            const labelStyle = {
              color: 'white',
              marginVertical: 0,
              textAlign: "center",
              fontSize: 16
            };
            const graphStyle = {
            strokeWidth:2,           
            bottom: 0,
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
                height={350}
                yAxisLabel=""
                chartConfig={chartConfig}                
                style={graphStyle}
                verticalLabelRotation={0}
                onDataPointClick={({ value, getColor }) =>
                  showMessage({
                    message: `${value} seconds`,
                    type:'info',
                    backgroundColor: 'black',                    
                  })
                }                
              />              
        </ScrollView>        
            );            
          })}          
    </ScrollView>

    <FlashMessage duration={1000} floating={true}/>

    <Card containerStyle={{backgroundColor: 'black',height:'38%', top:'-5%'}}>
      <ScrollView >
        <Card.Title style={styles.textTitle}>Stats</Card.Title>
        <Text style={styles.textSummary}>Average: {average.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Best: {besttime.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Worst: {worsttime.toFixed(3)}</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Avg 5: not added</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Best 3 of 5: not added</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Avg 12: not added</Text>
        <Card.Divider/>
        <Text style={styles.textSummary}>Best 10 of 12: not added</Text>
        <Card.Divider/>
      </ScrollView>
    </Card>
    </View>
    );
    }
  }

const styles = StyleSheet.create({
    ViewContainer:{
        flex: 1, 
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },  
    AverageTime:{
      color:'white',
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
        fontSize: 30
    },
    textSummary: {
        // the summary of the step
        color: 'white',
        fontSize: 25,
        textAlign:'center'
    },

})
