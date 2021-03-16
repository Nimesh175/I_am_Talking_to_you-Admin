import React , {useState} from 'react';
import { View,TouchableOpacity, Image ,StyleSheet  ,Text} from 'react-native'
import { MenuProvider } from 'react-native-popup-menu';
import { colors, dimensions, fontFamilies, fontSizes} from '../configurations/constants'



import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
const angleDown = <Icon name="angle-down" size={20} color="#900" />;
const angleUp = <Icon name="angle-up" size={20} color="#900" />;




const HamPopupMenu = () => {
     const [isSelected , setIsSelected] = useState(false)

     return (
          <View>
               {/* list 01 */}
               <TouchableOpacity onPress={()=> Actions.dashboardScreen()}>
                    <View style={styles.list}>
                         <Text style={styles.list__text}>Dashboard</Text>
                    </View>
               </TouchableOpacity>

               {/* list 02 */}
               <TouchableOpacity onPress={()=> Actions.manageUserScreen()}>
                    <View style={styles.list}>
                         <Text style={styles.list__text}>Manage Users</Text>
                    </View>
               </TouchableOpacity>

               {/* list 02 */}
               <TouchableOpacity onPress={()=> Actions.manageAppScreen()}>
                    <View style={styles.list}>
                         <Text style={styles.list__text}>Manage App</Text>
                    </View>
               </TouchableOpacity>

                {/* list 04 */}
                <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                    <View style={styles.list}>
                         <Text style={styles.list__text}>Manage Payment</Text>
                         <View>
                              { isSelected ? angleUp :angleDown}
                         </View>
                    </View>
               </TouchableOpacity>


{/*  4 >>>>>>>>>>>>> SUB DETAILS */}
              { 
                    isSelected ?
                         <View style={{marginBottom : 5}}>
                              {/* list 04 >> sub 01 */}
                              <TouchableOpacity>
                                   <View style={styles.list2}>
                                        <Text style={styles.list__text2}>View Payment Details</Text>
                                   </View>
                              </TouchableOpacity>

                              {/*  list 04 >> sub 02  */}
                              <TouchableOpacity>
                                   <View style={styles.list2}>
                                        <Text style={styles.list__text2}>Payment Records</Text>
                                   </View>
                              </TouchableOpacity>

                              {/*  list 04 >> sub 03  */}
                              <TouchableOpacity>
                                   <View style={styles.list2}>
                                        <Text style={styles.list__text2}>Manage Subcription Plan</Text>
                                   </View>
                              </TouchableOpacity>
                         </View>
                    : null
              }
{/*  4 >>>>>>>>>>>  SUB DETAILS */}



               {/* list 05 */}
               <TouchableOpacity>
                    <View style={styles.list}>
                         <Text style={styles.list__text}>View Ratings & Reviews</Text>
                    </View>
               </TouchableOpacity>

               {/* list 06 */}
               <TouchableOpacity>
                    <View style={styles.list}>
                         <Text style={styles.list__text}>Manage Push Notifications</Text>
                    </View>
               </TouchableOpacity>

                {/* list 07 */}
                <TouchableOpacity>
                    <View style={styles.list}>
                         <Text style={styles.list__text}>Manage Static Pages</Text>
                    </View>
               </TouchableOpacity>

          </View>       
         
     )    
}     







 const HamburgerOption = () => {
     
     const hambergerIcon = require('../assets/images/hamberger-icon.png');
     const hambergerContainer = {width : 45 , height : 45 ,justifyContent : 'center' , alignItems : 'center'  };
     const hambergerIconStyle = { width : 30, height : 30, padding : 5};


     const [isHamPopupMenuShow , setIsHamPopupMenuShow]=useState(false)
     return (
         <View>
               <TouchableOpacity style={hambergerContainer} onPress={() => setIsHamPopupMenuShow(!isHamPopupMenuShow) }>
                    <Image source={hambergerIcon} style={hambergerIconStyle} />  
               </TouchableOpacity>
   
             {/* for HamPopupMenu components */}
             <View style={styles.hamPopupMenuContainer}>
                    <MenuProvider>
                         {  isHamPopupMenuShow ? 
                              <HamPopupMenu /> 
                              : null
                         }
                    </MenuProvider>  
                    </View>
          </View>                
     )
}

const styles = StyleSheet.create({
     hamPopupMenuContainer : {
          marginTop : dimensions.heightLevel1, 
     },



     list : {backgroundColor : colors.white,paddingLeft : dimensions.paddingLevel6, paddingRight : dimensions.paddingLevel3,
               borderRadius : 5 ,paddingVertical : dimensions.heightLevel1 * 0.7, marginBottom : 5 ,flexDirection : 'row', justifyContent : 'space-between' },
     list__text : { fontFamily : fontFamilies.candaraRegular , fontSize : fontSizes.fontMediumPlus},

     list2 : {backgroundColor : 'rgba(0,0,0,0.1)',paddingLeft : dimensions.paddingLevel6, paddingRight : dimensions.paddingLevel3,
          borderRadius : 5 ,paddingVertical : dimensions.heightLevel1 * 0.7, marginBottom : 3 ,flexDirection : 'row', justifyContent : 'space-between' },
     list__text2 : { fontFamily : fontFamilies.candaraRegular , fontSize : fontSizes.fontMediumPlus * 0.9 ,textAlign : 'right', width : '100%'}

});

export default HamburgerOption