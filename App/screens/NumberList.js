import React, { useState, Component, useEffect} from 'react';
import { Container, Header, Title, Content, Footer, Subtitle, FooterTab, Button, Left, Right, Body, Icon, Segment, ListItem, CheckBox, Thumbnail, StyleProvider} from 'native-base';
import {StyleSheet, Text} from 'react-native'
import {storeData, getData, convertedTimes, times } from './Timer';
import {data} from './Statistics'
import * as Font from 'expo-font';
import AwesomeButton from "react-native-really-awesome-button";






let randomthing=false;
let newList;
let smallList;


export default class App extends Component {
    constructor(props){
        super(props);
        
        this.state={
            users:[],
            deletionArray: [],
            allSelected: true,
        };
    }   

    
    UNSAFE_componentWillMount() {
        console.log(data)
        this.setState({ users: data });
        newList =this.state.users;
        

        //viewlist=false;    
    }

    
    deleteAllItems(){
        this.setState({users:[]});
        newList =this.state.users;
    }

    deleteItem(index){
        let helperArray=this.state.users;
        helperArray.splice(index, 1);
        this.setState({users:helperArray})
        newList =this.state.users;
    }

    selectAll(){}


    
    
    render() {
        const {push} = this.props.navigation;
        smallList=this.state.users;
        //  if(smallList.length>10){
        //     //data=data.slice(Math.max(data.length-20,1))
        //     smallList=smallList.slice(Math.max(smallList.length-10,1))
        //     //data=data.slice(Math.max(data.length-20,1))
        //   }
        return(
           
            <Container style={{backgroundColor:'#121212', paddingTop:'4%'}}>
                {/* <Header>
                    <Text>    </Text>
                </Header> */}
                
                <Content>
                    {smallList.map((item,index, data) => (
                        
                      <ListItem key={index}>
                     
                        <Body>
                          <Text style={{color:'#8c29ff', fontSize:25, fontWeight:'bold' }}>{data[index]}</Text>
                        </Body>
                        <Right>
                            <Button style={{backgroundColor:'#121212'}} onPress={()=>this.deleteItem(index)}>
                            <Icon style={{color: '#8c29ff'}} name='trash'/>
                            </Button>
                        </Right>
                      </ListItem>  
                    ))}  
                </Content>
                <Footer style={{backgroundColor:'#121212', paddingTop:'1%'}}>
                
                {/* <Button style={{backgroundColor:'#121212'}} onPress={()=> {push('Statistics'), storeData(newList)}}><Text style={{color:'#8c29ff'}}>Confirm Deleted</Text></Button>
                <Button style={{backgroundColor:'#121212'}} onPress={()=> {push('Statistics')}}><Text style={{color:'#8c29ff'}}>Cancel</Text></Button> */}
                <AwesomeButton 
                        width={175} 
                        height={30}
                        backgroundColor='#6d00eb'
                        textSize={15}
                        borderRadius={5}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        paddingHorizontal={20}
                        onPress={()=> {push('Statistics'), storeData(newList)}}
                        
                        
                    >
                        Confirm Deleted
                    </AwesomeButton>
                    <Text style={{color:'transparent'}}>....</Text>
                    <AwesomeButton 
                        width={175} 
                        height={30}
                        backgroundColor='#6d00eb'
                        textSize={15}
                        borderRadius={5}
                        activeOpacity={.8}	
                        backgroundDarker='#5c00c7'
                        backgroundShadow='transparent'
                        raiseLevel={5}
                        onPress={()=> {push('Statistics'), storeData(data)}}
                        
                        
                    >
                        Cancel
                    </AwesomeButton>
                </Footer>
            </Container>
            

        )
    }
    
}
const styles = StyleSheet.create({ 
    textStyle:{
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
        fontSize:20
      },

})

export{newList}

  


