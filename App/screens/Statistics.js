import { Dimensions, ScrollView, StatusBar, Text, Flex, SafeAreaView, StyleSheet } from "react-native";
import React, { Component } from "react";
import {Header} from 'react-native-elements';
import { times } from './Timer';
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
    console.log(times())
    
    let width;
    let data=[65,72,45,54,58,60,60,59,52,40,65.673,72,45,92,30 ]
    //add more if else statements to male scroll look good no matter how many data points
    if (data.length>10){
        width = 800;
    }
    else{
        width = Dimensions.get("window").width;
    }
    
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
            //position:'center',
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

}

}
const styles = StyleSheet.create({
    ViewContainer:{
        flex: 1, 
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,

    
    },  
})
