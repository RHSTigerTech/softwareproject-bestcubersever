import React from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import GradientButton from 'react-native-gradient-buttons';

function ViewImageScreen({navigation}) {
    return (
        <ImageBackground style={styles.background} 
            source={require('../Assets/MobileRubiksCubeBackground.jpg')}
        >
           
            
            
            
            
            <GradientButton
                
                style={styles.Button}
                text="Home Screen"
                textStyle={{ fontSize: 20 }}
                gradientBegin="#ffafbd"
                gradientEnd="#ffc3a0"
                gradientDirection="diagonal"
                height={60}
                width={300}
                radius={15}
                impact
                impactStyle='Heavy'
                onPressAction={() => navigation.navigate('Gradient')}

                
            />
            
        </ImageBackground>        
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },
    Button:{
        top:'20%',
    },
    
    
    
    

})

export default ViewImageScreen;
