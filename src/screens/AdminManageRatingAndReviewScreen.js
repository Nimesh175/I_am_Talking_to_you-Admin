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

const CardItem =() => {

      //  get Rating value
          const ratingCompleted = (rating) => {
               console.log("Rating is: " + rating)
          }         


     return(
          <View style={styles.card}>
          <EmptyView style={{marginTop : dimensions.heightLevel2}} />


             {/* card header */}
             <View style={{flexDirection : 'row'}}>
                  <View >
                    <Image source={require("../assets/images/over-seattle.jpg")} style={styles.card_image} />
                  </View>

                   <View>
                         <Text style={styles.usernameText1}>by,</Text>
                         <Text style={styles.usernameText2}>Dinuka Nimesh</Text>
                   </View>
                    
                    <Text style={styles.minutesAgoText}>20 minutes ago</Text>
             </View>


             {/* card body */}
             <EmptyView style={{marginTop : dimensions.heightLevel1 * 0.5}} />
             <View style={styles.card_body}>
                  <Text style={styles.card_body__text}>Keeping meeting minutes just got a lot easier. This simple meeting minutes template 
                    has a straightforward format
                    so it’s easy to share what topics were discussed. You’ll find fields for an attendee list, agenda topics, and an action
                    item section that lists task owner and deadline. Use the minutes of meeting template for notetaking during the meeting
                    or to organize your notes before sending out for approval. Download this meeting minutes template with its matching 
                    agenda template for your next meeting.</Text>
             </View>

               {/* rating component */}
               <View style={styles.ratingContainer}>
                         <AirbnbRating 
                              count={5}
                              onFinishRating={ratingCompleted}
                              unSelectedColor={'rgba(0,0,0,0.3)'}
                              showRating={false}
                              defaultRating={0}
                         />
               </View>

               <EmptyView style={{marginTop : dimensions.heightLevel2}} />
               <ListButton name="delete" showIcon={true}  />
               <EmptyView style={{marginTop : dimensions.heightLevel3} } />

          </View>
     )
}

const AdminManageRatingAndReviewScreen = () => {


 //  get Rating value
 const ratingCompleted = (rating) => {
     console.log("Rating is: " + rating)
}









     return (
          <KeyboardAvoidingView>
               <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
                 <View style={styles.container}>

                    <EmptyView style={{marginTop: dimensions.heightLevel3}} />
                  
                   
                         <HamburgerOption/>
                   

                    {/* <EmptyView style={{marginTop: dimensions.heightLevel1}} /> */}
                    <Text style={styles.title}>Manage Rating & {"\n"}Reviews</Text>
                    <EmptyView style={{marginTop : dimensions.heightLevel2}} />

                    <View style={styles.cardContainer}>
                    <EmptyView style={{marginTop : dimensions.heightLevel1}} />
                         <ScrollView>
                            <CardItem/>
                            <CardItem/>
                            <CardItem/>
                            <CardItem/>
                            <CardItem/>
                         </ScrollView>
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
     // sub_text : {fontFamily : fontFamilies.montserratSemiBold,fontSize : fontSizes.fontLarge, marginRight : 10 , color : 'rgba(0,0,0,0.8)' },

     cardContainer : {width : "100%", paddingBottom : 5, height : dimensions.fullHeight * 0.64, borderTopLeftRadius : 4 ,
             backgroundColor : colors.white , alignSelf : 'center', borderRadius : 15, margin : 10 , },
     card__title : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontLarge , alignSelf : "center" , margin : 5},
     card__title_with_price : {fontFamily : fontFamilies.candaraRegular , fontSize : fontSizes.fontMidMedium , alignSelf : "center"},
     description : {fontFamily : fontFamilies.montserratRegular , fontSize : fontSizes.fontMedium , color : "rgba(0,0,0,0.8)"},
     card_image : { width : dimensions.widthLevel11 * 0.25 , height : dimensions.widthLevel11 * 0.25 , borderRadius : 100 },
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

      usernameText1 : {fontFamily : fontFamilies.montserratRegular, fontSize : fontSizes.fontMidMedium * 0.95 , marginLeft : 10 , alignSelf : 'baseline' , color : 'rgba(0,0,0,0.6)' },
      usernameText2 : {fontFamily : fontFamilies.montserratSemiBold , fontSize : fontSizes.fontMidMedium * 0.95 ,marginLeft : 10 , alignSelf : 'baseline' , },
      minutesAgoText : {fontFamily : fontFamilies.montserratRegular , fontSize : fontSizes.fontMedium , color : 'rgba(0,0,0,0.8)' , position : 'absolute'  ,right : 0 },
      card_body : {width : "100%" , paddingLeft : dimensions.paddingLevel7  , paddingRight : dimensions.paddingLevel1, paddingVertical : 10  },
      card_body__text : {color : "rgba(0,0,0,0.9)", fontFamily : fontFamilies.montserratRegular , fontSize : fontSizes.fontMedium , backgroundColor : 'rgba(0,0,0,0.1)' , padding : 15 , borderRadius : 20 ,borderTopLeftRadius : 0   }  ,
      ratingContainer : {  }
});

export default AdminManageRatingAndReviewScreen
