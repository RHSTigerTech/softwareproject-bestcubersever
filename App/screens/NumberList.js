import React, { useState, Component, useEffect} from 'react';
import { Container, Header, Title, Content, Footer, Subtitle, FooterTab, Button, Left, Right, Body, Icon, Text, Segment, ListItem, CheckBox, Thumbnail} from 'native-base';
import {storeData, getData, convertedTimes, times } from './Timer';
import {usedData} from './Statistics'

let randomthing=false;
let newList;
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
        this.setState({ users: usedData });
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
        return(
            
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=> {push('Statistics'), storeData(newList)}}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Total Users:</Title>
                        <Subtitle>Selected Users :20</Subtitle>
                    </Body>
                    <Right/>
                </Header>
                <Segment>
                    <Button first><Text>Delete Selected</Text></Button>
                    <Button >
                        <Text>
                            {this.state.allSelected ? 'Unselected All' : 'Select All'}
                        </Text>
                    </Button>
                    
                    <Button last onPress={()=> this.deleteAllItems()}><Text>Delete All</Text></Button>
                </Segment>
                <Content>
                    {this.state.users.map((item,index, data) => (
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
                <Button first onPress={()=> {push('Statistics'), storeData(newList)}}><Text>Confirm Deleted</Text></Button>
                <Button second onPress={()=> {push('Statistics')}}><Text>Cancel</Text></Button>
                </Segment>
                </Footer>
            </Container>

        )
    }
    
}

export{newList}

  


