import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeButton from "react-native-really-awesome-button";

import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
  SectionList
} from 'react-native';
import {Card, Header} from 'react-native-elements';


import { CrossSolver, F2LSolver } from 'rubiks-cube-solver/src';
import {totalPositionWhiteSide} from './confirmWhite'
import {totalPositionBlueSide} from './confirmBlue'
import {totalPositionOrangeSide} from './confirmOrange'
import {totalPositionGreenSide} from './confirmGreen'
import {totalPositionRedSide} from './confirmRed'
import {totalPositionYellowSide} from './confirmYellow'
//import {FlatList} from 'react-native-gesture-handler'

const Bold = (props) => <Text style={{fontWeight: 'bold',fontSize:23}}>{props.children}</Text>

const crossImg= require('../Assets/CrossStep.png')

const R = require('../Assets/basics/cb_rc.jpg')
const Rprime= require('../Assets/basics/cb_rcc.jpg')
const Rw=require('../Assets/basics/cb_rwc.jpg')
const Rwprime= require('../Assets/basics/cb_rwcc.jpg')

const L=require('../Assets/basics/cb_lc.jpg')
const Lprime=require('../Assets/basics/cb_lcc.jpg')
const Lw=require('../Assets/basics/cb_lwc.jpg')
const Lwprime=require('../Assets/basics/cb_lwcc.jpg')

const U=require('../Assets/basics/cb_uc.jpg')
const Uprime=require('../Assets/basics/cb_ucc.jpg')
const Uw=require('../Assets/basics/cb_uwc.jpg')
const Uwprime=require('../Assets/basics/cb_uwcc.jpg')

const D=require('../Assets/basics/cb_dc.jpg')
const Dprime=require('../Assets/basics/cb_dcc.jpg')
const Dw=require('../Assets/basics/cb_dwc.jpg')
const Dwprime=require('../Assets/basics/cb_dwcc.jpg')

const F=require('../Assets/basics/cb_fc.jpg')
const Fprime=require('../Assets/basics/cb_fcc.jpg')
const Fw=require('../Assets/basics/cb_fwc.jpg')
const Fwprime=require('../Assets/basics/cb_fwcc.jpg')

const B=require('../Assets/basics/cb_bc.jpg')
const Bprime=require('../Assets/basics/cb_bcc.jpg')
const Bw=require('../Assets/basics/cb_bwc.jpg')
const Bwprime=require('../Assets/basics/cb_bwcc.jpg')




//let solver = require('rubiks-cube-solver');

