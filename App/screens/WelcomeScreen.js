//Should probably delete. I dont think it serves a purpose anymore


// import React from 'react';
// import { Text } from 'react-native';
// import { Image } from 'react-native';
// import { ImageBackground, StyleSheet } from 'react-native';
// import GradientButton from 'react-native-gradient-buttons';

// function WelcomeScreen({navigation}) {
//     return (
//         <ImageBackground style={styles.background} 
//             source={require('../Assets/background.jpg')}
//         >
           
//             <Image style={styles.logo} source={require('../Assets/logo-red.png')} />
//             <Text style={styles.textlogo}>Sell What You Don't Need</Text>
            
//             <View style={styles.loginButton}></View>
//             <GradientButton
                
//                 style={{ marginVertical: 8 }}
//                 text="Gradient Screen"
//                 textStyle={{ fontSize: 20 }}
//                 gradientBegin="#ffafbd"
//                 gradientEnd="#ffc3a0"
//                 gradientDirection="diagonal"
//                 height={60}
//                 width={300}
//                 radius={15}
//                 impact
//                 impactStyle='Heavy'
//                 onPressAction={() => navigation.navigate('Gradient')}

                
//             />
//             <View style={styles.registerButton}></View>
//         </ImageBackground>        
//     );
// }

// const styles = StyleSheet.create({
//     background:{
//         flex:1,
//         justifyContent:'flex-end',
//         alignItems:"center",
//     },
//     loginButton: {
//         width:'100%',
//         height: 70,
//         backgroundColor:'#fc5c65',
        
//     },
//     logo:{
//         width:100,
//         height:100,
//         position:'absolute',
//         top:70,
//         alignItems:'center'
                
//     },
//     textlogo:{
//         position:'absolute',
//         top:170,
//         alignItems:'center'                
//     },
    
        
//     registerButton: {
//         width:'100%',
//         height: 70,
//         backgroundColor:'#4ECDC4',
        
//     },
    
    
    

// })


// export default WelcomeScreen;