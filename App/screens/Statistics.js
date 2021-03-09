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



// let storedTimes=times();





const chartConfigs = [
    
    
    
    
    {
      backgroundColor: "black",
      backgroundGradientFrom: "#0091EA",
      backgroundGradientTo: "#0091EA",
      color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
    },
    
    
    
  ];

  export default class App extends React.Component {
  
    renderTabBar() {
      return <StatusBar hidden />;
    }
    
    
    render() {
      // console.log('before')
      // console.log(times())
      // console.log(deletetime())
      // console.log('end')
      //times()
      //try{
      
      //console.log(times())
     ///
    let width;
    //let data=[0];k
    let data;
    // console.log(deletetime()[deletetime().length-1]+'----------------')
    // console.log(times()[times().length-1]+'----------------')

    // if(times()[0]===0 && times().length>1){
    //   times().shift();
    // }
    

    
    //console.log(data+'-------------------------')
    // if(data[data.length-1]===data[data.length-2]){
    //   data.pop();
    // }
    //console.log(data+'-------------------------')
    
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
    //console.log(data+'-------------------------')
    

    // if(deletetime[deletetime().length-1]!==deletetime()[deletetime().length-2]){
    //   data.pop();
    // }
    // console.log(deletetime()[deletetime().length-1]+'---------------------------')
    // console.log(deletetime()[deletetime().length-2]+'---------------------------')

    

    

    // if(deletetime().length!==times().length){
    //   data.pop();
    // }
    
    
    
    
    
    
    
    //console.log(data.length)
    // console.log(times())
    // console.log(deletetime())
    // console.log(data)
    
    //add more if else statements to male scroll look good no matter how many data points
    if (data.length>10){
        width = 800;
    }
    else{
        width = Dimensions.get("window").width;
    }
    //width = Dimensions.get("window").width;
    //const height='100%';
      //const { width } = Dimensions.get("window");
    //const {height} = Dimensions.get('window');
      return (
        <View style={{flex: 1, backgroundColor: '#0091EA'}} >
        <Header                       
                    containerStyle={styles}
                    centerContainerStyle={{flex:14}}
                    centerComponent={{ text: 'Session Statistics', style: { color: 'black', fontSize:30, fontWeight:'bold', bottom:-5}}} 
                    //shadowColor={'transparent'}
                    />
        <ScrollView directionalLockEnabled='vertical' vertical={false} horizontal={true}  scrollEventThrottle={16} renderTabBar={this.renderTabBar}>
          {chartConfigs.map(chartConfig => {
            const labelStyle = {
              color: 'black',
              marginVertical: 0,
              //right:-40,
              textAlign: "center",
              fontSize: 16
            };
            const graphStyle = {
            //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
            //paddingTop:20,
            strokeWidth:2,
            bottom: 0,
            //position:'center',k
              ...chartConfig.style
            };
            <Text style={labelStyle}>Bezier Line Chart</Text>
            return (
              <ScrollView
                
                //key={Math.random()}
                style={{
                  backgroundColor: chartConfig.backgroundColor
                }}
              >


            
              <LineChart
                
                //bezier
                data={{
                  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  datasets: [
                    {
                      data
                    }
                  ]
                }}
                
                width={width}
                height={400}
                yAxisLabel=""
                //yAxisSuffix=""
                chartConfig={chartConfig}
                
                style={graphStyle}
                verticalLabelRotation={0}
                onDataPointClick={({ value, getColor }) =>
                  showMessage({
                    position:'bottom',
                    message: `${value}`,
                    description: "You selected this value",
                    backgroundColor: 'black'
                  })
                }
                //formatXLabel={label => label.toUpperCase()}
              />
              <FlashMessage duration={1000} />
        </ScrollView>
            );
          })}
    </ScrollView>
    </View>
    );
        
        


    
    
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
})
