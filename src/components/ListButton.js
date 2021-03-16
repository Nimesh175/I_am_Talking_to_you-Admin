import React from 'react';
import {TouchableWithoutFeedback,Text,TouchableOpacity,StyleSheet ,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, dimensions, fontFamilies, fontSizes} from '../configurations/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const deleteIcon = <Icon name="trash-alt" size={13} color="#900" />;
const updateIcon = <Icon name="edit" size={13} color="#900" />;
const ListButton = ({name = null, onPress = ()=>{}, disabled=false , customButton={} , customButtonText={}  , iconName="deleteIcon" , showIcon=false } ) => {
    return (
      disabled ?
        <TouchableWithoutFeedback >
            <View  style={ Object.keys(customButton).length === 0 || disabled ? styles.button2 : customButton}>  
                <Text style={ Object.keys(customButtonText).length === 0  || disabled ? styles.buttonText2 : customButtonText } >{name}</Text>
           </View>
        </TouchableWithoutFeedback>
        :
        <TouchableOpacity onPress={onPress}  >
            <View style={ Object.keys(customButton).length === 0 ? styles.button : customButton }>
               <View style={{marginLeft : 5}}>
                    { showIcon ? 
                        iconName ==="updateIcon" ? updateIcon : deleteIcon
                        : null}
                </View>
                <Text style={ Object.keys(customButtonText).length === 0 ? styles.buttonText : customButtonText }>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        padding: dimensions.paddingLevel2/2,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor : 'rgba(0,0,0,0.1)',
        margin : 5,
        flexDirection : 'row'
    },
     button2: {
        borderRadius: 30,
        padding: dimensions.paddingLevel2/2,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor : 'rgba(0,0,0,0.1)',
        margin : 5
    },
    buttonText: {
        fontFamily: fontFamilies.candaraBold,
        color: 'rgba(0,0,0,0.7)',
        fontSize : fontSizes.fontLarge,
        paddingLeft: dimensions.paddingLevel3,
        paddingRight: dimensions.paddingLevel3
    },

    buttonText2: {
        fontFamily: fontFamilies.candaraBold,
        color: 'rgba(0,0,0,0.3)',
        fontSize : fontSizes.fontLarge,
        paddingLeft: dimensions.paddingLevel3,
        paddingRight: dimensions.paddingLevel3
    }
})

export default ListButton;
