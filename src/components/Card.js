import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import {colors, getShadows} from '../configurations/constants';

const Card = ({children,style,canTouch,onPress}) => (
    canTouch ?
        <TouchableOpacity onPress={onPress} style={{backgroundColor: colors.white,...getShadows,...style}}>
            {children}
        </TouchableOpacity>
        :
        <View style={{backgroundColor: colors.white,...getShadows,...style}}>
            {children}
        </View>
)

export default Card;
