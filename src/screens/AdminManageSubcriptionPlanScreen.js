import React , {useState , useEffect} from 'react';
import { View , Text, KeyboardAvoidingView , ScrollView , StyleSheet , Image , TouchableHighlight ,TouchableOpacity} from 'react-native';
import { dimensions , colors , fontFamilies , fontSizes , imageSizes , basicStyles ,_getShadows} from '../configurations/constants';
import EmptyView from '../components/EmptyView';
import TextField from '../components/TextField';
import ListButton from '../components/ListButton';
import Card from '../components/Card';
import HamburgerOption from '../components/HamburgerOption'
import SearchField from '../components/SearchField';

const CardItem =() => {
     return(
          <View style={styles.card}>
          <EmptyView style={{marginTop : dimensions.heightLevel2}} />
            <View >
                 <Image source={require("../assets/images/trial.png")}  style={styles.card_image } />
                 <Text style={styles.card__title_with_price}>$ 179 Per Month</Text>
                 <Text style={styles.card__title}>Title</Text>
            </View> 

            <Text style={styles.description}> For example, you are searching any data from the ScrollView List array and found the
            matching data on index 7 in the array now you want to scroll the list to item 7, 
            matching data on index 7 in the array now you want to scroll the list to item 7, 
            In this situation, you can take the help from this example.</Text>

            <EmptyView style={{marginTop : dimensions.heightLevel2}} />
            <View style={{width : "60%" , alignSelf:"flex-end" }}>
                 <ListButton  iconName={"updateIcon"}  showIcon={true} name="EDIT"  customButton={styles.button} customButtonText={styles.buttonText} />
            </View>

            <EmptyView style={{marginTop : dimensions.heightLevel4}} />
  </View>
     )
}

const AdminManageSubcriptionPlanScreen = () => {
     return (
          <KeyboardAvoidingView>
               <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
                 <View style={styles.container}>

                    <EmptyView style={{marginTop: dimensions.heightLevel3}} />
                  
                   
                         <HamburgerOption/>
                   

                    {/* <EmptyView style={{marginTop: dimensions.heightLevel1}} /> */}
                    <Text style={styles.title}>Manage Payments</Text>

                    <EmptyView style={{marginTop : dimensions.heightLevel1}} />
                    <Text style={styles.sub_text}>Manage Subcription Plan</Text>
                    <EmptyView style={{marginTop : dimensions.heightLevel1 * 1.2}} />

                    {/* search bar */}
                    <View style={{alignSelf : 'flex-end' , width : "70%"}}>
                         <SearchField />
                    </View>
                    <EmptyView style={{marginTop : dimensions.heightLevel2}} />

                    <View style={styles.cardContainer}>
                         <ScrollView>
                                   <CardItem />
                                   <CardItem />
                                   <CardItem />
                                   <CardItem />
                                   <CardItem />
                                   <CardItem />
                         </ScrollView>
                    </View>


                    <View>

                         <ListButton name="+ New Category" customButton={[styles.button , {backgroundColor : "black"}]} customButtonText={styles.buttonText} />
                    </View>
                    <EmptyView style={{marginTop : dimensions.heightLevel3}} />

                 </View>
               </ScrollView>
          </KeyboardAvoidingView>
     )
}

const styles = StyleSheet.create({
     container : { width : dimensions.widthLevel2,marginHorizontal : 30, alignSelf : 'center', paddingVertical : 5},
     card : {paddingHorizontal : 20 ,textAlign : 'center'},
     title : {fontSize : fontSizes.fontBigger,fontFamily : fontFamilies.montserratBold, },
     sub_text : {fontFamily : fontFamilies.montserratSemiBold,fontSize : fontSizes.fontLarge, marginRight : 10 , color : 'rgba(0,0,0,0.8)' },

     cardContainer : {width : "100%", paddingBottom : 5, height : dimensions.fullHeight * 0.5,
             backgroundColor : colors.white , alignSelf : 'center', borderRadius : 10, margin : 10 , },
     card__title : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontLarge , alignSelf : "center" , margin : 5},
     card__title_with_price : {fontFamily : fontFamilies.candaraRegular , fontSize : fontSizes.fontMidMedium , alignSelf : "center"},
     description : {fontFamily : fontFamilies.montserratRegular , fontSize : fontSizes.fontMedium , color : "rgba(0,0,0,0.8)"},
     card_image : { width : dimensions.widthLevel11  * 0.6, height :  dimensions.widthLevel11 * 0.6 , alignSelf : 'center' },
     button: {
          borderRadius: 30,
          padding: dimensions.paddingLevel2/2,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderWidth: 1,
          borderColor : 'rgba(0,0,0,0.1)',
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

export default AdminManageSubcriptionPlanScreen
