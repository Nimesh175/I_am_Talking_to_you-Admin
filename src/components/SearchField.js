import React from 'react';
import {View,Text,StyleSheet,TextInput,Image} from 'react-native';
import {colors, dimensions, fontFamilies, fontSizes, imageSizes} from '../configurations/constants';

const searchIcon = require('../assets/images/search.webp');

const SearchField = ({onChange}) => (
    <View style={styles.container}>
        <Image source={searchIcon} style={[imageSizes.smallIcons,{marginLeft: dimensions.fullHeight*1/100}]}/>
        <TextInput onChangeText={onChange} placeholder='Search' placeholderTextColor={colors.lightGray} style={styles.input}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 50,
        width: '90%',
        backgroundColor: colors.white,
         paddingVertical : 2
    },
    input: {
        width:'90%',
        height: dimensions.heightLevel5/2,
        paddingLeft: dimensions.fullHeight*1/100,
        paddingRight: dimensions.fullHeight*1/100,
        fontFamily: fontFamilies.montserratRegular,
        fontSize: fontSizes.fontMidMedium,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: dimensions.heightLevel1 / 4,
       
    }
})

export default SearchField;