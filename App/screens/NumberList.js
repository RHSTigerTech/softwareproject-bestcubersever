import React, { useState, Component, useEffect} from 'react';
import { Container, Header, Title, Content, Footer, Subtitle, FooterTab, Button, Left, Right, Body, Icon, Segment, ListItem, CheckBox, Thumbnail, StyleProvider} from 'native-base';
import {StyleSheet, Text} from 'react-native'
import {storeData, getData, convertedTimes, times } from './Timer';
import {data} from './Statistics'
import * as Font from 'expo-font';
import AwesomeButton from "react-native-really-awesome-button";


let deletedTimes=[];
let timePosition=[];



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
        this.setState({ users: data });
    }

    deleteItem(index){   
        deletedTimes.unshift(this.state.users[index]);
        timePosition.unshift(index)     
        let helperArray=this.state.users;
        helperArray.splice(index, 1);
        this.setState({users:helperArray})
        
        console.log(deletedTimes)
        console.log(timePosition)
    }

    cancelDelete(){
        let addBack=this.state.users;
        for(let i=0;i<deletedTimes.length;i++){
            addBack.splice(timePosition[i],0,deletedTimes[i])
        }
        console.log(addBack)
    }
    



    
    
    render() {
        const {push} = this.props.navigation;
        //const {navigate} = this.props.navigation;
        

        return(
           
            <Container style={{backgroundColor:'#121212', paddingTop:'4%'}}>

                <Content>
                    
                    {this.state.users.map((item,index, data) => (
                        
                      <ListItem key={index}>
                     
                        <Body>
                          <Text style={{color:'white', fontSize:25, fontWeight:'bold' }}>{data[index]}</Text>
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
                        onPress={()=> { deletedTimes.splice(0,deletedTimes.length), timePosition.splice(0, timePosition.length) ,push('Statistics')}}
                        
                        
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
                        onPress={()=> {this.cancelDelete(),deletedTimes.splice(0,deletedTimes.length), timePosition.splice(0, timePosition.length) ,push('Statistics')}}
                        
                        
                    >
                        Cancel
                    </AwesomeButton>
                </Footer>
            </Container>
            

        )
    }
    
}



  


