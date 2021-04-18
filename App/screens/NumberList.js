import React, { useState, Component, useEffect} from 'react';
import { Container, Header, Title, Content, Footer, Subtitle, FooterTab, Button, Left, Right, Body, Icon, Text, Segment, ListItem, CheckBox, Thumbnail} from 'native-base';
import {storeData, getData, convertedTimes, times } from './Timer';
import {data} from './Statistics'

let viewlist=false;

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
        //viewlist=false;
        
    }
    
    deleteAllItems(){
        this.setState({users:[]});
    }

    deleteItem(index){
        let helperArray=this.state.users;
        helperArray.splice(index, 1);
        this.setState({users:helperArray})
        
    }

    selectAll(){}

    render() {
        const {navigate} = this.props.navigation;
        return(
            
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=> {navigate('Timer'), storeData(this.state.users)}}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Total Users: {data.length}</Title>
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
            </Container>

        )
    }
    
}

export {viewlist}

  


