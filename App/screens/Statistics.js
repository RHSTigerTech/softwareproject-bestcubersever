import { Dimensions, ScrollView, StatusBar, Text, Flex, SafeAreaView, StyleSheet } from "react-native";
import React, { Component } from "react";
import {Header} from 'react-native-elements';
import { times,deletetime, convertedItem, convertedTimes, storedTimes } from './Timer';
import ScrollableTabView from "react-native-scrollable-tab-view";
import FlashMessage, { showMessage } from "react-native-flash-message";

import {
 LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { View } from "react-native";
import { TabRouter } from "@react-navigation/routers";

import {getData, storeData} from './Timer'

storeData()
getData()

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

  export default class App extends React.Component {
  
    renderTabBar() {
      return <StatusBar hidden />;
    }
    
    render() {
     
    let width;
    
    let data;

    let average=0.0;

    let floatnum;

    let reset=[1,1.5]
    
    
    if(times()[times().length-1]!==deletetime()[deletetime().length-1] && deletetime().length>0){
      

      data=deletetime();
      data.pop();
      data.pop();

        if(data[0]===0 && data.length>1){
        data.shift();
        }

      
    }
    else{
      data=times();
      data.pop();

      if(data[0]===0 && data.length>1){
        data.shift();
        }
    }
    //data=reset;

    for(let i=0;i<data.length;i++){
      floatnum=parseFloat(data[i])
      average=floatnum+average
    }
    average=average/data.length
    console.log(average)
    console.log(data.length)


    // for(let i=0;i<data.length;i++){
    //   if(data[i,i+1]===0){
    //     data[i,i+1]=5;
    //   }
    // }

    let xcords=[]
    for(let i=1;i<=data.length;i++){
      xcords.push(i)
    }

    
    //add more if else statements to make scroll look good no matter how many data points
    if (data.length>10){
        width = data.length*50;
    }
    else{
        width = Dimensions.get("window").width;
    }

      return (
        <View style={{flex: 1, backgroundColor: 'white'}} >
        <Header                       
                    containerStyle={styles,{backgroundColor:'black', borderBottomColor:'black'}}
                    centerContainerStyle={{flex:14}}
                    centerComponent={{ text: 'Session Statistics', style: { color: 'white', fontSize:30, fontWeight:'bold', bottom:-5,backgroundColor:'transparent'}}} 
                    />
        <ScrollView directionalLockEnabled='vertical' vertical={false} horizontal={true}  scrollEventThrottle={16} renderTabBar={this.renderTabBar}>
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
                
                
                style={{
                  backgroundColor: chartConfig.backgroundColor
                }}
              >


            
              <LineChart
                
                //bezier
                data={{
                  labels:                     
                      xcords,                  
                  datasets: [
                    {
                      data
                    }
                  ]
                }}
                
                width={width}
                height={350}
                yAxisLabel=""
                chartConfig={chartConfig}
                
                style={graphStyle}
                verticalLabelRotation={0}
                onDataPointClick={({ value, getColor }) =>
                  showMessage({
                    //position:'bottom',
                    message: `Times: ${value}`,
                    //description: "You selected this value",
                    backgroundColor: 'black'
                  })
                }
                
              />
              <FlashMessage duration={1000} floating={true} />
              
        </ScrollView>
            );
          })}
    </ScrollView>
    <Text style={styles.AverageTime}>yosjsjsjsjsjsjsjsjsjsjsjsjsjsj</Text>
    </View>
    );
       //changes
  //   }
  //   catch(err){
  //     return(
  //       <Text style={{color:'black', position:'center'}}>yo</Text>
  //       )
  // }
  
}
  }

const styles = StyleSheet.create({
    ViewContainer:{
        flex: 1, 
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },  
    AverageTime:{
      color:'white'
    }
})
