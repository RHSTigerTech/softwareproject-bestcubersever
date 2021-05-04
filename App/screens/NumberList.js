import React, { useState, Component, useEffect} from 'react';
import { Container, Header, Title, Content, Footer, Subtitle, FooterTab, Button, Left, Right, Body, Icon, Segment, ListItem, CheckBox, Thumbnail, StyleProvider} from 'native-base';
import {StyleSheet, Text} from 'react-native'
import {storeData, getData, convertedTimes, times } from './Timer';
import {data} from './Statistics'
import * as Font from 'expo-font';
import AwesomeButton from "react-native-really-awesome-button";


const initialList=[5,3,8,9,6,4];
let randomthing=false;
let newList;
let smallList;
let amount=0;


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
        //const initialList=this.state.users;

        //viewlist=false;    
    }

    
   

    deleteItem(index){
        if(amount==0){
        let helperArray=this.state.users;
        helperArray.splice(index, 1);
        this.setState({users:helperArray})
        newList =this.state.users;
        }
        else{
            console.log(initialList)
            
            this.setState({users:initialList})
            this.state.users=initialList;


        }
    }

    // cancelDelete(){
        
    //     console.log('before')
    //     console.log(initialList)
    //     this.setState({users:initialList}); 
    //     console.log(this.state.users);

    // }

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
                    {console.log(this.state.users)}
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
                        onPress={()=> {push('Statistics')}}
                        
                        
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
                        onPress={()=> { amount++, this.deleteItem(), push('Statistics'), amount=0}}
                        
                        
                    >
                        Cancel
                    </AwesomeButton>
                </Footer>
            </Container>
            

        )
    }
    
}

export{newList}

  


