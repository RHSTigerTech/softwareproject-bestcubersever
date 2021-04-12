import React from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {Header, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function IntermediateLearn({navigation}) {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.ViewContainer}>
                <View style={{height: '90%'}}>
                    <ScrollView style={styles.scroll}>
                        <View style={styles.pageHeader}>
                            <Text style={styles.textHeader}>Intermediate Method {/* Page Title */}</Text>
                            <Text style={styles.textSubHeader}> 
                                All of these steps correspond to steps in the Beginner's Method, they are just more advanced and in 
                                turn, faster. In order to have a smoother transition into this method, you can learn one step at a 
                                time and continue using the Beginner's Method steps for the others.
                                {'\n'}Intermediate Step 1 = Beginner's Step 1
                                {'\n'}Intermediate Step 2 = Beginner's Step 2 and 3
                                {'\n'}Intermediate Step 3 = Beginner's Step 4 and 5
                                {'\n'}Intermediate Step 4 = Beginner's Step 6 and 7
                                {'\n'}Always hold the cube so that white is on the bottom, unless algorithms have a cube rotation in them.
                                {/* Sub Header: Transition between Beginner and Intermediate */}
                            </Text>
                        </View>

                        {/* STEP 1: WHITE CROSS */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>1: White Cross {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                Get the white edges into place next to the white center and the center with the other color.  This Is the same 
                                as the first step of the Beginner's Method, just a faster/more advanced way to do it. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Instructions {/* Header: Instructions */}</Text>
                            <Text style={styles.textSubHeader}>
                                Hold the cube so that the white side is on the bottom {/* Sub header: Cube Orientation */}
                            </Text>
                            <Text style={styles.textDescripWide}>
                                1: Find an edge with white and another color on it.
                                {'\n'}2: Line the other color up with the matching center.
                                {'\n'}3: Rotate the side with that color until the edge is 
                                {'\n'}    inserted into the white layer.{'\n'} {/* Steps */}
                            </Text>
                            <Text style={styles.textHeader}>Special Cases {/* Header: Special Cases */}</Text>
                            {/* This view holds all the cases for this step */}
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_wcr_wlayer.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    All edges are in the white layer, but one is oriented wrong.
                                    {'\n'}F' D R' D'
                                </Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_wcr_ylayer.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    Last edge is on the correct side in the yellow layer, but it is oriented wrong so that you can not simply 
                                    move it down
                                    {'\n'}F D R' D'
                                </Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_wcr_2layer.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    Last edge is on the correct side in the second layer, but it is oriented wrong so that you can not simply 
                                    move it down
                                    {'\n'}D R' D'
                                </Text>
                            </View>
                        </Card>
                        
                        {/* STEP 2: F2L */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>2: First Two Layers (F2L)</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                F2L is when you solve the white corners and the edges in the second later at the same time.  In order to do 
                                this, you create pairs of a corner and an edge piece with corresponding colors.  Then, you insert them into the 
                                spot they are supposed to be in.  This can be done intuitively or with algorithms.  
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Basic Algorithms</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textDescripWide}>
                                    Inserting Algorithms:
                                    {'\n'}Inserts the top left corner and the top middle edge into the bottom right corner
                                    {'\n'}R U' R'
                                    {'\n'}Inserts the top right corner and the top middle edge into the bottom left corner
                                    {'\n'}L' U L
                                </Text>
                                <Text style={styles.textDescripWide}>
                                    Removing Algorithm: 
                                    {'\n'}Removes the bottom right corner and the middle right edge and moves them to the top layer
                                    {'\n'}R U R'
                                    {'\n'}Removes the bottom left corner and the middle left edge and moves them to the top layer.
                                    {'\n'}L' U' L
                                </Text>
                            </View>
                            <Text style={styles.textHeader}>Instructions and Cases</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textDescripWide}>
                                    First, you want to get the corner and its matching edge into the yellow layer.  If you find the corner in 
                                    the first layer, use one of the removing algorithms.  If you find the edge in the second layer, use one of 
                                    the removing algorithms.  Be sure to remove them in a way that the edge and corner aren't touching in the 
                                    wrong orientation. 
                                    {'\n'}
                                    {'\n'}Next, you need to position them so that you can insert them.  The position depends on how the corner 
                                    and edge pieces are oriented.  In order to position them, hold the cube so that the spot that the pair needs 
                                    to be inserted into is in the front right corner.  Then, move the corner to the back right corner in the top 
                                    layer.  If the white part of the corner is facing to the right or up, keep the corner in that spot and do 
                                    (R) then (U) or (U') until the edge piece is in the correct spot according to the diagrams below.  If it 
                                    is facing the back, move it to the front left corner of the top layer and do (F) then (U) or (U') until the 
                                    edge piece is in the correct spot according to the diagrams below.
                                </Text>

                                <Text style={styles.textWideCenter}>Top of the edge and top of the corner are the same</Text>
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_f2l_sr.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    If the color of the top of the corner is matches the center of the side the pair is on and the white side of 
                                    the corner is facing right, position them like this and insert using:
                                    {'\n'}L' U L {/* sr */}
                                </Text>
                                
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_f2l_sl.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    If the color of the top of the corner is matches the center of the side the pair is on and the white side of 
                                    the corner is facing left, position them like this and insert using:
                                    {'\n'}R U' R' {/* sl */}
                                </Text>

                                <Text style={styles.textWideCenter}>Top of the edge and top of the corner are different</Text>
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_f2l_dr.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    If the colored side of the corner is matched with its corresponing center and the white side of the corner 
                                    is facing right, position them like this and insert using:
                                    {'\n'}R U R' {/* dr */}
                                </Text>
                                
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_f2l_dl.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    If the colored side of the corner is matched with its corresponing center and the white side of the corner 
                                    is facing left, position them like this and insert using:
                                    {'\n'}L' U' L {/* dl */}
                                </Text>

                                <Text style={styles.textWideCenter}>Top of the corner is white</Text>
                                <Text style={styles.textDescripWide}>
                                    Position the edge so that it is on the side that corresponds with the color on the side of the edge.
                                </Text>
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_f2l_tr.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    If the edge is on the right, insert using this:
                                    {'\n'}R U R2 F R F' {/* tr */}
                                </Text>
                                
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_f2l_tl.jpg')}/>
                                <Text style={styles.textDescrip}>
                                    If the edge is on the left, insert using this:
                                    {'\n'}L' U' L2 F' L' F {/* tl */}
                                </Text>
                            </View>
                        </Card>

                        {/* STEP 3: OLL */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>3: Orient Last Layer (OLL) {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In order to orient the last layer in this method, you use one algorithm to orient both the yellow edges and 
                                corners. {/* Summary of Step */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                <Text style={styles.textWideCenter}>All edges oriented</Text>
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_0.png')}/>
                                <Text style={styles.textDescrip}>R2 D' R U2 R' D R U2 R</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_1.png')}/>
                                <Text style={styles.textDescrip}>(F R F' Rw)(U R' U' Rw)</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_2.png')}/>
                                <Text style={styles.textDescrip}>(F R' F' Rw)(U R U' Rw)</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_3.png')}/>
                                <Text style={styles.textDescrip}>R U R' U R U2 R'</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_4.png')}/>
                                <Text style={styles.textDescrip}>R U2 R' U' R U' R'</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_5.png')}/>
                                <Text style={styles.textDescrip}>R U2 (R2 U' R2 U') R2 U2 R</Text>
                            
                                <Image style={styles.exImage} source={require('../Assets/beginners/b_yc_6.png')}/>
                                <Text style={styles.textDescrip}>F (R U R' U') (R U R' U') (R U R' U') F'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>All corners oriented</Text>
                                {/* pics  42-43 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_42.png')}/>
                                <Text style={styles.textDescrip}>M' U M U2 M' U M</Text>
                                
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_43.png')}/>
                                <Text style={styles.textDescrip}>(R U R' U') M' U R U' r'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>No Edges Oriented</Text>
                                {/* pics 44-50 and 41 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_41.png')}/>
                                <Text style={styles.textDescrip}>r U R' U' M2 (U R U' R') U' M'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_44.png')}/>
                                <Text style={styles.textDescrip}>(R U2)(R2 F R F' U2)(R' F R F')</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_45.png')}/>
                                <Text style={styles.textDescrip}>F (R U R' U') F' f (R U R' U') f'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_46.png')}/>
                                <Text style={styles.textDescrip}>f (R U R' U') f' U' F (R U R' U') F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_47.png')}/>
                                <Text style={styles.textDescrip}>f (R U R' U') f' U F (R U R' U') F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_48.png')}/>
                                <Text style={styles.textDescrip}>R U R' U (R' F R F') U2 (R' F R F')</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_49.png')}/>
                                <Text style={styles.textDescrip}>F R U R' d R' U2 R' F R F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_50.png')}/>
                                <Text style={styles.textDescrip}>r' R U R U R' U' r R2 F R F'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>P shapes</Text>
                                {/* pics  1-4 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_1.png')}/>
                                <Text style={styles.textDescrip}>R' E' F (U R U' R') F' R</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_2.png')}/>
                                <Text style={styles.textDescrip}>F U R U' F' r U R' U' r'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_3.png')}/>
                                <Text style={styles.textDescrip}>F' U' L' U L F</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_4.png')}/>
                                <Text style={styles.textDescrip}>F (U R U' R') F'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>W shapes</Text>
                                {/* pics  5-6 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_5.png')}/>
                                <Text style={styles.textDescrip}>R' U' R U' R' U R U (R B' R' B)</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_6.png')}/>
                                <Text style={styles.textDescrip}>(R U R' U)(R U' R' U')(R' F R F')</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>L shapes</Text>
                                {/* pics  7-12 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_7.png')}/>
                                <Text style={styles.textDescrip}>F' (L' U' L U)(L' U' L U) F</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_8.png')}/>
                                <Text style={styles.textDescrip}>F (R U R' U')(R U R' U') F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_9.png')}/>
                                <Text style={styles.textDescrip}>r U' (r2 U r2 U r2) U' r</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_10.png')}/>
                                <Text style={styles.textDescrip}>l' U (l2 U' l2 U' l2) U l'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_11.png')}/>
                                <Text style={styles.textDescrip}>l' U' L U' L' U L U' L' U2 l</Text> 

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_12.png')}/>
                                <Text style={styles.textDescrip}>r U R' U R U' R' U R U2 r'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>C shapes</Text>
                                {/* pics  13-14 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_13.png')}/>
                                <Text style={styles.textDescrip}>(R U R2 U') R' F R U R U' F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_14.png')}/>
                                <Text style={styles.textDescrip}>R' U' R' F R F' U R</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>T shapes</Text>
                                {/* pics  15-16 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_15.png')}/>
                                <Text style={styles.textDescrip}>(R U R' U')(R' F R F')</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_16.png')}/>
                                <Text style={styles.textDescrip}>F (R U R' U') F'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>I shapes</Text>
                                {/* pics  17-20 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_17.png')}/>
                                <Text style={styles.textDescrip}>F (U R U' R')(U R U' R') F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_18.png')}/>
                                <Text style={styles.textDescrip}>(R U R' U) R d' R U' R' F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_19.png')}/>
                                <Text style={styles.textDescrip}>R U2 R2 U' R U' R' U2 F R F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_20.png')}/>
                                <Text style={styles.textDescrip}>r U r' (U R U' R') U R U' M' U' r'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Square shapes</Text>
                                {/* pics  21-22 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_21.png')}/>
                                <Text style={styles.textDescrip}>r' U2 R U R' U r</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_22.png')}/>
                                <Text style={styles.textDescrip}>r U2 R' U' R U' r'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Big Lightning Bolt</Text>
                                {/* pics  23-24 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_23.png')}/>
                                <Text style={styles.textDescrip}>R B' R' U' R U B U' R'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_24.png')}/>
                                <Text style={styles.textDescrip}>R' F (R U R' U') F' U R</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Small Lightning Bolt</Text>
                                {/* pics  25-28 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_25.png')}/>
                                <Text style={styles.textDescrip}>r U R' U R U2 r'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_26.png')}/>
                                <Text style={styles.textDescrip}>r' U' R U' R' U2 r</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_27.png')}/>
                                <Text style={styles.textDescrip}>r' R2 U R' U R U2 R' U M'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_28.png')}/>
                                <Text style={styles.textDescrip}>r R2 U' R U' R' U2 R U' M</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Fish shapes</Text>
                                {/* pics  29-32 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_29.png')}/>
                                <Text style={styles.textDescrip}>(R U R' U') R' F R2 U R' U' F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_30.png')}/>
                                <Text style={styles.textDescrip}>(R U R' U) R' F R F' R U2 R'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_31.png')}/>
                                <Text style={styles.textDescrip}>R U2 R2 F R F' R U2 R'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_32.png')}/>
                                <Text style={styles.textDescrip}>(F R' F' R)(U R U' R')</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Knight</Text>
                                {/* pics  33-36 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_33.png')}/>
                                <Text style={styles.textDescrip}>F U R U2 R' U' (R U R' F')</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_34.png')}/>
                                <Text style={styles.textDescrip}>R' F (R U R' F') R y' R U' R'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_35.png')}/>
                                <Text style={styles.textDescrip}>r' U' r R' U' R U r' U r</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_36.png')}/>
                                <Text style={styles.textDescrip}>r U r' (R U R' U') r U' r'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Awkward shapes</Text>
                                {/* pics  37-40 */}
                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_37.png')}/>
                                <Text style={styles.textDescrip}>r2 D' (r U r') D r2 U' (r' U' r)</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_38.png')}/>
                                <Text style={styles.textDescrip}>F R' F R2 U' R' U' R U R' F2</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_39.png')}/>
                                <Text style={styles.textDescrip}>(R U R' U)(R U2 R') F (R U R' U') F'</Text>

                                <Image style={styles.exImage} source={require('../Assets/intermediate/i_oll_40.png')}/>
                                <Text style={styles.textDescrip}>(R' U' R) U' (R' U2 R) F (R U R' U') F'</Text>
                            </View>
                        </Card>

                        {/* STEP 4: PLL */}
                        <Card containerStyle={{backgroundColor: '#121212'}}>
                            <Card.Title style={styles.textTitle}>4: Permute Last Layer (PLL) {/* Card Title */}</Card.Title>
                            <Card.Divider/>
                            <Text style={styles.textSummary}>
                                In order to permute the last layer in this method, you use one algorithm to permute both the yellow edges and 
                                corners with one algorithm. {/* Summary of Steps */}
                            </Text>
                            <Card.Divider/>
                            <Text style={styles.textHeader}>Cases {/* Header: Cases */}</Text>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Edges only</Text>
                                {/* Ua */}<Image style={styles.exImage} source={require('../Assets/beginners/b_pye_cc.png')}/>
                                <Text style={styles.textDescrip}>(R U' R U)(R U R U') R' U' R2</Text>
                            
                                {/* Ub */}<Image style={styles.exImage} source={require('../Assets/beginners/b_pye_c.png')}/>
                                <Text style={styles.textDescrip}>R2 U (R U R' U') R' U' R' U R'</Text>
                            
                                {/* H */}<Image style={styles.exImage} source={require('../Assets/beginners/b_pye_opp.png')}/>
                                <Text style={styles.textDescrip}>M2 U M2 U2 M2 U M2</Text>
                            
                                {/* Z */}<Image style={styles.exImage} source={require('../Assets/beginners/b_pye_adj.png')}/>
                                <Text style={styles.textDescrip}>M' U M2 U M2 U M' U2 M2 U'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Corners only</Text>
                                {/* Aa */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Aa.png')}/>
                                <Text style={styles.textDescrip}>l' U R' D2 R U' R' D2 R2</Text>
                                
                                {/* Ab */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Ab.png')}/>
                                <Text style={styles.textDescrip}>l U' R D2 R' U R D2 R2</Text>

                                {/* E */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_E.png')}/>
                                <Text style={styles.textDescrip}>x' R U' R' D R U R' D' R U R' D R U' R' D'</Text>

                                {/*----------------------------*/}
                                <Text style={styles.textWideCenter}>Corners and Edges</Text>
                                {/* F */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_F.png')}/>
                                <Text style={styles.textDescrip}>(R' U' F')(R U R' U') R' F R2 U' R' U' R U R' U R</Text>

                                {/* Ja */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Ja.png')}/>
                                <Text style={styles.textDescrip}>x R2 F R F' R U2 r' U r U2</Text>

                                {/* Jb */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Jb.png')}/>
                                <Text style={styles.textDescrip}>(R U R' F')(R U R' U') R' F R2 U' R'</Text>

                                {/* Ra */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Ra.png')}/>
                                <Text style={styles.textDescrip}>(R U' R' U')(R U R D)(R' U' R D') R' U2 R'</Text>

                                {/* Rb */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Rb.png')}/>
                                <Text style={styles.textDescrip}>R2 F (U R U' R') F' R U2 R' U2 R</Text>

                                {/* T */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_T.png')}/>
                                <Text style={styles.textDescrip}>(R U R' U') R' F R2 (U' R' U')(R U R' F')</Text>

                                {/* Y */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Y.png')}/>
                                <Text style={styles.textDescrip}>F (R U' R' U')(R U R' F')(R U R' U')(R' F R F')</Text>

                                {/* V */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_V.png')}/>
                                <Text style={styles.textDescrip}>(R' U R' U') y (R' F' R2 U')(R' U R' F) R F</Text>
                                
                                {/* Na */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Na.png')}/>
                                <Text style={styles.textDescrip}>R U R' U (R U R' F' R U R' U' R' F R2 U' R') U2 R U' R'</Text>

                                {/* Nb */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Nb.png')}/>
                                <Text style={styles.textDescrip}>(R' U R U')(R' F' U' F)(R U R' F) R' F' R U' R</Text>

                                {/* Ga */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Ga.png')}/>
                                <Text style={styles.textDescrip}>R2 U R' U R' U' R U' R2 (U' D) R' U R D'</Text>

                                {/* Gb */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Gb.png')}/>
                                <Text style={styles.textDescrip}>R' U' R (U D') R2 U R' U R U' R U' R2 D</Text>

                                {/* Gc */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Gc.png')}/>
                                <Text style={styles.textDescrip}>R2 U' R U' R U R' U R2 (U D') R U' R' D</Text>

                                {/* Gd */}<Image style={styles.exImage} source={require('../Assets/intermediate/i_pll_Gd.png')}/>
                                <Text style={styles.textDescrip}>R U R' (U' D) R2 U' R U' R' U R' U R2 D'</Text>
                            </View>
                        </Card>
                    </ScrollView>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Icon.Button
                        name='cube-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignItems='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => navigation.navigate('VirtualCube')}
                        >
                        <Text style={styles.BottomTabText}>3DCube</Text>
                    </Icon.Button>
                    {/* Statistics */}
                    <Icon.Button            
                        name='chart-line'
                        alignItems='center'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => {navigation.navigate('Statistics')}}
                    >
                    <Text style={styles.BottomTabText}>Statistics</Text>
                    </Icon.Button>
                    {/* Home Screen */}
                    <Icon.Button
                        name='home' 
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => {navigation.navigate('Gradient')}}
                    >
                    <Text style={styles.BottomTabText}>Home</Text>
                    </Icon.Button>
                    {/* Learn */}
                    <Icon.Button
                        name='school'
                        backgroundColor='transparent'
                        flexDirection='column'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => {navigation.navigate('Learn')}}
                    >
                    <Text style={styles.BottomTabText}>Learn</Text>
                    </Icon.Button>
                    <Icon.Button
                        name='timer-outline'
                        flexDirection='column'
                        backgroundColor='transparent'
                        //backgroundColor='#121212'
                        alignItems='center'
                        color='white'
                        opacity={1}
                        size={30}
                        paddingHorizontal={Platform.OS === 'ios' ? '3%':'4.5%'}
                        onPress={() => navigation.navigate('Timer')}
                        >
                        <Text style={styles.BottomTabText}>Timer</Text>
                    </Icon.Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#121212',
        flex:1
    },

    exImage: {
        width: '35%', 
        height: (Dimensions.get('window').width)*.35, 
        resizeMode: 'contain', 
        marginRight: '5%', 
    },

    image: {
        // Background image of cube
        width:'100%',
        height: '100%',
        position: 'absolute',
        //color: 'transparent',
        //top: 24,
    },

    pageHeader:{
        // Header
        backgroundColor: '#121212',
    },

    placeHolder: {
        // Text with this style holds the place of something that will be implemented later
        color: 'blue',
        fontWeight: 'bold',
        width: '40%',
    },

    scroll: {
        // Scroll view
        backgroundColor: "transparent",
    },

    textHeader: {
        //headers
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17.5,
        textAlign: 'center',
    },
    
    BottomTabText:{
        //Text used for the bottom menu
        fontSize:10,
        color:'white',
        opacity:1,
        justifyContent:'center',
        left:'-7%',
        paddingHorizontal:'1%'
      },

    textDescrip:{
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: 13,
        width: '60%',
    },

    textDescripWide:{
        // Text thats a description but full width
        paddingTop: 10,
        color: 'white',
        fontSize: 13,
        width: '100%'
    },

    textWideCenter:{
        // Text thats a description but full width and centered
        paddingTop: 10,
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },

    textSubHeader: {
        //Text that goes under headers
        color: 'white',
        fontSize: 13,
        textAlign: 'center'
    },

    textSummary: {
        // the summary of the step
        color: 'white',
        fontSize: 15,
    },

    textTitle: {
        // Titles of the cards
        color: 'white',
        fontSize: 20
    },

    ViewContainer:{
        // Holds the whole screen
        flex: 1, 
        //justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor:'#121212',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
})

export default IntermediateLearn;