import React , {useState , useEffect} from 'react';
import { View , Text, KeyboardAvoidingView , ScrollView , StyleSheet , Image , TouchableHighlight ,TouchableOpacity} from 'react-native';
import { dimensions , colors , fontFamilies , fontSizes , imageSizes , basicStyles ,_getShadows} from '../configurations/constants';
import EmptyView from '../components/EmptyView';
import TextField from '../components/TextField';
import ListButton from '../components/ListButton';
import Card from '../components/Card';
import HamburgerOption from '../components/HamburgerOption';
import { Rating, AirbnbRating } from 'react-native-ratings';
import SearchField from '../components/SearchField';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';




const AdminManageStaticPageScreen = () => {


     return (
          <KeyboardAvoidingView>
               <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
                 <View style={styles.container}>

                    <EmptyView style={{marginTop: dimensions.heightLevel3}} />
                  
                   
                         <HamburgerOption/>
                   

                    {/* <EmptyView style={{marginTop: dimensions.heightLevel1}} /> */}
                    <Text style={styles.title}>Manage Static {"\n"}Page</Text>

                    <View style={styles.middleContainer}>
                    <EmptyView style={{marginTop : dimensions.heightLevel2}} />
                        <Text style={styles.whoAmIText}>Who Am I</Text>
                    <EmptyView style={{marginTop : dimensions.heightLevel1 * 1.5}} />

                    {/* input fielda */}
                         <View style={styles.inputContainer}>
                              <View style={styles.inputGroup}>
                                   <Text style={styles._text}>Title</Text>
                                   <EmptyView  style={{marginTop : dimensions.heightLevel1 * 0.5}} /> 
                                   <TextField  placeholder="Name"  textFieldStyles={{elevation : 2}} />
                              </View>

                              <EmptyView style={{marginTop : dimensions.heightLevel1 }} />
                              <View style={styles.inputGroup}>
                                   <Text style={styles._text}>Description</Text>
                                   <EmptyView  style={{marginTop : dimensions.heightLevel1 * 0.5}} /> 
                                   <TextField  placeholder="Note"  isMultiline={true} textFieldStyles={styles.textFieldStyles} onChangeText={(text)=> console.log(text)} />
                              </View>


                              <EmptyView style={{marginTop : dimensions.heightLevel3}} />
                              <ListButton  name="EDIT TEXT" customButton={styles.button} customButtonText={styles.buttonText}  />
                              <EmptyView style={{marginTop : dimensions.heightLevel1}} />

                         </View>


                    </View>


                    <EmptyView style={{marginTop : dimensions.heightLevel3}} />

                 </View>
               </ScrollView>
          </KeyboardAvoidingView>
     )
}

const styles = StyleSheet.create({
     container : { width : dimensions.widthLevel2,marginHorizontal : 30, alignSelf : 'center', paddingVertical : 5},
     title : {fontSize : fontSizes.fontBigger,fontFamily : fontFamilies.montserratBold, },
     card : {paddingHorizontal : 20 ,textAlign : 'center'},
     // sub_text : {fontFamily : fontFamilies.montserratSemiBold,fontSize : fontSizes.fontLarge, marginRight : 10 , color : 'rgba(0,0,0,0.8)' },
     whoAmIText : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontMediumPlus},
     inputContainer : { width : dimensions.widthLevel3,  alignSelf : "center"},
     textFieldStyles : {height : dimensions.fullHeight * 0.3 , alignItems : 'flex-start' , paddingRight : 5, paddingLeft : 2 , paddingVertical : 5 ,elevation : 4}  ,  
     _text : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontMedium , marginLeft : 10 , color : "rgba(0,0,0,0.6)"},

     button: {
          borderRadius: 30,
          padding: dimensions.paddingLevel2/2,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          borderColor : 'rgba(0,0,0,1)',
          margin : 5,
          flexDirection : 'row'
      },
      buttonText: {
          fontFamily: fontFamilies.candaraBold,
          color: colors.white,
          fontSize : fontSizes.fontLarge,
          paddingLeft: dimensions.paddingLevel3,
          paddingRight: dimensions.paddingLevel3
      },

});

export default AdminManageStaticPageScreen
