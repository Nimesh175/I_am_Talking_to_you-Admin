import React from 'react';
import {TouchableWithoutFeedback,Text,TouchableOpacity,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, dimensions, fontFamilies, fontSizes} from '../configurations/constants';

const Button = ({name = null, onPress = ()=>{}, disabled=false,customColors = []}) => {
    return (
      disabled ?
        <TouchableWithoutFeedback>
            <LinearGradient
              colors={customColors.length ? [colors.white,customColors[1]] : [colors.white,colors.midGreen]}
              style={styles.button}
              start={{x: 0, y: 0}} end={{x: 0, y: 1.1}}
            >
                <Text style={styles.buttonText}>{name}</Text>
            </LinearGradient>
        </TouchableWithoutFeedback>
        :
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
              colors={customColors.length ? customColors : [colors.midGreen,colors.black]}
              style={styles.button}
              start={{x: 0, y: 0}} end={{x: 0, y: 1.1}}
            >
                <Text style={styles.buttonText}>{name}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        padding: dimensions.paddingLevel2/2,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
        fontFamily: fontFamilies.candaraBold,
        color: colors.white,
        fontSize: fontSizes.fontXXXLarge,
        paddingLeft: dimensions.paddingLevel6,
        paddingRight: dimensions.paddingLevel6
    }
})

export default Button;
