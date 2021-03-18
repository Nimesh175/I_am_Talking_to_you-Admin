import React , {useState , useEffect} from 'react';
import { View , Text, KeyboardAvoidingView , ScrollView , StyleSheet , Image , TouchableHighlight ,TouchableOpacity , TouchableWithoutFeedback} from 'react-native';
import { dimensions , colors , fontFamilies , fontSizes , imageSizes , basicStyles ,_getShadows} from '../configurations/constants';
import EmptyView from '../components/EmptyView';
import TextField from '../components/TextField';
import ListButton from '../components/ListButton';
import Card from '../components/Card';
import HamburgerOption from '../components/HamburgerOption';
import { Rating, AirbnbRating } from 'react-native-ratings';
import SearchField from '../components/SearchField';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';

const upIcon = <Icon name="chevron-up" size={12} color="#900" />;
const downIcon = <Icon name="chevron-down" size={12} color="#900" />;


const TableDetailsRow = () => {
     return (
          <View style={{ flexDirection : "column"}}>
               <View  style={styles.tRow}>
                    <View style={styles.tbody_cell_1}> 
                    <Text style={styles.tDetails}>December</Text>
                    </View>

                    <View style={styles.tbody_cell_2}> 
                         <Text  style={styles.tDetails}>Monthly</Text>
                    </View>

                    <View style={styles.tbody_cell_3}> 
                         <Text  style={styles.tDetails}>244</Text>
                    </View>

                    <View style={styles.tbody_cell_4}> 
                         <Text  style={styles.tDetails}>react-native-dropdown-picker</Text>
                    </View>

                    <View style={styles.tbody_cell_5}> 
                         <Text  style={styles.tDetails}>react-native-vector-icons/FontAwesome5</Text>
                    </View>
          </View>
         </View>
     )
}



const AdminPaymentRecordsScreen = () => {

     const [isMonthly,setIsMonthly] = useState(true)


     return (
          <KeyboardAvoidingView>
               <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
                 <View style={styles.container}>

                    <EmptyView style={{marginTop: dimensions.heightLevel3}} />
                  
                   
                         <HamburgerOption/>
                   

                    {/* <EmptyView style={{marginTop: dimensions.heightLevel1}} /> */}
                    <Text style={styles.title}>Manage Payments</Text>


                    {/* DropDown */}
                    <EmptyView style={{marginTop : dimensions.heightLevel2}} />
                   <View style={{width : dimensions.widthLevel7}}>
                   <DropDownPicker
                         items={[
                              {label: 'Monthly Records', value: '1'},
                              {label: 'Yearly Records', value: '22'},
                         ]}
                         defaultIndex={0}
                         containerStyle={{height: 40 }}
                         defaultIndex={0}
                         dropDownStyle={{backgroundColor: '#fafafa'}}
                         labelStyle={{fontFamily : fontFamilies.candaraRegular , fontSize : fontSizes.fontMediumPlus , color : 'rgba(0,0,0,0.6)'}}
                         activeLabelStyle={{color: 'red'}}
                         onChangeItem={item =>{ 
                             
                                    console.log(item.label, item.value)

                                   if(item.value === "1") {
                                        setIsMonthly(true)
                                   }else {
                                        setIsMonthly(false)
                                   }
                                   
                              }} 
                    />
                   </View>




                    <View style={styles.middleContainer}>
                    <EmptyView style={{marginTop : dimensions.heightLevel2}} />
                        <View>
                            {
                              isMonthly ?
                               <Text style={styles.subText}>Monthly Records</Text> 
                               : <Text style={styles.subText}>Yearly Records</Text>
                            }
                        </View>
                    <EmptyView style={{marginTop : dimensions.heightLevel1 * 1.5}} />


                    {/* TABLE */}
                    {/* container 01 for scrollView 01 */}
                    <View style={{ height : dimensions.heightLevel10 * 2.9, width : dimensions.widthLevel2 , backgroundColor : 'white' ,borderRadius : 10}}>
                    <ScrollView horizontal>
                                    
                              {/* table header */}
                              <View style={{ flexDirection : "column" , paddingHorizontal : 5}}>
                                   <View style={styles.theader}>
                                        <TouchableOpacity style={styles.theader_cell_1}> 
                                             <Text style={styles.tHeaderDetails}>Months</Text>
                                             <View style={{marginLeft : 10 ,justifyContent : "center"}}>{downIcon}</View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.theader_cell_2}> 
                                             <Text style={styles.tHeaderDetails}>Package Name</Text>
                                             <View style={{marginLeft : 10 ,justifyContent : "center"}}>{downIcon}</View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.theader_cell_3}> 
                                             <Text style={styles.tHeaderDetails}>Package User Counts</Text>
                                             <View style={{marginLeft : 10 ,justifyContent : "center"}}>{downIcon}</View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.theader_cell_4}> 
                                             <Text style={styles.tHeaderDetails}>Loerm</Text>
                                             <View style={{marginLeft : 10 ,justifyContent : "center"}}>{downIcon}</View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.theader_cell_5}> 
                                             <Text style={styles.tHeaderDetails}>Lorem</Text>
                                             <View style={{marginLeft : 10 ,justifyContent : "center"}}>{downIcon}</View>
                                        </TouchableOpacity>

                                        

                                   </View>
                                   <EmptyView style={{marginTop : dimensions.heightLevel1 * 0.1}} />


                                   {/* table body */}         
                                   <ScrollView>
                                   
                                       
                                      {/* table Rows  */}
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                       <TableDetailsRow />
                                   </ScrollView>     
                              </View>

                    </ScrollView>
                         <EmptyView style={{marginTop : dimensions.heightLevel1 * 0.4}} />
                    </View>
                     {/* TABLE [END]*/}



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
     subText : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontMediumPlus},
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


     //  TABLE
      theader : {flexDirection : 'row' , paddingHorizontal : 10 ,  backgroundColor : "rgba(0,0,0,0.2)" ,borderRadius : 5, alignItems : "center" , paddingVertical : 10 ,marginTop : dimensions.heightLevel1 * 0.3 },
      tRow : {flexDirection : 'row' , paddingHorizontal : 10 ,  backgroundColor : "rgba(0,0,0,0.1)" ,borderRadius : 5 , alignItems : "center" , paddingVertical : 5 ,marginTop : dimensions.heightLevel1 * 0.3 },
      theader_cell_1 : {flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 * 0.8 , marginHorizontal : 1 , },
      theader_cell_2 : {flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 * 0.8 , marginHorizontal : 1  ,  },
      theader_cell_3 : {flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11  , marginHorizontal : 1  ,  },
      theader_cell_4 : { flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 * 0.9 , marginHorizontal : 1 ,  },
      theader_cell_5 : { flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 * 0.9 , marginHorizontal : 1 ,  },

      tbody_cell_1 : {flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 * 0.8 , marginHorizontal : 1 ,  },
      tbody_cell_2 : {flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 * 0.8  , marginHorizontal : 1 , },
      tbody_cell_3 : {flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 , marginHorizontal : 1  , },
      tbody_cell_4 : { flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 * 0.9 ,  marginHorizontal : 1   , },
      tbody_cell_5 : { flexDirection : 'row' , justifyContent : 'center' , width : dimensions.widthLevel11 * 0.9 ,  marginHorizontal : 1   , },

      tHeaderDetails : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontMedium},
      tDetails : {fontFamily : fontFamilies.montserratSemiBold , fontSize : fontSizes.fontMedium},
      //  TABLE


     })
export default AdminPaymentRecordsScreen
