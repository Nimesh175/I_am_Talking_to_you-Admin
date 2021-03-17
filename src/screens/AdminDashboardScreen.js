import React , {useState , useEffect} from 'react';
import { View , Text, KeyboardAvoidingView , ScrollView , StyleSheet , Image , TouchableHighlight ,TouchableOpacity} from 'react-native';
import { dimensions , colors , fontFamilies , fontSizes , imageSizes , basicStyles ,_getShadows} from '../configurations/constants';
import EmptyView from '../components/EmptyView';
import TextField from '../components/TextField';
import ListButton from '../components/ListButton';
import Card from '../components/Card';
import HamburgerOption from '../components/HamburgerOption'



const AdminDashboardScreen = () => {
     return (
          <KeyboardAvoidingView>
               <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
                 <View style={styles.container}>

                    <EmptyView style={{marginTop: dimensions.heightLevel3}} />
                  
                   
                         <HamburgerOption/>
                   

                   
                    <Text style={styles.title}>Dashboard</Text>

                    <EmptyView style={{marginTop : dimensions.heightLevel2}} />
                    <Text style={styles.sub_text}>Synthesis of the complex DFGH ring system of the title compounds has been accomplished</Text>
                    <EmptyView style={{marginTop : dimensions.heightLevel3}} />

                    <View style={{alignSelf : 'center'}}>
                         <View style={{flexDirection : 'row' , justifyContent : 'space-evenly'}}>
                             {/* row-1 */}
                              <Card canTouch={false} style={styles.card}>
                                   <EmptyView style={{marginTop : dimensions.heightLevel3}} />
                                   {/* line 01 */}
                                   <Text style={styles.card__title}>User</Text>
                                   {/* line 02 */}
                                   <Text style={styles.card__title}>Count</Text>
                                   <EmptyView style={{marginTop : dimensions.heightLevel2 }} />
                                   <Text style={styles.card__sub_title}>2800</Text>
                              </Card>

                              <Card canTouch={false} style={styles.card}>
                                   <EmptyView style={{marginTop : dimensions.heightLevel3}} />
                                   {/* line 01 */}
                                   <Text style={styles.card__title}>Daily</Text>
                                   {/* line 02 */}
                                   <Text style={styles.card__title}>Revenue</Text>
                                   <EmptyView style={{marginTop : dimensions.heightLevel2 }} />
                                   <Text style={styles.card__sub_title}>$ 230</Text>
                              </Card>
                         </View>
                         {/* row 2 */}
                         <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                              <Card canTouch={false} style={styles.card}>
                                    <EmptyView style={{marginTop : dimensions.heightLevel3}} />
                                   {/* line 01 */}
                                   <Text style={styles.card__title}>Monthly</Text>
                                   {/* line 02 */}
                                   <Text style={styles.card__title}>Revenue</Text>
                                   <EmptyView style={{marginTop : dimensions.heightLevel2 }} />
                                   <Text style={styles.card__sub_title}>$ 2800</Text>
                              </Card>

                              <Card canTouch={false} style={styles.card}>
                                   <EmptyView style={{marginTop : dimensions.heightLevel3}} />
                                   {/* line 01 */}
                                   <Text style={styles.card__title}>Annually</Text>
                                   {/* line 02 */}
                                   <Text style={styles.card__title}>Revenue</Text>
                                   <EmptyView style={{marginTop : dimensions.heightLevel2 }} />
                                   <Text style={styles.card__sub_title}>$ 23400</Text>
                              </Card>
                         </View>

                    </View>
                    <EmptyView style={{marginTop : dimensions.heightLevel3}} />


                 </View>
               </ScrollView>
          </KeyboardAvoidingView>
     )
}

const styles = StyleSheet.create({
     container : { width : dimensions.widthLevel2,marginHorizontal : 30,alignSelf : 'center',paddingVertical : 5,},
     title : {fontSize : fontSizes.fontBigger,fontFamily : fontFamilies.montserratBold, },
     sub_text : {fontFamily : fontFamilies.montserratRegular,fontSize : fontSizes.fontMedium, marginRight : 10 , color : 'rgba(0,0,0,0.5)' },
     card : {width : dimensions.widthLevel11 * 0.9, height : dimensions.widthLevel11 * 0.9,
             backgroundColor : colors.white , alignItems : 'center', borderRadius : 10, margin : 10 ,},
     card__title : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontXLarge},
     card__sub_title : {fontFamily : fontFamilies.montserratSemiBold , fontSize : fontSizes.fontXLarge , color : colors.blue},
     // hamPopupMenuContainer : {
     //           marginTop : dimensions.heightLevel1, 
     // },
});

export default AdminDashboardScreen
