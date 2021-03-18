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

const TableRow =() => {
      const  _text = {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontMedium  , color : "rgba(0,0,0,0.6)" , textAlign : "center"}
     const table_row = {flexDirection : 'row' , justifyContent : 'space-between' ,backgroundColor : "rgba(250,250,250,1)" , paddingHorizontal : 2 , paddingVertical : 5, borderRadius : 10 , width : "100%" , marginTop : dimensions.heightLevel1 * 0.5}
     return (
               <View style={table_row}>
               <View style={{width : "24%" , justifyContent : "flex-start" , alignItems :"center"}}>
                     <Text  style={_text}>11/11/2021</Text>
               </View>

               <View style={{width : "55%" , justifyContent : "flex-start"  , alignItems :"center"}} >
                     <Text  style={_text}>Loream  LoremLoremLoremLoremLorem LoremLoremLorem</Text>
               </View>

               <TouchableOpacity  
                         style={{width : "17%" , justifyContent : "flex-start" , alignItems :"center" ,backgroundColor : 'rgba(0,0,0,0)', padding : 5 }} >
                     <Text  style={ [ _text , { transform: [{ rotate: '90deg'}] , fontSize : fontSizes.fontLarge }] } >...</Text>
               </TouchableOpacity>
           </View>

     )
}




const AdminManagePushNotificationScreen = () => {


     return (
          <KeyboardAvoidingView>
               <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
                 <View style={styles.container}>

                    <EmptyView style={{marginTop: dimensions.heightLevel3}} />
                  
                   
                         <HamburgerOption/>
                   

                    {/* <EmptyView style={{marginTop: dimensions.heightLevel1}} /> */}
                    <Text style={styles.title}>Manage Push {"\n"}Notification</Text>

                    <View style={styles.middleContainer}>
                    <EmptyView style={{marginTop : dimensions.heightLevel1}} />

                    {/* input fielda */}
                         <View style={styles.inputContainer}>
                         <ScrollView showsVerticalScrollIndicator={false}>
                    <EmptyView style={{marginTop : dimensions.heightLevel2}} />

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
                                  <View style={{width : dimensions.widthLevel11 , alignSelf : "flex-end"}}>
                                      <ListButton  name="push notification" customButton={styles.button} customButtonText={styles.buttonText}  />
                                  </View>
                              <EmptyView style={{marginTop : dimensions.heightLevel1}} />




                              {/* History */}
                              <EmptyView style={{marginTop : dimensions.heightLevel1}} />
                              <Text style={styles._text2}>History</Text>


                              {/* history >> table header */}
                              <EmptyView style={{marginTop : dimensions.heightLevel1}} />
                              <View style={styles.table_header}>
                                   <Text  style={styles._text}>Date & Time</Text>
                                   <Text  style={styles._text}>Title</Text>
                                   <Text  style={[styles._text ,{marginRight : 5}]}>Description</Text>
                              </View>

                               {/* All table Body >> rows is here */}
                              <TableRow />
                              <TableRow />
                              <TableRow />
                              <TableRow />
                              <TableRow />
                              <TableRow />








                              <EmptyView style={{marginTop : dimensions.heightLevel5}} />
                         </ScrollView>
                         </View>


                    </View>


                    <EmptyView style={{marginTop : dimensions.heightLevel1}} />

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
     inputContainer : { width : dimensions.widthLevel3,  alignSelf : "center"  ,height : dimensions.heightLevel10 * 3.3  ,},
     textFieldStyles : {height : dimensions.fullHeight * 0.18 , alignItems : 'flex-start' , paddingRight : 5, paddingLeft : 2 , paddingVertical : 5 ,elevation : 4}  ,  
     _text : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontMedium , marginLeft : 10 , color : "rgba(0,0,0,0.6)"},
     _text2 : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontMediumPlus , marginLeft : 10 , color : "rgba(0,0,0,0.6)"},

     button: {
          borderRadius: 30,
          padding: dimensions.paddingLevel2/2,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          borderColor : 'rgba(0,0,0,1)',
          margin : 5,
          flexDirection : 'row' ,
      },
      buttonText: {
          fontFamily: fontFamilies.candaraBold,
          color: colors.white,
          fontSize : fontSizes.fontLarge,
          paddingLeft: dimensions.paddingLevel3,
          paddingRight: dimensions.paddingLevel3
      },

      table_header : {flexDirection : 'row' , justifyContent : 'space-between' ,backgroundColor : "rgba(0,0,0,0.2)" , paddingHorizontal : 10 , paddingVertical : 10 , borderRadius : 10 },
      table_row : {flexDirection : 'row' , justifyContent : 'space-between' ,backgroundColor : "rgba(250,250,250,0.2)" , paddingHorizontal : 10 , paddingVertical : 10 , borderRadius : 20},

});

export default AdminManagePushNotificationScreen




// Not completed << POP UP modal has to create
