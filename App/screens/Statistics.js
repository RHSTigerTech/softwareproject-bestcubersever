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

    let reset=[]

    let besttime;

    let worsttime;
    
    
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

    // for(let j=0;j<data.length-10;j++){
    //   data.pop()
    //   reset=data;
    // }
    // data=reset;



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
        <View style={{flex: 1, backgroundColor: 'black'}} >
        <Header                       
                    containerStyle={styles,{backgroundColor:'black', borderBottomColor:'black'}}
                    centerContainerStyle={{flex:14}}
                    centerComponent={{ text: 'Session Statistics', style: { color: 'white', fontSize:30, fontWeight:'bold', bottom:-5,backgroundColor:'transparent'}}} 
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
                    message: `${value} seconds`,
                    type:'info',
                    //description: "You selected this value",
                    backgroundColor: 'black',
                    
                  })
                }
                
              />
              
              
        </ScrollView>
        
            );
            
          })}
          
    </ScrollView>
    <FlashMessage duration={1000} floating={true}/>
    <Text style={styles.AverageTime}>
    Average: {average.toFixed(3)}{"\n"}
    Best: {besttime.toFixed(3)}{"\n"}
    Worst: {worsttime.toFixed(3)}{"\n"}
    Avg 5: not added{"\n"}
    Best 3 of 5: not added{"\n"}
    Avg 12: not added{"\n"}
    Best 10 of 12: not added
    </Text>
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
      color:'white',
      top:'-3%',
      //right:'-10%',
      textAlign:'left',
      fontSize:30,
      borderRadius:10,
      borderWidth:.7,
      margin:0,
      marginLeft:"3.5%",
      marginRight:"3.5%",
      paddingLeft:10,
      
      borderColor:'white',
    }
})
