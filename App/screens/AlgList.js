import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image, Button, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Header, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class App extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.background}>
                <View style={styles.ViewContainer}>
                    <View style={{ height: '90%' }}>
                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            style={styles.scroll}
                        >
                            <Card containerStyle={{ backgroundColor: '#121212' }}>
                                <Card.Title style={styles.ContentsTitle}>Steps{/* Card Title*/}</Card.Title>
                                <Card.Divider />
                                <TouchableOpacity
                                    onPress={() => {
                                        this.scrollViewRef.scrollTo({ y: this.beginner.y, animated: true });
                                    }}
                                >
                                    <Text style={styles.contentButtons}>Beginner's Method</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.scrollViewRef.scrollTo({ y: this.intermediate.y, animated: true });
                                    }}
                                >
                                    <Text style={styles.contentButtons}>Intermediate Method</Text>
                                </TouchableOpacity>
                            </Card>

                            <Text onLayout={event => (this.beginner = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                            <Card containerStyle={{ backgroundColor: 'black' }}>
                                <Card.Title style={styles.textTitle}>Beginner's Method</Card.Title>
                                <Card.Divider />
                                <Text style={styles.textHeader}>Step 4: Orient Yellow Edges</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_ye_L.png')} />
                                    <Text style={styles.textDescrip}>U2 F (R' U' R U) F'</Text>
                                </View>

                                <Text style={styles.textHeader}>Step 5: Orient Yellow Corners</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_0.png')} />
                                    <Text style={styles.textDescrip}>
                                        R' U2 R F U' R' U' R U F'
                                        {'\n'}F R U' R' U R U R' U R U' R' F'
                                        {'\n'}L2 D L' U2 L D' L' U2 L'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_1.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) l' U' L U R U' r' F
                                        {'\n'}r U R' U' r' F R F'
                                        {'\n'}(y') F R U R' U' R U' R' U' R U R' F'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_2.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2)R U2 R' U' (R U R' U') (R U R' U') R U' R'
                                        {'\n'}F R' F' L F R F' L'
                                        {'\n'}R' F' L' F R F' L F
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_3.png')} />
                                    <Text style={styles.textDescrip}>
                                        (U L U' R') (U L' U' R)
                                        {'\n'}y L' U2 L U L' U L
                                        {'\n'}R U' L' U R' U' L
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_4.png')} />
                                    <Text style={styles.textDescrip}>
                                        y2 L U2 L' U' L U' L'
                                        {'\n'}y L' U R U' L U R'
                                        {'\n'}y L' U' L U' L' U2 L
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_5.png')} />
                                    <Text style={styles.textDescrip}>
                                        R' U L U' R U' L' U' L U' L'
                                        {'\n'}f (R U R' U') f' F (R U R' U') F'
                                        {'\n'}y2 L' U2 L2 U L2 U L2 U2 L'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_yc_6.png')} />
                                    <Text style={styles.textDescrip}>
                                        y R U R' U R U' R' U R U2 R'
                                        {'\n'}F' (L' U' L U) (L' U' L U) (L' U' L U) F
                                        {'\n'}(R' U R U) (R' U R U') (R' U R U') R' U' R U2 R' U R
                                    </Text>
                                </View>

                                <Text style={styles.textHeader}>Step 6: Permute Yellow Corners</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_pyc_adj.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y) l' U R' D2 R U' R' D2 R2
                                        {'\n'}(y') l U' R D2 R' U R D2 R2
                                        {'\n'}(R' U' F')(R U R' U') R' F R2 U' R' U' R U R' U R
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_pyc_opp.png')} />
                                    <Text style={styles.textDescrip}>
                                        (R' U R' U') y (R' F' R2 U')(R' U R' F) R F
                                        {'\n'}R U R' U (R U R' F' R U R' U' R' F R2 U' R') U2 R U' R'
                                        {'\n'}(R' U R U')(R' F' U' F)(R U R' F) R' F' R U' R
                                    </Text>
                                </View>

                                <Text style={styles.textHeader}>Step 7: Permute Yellow Edges</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_pye_cc.png')} />
                                    <Text style={styles.textDescrip}>
                                        M2 U M U2 M' U M2
                                        {'\n'}F2 U' (L R') F2 (L' R) U' F2
                                        {'\n'}F2 U' M' U2 M U' F2
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_pye_c.png')} />
                                    <Text style={styles.textDescrip}>
                                        M2 U' M U2 M' U' M2
                                        {'\n'}L' U L' U' L' U' L' U L U L2
                                        {'\n'}R' U R' U' R' U' R' U R U R2
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_pye_opp.png')} />
                                    <Text style={styles.textDescrip}>
                                        M2' U' M2' U2' M2' U' M2'
                                        {'\n'}R2 U2 R U2 R2 U2 R2 U2 R U2 R2
                                        {'\n'}L2 U2 L' U2 L2 U2 L2 U2 L' U2 L2
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/beginners/b_pye_adj.png')} />
                                    <Text style={styles.textDescrip}>
                                        M2 U2 M U M2 U M2 U M
                                        {'\n'}(y) R U R' U R' U' R' U R U' R' U' R2 U R
                                        {'\n'}M2' U' M2' U E2 M' E2 M'
                                    </Text>
                                </View>
                            </Card>


                            <Text onLayout={event => (this.intermediate = event.nativeEvent.layout)} style={styles.contentLocal}>y</Text>
                            <Card containerStyle={{ backgroundColor: 'black' }}>
                                <Card.Title style={styles.textTitle}>Intermediate Method</Card.Title>
                                <Card.Divider />
                                <Text style={styles.textHeader}>3: Orient Last Layer (OLL)</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={styles.textWideCenter}>All corners oriented</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_42.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) F (R U R' U') F' U2 F (R U F' U') F'
                                        {'\n'}M U' M2 U' M' U2 M U' M
                                        {'\n'}(y2) F (R U R' U') F2 (L' U' L U) F
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_43.png')} />
                                    <Text style={styles.textDescrip}>
                                        R U R' U' r R' U R U' r'
                                        {'\n'}M' U' M' U' M' d2 M' U' M' U' M'
                                        {'\n'}M U M U M U2 M' U M' U M'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>No Edges oriented</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_41.png')} />
                                    <Text style={styles.textDescrip}>
                                        r' R U R U R' U' r2 R2' U R U' r'
                                        {'\n'}M U R U R' U' M2 U R U' r'
                                        {'\n'}L' R' F' U2 L2 U2 L2 U2 L2 F L R
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_44.png')} />
                                    <Text style={styles.textDescrip}>
                                        R U B' R B R2 U' R' F R F'
                                        {'\n'}L' U2 L2 F' L' F U2 L F' L' F
                                        {'\n'}(y) R U' R2 D' r U' r' D R2 U R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_45.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) F' (L' U' L U) F f' (L' U' L U) f
                                        {'\n'}F R F' U2 f R2 f' U2 F R' F'
                                        {'\n'}(y2) (F R' F' R) U2 F R' F' R2 U2 R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_46.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y') (M' U) (r' U2 r U) (R' U R2 r')
                                        {'\n'}(y) M U l' U2 l U L' U L M'
                                        {'\n'}(y) r' R2 U R' U r U2 r' U M'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_47.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y) r' R U' r U2 r' U' R U' R2' r
                                        {'\n'}(y) M U' r U2' r' U' R U' R' M'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_48.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2)F R' F' l R L' U R U' R' U' M'
                                        {'\n'}F' R U2 r' U F2 U' r U2 R' F
                                        {'\n'}(F' R U2 r' d) R2 U' F R2 f' R
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_49.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y') (R' F R F') U2 (R' F R F') (U F' U F)
                                        {'\n'}(y') (F R U' R' U' R U R' F') U' (F R U R' U' F')
                                        {'\m'}(y2) (M' U M U2 M' U M) U (f R U R' U' f')
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_50.png')} />
                                    <Text style={styles.textDescrip}>
                                        M U R U R' U' M' R' F R F'
                                        {'\n'}(y2) M' U L U L' U' l L2 B L B'
                                        {'\n'}r' U2 R U R' U r2 U2' R' U' R U' r'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>P shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_1.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y') (F R' F' R) (U R U R') (U' R U' R')
                                        {'\n'}(y2) L' d' R d L U' L' B' L
                                        {'\n'}(y2) L' U' B U L U' L' B' L
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_2.png')} />
                                    <Text style={styles.textDescrip}>
                                        L U F' U' L' U L F L'
                                        {'\n'}(R U R' U') (L' U' L U) M' U R U2 L' U x'
                                        {'\n'}F U R U' F' r U R' U' r'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_3.png')} />
                                    <Text style={styles.textDescrip}>
                                        R' U' F R' F' R U R
                                        {'\n'}U R U R' F' L' U' L F
                                        {'\n'}(y2) B' U' R' U R B
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_4.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) f (R U R' U') f'
                                        {'\n'}(y') R U y' L U' L' B'
                                        {'\n'}(y') F U R' F R F' U' F'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>W shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_5.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) (L' U' L U') (L' U L U) (L F' L' F)
                                        {'\n'}(R U R' U' F') (U2' F U) (R U R')
                                        {'\n'}(y') R U' R' U' F (U R U' R') F' R U2 R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_6.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) L U L' U L U' L' U' L' B L B'
                                        {'\n'}(y2) (L' U' L U) y' (R U2 R' U') y (L' U' L)
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>L shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_7.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y') r U R' U R U2 r' R' U2 R U R' U R
                                        {'\n'}R' U' x (R' U R U')2 x' U R
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_8.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) f (U R U' R') (U R U' R') f'
                                        {'\n'}(y) r U2 R' U' R U' r' R' U' R U' R' U2 R
                                        {'\n'}(y') r' U' R U' R' U2 r R U2 R' U' R U' R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_9.png')} />
                                    <Text style={styles.textDescrip}>
                                        r U2 R2' U' R2 U' r' R' U2 R
                                        {'\n'}R' F R' F' R2 d2 y' R' F R F'
                                        {'\n'}(y) R' U2 R U R' U R F R U R' U' F'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_10.png')} />
                                    <Text style={styles.textDescrip}>
                                        R' F R2 B' R2 F' R2 B R'
                                        {'\n'}(r U R U' r') (F R' U R U' R' F')
                                        {'\n'}(y) F R U' R' U' R U R' U R U' R' F'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_11.png')} />
                                    <Text style={styles.textDescrip}>
                                        r U R' U R U2 r' R U R' U R U2 R'
                                        {'\n'}F (R U R' U') F' (R U R' U') (R' F R F')
                                        {'\n'}(y2) r' U' R U' R' U R U' R' U2 r
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_12.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) l U L' U L U' L' U L U2 l'
                                        {'\n'}(y2) r' U' R U' R' U2 r R' U' R U' R' U2 R
                                        {'\n'}(y) f (R U R' U') (R U R' U') f' F (R U R' U') F'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>C shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_13.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) F R U R' U' R' F' r U R U' r'
                                        {'\n'}(y2) R U2 R' F R U R' U' F' U R U R'
                                        {'\n'}R U R' U2 L' U (R' F R F') U' L
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_14.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y) F U F l' U' l U' F'
                                        {'\n'}R' U' l' U l F' U R
                                        {'\n'}R U l U' R' U F' l'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>T shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_15.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) (L' U' L U) (L F' L' F)
                                        {'\n'}R' U' R U l U' R' U x
                                        {'\n'}R U R' F' U' F R U' R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_16.png')} />
                                    <Text style={styles.textDescrip}>
                                        f' (U' L' U L) f
                                        {'\n'}(y2) f (U R U' R') f'
                                        {'\n'}(y2) F' (L' U' L U) F
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>I shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_17.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) f R U R' U' R U R' U' f'
                                        {'\n'}(y') R' U2 R U R' F R' F' R U R
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_18.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y') F R U R' U F' U' F U' F'
                                        {'\n'}R' U' R U' R' U F' U F R
                                        {'\n'}(R U R' U R U2 R') U (F U R U' R' F')
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_19.png')} />
                                    <Text style={styles.textDescrip}>
                                        r U2 R2 F R F' U2 r' F R F'
                                        {'\n'}(y) F U' R2 D R' U2 R D' R2' U F'
                                        {'\n'}(y) L F' L' U' L F' L' U L F L' U' M' U M
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_20.png')} />
                                    <Text style={styles.textDescrip}>
                                        l U l' (U L U' L')2 l U' l'
                                        {'\n'}(R' F R F') U2 (R U' R' U) F' U2 F
                                        {'\n'}F R U R' U' R F' r U R' U' r'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>Square shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_21.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) R' F2 L F L' F R
                                        {'\n'}(y2) l' U2 L U L' U l
                                        {'\n'}(y) x' U' l2 U l F' l U
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_22.png')} />
                                    <Text style={styles.textDescrip}>
                                        l U2 L' U' L U' l'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>Big Lightning Bolt</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_23.png')} />
                                    <Text style={styles.textDescrip}>
                                        l U' l' U' R U B U' R'
                                        {'\n'}R U R' F' U' F U R U2 R'
                                        {'\n'}R B' R' U' R U B U' R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_24.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) f R' F' R U R U' R' S'
                                        {'\n'}(y2) L' B L U L' U' B' U L
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>Small Lightning Bolt</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_25.png')} />
                                    <Text style={styles.textDescrip}>
                                        F R' F' R U2 R U2 R'
                                        {'\n'}(y) B L F' L F L2 B'
                                        {'\n'}L' U2 L U2 L F' L' F
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_26.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) l' U' L U' L' U2 l
                                        {'\n'}(y) B' R' F R' F' R2 B
                                        {'\n'}(y2) R U2 R' U2 R' F R F'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_27.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) r U R' U R' F R F' R U2 r'
                                        {'\n'}(y) R U' R' U' R U' R' U2 F' U F U' R U R'
                                        {'\n'}(y) F' (L' U' L U) F y F (R U R' U') F'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_28.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y) F (R U R' U') F' U F (R U R' U') F'
                                        {'\n'}(y2) F R U R2 F R y' R2 U R U2 R'
                                        {'\n'}M' R' U' R U' R' U2 R U' M
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>Fish Shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_29.png')} />
                                    <Text style={styles.textDescrip}>
                                        R' U' R y r U' r' U r U r'
                                        {'\n'}R' U' R y' x' R U' R' F R U R' x
                                        {'\n'}(y2) L' U' L y l U' l' U l U l'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_30.png')} />
                                    <Text style={styles.textDescrip}>
                                        (R' U' R U) R B' R2 U' R U B
                                        {'\n'}R U R' y' r' U r U' r' U' r
                                        {'\n'}R U R' y R' F R U' R' F' R
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_31.png')} />
                                    <Text style={styles.textDescrip}>
                                        f (R U R' U') f' (R U R' U R U2 R')
                                        {'\n'}R U B' R B R2 U R U2 R'
                                        {'\n'}R U2 R2' F R F' R U2 R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_32.png')} />
                                    <Text style={styles.textDescrip}>
                                        F R U' R' U' R U R' F'
                                        {'\n'}R' F R F' U' F' U F
                                        {'\n'}F R' F' R U R U' R'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>Knight</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_33.png')} />
                                    <Text style={styles.textDescrip}>
                                        F U R U' R2 F' R U R U' R'
                                        {'\n'}r U' r' U' r U r' y' R' U R
                                        {'\n'}R U2 L' U' L U2 R' U' L F' L' F
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_34.png')} />
                                    <Text style={styles.textDescrip}>
                                        l' U l U l' U' l y' R U' R'
                                        {'\n'}F' U' L' U2 L U L' U' L F
                                        {'\n'}L' U2 R U R' U2 L U R' F R F'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_35.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) l' U' l (L' U' L U) l' U l
                                        {'\n'}(y2) R' F' R L' U' L U R' F R
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_36.png')} />
                                    <Text style={styles.textDescrip}>
                                        r U M U R' U' r U' r'
                                        {'\n'}(y2) l U l' L U L' U' l U' l'
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>Awkward Shapes</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_37.png')} />
                                    <Text style={styles.textDescrip}>
                                        M U (R U R' U') (R' F R F') M'
                                        {'\n'}(y) (R U R' U') (R U' R' F') U' (F R U R')
                                        {'\n'}(y) R' U2 R2 U R' U' R' U2 F R F'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_38.png')} />
                                    <Text style={styles.textDescrip}>
                                        F U (R U2 R' U') (R U2 R' U') F'
                                        {'\n'}(L F' L' F) L' U2 L d (R U R')
                                        {'\n'}F' L U L2 U L2 U2 L' U F
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_39.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) R' M2 U' F' U F r U' M'
                                        {'\n'}(y) r U2 R' U' R U' r' U' R U R' U R U2 R'
                                        {'\n'}(y2) R U' R' U2 R U y R U' R' y' U' R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_oll_40.png')} />
                                    <Text style={styles.textDescrip}>
                                        L' U L U2 L' U' y' L' U L U F
                                        {'\n'}R' U' R U F R U R' U' R' U R U' F'
                                        {'\n'}(M U) (F R U R' U' F') M'
                                    </Text>
                                </View>
                                <Text style={styles.textHeader}>4: Permute Last Layer (PLL)</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Text style={styles.textWideCenter}>Refer to Step 7 in the Beginner's Method section for Edges Only cases</Text>
                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>Corners only</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Aa.png')} />
                                    <Text style={styles.textDescrip}>
                                        (x) R' U R' D2 R U' R' D2 R2 (x')
                                        {'\n'}R' F R' B2 R F' R' B2 R2
                                        {'\n'}B2 R2 B' L' B R2 B' L B'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Ab.png')} />
                                    <Text style={styles.textDescrip}>
                                        R B' R F2 R' B R F2 R2
                                        {'\n'}(y')R2 B2 R F R' B2 R F' R
                                        {'\n'}(y2) L F' L B2 L' F L B2 L2
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_E.png')} />
                                    <Text style={styles.textDescrip}>
                                        R U R' U R' U' R F' R U R' U' R' F R2 U' R2 U R
                                        {'\n'}(y) F R' F' r U R U' r' F R F' r U R' U' r'
                                        {'\n'}l' U' L' U R U' L U R' U' L U R U' L' U (x')
                                    </Text>

                                    {/*----------------------------*/}
                                    <Text style={styles.textWideCenter}>Corners and Edges</Text>
                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_F.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y') (R' U R U') R2 (F' U' F U) (R F R' F') R2 U'
                                        {'\n'}(y')L U' L' U L2 F U F' U' L' F' L F L2 U
                                        {'\n'}R' U R U' R2 F' U' F U R F R' F' R2 U'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Ja.png')} />
                                    <Text style={styles.textDescrip}>
                                        x R2 F R F' R U2 r' U r U2
                                        {'\n'}R' U2 R U R' U2' L U' R U L'
                                        {'\n'}F2 L' U' L b2 L' U L' U' r2
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Jb.png')} />
                                    <Text style={styles.textDescrip}>
                                        R U2 R' U' R U2 L' U R' U' r
                                        {'\n'}(y') L2 (U D') L2 U L2 U' L2 D L2 U' L2
                                        {'\n'}B2 (L U L') B2 (R D' R D) R2
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Ra.png')} />
                                    <Text style={styles.textDescrip}>
                                        R U R' F' R U2 R' U2 R' F R U R U2 R' U'
                                        {'\n'}R l U' l' U' R' U l U l' U2 R U2' R'
                                        {'\n'}R2 F2 U R U R' U' R' U' F2 R' U R'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Rb.png')} />
                                    <Text style={styles.textDescrip}>
                                        (y2) L' U' L F L' U2 L U2 L F' L' U' L' U2 L
                                        {'\n'}(y2) r' L' U r U L U' r' U' r U2 L' U2 L
                                        {'\n'}(y') R' U2 R U2 R' F (R U R' U') R' F' R2'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_T.png')} />
                                    <Text style={styles.textDescrip}>
                                        F R U' R' U R U R2 F' R U R U' R'
                                        {'\n'}R U R' U' R' F R2 U' R' U F' L' U L
                                        {'\n'}(y2) L' U' L U L F' L2 U L U L' U' L F
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Y.png')} />
                                    <Text style={styles.textDescrip}>
                                        R' U' R U' L R U2 R' U' R U2 L' U R2 U R
                                        {'\n'}F R' F R2 U' R' U' R U R' F' R U R' U' F'
                                        {'\n'}R2 U' R2 U' R2 U R' F' R U R2 U' R' F R
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_V.png')} />
                                    <Text style={styles.textDescrip}>
                                        R' U R' U' R D' R' D R' U D' R2 U' R2 D R2
                                        {'\n'}R U2 R' D R U' R U' R U R2 D R' U' R D2
                                        {'\n'}R' U R' d' R' F' R2 U' R' U R' F R F
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Na.png')} />
                                    <Text style={styles.textDescrip}>
                                        F' R U R' U' R' F R2 F U' R' U' R U F' R'
                                        {'\n'}(R U' L U2 R' U L') (R U' L U2 R' U L')
                                        {'\n'}R F U' R' U R U F' R2 F' R U R U' R' F
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Nb.png')} />
                                    <Text style={styles.textDescrip}>
                                        (R' U L' U2 R U' L) (R' U L' U2 R U' L)
                                        {'\n'}B R' U' R U R B' R2' B' U R U R' U' B R
                                        {'\n'}L' U R' d2 R U' L R' U L' U2 l F' r
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Ga.png')} />
                                    <Text style={styles.textDescrip}>
                                        R2' u (R' U R' U' R) u' R2 (y') R' U R
                                        {'\n'}R2 U (R' U R' U' R) U' R2 D (U' R' U R) D'
                                        {'\n'}L F2 R (F' L' F U) R' U' (F' L F' L')
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Gb.png')} />
                                    <Text style={styles.textDescrip}>
                                        R2 D L2 D F2 L D R' D2 L D' R' U2
                                        {'\n'}R' U' R B2 D (L' U L U' L) D' B2
                                        {'\n'}R2 D L2 D F2 L D R' D2 L D' R' U2
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Gc.png')} />
                                    <Text style={styles.textDescrip}>
                                        R2' u' (R U' R U R') u R2 (y) R U' R'
                                        {'\n'}R2' D' F U' F U F' D R2 B U' B'
                                        {'\n'}(y') L' U' L U L U' F' L' U' L' U L F U' L U2 L'
                                    </Text>

                                    <Image style={styles.imageEx} source={require('../Assets/intermediate/i_pll_Gd.png')} />
                                    <Text style={styles.textDescrip}>
                                        R U R' F2 D' (L U' L' U L') D F2
                                        {'\n'}L U2 L' U F' (L' U' L U L) F U (L' U' L' U L)
                                        {'\n'}l2 U' L2 U' F2 L' U' R U2 L' U l (x')
                                    </Text>
                                </View>
                            </Card>
                        </ScrollView>
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
                        name='camera'
                        backgroundColor='transparent'
                        flexDirection='column'
                        //backgroundColor='#121212'
                        color='white'
                        opacity={1}
                        size={30}
                        alignSelf='center'
                        paddingHorizontal='4%'
                        onPress={() => navigate('Scanner')}
                    >
                    <Text style={styles.BottomTabText}>Solver</Text>
                    </Icon.Button>
                    
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
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#121212',
        flex: 1
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

    contentButtons: {
        color: '#7600ff',
        //textAlign:'center',
        fontSize: 20,
        //textDecorationLine: 'underline',
        fontWeight: 'bold',
        paddingTop: '5%',
        top: '-30%'
    },

    contentHeader: {
        color: '#7600ff',
        //textAlign:'center',
        fontSize: 23,
        //textDecorationLine: 'underline',
        fontWeight: 'bold',
        paddingTop: '5%',
        //top:'-30%'
    },

    contentLocal: {
        fontSize: .1,
        color: 'transparent',
        alignItems: 'center'
    },

    ContentsTitle: {
        // Table of contents title
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },

    image: {
        // Background image of cube
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    imageEx: {
        width: '35%',
        height: (Dimensions.get('window').width) * .35,
        resizeMode: 'contain',
        marginRight: '5%',
    },

    imageInstructions: {
        width: '35%',
        height: (Dimensions.get('window').width) * .35,
        resizeMode: 'contain',
        marginLeft: '5%',
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

    textDescrip: {
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: 14,
        width: '60%',
        lineHeight: 18,
        letterSpacing: .2,
    },

    textDescripWrap: {
        // Text thats a description
        paddingTop: 10,
        color: 'white',
        fontSize: RFPercentage(2.1),

        width: '60%',
        lineHeight: 18,
        letterSpacing: .2,
        height: (Dimensions.get('window').width) * .35,
        //flexGrow:10,
    },

    textDescripPlus: {
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 25,
        letterSpacing: .2,
        paddingTop: 10,
        color: 'white',
        width: '60%',
    },

    textDescripWide: {
        // Text thats a description but full width
        paddingTop: 10,
        color: 'white',
        //fontSize: RFPercentage(2.1), 
        fontSize: 14,
        width: '100%',
        lineHeight: 18,
        letterSpacing: .2
    },

    textDescripWideTip: {
        // Text thats a description but full width
        paddingTop: 10,
        color: 'white',
        //opacity:.8,
        //fontSize: RFPercentage(2.1), 
        fontSize: 14,
        width: '100%',
        lineHeight: 18,
        letterSpacing: .2,
        paddingLeft: '5%',
        paddingRight: '5%',
        textAlign: 'center'

    },

    textHeader: {
        //headers
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
    },

    textSubHeader: {
        //Text that goes under headers
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 18,
        letterSpacing: .2,
        paddingTop: 2,
        paddingBottom: 5
    },

    textSummary: {
        // the summary of the step
        color: 'white',
        fontSize: 16,
        paddingBottom: '6%',
        lineHeight: 20,
        letterSpacing: .2
    },

    textTitle: {
        // Titles of the cards
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },

    textWideCenter: {
        // Text thats a description but full width and centered
        paddingTop: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },

    ViewContainer: {
        // Holds the whole screen
        flex: 1,
        //justifyContent: 'space-evenly', 
        alignItems: 'center',
        backgroundColor: '#121212',
        //paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight: 0,
    },
})