import React, { useState, Component, useEffect} from 'react';
import { Container, Header, Title, Content, Footer, Subtitle, FooterTab, Button, Left, Right, Body, Icon, Segment, ListItem, CheckBox, Thumbnail, StyleProvider} from 'native-base';
import {StyleSheet, Text} from 'react-native'
import {storeData, getData, convertedTimes, times } from './Timer';
import {data} from './Statistics'
import * as Font from 'expo-font';





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
           
            <Container style={{backgroundColor:'#121212'}}>
                
                
                <Content>
                    {smallList.map((item,index, data) => (
                        
                      <ListItem key={index}>
                      <CheckBox style={{marginRight:"3%"}} checked={this.state.deletionArray.includes(index)} />
                        <Body>
                          <Text>{data[index]}</Text>
                        </Body>
                        <Right>
                            <Button danger onPress={()=>this.deleteItem(index)}>
                            <Icon name='trash'/>
                            </Button>
                        </Right>
                      </ListItem>  
                    ))}  
                </Content>
                <Footer>
                <Segment>
                <Button style={{backgroundColor:'#121212'}} first onPress={()=> {push('Statistics'), storeData(newList)}}><Text style={{color:'#BB86FC'}}>Confirm Deleted</Text></Button>
                <Button second onPress={()=> {push('Statistics')}}><Text>Cancel</Text></Button>
                </Segment>
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

  