export default class App extends Component {
  
  
    
  
  render() {

    const {navigate} = this.props.navigation;

    try{
    //console.log(totalPositionWhiteSide)


//relative to the front cube

    // f - green
    // r - red
    // u - white
    // d - yellow
    // l - orange
    // b - blue


    
    // let solveMoves = solver(cubeState);
    // console.log(solveMoves);
    // console.log('yoooo')

    

    

    
    function loadInit() {

      const solver = require('rubiks-cube-solver');

      const cubeSolver= require('cube-solver');

      const newSolver = require('cubejs');

      newSolver.initSolver();
  
      const newCube= new newSolver()

      let cubeState = [
        totalPositionGreenSide, // front
        totalPositionRedSide, // right
        totalPositionWhiteSide, // up
        totalPositionYellowSide, // down
        totalPositionOrangeSide, // left
        totalPositionBlueSide // back
      ].join('');

      let options = { partitioned: true };
    let solveMoves = solver(cubeState, options);
    let solveMovesString = solver(cubeState);
    //console.log(solveMoves, options);


    //console.log(solveMoves.cross)
    let crossSteps= solveMoves.cross.join(',')
    crossSteps=crossSteps.replace(/,/g, ' ')
    crossSteps=crossSteps.split(' ')
    crossSteps.unshift('cross')
    //console.log(crossSteps)

    //console.log(solveMoves.f2l)
    let f2lSteps= solveMoves.f2l.join(',')
    f2lSteps=f2lSteps.replace(/,/g, ' ')
    f2lSteps=f2lSteps.split(' ')
    f2lSteps.unshift('f2l')
    //console.log(f2lSteps)
    //console.log('f2l')

    let ollSteps= solveMoves.oll.split(' ')
    ollSteps.unshift('oll')
    //console.log(ollSteps)
    //console.log('oll')

    let pllSteps= solveMoves.pll.split(' ')
    pllSteps.unshift('pll')
    //console.log(pllSteps)
    //console.log('pll')

    //console.log(solveMovesString)

    crossSteps.push(...f2lSteps)
    crossSteps.push(...ollSteps)
    crossSteps.push(...pllSteps)
    console.log(crossSteps)
    console.log('everything')

    let reverseStep=crossSteps;
    console.log(reverseStep)
    reverseStep = reverseStep.filter(e => e !== 'cross'); 
    reverseStep = reverseStep.filter(e => e !== 'f2l'); 
    reverseStep = reverseStep.filter(e => e !== 'pll'); 
    reverseStep = reverseStep.filter(e => e !== 'oll'); 
    console.log(reverseStep)

      for(let i=0;i<reverseStep.length;i++){
      if(reverseStep[i]=='R'){
        reverseStep[i]='Rprime'
      }
      else if(reverseStep[i]=='Rprime'){
        reverseStep[i]='R'
      }
      else if(reverseStep[i]=='r'){
        reverseStep[i]='rprime'
      }
      else if(reverseStep[i]=='rprime'){
        reverseStep[i]='r'
      }
      else if(reverseStep[i]=='L'){
        reverseStep[i]='Lprime'
      }
      else if(reverseStep[i]=='Lprime'){
        reverseStep[i]='L'
      }
      else if(reverseStep[i]=='l'){
        reverseStep[i]='lprime'
      }
      else if(reverseStep[i]=='lprime'){
        reverseStep[i]='l'
      }
      else if(reverseStep[i]=='U'){
        reverseStep[i]='Uprime'
      }
      else if(reverseStep[i]=='Uprime'){
        reverseStep[i]='U'
      }
      else if(reverseStep[i]=='u'){
        reverseStep[i]='uprime'
      }
      else if(reverseStep[i]=='uprime'){
        reverseStep[i]='u'
      }
      else if(reverseStep[i]=='D'){
        reverseStep[i]='Dprime'
      }
      else if(reverseStep[i]=='Dprime'){
        reverseStep[i]='D'
      }
      else if(reverseStep[i]=='d'){
        reverseStep[i]='dprime'
      }
      else if(reverseStep[i]=='dprime'){
        reverseStep[i]='d'
      }
      else if(reverseStep[i]=='F'){
        reverseStep[i]='Fprime'
      }
      else if(reverseStep[i]=='Fprime'){
        reverseStep[i]='F'
      }
      else if(reverseStep[i]=='f'){
        reverseStep[i]='fprime'
      }
      else if(reverseStep[i]=='fprime'){
        reverseStep[i]='f'
      }
      else if(reverseStep[i]=='B'){
        reverseStep[i]='Bprime'
      }
      else if(reverseStep[i]=='Bprime'){
        reverseStep[i]='B'
      }
      else if(reverseStep[i]=='b'){
        reverseStep[i]='bprime'
      }
      else if(reverseStep[i]=='bprime'){
        reverseStep[i]='b'
      }
}
console.log(reverseStep)
console.log('---------------------')
    reverseStep.reverse()
    let scrambleTest= reverseStep.join(',')
    scrambleTest=scrambleTest.replace(/,/g, ' ')
    scrambleTest=scrambleTest.replace(/prime/g, '\'')
    newCube.move(scrambleTest)
    // newCube.initSolver();
    //console.log(newCube.solve([30]))
    //console.log('yo0000000000000000000')
    let cubeSolutionString= newCube.solve([30])
    let finalSolution=cubeSolutionString.split(' ')
    scrambleTest=scrambleTest.replace(/l'/g, 'L\' M\'')
    scrambleTest=scrambleTest.replace(/b'/g, 'B\' S')
    scrambleTest=scrambleTest.replace(/d'/g, 'D\' E E E')

    let num;
      for( let i=0; i<finalSolution.length;i++){
        num=i+1;
        
        if(finalSolution[i]=='R'){
          
          DATA.push({
            id: i+'R',
            title: '\n'+num+': Rotate the right layer clockwise',
            images: R,
            notation:'R'
          })
        }
        if(finalSolution[i]=='R\''){
          
          DATA.push({
            id: i+'Rprime',
            title: '\n'+num+': Rotate the right layer counter clockwise',
            images: Rprime,
            notation:'R\''

          })
        }
        if(finalSolution[i]=='r'){
          
          DATA.push({
            id: i+'r',
            title: '\n'+num+': Rotate the right layer and the middle layer clockwise',
            images: Rw,
            notation:'Rw OR r'

          })
        }
        if(finalSolution[i]=='r\''){
          
          DATA.push({
            id: i+'rprime',
            title: '\n'+num+': Rotate the right layer and middle layer counter clockwise',
            images: Rwprime,
            notation:'Rw\' OR r\''

          })
        }
        if(finalSolution[i]=='L'){
          
          DATA.push({
            id: i+'L',
            title: '\n'+num+': Rotate the left layer clockwise',
            images: L,
            notation:'L'

          })
        }
        if(finalSolution[i]=='L\''){
          
          DATA.push({
            id: i+'Lprime',
            title: '\n'+num+': Rotate the left layer counter clockwise',
            images: Lprime,
            notation:'L\''

          })
        }
        if(finalSolution[i]=='l'){
         
          DATA.push({
            id: i+'l',
            title: '\n'+num+': Rotate the left layer and the middle layer clockwise',
            images: Lw,
            notation:'Lw OR l'

          })
        }
        if(finalSolution[i]=='l\''){
          
          DATA.push({
            id: i+'lprime',
            title: '\n'+num+': Rotate the left layer and middle layer counter clockwise',
            images: Lwprime,
            notation:'Lw\' OR l\''

          })
        }
        if(finalSolution[i]=='U'){
          
          DATA.push({
            id: i+'U',
            title: '\n'+num+': Rotate the top layer clockwise',
            images: U,
            notation:'U'

          })
        }
        if(finalSolution[i]=='U\''){
          
          DATA.push({
            id: i+'Uprime',
            title: '\n'+num+': Rotate the top layer counter clockwise',
            images: Uprime,
            notation:'U\''

          })
        }
        if(finalSolution[i]=='u'){
          
          DATA.push({
            id: i+'u',
            title: '\n'+num+': Rotate the top layer and the middle layer clockwise',
            images: Uw,
            notation:'Uw OR u'

          })
        }
        if(finalSolution[i]=='u\''){
          
          DATA.push({
            id: i+'uprime',
            title: '\n'+num+': Rotate the top layer and middle layer counter clockwise',
            images: Uwprime,
            notation:'Uw\' OR u\''

          })
        }
        if(finalSolution[i]=='D'){
          
          DATA.push({
            id: i+'D',
            title: '\n'+num+': Rotate the bottom layer clockwise',
            images: D,
            notation:'D'

          })
        }
        if(finalSolution[i]=='D\''){
          
          DATA.push({
            id: i+'Dprime',
            title: '\n'+num+': Rotate the bottom layer counter clockwise',
            images: Dprime,
            notation:'D\''

          })
        }
        if(finalSolution[i]=='d'){
          
          DATA.push({
            id: i+'d',
            title: '\n'+num+': Rotate the bottom layer and the middle layer clockwise',
            images: Dw,
            notation:'Dw OR d'

          })
        }
        if(finalSolution[i]=='d\''){
          
          DATA.push({
            id: i+'dprime',
            title: '\n'+num+': Rotate the bottom layer and middle layer counter clockwise',
            images: Dwprime,
            notation:'Dw\' OR d\''

          })
        }
        if(finalSolution[i]=='F'){
          
          DATA.push({
            id: i+'F',
            title: '\n'+num+': Rotate the front layer clockwise',
            images: F,
            notation:'F'

          })
        }
        if(finalSolution[i]=='F\''){
          
          DATA.push({
            id: i+'Fprime',
            title: '\n'+num+': Rotate the front layer counter clockwise',
            images: Fprime,
            notation:'F\''

          })
        }
        if(finalSolution[i]=='f'){
          
          DATA.push({
            id: i+'f',
            title: '\n'+num+': Rotate the front layer and the middle layer clockwise',
            images: Fw,
            notation:'Fw OR f'

          })
        }
        if(finalSolution[i]=='f\''){
         
          DATA.push({
            id: i+'fprime',
            title: '\n'+num+': Rotate the front layer and middle layer counter clockwise',
            images: Fwprime,
            notation:'Fw\' OR f\''

          })
        }
        if(finalSolution[i]=='B'){
          
          DATA.push({
            id: i+'B',
            title: '\n'+num+': Rotate the back layer clockwise',
            images: B,
            notation:'B'

          })
        }
        if(finalSolution[i]=='B\''){
          
          DATA.push({
            id: i+'Bprime',
            title: '\n'+num+': Rotate the back layer counter clockwise',
            images: Bprime,
            notation:'B\''

          })
        }
        if(finalSolution[i]=='b'){
         
          DATA.push({
            id: i+'b',
            title: '\n'+num+': Rotate the back layer and the middle layer clockwise',
            images: Bw,
            notation:'Bw OR b'

          })
        }
        if(finalSolution[i]=='b\''){
          
          DATA.push({
            id: i+'bprime',
            title: '\n'+num+': Rotate the back layer and middle layer counter clockwise',
            images: Bwprime,
            notation:'Bw\' OR b\''

          })
        }
        //F2, R2, L2, B2, D2, U2, f2, r2, l2, b2, d2, u2

        if(finalSolution[i]=='b2'){
         
          DATA.push({
            id: i+'b2',
            title: '\n'+num+': Rotate the back layer and the middle layer clockwise twice',
            images: Bw,
            notation:'b2',
            double:'2x'

          })
        }

        if(finalSolution[i]=='f2'){
         
          DATA.push({
            id: i+'f2',
            title: '\n'+num+': Rotate the front layer and the middle layer clockwise twice',
            images: Fw,
            notation:'f2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='r2'){
         
          DATA.push({
            id: i+'r2',
            title: '\n'+num+': Rotate the right layer and the middle layer clockwise twice',
            images: Rw,
            notation:'r2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='l2'){
         
          DATA.push({
            id: i+'l2',
            title: '\n'+num+': Rotate the left layer and the middle layer clockwise twice',
            images: Lw,
            notation:'l2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='u2'){
         
          DATA.push({
            id: i+'u2',
            title: '\n'+num+': Rotate the top layer and the middle layer clockwise twice',
            images: Uw,
            notation:'u2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='d2'){
         
          DATA.push({
            id: i+'d2',
            title: '\n'+num+': Rotate the bottom layer and the middle layer clockwise twice',
            images: Dw,
            notation:'d2',
            double:'2x'

          })
        }

        if(finalSolution[i]=='F2'){
          
          DATA.push({
            id: i+'F2',
            title: '\n'+num+': Rotate the front layer clockwise twice',
            images: F,
            notation:'F2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='R2'){
          
          DATA.push({
            id: i+'R2',
            title: '\n'+num+': Rotate the right layer clockwise twice',
            images: R,
            notation:'R2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='L2'){
         
          DATA.push({
            id: i+'L2',
            title: '\n'+num+': Rotate the left layer clockwise twice',
            images: L,
            notation:'L2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='B2'){
          
          DATA.push({
            id: i+'B2',
            title: '\n'+num+': Rotate the back layer clockwise twice',
            images: B,
            notation:'B2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='D2'){
          
          DATA.push({
            id: i+'D2',
            title: '\n'+num+': Rotate the bottom layer clockwise twice',
            images: D,
            notation:'D2',
            double:'2x'

          })
        }
        if(finalSolution[i]=='U2'){
          
          DATA.push({
            id: i+'U2',
            title: '\n'+num+': Rotate the top layer clockwise twice',
            images: U,
            notation:'U2',
            double:'2x'

          })
        }
      }
}

// Create a new solved cube instance
//const cube = new Cube();






    let CrossStepImages=[];
    let CrossStepText=[];

    // let cubeState = [
    //   totalPositionGreenSide, // front
    //   totalPositionRedSide, // right
    //   totalPositionWhiteSide, // up
    //   totalPositionYellowSide, // down
    //   totalPositionOrangeSide, // left
    //   totalPositionBlueSide // back
    // ].join('');

    // let cubeState = [
    //   'flulfbddr', // front
    //   'rudrruddl', // right
    //   'dbbburrfb', // up
    //   'llffdrubf', // down
    //   'rludlubrf', // left
    //   'lubfbfudl' // back
    // ].join('');
    
    


    //reverseStep=reverseStep.replace(/,/g, ' ')
    //console.log(scrambleTest)



    //crossSteps.join(',')
    //crossSteps= solveMoves.cross.join(',')
    //crossSteps=crossSteps.replace(/,/g, ' ')
    //const scramble = `D' R' D' R B2 d B' D B D' B D' E E E B2 B' S D2 B D B' D b R' D' R D2 R' D' R D2 F D' F' B' D B D' B' D B D' B' D B D R D' R' B D' B' D' U B U' R U' L' U U L U' B U F U'`;
    const scramble = `D' L D2 L' D B' D' B D2 F D F2 D' F D2 L2 D2 L D L' D L2 D B D' B' D' R' D R B D2 B2 D' B D' B' D2 R B R' B' D' B L2 d L' D L D' L D' E E E L2 D`;

    //console.log(cubeSolver.solve(scrambleTest))

    // let finalSolutionString=cubeSolver.solve(scrambleTest)
    // let finalSolution=finalSolutionString.split(' ')
    //console.log(finalSolution)
//create function that return a text input depending on the the string type
//create for loop function that calls function as many times as there are moves
   
// let steps= pllSteps.split(' ');
// console.log(steps)

let DATA = [];

let sectionData=[]

   

// {
//   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//   title: 'Second Item',
//   images: require('../Assets/basics/cb_rcc.jpg')
// },
// {
//   id: '58694a0f-3da1-471f-bd96-145571e29d72',
//   title: 'Third Item',
//   images: require('../Assets/basics/cb_rwc.jpg')
// },
    // function amount(){
    //   for(let i=0;i<crossSteps.length;i++){
        
    //   return(
    //     <Text style={{color:'white'}}>yo</Text>
    //   )
    //   }
    // }
    // function testIT(){
    //   return(
    //     <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
    //                             <View style={styles.viewMove}>
    //                                 <Image style={styles.movesImage} source={require('../Assets/basics/cb_rc.jpg')}/>
    //                                 <Text style={styles.textDescrip2}>R {'\n'}Rotate the right layer clockwise</Text>
    //                             </View>
    //                             <View style={styles.viewMove}>
    //                                 <Image style={styles.movesImage} source={require('../Assets/basics/cb_rcc.jpg')}/>
    //                                 <Text style={styles.textDescrip2}>R' {'\n'}Rotate the right layer counter clockwise</Text>
    //                             </View>

    //                             </View>
    //   )
    // }

    

    function renderCrossSteps() {
      let num;
      for( let i=0; i<crossSteps.length;i++){
        num=i;
        if(crossSteps[i]=='cross'){
          DATA.push({
            id:i+'cross',
            title: '\n',
            images: crossImg,
            notation:'Blue Infront White On Top',
            
            
          })
        }
        if(crossSteps[i]=='f2l'){
          DATA.push({
            id:i+'f2l',
            title: '\n',
            images: crossImg,
            notation:'yo'
            
          })
        }
        if(crossSteps[i]=='oll'){
          DATA.push({
            id:i+'oll',
            title: '\n',
            images: crossImg,
            notation:'yo'
            
          })
        }
        if(crossSteps[i]=='pll'){
          DATA.push({
            id:i+'pll',
            title: '\n',
            images: crossImg,
            notation:'yo'
            
          })
        }
        if(crossSteps[i]=='R'){
          
          DATA.push({
            id: i+'R',
            title: '\n'+num+': Rotate the right layer clockwise',
            images: R,
            notation:'R'
          })
        }
        if(crossSteps[i]=='Rprime'){
          
          DATA.push({
            id: i+'Rprime',
            title: '\n'+num+': Rotate the right layer counter clockwise',
            images: Rprime,
            notation:'R\''

          })
        }
        if(crossSteps[i]=='r'){
          
          DATA.push({
            id: i+'r',
            title: '\n'+num+': Rotate the right layer and the middle layer clockwise',
            images: Rw,
            notation:'Rw OR r'

          })
        }
        if(crossSteps[i]=='rprime'){
          
          DATA.push({
            id: i+'rprime',
            title: '\n'+num+': Rotate the right layer and middle layer counter clockwise',
            images: Rwprime,
            notation:'Rw\' OR r\''

          })
        }
        if(crossSteps[i]=='L'){
          
          DATA.push({
            id: i+'L',
            title: '\n'+num+': Rotate the left layer clockwise',
            images: L,
            notation:'L'

          })
        }
        if(crossSteps[i]=='Lprime'){
          
          DATA.push({
            id: i+'Lprime',
            title: '\n'+num+': Rotate the left layer counter clockwise',
            images: Lprime,
            notation:'L\''

          })
        }
        if(crossSteps[i]=='l'){
         
          DATA.push({
            id: i+'l',
            title: '\n'+num+': Rotate the left layer and the middle layer clockwise',
            images: Lw,
            notation:'Lw OR l'

          })
        }
        if(crossSteps[i]=='lprime'){
          
          DATA.push({
            id: i+'lprime',
            title: '\n'+num+': Rotate the left layer and middle layer counter clockwise',
            images: Lwprime,
            notation:'Lw\' OR l\''

          })
        }
        if(crossSteps[i]=='U'){
          
          DATA.push({
            id: i+'U',
            title: '\n'+num+': Rotate the top layer clockwise',
            images: U,
            notation:'U'

          })
        }
        if(crossSteps[i]=='Uprime'){
          
          DATA.push({
            id: i+'Uprime',
            title: '\n'+num+': Rotate the top layer counter clockwise',
            images: Uprime,
            notation:'U\''

          })
        }
        if(crossSteps[i]=='u'){
          
          DATA.push({
            id: i+'u',
            title: '\n'+num+': Rotate the top layer and the middle layer clockwise',
            images: Uw,
            notation:'Uw OR u'

          })
        }
        if(crossSteps[i]=='uprime'){
          
          DATA.push({
            id: i+'uprime',
            title: '\n'+num+': Rotate the top layer and middle layer counter clockwise',
            images: Uwprime,
            notation:'Uw\' OR u\''

          })
        }
        if(crossSteps[i]=='D'){
          
          DATA.push({
            id: i+'D',
            title: '\n'+num+': Rotate the bottom layer clockwise',
            images: D,
            notation:'D'

          })
        }
        if(crossSteps[i]=='Dprime'){
          
          DATA.push({
            id: i+'Dprime',
            title: '\n'+num+': Rotate the bottom layer counter clockwise',
            images: Dprime,
            notation:'D\''

          })
        }
        if(crossSteps[i]=='d'){
          
          DATA.push({
            id: i+'d',
            title: '\n'+num+': Rotate the bottom layer and the middle layer clockwise',
            images: Dw,
            notation:'Dw OR d'

          })
        }
        if(crossSteps[i]=='dprime'){
          
          DATA.push({
            id: i+'dprime',
            title: '\n'+num+': Rotate the bottom layer and middle layer counter clockwise',
            images: Dwprime,
            notation:'Dw\' OR d\''

          })
        }
        if(crossSteps[i]=='F'){
          
          DATA.push({
            id: i+'F',
            title: '\n'+num+': Rotate the front layer clockwise',
            images: F,
            notation:'F'

          })
        }
        if(crossSteps[i]=='Fprime'){
          
          DATA.push({
            id: i+'Fprime',
            title: '\n'+num+': Rotate the front layer counter clockwise',
            images: Fprime,
            notation:'F\''

          })
        }
        if(crossSteps[i]=='f'){
          
          DATA.push({
            id: i+'f',
            title: '\n'+num+': Rotate the front layer and the middle layer clockwise',
            images: Fw,
            notation:'Fw OR f'

          })
        }
        if(crossSteps[i]=='fprime'){
         
          DATA.push({
            id: i+'fprime',
            title: '\n'+num+': Rotate the front layer and middle layer counter clockwise',
            images: Fwprime,
            notation:'Fw\' OR f\''

          })
        }
        if(crossSteps[i]=='B'){
          
          DATA.push({
            id: i+'B',
            title: '\n'+num+': Rotate the back layer clockwise',
            images: B,
            notation:'B'

          })
        }
        if(crossSteps[i]=='Bprime'){
          
          DATA.push({
            id: i+'Bprime',
            title: '\n'+num+': Rotate the back layer counter clockwise',
            images: Bprime,
            notation:'B\''

          })
        }
        if(crossSteps[i]=='b'){
         
          DATA.push({
            id: i+'b',
            title: '\n'+num+': Rotate the back layer and the middle layer clockwise',
            images: Bw,
            notation:'Bw OR b'

          })
        }
        if(crossSteps[i]=='bprime'){
          
          DATA.push({
            id: i+'bprime',
            title: '\n'+num+': Rotate the back layer and middle layer counter clockwise',
            images: Bwprime,
            notation:'Bw\' OR b\''

          })
        }
        //F2, R2, L2, B2, D2, U2, f2, r2, l2, b2, d2, u2

        if(crossSteps[i]=='b2'){
         
          DATA.push({
            id: i+'b2',
            title: '\n'+num+': Rotate the back layer and the middle layer clockwise twice',
            images: Bw,
            notation:'b2',
            double:'2x'

          })
        }

        if(crossSteps[i]=='f2'){
         
          DATA.push({
            id: i+'f2',
            title: '\n'+num+': Rotate the front layer and the middle layer clockwise twice',
            images: Fw,
            notation:'f2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='r2'){
         
          DATA.push({
            id: i+'r2',
            title: '\n'+num+': Rotate the right layer and the middle layer clockwise twice',
            images: Rw,
            notation:'r2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='l2'){
         
          DATA.push({
            id: i+'l2',
            title: '\n'+num+': Rotate the left layer and the middle layer clockwise twice',
            images: Lw,
            notation:'l2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='u2'){
         
          DATA.push({
            id: i+'u2',
            title: '\n'+num+': Rotate the top layer and the middle layer clockwise twice',
            images: Uw,
            notation:'u2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='d2'){
         
          DATA.push({
            id: i+'d2',
            title: '\n'+num+': Rotate the bottom layer and the middle layer clockwise twice',
            images: Dw,
            notation:'d2',
            double:'2x'

          })
        }

        if(crossSteps[i]=='F2'){
          
          DATA.push({
            id: i+'F2',
            title: '\n'+num+': Rotate the front layer clockwise twice',
            images: F,
            notation:'F2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='R2'){
          
          DATA.push({
            id: i+'R2',
            title: '\n'+num+': Rotate the right layer clockwise twice',
            images: R,
            notation:'R2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='L2'){
         
          DATA.push({
            id: i+'L2',
            title: '\n'+num+': Rotate the left layer clockwise twice',
            images: L,
            notation:'L2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='B2'){
          
          DATA.push({
            id: i+'B2',
            title: '\n'+num+': Rotate the back layer clockwise twice',
            images: B,
            notation:'B2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='D2'){
          
          DATA.push({
            id: i+'D2',
            title: '\n'+num+': Rotate the bottom layer clockwise twice',
            images: D,
            notation:'D2',
            double:'2x'

          })
        }
        if(crossSteps[i]=='U2'){
          
          DATA.push({
            id: i+'U2',
            title: '\n'+num+': Rotate the top layer clockwise twice',
            images: U,
            notation:'U2',
            double:'2x'

          })
        }

        // else{
        //   DATA.push({
        //     id: 666,
        //     title:'unknown move',
        //     images:R,
        //     notation:'UNKNOWN'
        //   })
        // }

        
        // else{
        //   CrossStepImages.push('yo')
        // }
      }
      //console.log(DATA)
    }


    // function renderfinalSolution() {
    //   let num;
    //   for( let i=0; i<finalSolution.length;i++){
    //     num=i+1;
        
    //     if(finalSolution[i]=='R'){
          
    //       DATA.push({
    //         id: i+'R',
    //         title: '\n'+num+': Rotate the right layer clockwise',
    //         images: R,
    //         notation:'R'
    //       })
    //     }
    //     if(finalSolution[i]=='R\''){
          
    //       DATA.push({
    //         id: i+'Rprime',
    //         title: '\n'+num+': Rotate the right layer counter clockwise',
    //         images: Rprime,
    //         notation:'R\''

    //       })
    //     }
    //     if(finalSolution[i]=='r'){
          
    //       DATA.push({
    //         id: i+'r',
    //         title: '\n'+num+': Rotate the right layer and the middle layer clockwise',
    //         images: Rw,
    //         notation:'Rw OR r'

    //       })
    //     }
    //     if(finalSolution[i]=='r\''){
          
    //       DATA.push({
    //         id: i+'rprime',
    //         title: '\n'+num+': Rotate the right layer and middle layer counter clockwise',
    //         images: Rwprime,
    //         notation:'Rw\' OR r\''

    //       })
    //     }
    //     if(finalSolution[i]=='L'){
          
    //       DATA.push({
    //         id: i+'L',
    //         title: '\n'+num+': Rotate the left layer clockwise',
    //         images: L,
    //         notation:'L'

    //       })
    //     }
    //     if(finalSolution[i]=='L\''){
          
    //       DATA.push({
    //         id: i+'Lprime',
    //         title: '\n'+num+': Rotate the left layer counter clockwise',
    //         images: Lprime,
    //         notation:'L\''

    //       })
    //     }
    //     if(finalSolution[i]=='l'){
         
    //       DATA.push({
    //         id: i+'l',
    //         title: '\n'+num+': Rotate the left layer and the middle layer clockwise',
    //         images: Lw,
    //         notation:'Lw OR l'

    //       })
    //     }
    //     if(finalSolution[i]=='l\''){
          
    //       DATA.push({
    //         id: i+'lprime',
    //         title: '\n'+num+': Rotate the left layer and middle layer counter clockwise',
    //         images: Lwprime,
    //         notation:'Lw\' OR l\''

    //       })
    //     }
    //     if(finalSolution[i]=='U'){
          
    //       DATA.push({
    //         id: i+'U',
    //         title: '\n'+num+': Rotate the top layer clockwise',
    //         images: U,
    //         notation:'U'

    //       })
    //     }
    //     if(finalSolution[i]=='U\''){
          
    //       DATA.push({
    //         id: i+'Uprime',
    //         title: '\n'+num+': Rotate the top layer counter clockwise',
    //         images: Uprime,
    //         notation:'U\''

    //       })
    //     }
    //     if(finalSolution[i]=='u'){
          
    //       DATA.push({
    //         id: i+'u',
    //         title: '\n'+num+': Rotate the top layer and the middle layer clockwise',
    //         images: Uw,
    //         notation:'Uw OR u'

    //       })
    //     }
    //     if(finalSolution[i]=='u\''){
          
    //       DATA.push({
    //         id: i+'uprime',
    //         title: '\n'+num+': Rotate the top layer and middle layer counter clockwise',
    //         images: Uwprime,
    //         notation:'Uw\' OR u\''

    //       })
    //     }
    //     if(finalSolution[i]=='D'){
          
    //       DATA.push({
    //         id: i+'D',
    //         title: '\n'+num+': Rotate the bottom layer clockwise',
    //         images: D,
    //         notation:'D'

    //       })
    //     }
    //     if(finalSolution[i]=='D\''){
          
    //       DATA.push({
    //         id: i+'Dprime',
    //         title: '\n'+num+': Rotate the bottom layer counter clockwise',
    //         images: Dprime,
    //         notation:'D\''

    //       })
    //     }
    //     if(finalSolution[i]=='d'){
          
    //       DATA.push({
    //         id: i+'d',
    //         title: '\n'+num+': Rotate the bottom layer and the middle layer clockwise',
    //         images: Dw,
    //         notation:'Dw OR d'

    //       })
    //     }
    //     if(finalSolution[i]=='d\''){
          
    //       DATA.push({
    //         id: i+'dprime',
    //         title: '\n'+num+': Rotate the bottom layer and middle layer counter clockwise',
    //         images: Dwprime,
    //         notation:'Dw\' OR d\''

    //       })
    //     }
    //     if(finalSolution[i]=='F'){
          
    //       DATA.push({
    //         id: i+'F',
    //         title: '\n'+num+': Rotate the front layer clockwise',
    //         images: F,
    //         notation:'F'

    //       })
    //     }
    //     if(finalSolution[i]=='F\''){
          
    //       DATA.push({
    //         id: i+'Fprime',
    //         title: '\n'+num+': Rotate the front layer counter clockwise',
    //         images: Fprime,
    //         notation:'F\''

    //       })
    //     }
    //     if(finalSolution[i]=='f'){
          
    //       DATA.push({
    //         id: i+'f',
    //         title: '\n'+num+': Rotate the front layer and the middle layer clockwise',
    //         images: Fw,
    //         notation:'Fw OR f'

    //       })
    //     }
    //     if(finalSolution[i]=='f\''){
         
    //       DATA.push({
    //         id: i+'fprime',
    //         title: '\n'+num+': Rotate the front layer and middle layer counter clockwise',
    //         images: Fwprime,
    //         notation:'Fw\' OR f\''

    //       })
    //     }
    //     if(finalSolution[i]=='B'){
          
    //       DATA.push({
    //         id: i+'B',
    //         title: '\n'+num+': Rotate the back layer clockwise',
    //         images: B,
    //         notation:'B'

    //       })
    //     }
    //     if(finalSolution[i]=='B\''){
          
    //       DATA.push({
    //         id: i+'Bprime',
    //         title: '\n'+num+': Rotate the back layer counter clockwise',
    //         images: Bprime,
    //         notation:'B\''

    //       })
    //     }
    //     if(finalSolution[i]=='b'){
         
    //       DATA.push({
    //         id: i+'b',
    //         title: '\n'+num+': Rotate the back layer and the middle layer clockwise',
    //         images: Bw,
    //         notation:'Bw OR b'

    //       })
    //     }
    //     if(finalSolution[i]=='b\''){
          
    //       DATA.push({
    //         id: i+'bprime',
    //         title: '\n'+num+': Rotate the back layer and middle layer counter clockwise',
    //         images: Bwprime,
    //         notation:'Bw\' OR b\''

    //       })
    //     }
    //     //F2, R2, L2, B2, D2, U2, f2, r2, l2, b2, d2, u2

    //     if(finalSolution[i]=='b2'){
         
    //       DATA.push({
    //         id: i+'b2',
    //         title: '\n'+num+': Rotate the back layer and the middle layer clockwise twice',
    //         images: Bw,
    //         notation:'b2',
    //         double:'2x'

    //       })
    //     }

    //     if(finalSolution[i]=='f2'){
         
    //       DATA.push({
    //         id: i+'f2',
    //         title: '\n'+num+': Rotate the front layer and the middle layer clockwise twice',
    //         images: Fw,
    //         notation:'f2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='r2'){
         
    //       DATA.push({
    //         id: i+'r2',
    //         title: '\n'+num+': Rotate the right layer and the middle layer clockwise twice',
    //         images: Rw,
    //         notation:'r2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='l2'){
         
    //       DATA.push({
    //         id: i+'l2',
    //         title: '\n'+num+': Rotate the left layer and the middle layer clockwise twice',
    //         images: Lw,
    //         notation:'l2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='u2'){
         
    //       DATA.push({
    //         id: i+'u2',
    //         title: '\n'+num+': Rotate the top layer and the middle layer clockwise twice',
    //         images: Uw,
    //         notation:'u2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='d2'){
         
    //       DATA.push({
    //         id: i+'d2',
    //         title: '\n'+num+': Rotate the bottom layer and the middle layer clockwise twice',
    //         images: Dw,
    //         notation:'d2',
    //         double:'2x'

    //       })
    //     }

    //     if(finalSolution[i]=='F2'){
          
    //       DATA.push({
    //         id: i+'F2',
    //         title: '\n'+num+': Rotate the front layer clockwise twice',
    //         images: F,
    //         notation:'F2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='R2'){
          
    //       DATA.push({
    //         id: i+'R2',
    //         title: '\n'+num+': Rotate the right layer clockwise twice',
    //         images: R,
    //         notation:'R2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='L2'){
         
    //       DATA.push({
    //         id: i+'L2',
    //         title: '\n'+num+': Rotate the left layer clockwise twice',
    //         images: L,
    //         notation:'L2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='B2'){
          
    //       DATA.push({
    //         id: i+'B2',
    //         title: '\n'+num+': Rotate the back layer clockwise twice',
    //         images: B,
    //         notation:'B2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='D2'){
          
    //       DATA.push({
    //         id: i+'D2',
    //         title: '\n'+num+': Rotate the bottom layer clockwise twice',
    //         images: D,
    //         notation:'D2',
    //         double:'2x'

    //       })
    //     }
    //     if(finalSolution[i]=='U2'){
          
    //       DATA.push({
    //         id: i+'U2',
    //         title: '\n'+num+': Rotate the top layer clockwise twice',
    //         images: U,
    //         notation:'U2',
    //         double:'2x'

    //       })
    //     }
    //   }
    // }
    // function FlatListItemSeparator  () {
    //   return (
    //     <View
    //       style={{
    //         height: 1,
    //         width: "100%",
    //         backgroundColor: "#000",
    //       }}
    //     />
    //   );
    // }

    // function FlatListHeader () {
    //   return (
    //     <View elevation={1} 
    //       style={{
    //         height: 100,
    //         width: "97%",
    //         margin: 5,
    //         backgroundColor: "#fff",
    //         border: 2.9,
    //         borderColor: "black",
    //         alignSelf: "center",
    //         shadowColor: "#000",
    //         shadowOffset: {
    //           width: 0,
    //           height: 16,
    //         },
    //         shadowOpacity: 1,
    //         shadowRadius: 7.49
    //       }}
    //     >
    //       <Text style={{  textShadowColor: 'black', textShadowOffset: { width: 1, height: 3 },textShadowRadius: 10, fontSize: 40, fontWeight: '800', flex: 1, alignSelf: "center", paddingTop: 30, fontSize: 40}}>Latest articles</Text>
    //     </View>
    //   );
    // }



    const Item= ({img, txt, no, twice}) => (
      <View style={{marginHorizontal: '-15%', left:'29%', paddingBottom:'30%'}}>
        <ImageBackground style={styles.movesImage} source={img} >
        <Text style={{position:'absolute', color:'white'}}><Bold>{twice}</Bold></Text>
          <Text style={styles.textDescrip2}><Bold>{no}</Bold>{txt}</Text>
          </ImageBackground>
      </View>
      );
    
      const renderItem = ({item}) => (
        <Item img={item.images} txt={item.title} no={item.notation} twice={item.double}/>
      )

      const CrossHeader = ({}) =>
      (
        <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
      )
    // function renderT() {

    //   // Ensure arr is defined in scope of, or is "visible" to, renderT()
    //   const arr = ['Hello', 'Awesome', 'Stack','Over','Flow', 'Have', 'A', 'Nice', 'Day'];
    
    //   return arr.map((obj, index) => {
    //     // Compose a unique key for the text element. A unique key is need when 
    //     // rendering lists of components
    //     const key = index;
    
    //     // Add return to ensure the text element is returned from map callback
    //     return <Text key={key}>{obj}</Text>;
    //   });
    // }


    return (
      
      <SafeAreaView style={styles.background}>
      
      <View style={{height: '90%'}}>
      <View style={styles.ViewContainer}>
      <FlatList 
        top='3%'
        numColumns={2}
        style={{height: '100%', flexGrow: 0}}
        data={DATA} 
        renderItem={renderItem}
        keyExtractor={item => item.id}  
        
        />

        
          
              

                    
                    
                    
      
      
      {/* {renderCrossSteps()} */}
      {loadInit()}
      

      
      
       {/* {CrossStepImages.map(img =>  <ImageBackground style={styles.movesImage} source={img} >{CrossStepText.map(txt => <Text style={styles.textDescrip2}>{txt}</Text>)}</ImageBackground> )}
       {CrossStepText.map(txt => <Text style={styles.textDescrip2}>{txt}</Text>)} */}
     
     
      

  
  
  
 
  
  
  </View>
  </View>
  <View style={{backgroundColor:'#121212', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', left:'1.35%'}}>
                 {/* Home Screen */}
                 <Icon.Button
                        name='home' 
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        alignSelf='center'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Gradient')}
                    >
                    <Text style={styles.BottomTabText}>Home</Text>
                    </Icon.Button>
                    <Icon.Button
                        name='school'
                        backgroundColor='transparent'
                        flexDirection='column'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        alignSelf='center'
                        paddingHorizontal='4%'
                        onPress={() => navigate('Learn')}
                    >
                    <Text style={styles.BottomTabText}>Learn</Text>
                    </Icon.Button>

                    <Icon.Button
                        name='timer-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignSelf='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Timer')}
                        >
                        <Text style={styles.BottomTabText}>Timer</Text>
                    </Icon.Button>
                    {/* Learn */}
                    
                    
            <Icon.Button
                        name='cube-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignSelf='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={({}) => navigate('VirtualCube')}
                        >
                        <Text style={styles.BottomTabText}>3DCube</Text>
                    </Icon.Button>
                    {/* Statistics */}
                    <Icon.Button            
                        name='chart-line'
                        alignSelf='center'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal='4%'
                        onPress={() => navigate('Statistics')}
                    >
                    <Text style={styles.BottomTabText}>Statistics</Text>
                    </Icon.Button>
                   
            </View>
  </SafeAreaView>
    );
      }
      catch(err){
        return(
          <View style={styles.ErrorContainer}>
            <Text style={styles.textSummary}>
            There was an error calculating the solution.
            This is likely due to an incorrect input.{'\n'}             
            </Text>
            <AwesomeButton 
                              width={300} 
                              height={40}
                              backgroundColor='#6d00eb'
                              textSize={27}
                              borderRadius={10}
                              activeOpacity={.8}	
                              backgroundDarker='#5c00c7'
                              backgroundShadow='transparent'
                              raiseLevel={5}
                              onPress={() => navigate('Scanner')}
                          >
                              Retry
                   </AwesomeButton>
          </View>
          )
      }
  }

} 



  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#121212'
    },
    movesImage: {
      width: '75%', 
      height: (Dimensions.get('window').width*.5)*.7, 
      resizeMode: 'contain', 
      flexDirection:'row'
      
    },
    textDescrip2:{
      // Text thats a description
      color: 'white',
      fontSize: 15,
      width: '80%',
      top:'65%'
    },
    viewMove:{
      //Holds a move's picture and description
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      width: '100%', 
      alignContent: 'center', 
      
    },
    background:{
      backgroundColor:'#121212',
      flex:1
  },
  scroll: {
    // Scroll view
    backgroundColor: "transparent",
},
ViewContainer:{
  // Holds the whole screen
  flex: 1, 
  //justifyContent: 'space-evenly', 
  alignItems: 'center', 
  backgroundColor:'#121212',
  //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
},
ContentsTitle: {
  // Table of contents title
  color: 'white',
  fontSize: 25,
  fontWeight:'bold',
  
},
BottomTabText: {
  //Text used for the bottom menu
  fontSize: 10,
  color: 'white',
  opacity: 1,
  justifyContent: 'center',
  left: '-7%',
  paddingHorizontal: '1%'
},
ErrorContainer:{
  flex: 1, 
  alignItems: 'center', 
  justifyContent:'center',
  paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
  backgroundColor:'#121212'


},
textSummary: {
        // the summary of the step
        color: 'white',
        opacity:87,
        fontSize: 25,
        textAlign:'center',
        fontWeight:'700',
        paddingHorizontal:'5%'
    },

  });