import React , {useState , useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { View , Text, KeyboardAvoidingView , ScrollView , StyleSheet , Image , TouchableHighlight ,TouchableOpacity} from 'react-native';
import { dimensions , colors , fontFamilies , fontSizes , imageSizes , basicStyles ,_getShadows} from '../configurations/constants';
import EmptyView from '../components/EmptyView';
import TextField from '../components/TextField';
import ListButton from '../components/ListButton';
import SearchField from '../components/SearchField';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { KEYBOARD_TYPES } from '../configurations/appData'
import Layout from '../components/Layout';
import { checkValidEmail , checkValidPassword} from "../utils/feildValidations";
import ImagePickerv3 from '../components/ImagePickerv3';

import HamburgerOption from '../components/HamburgerOption'
import {
     updateMainChapterAction ,
     deleteMainChapterAction ,
     addMainChapterAction ,
     setOneMainChapterAction,
     hideUpdateMainChapter
     } from '../redux/actions/manageAppActions';


// create list item
const ListItem = ({username ,integerId} ) => {
     const id = integerId
     // import this
     // import Icon from 'react-native-vector-icons/FontAwesome5';
     const dispatch = useDispatch();

     const deleteIcon = <Icon name="trash-alt" size={20} color="#900" />;

     const container ={marginBottom : 6,flexDirection : 'row'  , borderColor : 'rgba(0,0,0,0.1)' , borderWidth : 1,
                         alignItems : 'center' , paddingHorizontal : dimensions.paddingLevel1 * 0.9 , borderRadius : 15,
                         paddingVertical :  dimensions.paddingLevel1 * 0.5};
     const userDetails = {fontFamily  : fontFamilies.candaraBold, marginLeft : 5 };
     const textContainer = {width : '57%' , paddingRight : 14 };
     const buttonContainer = {flexDirection : 'row'  , width : '45%' , justifyContent : "flex-end" ,  paddingRight : 4 };
     const button = { borderRadius: 30, paddingVertical: dimensions.paddingLevel1 * 0.7, paddingHorizontal: 2, justifyContent:'center',
                      alignItems: 'center',backgroundColor: 'white',borderWidth: 1, borderColor : 'rgba(0,0,0,0.1)', margin : 2, flexDirection : 'row' };
     const buttonText = { fontFamily: fontFamilies.candaraBold,color: 'rgba(0,0,0,0.7)', fontSize : fontSizes.fontSmallPlus,paddingLeft: dimensions.paddingLevel1,
                          paddingRight: dimensions.paddingLevel2 } ;


     return (
            <View key={integerId} style={[container,{ backgroundColor :  'rgba(0,0,0,0.1)'}]}>
               <View style={textContainer}>
                    <Text style={userDetails}>{username}</Text>
               </View>
               <View style={buttonContainer}>
                    <ListButton 
                         name="update" 
                         customButton={button} 
                         customButtonText={buttonText} 
                         showIcon={true} 
                         onPress={() => {
                             return dispatch(setOneMainChapterAction({username ,integerId}))
                          }} 
                         iconName={"updateIcon"} />

                    <ListButton  
                         name="delete" 
                         customButton={button} 
                         customButtonText={buttonText} 
                         showIcon={true}
                         onPress={()=> {
                             return dispatch(deleteMainChapterAction(id))
                          }}
                          />
                        
               </View>
            </View>
     )
}



// create SUB -list item
const SubListItem = ({chaptername ,integerId }) => {
     // import this
     // import Icon from 'react-native-vector-icons/FontAwesome5';

     const container ={marginBottom : 1,flexDirection : 'row'  , borderColor : 'rgba(0,0,0,0.1)' , borderWidth : 1,
                         alignItems : 'center' , paddingHorizontal : dimensions.paddingLevel1 * 0.9 , borderRadius : 10,
                         paddingVertical :  dimensions.paddingLevel1 * 0.5}
     const chapterDetails = {fontFamily  : fontFamilies.candaraRegular, marginLeft : 15 }
     const textContainer = {width : '57%' , paddingRight : 14 }
     const buttonContainer = {flexDirection : 'row'  , width : '45%' , justifyContent : "flex-end" ,  paddingRight : 4 }
     const button = { borderRadius: 30, paddingVertical: dimensions.paddingLevel1 * 0.7, paddingHorizontal: 2, justifyContent:'center',
                      alignItems: 'center',backgroundColor: 'white',borderWidth: 1, borderColor : 'rgba(0,0,0,0.1)', margin : 2, flexDirection : 'row' }
     const buttonText = { fontFamily: fontFamilies.candaraBold,color: 'rgba(0,0,0,0.7)', fontSize : fontSizes.fontSmallPlus,paddingLeft: dimensions.paddingLevel1,
                          paddingRight: dimensions.paddingLevel2 } 

     
                          // create Sub-list-item
     return (
          <View key={integerId} style={[container,{ backgroundColor :  colors.white}]}>
               <View style={textContainer}>
                    <Text style={chapterDetails}>{chaptername}</Text>
               </View>
               <View style={buttonContainer}>
                    <ListButton name="  edit  " customButton={button} customButtonText={buttonText} showIcon={true}  iconName={"updateIcon"} />
                    <ListButton  name="remove" customButton={button} customButtonText={buttonText} showIcon={true} />
               </View>
          </View>
     )
}



// MAIN
const AdminManageAppScreen = () => {

     const dispatch = useDispatch();
     const [email,setEmail] = useState(null);
     const [firstName,setFirstName] = useState(null);
     const [lastName,setLastName] = useState(null);
     const [phone,setPhone] = useState(null);
     const [password, setPassword] = useState(null);

     const [isAddCategory, setIsAddCategory] = useState(false);
     const [IsUpdateCategory, setIsUpdateCategory] = useState(false);
     const [isSubAddCategory, setIsSubAddCategory] = useState(false);
     const [mainChapterName ,setMainChapterName] = useState('');
     
     const chapterArray = useSelector(state => state.manageAppState.chapterArray);
     const selectedChapterArrayObject = useSelector(state => state.manageAppState.selectedChapterArrayObject);
     const showMainChapterListUpdate = useSelector(state => state.manageAppState.showMainChapterListUpdate);
     const uploadedImage = useSelector(state => state.imageUploadState.ImageDetails);
     
     // delete later
     const [isSubAddCategory2, setIsSubAddCategory2] = useState(true);



    console.log(Array.isArray(chapterArray) , "cheack chapterArray is an Array >>>" , chapterArray.length)

     const guidingModeSubChapterArray = [
                         { name  : "Awakening"} ,
                         { name  :"Listning" } ,
                         { name  :"Time" } ,
                         { name  :"Feelings" } ,
                         { name :"MindFulness" } ,
                        ] ;    
     const instuitionModeSubChapterArray = [
                         { name  : "Awakening2"} ,
                         { name  :"Listning2" } ,
                         { name  :"Time2" } ,
                         { name  :"Feelings2" } ,
                         { name :"MindFulness2" } ,
                        ];                                         

     return (
          <Layout>
          <ScrollView showsVerticalScrollIndicator={false}  scrollEnabled={false} >
               <View style={styles.container}>
                    <EmptyView style={{marginTop: dimensions.heightLevel3}} />


                         <HamburgerOption/>


                    <EmptyView style={{marginTop: dimensions.heightLevel1}} />
                    <Text style={styles.title}>Manage App</Text>

                    <EmptyView style={{marginTop : dimensions.heightLevel1 * 0.7}} />
                    <Text style={styles.sub_text}>View Chapters</Text>
                    <EmptyView style={{marginTop : dimensions.heightLevel1}} />

                    {/* search bar */}
                    <View style={styles.searchbarContainer}>
                         <SearchField />
                    </View>
                         
                    <EmptyView style={{marginTop : dimensions.heightLevel2 * 1.2}} />
               {/* this is list items container */}
               




               <View style={{height : dimensions.fullHeight * 0.6 , alignSelf : 'center'}}>
                    <ScrollView showsVerticalScrollIndicator={false}>



                    {
                              chapterArray.map((item, i ) => {
                                   const mainElement = <ListItem username={item.name} key={i} integerId={i} />;

                                        {/* if condition is true then add SubListItem after the main ListItem */}
                                        if (item.name === "Guiding Mode") {
                                                  return (
                                                       <View key={i}>
                                                            {/* mainListItem */}
                                                            <ListItem username={item.name} key={i} integerId={i} />
                                                                 {/* >> add all subListItem */}
                                                            {
                                                                 guidingModeSubChapterArray.map((subItem, index) => {
                                                                 return <SubListItem chaptername={subItem.name} key={index} integerId={index} />;
                                                            })}

                                                            <View style={styles.buttonWrapper}>
                                                                 <ListButton
                                                                      name='  +  New  '
                                                                      onPress={() => setIsAddUser(true)}
                                                                      customButton={styles.addSubChapterButton}
                                                                      customButtonText={styles.addSubChapterButtonText} />
                                                            </View>
                                                            <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />
                                                       </View>
                                                  );
                                        } else if (item.name === "Intuition Mode") {
                                                  return (
                                                       <View key={i}>
                                                            {/* mainListItem */}
                                                            <ListItem username={item.name} key={i} integerId={i} />
                                                              {/* add all sub list items */}
                                                            {
                                                                 instuitionModeSubChapterArray.map((subItem, index) => {
                                                                 return <SubListItem chaptername={subItem.name} key={index} integerId={index} />;
                                                            })}
                                                            <View style={styles.buttonWrapper}>
                                                                 <ListButton
                                                                      name='  +  New  '
                                                                      onPress={() => setIsAddUser(true)}
                                                                      customButton={styles.addSubChapterButton}
                                                                      customButtonText={styles.addSubChapterButtonText} />
                                                            </View>
                                                            <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />
                                                       </View>
                                                  );
                                        } else {
                                             return mainElement;
                                        }
                              })
                         }
                     
                    <EmptyView style={{marginTop : dimensions.heightLevel2}} />
                    </ScrollView>
                    <View style={styles.buttonWrapper}>
                              <ListButton
                                   name='+ Add Category'
                                   onPress={()=>  setIsAddCategory(true) }
                                   customButton={styles.addChapterButton}
                                   customButtonText={styles.addChapterButtonText}
                              />
                    </View>
                    <EmptyView style={{marginBottom : dimensions.heightLevel1 }} />
               </View>
          </View>
          </ScrollView>



 {/*/////////////////////// MAIN ADD CATEGORY  <<<<< exta dark-screen like modal //////// */}
          
                {
                      isAddCategory ?
                         <View style={styles.modalContainer}>
                         <EmptyView style={{marginBottom : dimensions.heightLevel8 }} />
                         <KeyboardAvoidingView>
                         <View style={styles.inputContainer}>     
                                   
                                   {/* textfield chapter-Name */}
                                   <View style={styles.inputGroup}>
                                        <Text style={styles.placeholderText}>Chapter Name</Text>
                                        <TextField
                                             width={dimensions.widthLevel7}
                                             onChangeText={(text)=>setMainChapterName(text)}
                                             placeholder='Name'
                                             textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}
                                             
                                        />
                                   </View> 

                                   {/* chapterlogo upload */}
                                   <View style={styles.inputGroup}>
                                        <EmptyView style={{marginBottom : dimensions.heightLevel1 }} />
                                        <Text style={styles.placeholderText}>Chapter Logo</Text>
                                        
                                        <View style={{alignSelf : 'flex-start'}}>
                                             <ImagePickerv3 />
                                        </View>
                                   </View>   


                                    {/* submit BUTTON         */}
                                   <EmptyView style={{ marginTop: dimensions.heightLevel10}} />  
                                   <EmptyView style={{ marginTop: dimensions.heightLevel3}} />  
                                   <View style={[styles.buttonWrapper , {flexDirection : 'row', justifyContent : 'space-between'}]}>
                                        <ListButton 
                                        name="        Cancel       " 
                                        customButton={styles.cancelButton}
                                        customButtonText={styles.cancelButtonText}
                                        onPress={()=> {
                                             setTimeout(()=> {
                                               setIsAddCategory(false)
                                             }, 1000);
                                             
                                              }}
                                        />

                                        <ListButton 
                                        name="Add Category" 
                                        onPress={()=> {
                                             const data ={ index : chapterArray.length, name  : mainChapterName, image : uploadedImage }
                                            if(data.name !== null) {
                                             dispatch(addMainChapterAction(data))
                                            }
                                             setTimeout(()=> {
                                               setIsAddCategory(false)
                                             }, 1000);
                                             
                                              }}
                                        />


                                   </View>
                                   <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />   
                                   
                         </View>
                         </KeyboardAvoidingView>
                         </View> : null
                }







 {/*/////////////////////// MAIN UPDATE CATEGORY  <<<<< exta dark-screen like modal //////// */}
          
               
               {
                    showMainChapterListUpdate ? 
                    <View style={styles.modalContainer}>
                    <EmptyView style={{marginBottom : dimensions.heightLevel8 }} />
                    <KeyboardAvoidingView>
                    <View style={styles.inputContainer}>     
                              
                              {/* textfield chapter-Name */}
                              <View style={styles.inputGroup}>
                                   <Text style={styles.placeholderText}>Chapter Name</Text>
                                   <TextField
                                        width={dimensions.widthLevel7}
                                        onChangeText={(text)=>setMainChapterName(text)}
                                        placeholder='Name'
                                        value={selectedChapterArrayObject.username}
                                        textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}
                                        
                                   />
                              </View> 

                              {/* chapterlogo upload */}
                              <View style={styles.inputGroup}>
                                   <EmptyView style={{marginBottom : dimensions.heightLevel1 }} />
                                   <Text style={styles.placeholderText}>Chapter Logo</Text>
                                   
                                   <View style={{alignSelf : 'flex-start'}}>
                                        <ImagePickerv3 />
                                   </View>
                              </View>   


                              {/* submit BUTTON         */}
                              <EmptyView style={{ marginTop: dimensions.heightLevel10}} />  
                              <EmptyView style={{ marginTop: dimensions.heightLevel3}} />  
                              <View style={[styles.buttonWrapper , {flexDirection : 'row', justifyContent : 'space-between'}]}>
                                   <ListButton 
                                   name="        Cancel       " 
                                   customButton={styles.cancelButton}
                                   customButtonText={styles.cancelButtonText}
                                   onPress={()=> {
                                        dispatch(hideUpdateMainChapter())  
                                        }}
                                   />

                                   <ListButton 
                                   name="     Update     " 
                                   onPress={()=> {
                                        const data ={ index : chapterArray.length, name  : mainChapterName, image : uploadedImage }
                                        
                                        if(data.name !== null ) {
                                             dispatch(updateMainChapterAction(data))
                                        }
                                        setTimeout(()=> {
                                             dispatch(hideUpdateMainChapter())  
                                        }, 1000);
                                        
                                        }}
                                   />
                              </View>
                              <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />   
                              
                    </View>
                    </KeyboardAvoidingView>
                     </View> : null
               }
               
               
                







 {/*//////////// SUB ADD CATEGORY  <<<<< exta dark-screen like modal //////// */}
          
               {
                    isSubAddCategory ?
                    <View style={styles.modalContainer}>
                    <EmptyView style={{marginBottom : dimensions.heightLevel8 }} />
                    <KeyboardAvoidingView>
                    <View style={styles.inputContainer}>     
                              
                              {/* textfield chapter-Name */}
                              <View style={styles.inputGroup}>
                                   <Text style={styles.placeholderText}>Chapter Name</Text>
                                   <TextField
                                        width={dimensions.widthLevel7}
                                        onChangeText={(text)=>setFirstName(text)}
                                        placeholder='Name'
                                        textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}     
                                   />
                              </View> 

                              {/* chapterlogo upload */}
                              <View style={styles.inputGroup}>
                                   <EmptyView style={{marginBottom : dimensions.heightLevel1 }} />
                                   <Text style={styles.placeholderText}>Chapter Logo</Text>
                                   
                                   <View style={{alignSelf : 'flex-start'}}>
                                        <ImagePickerv3 />
                                   </View>
                              </View>   



                              {/* submit BUTTON         */}
                              <EmptyView style={{ marginTop: dimensions.heightLevel10}} />  
                              <View style={styles.buttonWrapper}>
                                   <ListButton 
                                   name="Update" 
                                   onPress={()=> setIsAddCategory(false) }
                                   />
                              </View>
                              <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />   
                              
                    </View>
                    </KeyboardAvoidingView>
                    </View> : null
               }


               

 {/*//////////// XXXXXXXXXXXXX  Long //////// */}
          
 {
                    isSubAddCategory2 ?
                    <View style={styles.modalContainer}>
                    <EmptyView style={{marginBottom : dimensions.heightLevel3 }} />
                    <KeyboardAvoidingView>
                    <View style={styles.inputContainer2}>     
                       <ScrollView>     
                              {/* textfield chapter-Name */}
                              <View style={styles.inputGroup}>
                                   <Text style={styles.placeholderText}>Chapter Name</Text>
                                   <TextField
                                        width={dimensions.widthLevel7}
                                        onChangeText={(text)=>setFirstName(text)}
                                        placeholder='Name'
                                        textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}     
                                   />
                              </View> 

                              {/* chapterlogo upload */}
                              <View style={styles.inputGroup}>
                                   <EmptyView style={{marginBottom : dimensions.heightLevel1 }} />
                                   <Text style={styles.placeholderText}>Chapter Logo</Text>
                                   
                                   <View style={{alignSelf : 'flex-start'}}>
                                        <ImagePickerv3 />
                                   </View>
                              </View>   


                                {/* textfield Video Title */}
                                <View style={styles.inputGroup}>
                                <EmptyView style={{marginBottom : dimensions.heightLevel1 }} />
                                   <Text style={styles.placeholderText}>Video Title</Text>
                                   <TextField
                                        width={dimensions.widthLevel7}
                                        onChangeText={(text)=>setFirstName(text)}
                                        placeholder='Title'
                                        textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}     
                                   />
                              </View> 

                              {/* textfield Video description */}
                              <View style={styles.inputGroup}>
                                <EmptyView style={{marginBottom : dimensions.heightLevel1 }} />
                                   <Text style={styles.placeholderText}>Video Description</Text>
                                   <TextField
                                        width={dimensions.widthLevel7}
                                        onChangeText={(text)=>setFirstName(text)}
                                        placeholder='Description'
                                        isMultiline={true}
                                        textFieldStyles={styles.textFieldStyles}     
                                   />
                              </View> 



                              {/* submit BUTTON         */} 
                              <View style={[styles.inputGroup , ]}>
                              <EmptyView style={{ marginTop: dimensions.heightLevel4}} /> 
                                   <ListButton 
                                   name="     Update     " 
                                   onPress={()=> {
                                        const data ={ index : chapterArray.length, name  : mainChapterName, image : uploadedImage }
                                        
                                        if(data.name !== null ) {
                                             dispatch(updateMainChapterAction(data))
                                        }
                                        setTimeout(()=> {
                                             dispatch(hideUpdateMainChapter())  
                                        }, 1000);
                                        
                                        }}
                                   />



                                   <ListButton 
                                   name="        Cancel       " 
                                   customButton={styles.cancelButton}
                                   customButtonText={styles.cancelButtonText}
                                   onPress={()=> {
                                        dispatch(hideUpdateMainChapter())  
                                        }}
                                   />
                              <EmptyView style={{ marginBottom: dimensions.heightLevel5}} />    
                              </View>



                                
 
                              <View style={styles.inputGroup}>
                                {/* <EmptyView style={{marginBottom : dimensions.heightLevel1 }} /> */}
                                   <Text style={styles.placeholderText}>Uploaded Videos</Text>
                              </View> 




                      {/* List -Need to convert to reuse component */}
                              <View style={styles.middleContainer}> 
                                <EmptyView style={{ marginTop: dimensions.heightLevel2 * 0.7 }} />
                              {/* List 01 */}
                                   <View style={styles.list} >
                                        <View>
                                             <Image style={styles.list__image} source={require('../assets/images/splash-screen.png')} />
                                             <Text style={styles.vid_Duration}>03.43</Text>
                                        </View>

                                        <View  style={styles.list__textContainer}>
                                             <Text style={styles.list__title}>Both Android and iOS allow you to display formatted</Text>                          
                                        
                                             <Text style={styles.list__subTitle}> Both Android and iOS allow you to display formatted text by annotating  display formatted text by annotating display formatted text by annotating</Text>
                                               <View style={styles.list__deleteButton}>
                                                       <ListButton  name="delete" /> 
                                               </View>                            
                                        </View>
                                  </View>


                                 {/* List 02 */}
                                   <View style={styles.list}>
                                        <View>
                                             <Image style={styles.list__image} source={require('../assets/images/splash-screen.png')} />
                                             <Text style={styles.vid_Duration}>01.03.33</Text>
                                        </View>

                                        <View  style={styles.list__textContainer}>
                                             <Text style={styles.list__title}>Both Android and iOS allow you to display formatted</Text>                          
                                        
                                             <Text style={styles.list__subTitle}> Both Android and iOS allow you to display formatted text by annotating  display formatted text by annotating display formatted text by annotating</Text>
                                               <View style={styles.list__deleteButton}>
                                                       <ListButton  name="delete" /> 
                                               </View>              
                                        </View>
                                   </View>



                                   {/* List 03 */}
                                   <View style={styles.list} >
                                        <View>
                                             <Image style={styles.list__image} source={require('../assets/images/splash-screen.png')} />
                                             <Text style={styles.vid_Duration}>03.00.00</Text>
                                        </View>

                                        <View  style={styles.list__textContainer}>
                                             <Text style={styles.list__title}>Both Android and iOS allow you to display formatted</Text>                          
                                        
                                             <Text style={styles.list__subTitle}> Both Android and iOS allow you to display formatted text by annotating  display formatted text by annotating display formatted text by annotating</Text>
                                                <View style={styles.list__deleteButton}w>
                                                        <ListButton  name="delete" />
                                                </View> 
                                        </View>
                                   </View>


                    

                              <EmptyView style={{ marginTop: dimensions.heightLevel2  }} />
                              </View>





                          </ScrollView>       
                    </View>
                    </KeyboardAvoidingView>
                    </View> : null
               }








          </Layout>
     )
}
const styles = StyleSheet.create({
     container : { width : dimensions.widthLevel2,alignSelf : 'center',paddingVertical : 5},
     title : {fontSize : fontSizes.fontBigger,fontFamily : fontFamilies.montserratBold, },
     sub_text : {fontFamily : fontFamilies.montserratSemiBold,fontSize : fontSizes.fontLarge, marginRight : 10 , color : 'rgba(0,0,0,0.5)' },
     searchbarContainer : {width : dimensions.widthLevel8 , alignSelf : 'flex-end' , alignItems : 'flex-end'},
     buttonWrapper : { justifyContent : 'center' , alignItems : 'flex-end'},
     addChapterButton: {
          borderRadius: 30,
          paddingHorizontal: dimensions.paddingLevel3,
          paddingVertical: dimensions.paddingLevel1 *1.1,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          borderColor : 'rgba(0,0,0,0.1)',
          marginTop : dimensions.heightLevel2,
          
     },
     addChapterButtonText: {
          fontFamily: fontFamilies.candaraBold,
          color: colors.white,
          fontSize : fontSizes.fontLarge,
          paddingLeft: dimensions.paddingLevel3,
          paddingRight: dimensions.paddingLevel3
     },
     addSubChapterButton: {
          borderRadius: 10,
          paddingHorizontal: dimensions.paddingLevel3,
          paddingVertical: dimensions.paddingLevel1 *1.1,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderWidth: 1,
          borderColor : 'rgba(0,0,0,0.1)',
          marginTop : dimensions.heightLevel2,
     },
     addSubChapterButtonText: {
          fontFamily: fontFamilies.candaraBold,
          color: colors.white,
          fontSize : fontSizes.fontMedium,
          paddingHorizontal: dimensions.paddingLevel1,
     },

     modalContainer : { position : 'absolute' , margin : 0 , top : 0, bottom : 0, left : 0, right : 0, backgroundColor : 'rgba(0,0,0,9)' },
     inputContainer: { width: dimensions.widthLevel4, alignSelf : 'center'  , }  ,
     inputContainer2: { width: dimensions.widthLevel3, alignSelf : 'center'  , height : dimensions.heightLevel10 * 4.4  }  ,
     placeholderText: { fontFamily: fontFamilies.candaraBold, fontSize: fontSizes.fontMediumPlus, paddingLeft: dimensions.paddingLevel1, marginBottom: 3, color : 'rgba(0,0,0,0.5)' , color : colors.white },
     inputGroup: { marginBottom: 7 },

     cancelButton : {
          borderRadius: 30,
          padding: dimensions.paddingLevel2/2,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: '#ff4d4d',
          borderWidth: 1,
          borderColor : 'rgba(0,0,0,0.1)',
          margin : 5,
          flexDirection : 'row'
     },
     cancelButtonText : {
          fontFamily: fontFamilies.candaraBold,
          color: 'white',
          fontSize : fontSizes.fontLarge,
          paddingLeft: dimensions.paddingLevel3,
          paddingRight: dimensions.paddingLevel3
     },
     textFieldStyles : {height : dimensions.fullHeight * 0.2 , alignItems : 'flex-start' , paddingRight : 5, paddingLeft : 2 , paddingVertical : 5 ,elevation : 4}  ,
     
     


     middleContainer: {
          width: "100%",
     },
     list: {
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical : 10,
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 15,
          marginHorizontal: 20,
          marginVertical : 5
          
     },
     list__image: {
          width : dimensions.widthLevel11 * 0.9 ,
          height:  dimensions.heightLevel9, 
          borderRadius: 20,
          resizeMode: 'cover',
          marginRight : 5,
     },
     vid_Duration: {
          position: 'absolute',
          right: 15,
          top: dimensions.heightLevel7 * 1.05,
          backgroundColor: 'rgba(0,0,0,0.3)',
          borderRadius: 5,
          color: colors.white,
          paddingHorizontal: 5,
          paddingVertical: 2,
          fontFamily : fontFamilies.montserratSemiBold
     },
     list__textContainer: {
          width: '45%',
         
     },
     list__title: {
          paddingTop : 5,
          paddingLeft : 5,
          paddingRight : 6,
          fontFamily: fontFamilies.montserratBold,
          fontSize: fontSizes.fontMedium, 
          marginBottom : 5,
          color : colors.white
     },
     list__subTitle: {
          paddingHorizontal : 5,
          fontFamily: fontFamilies.montserratSemiBold,
          fontSize: fontSizes.fontSmall, 
          color : colors.white
     },
     list__deleteButton : {width : '100%' , alignItems : 'flex-start' , marginTop : 7}
     
});

export default AdminManageAppScreen
