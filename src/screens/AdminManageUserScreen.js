import React , {useState , useEffect} from 'react';
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
import HamburgerOption from '../components/HamburgerOption'

// create list item
const ListItem = ({username ,integerId=0 }) => {
     // import this
     // import Icon from 'react-native-vector-icons/FontAwesome5';

     const deleteIcon = <Icon name="trash-alt" size={20} color="#900" />;

     const container ={marginBottom : 6,flexDirection : 'row'  , borderColor : 'rgba(0,0,0,0.1)' , borderWidth : 1,
                         alignItems : 'center' , paddingHorizontal : dimensions.paddingLevel1 * 0.9 , borderRadius : 15,
                         paddingVertical :  dimensions.paddingLevel1 * 0.5}
     const userDetails = {fontFamily  : fontFamilies.candaraRegular, marginLeft : 5 }
     const textContainer = {width : '57%' , paddingRight : 14 }
     const buttonContainer = {flexDirection : 'row'  , width : '45%' , justifyContent : "flex-end" ,  paddingRight : 4 }
     const button = { borderRadius: 30, paddingVertical: dimensions.paddingLevel1 * 0.7, paddingHorizontal: 2, justifyContent:'center',
                      alignItems: 'center',backgroundColor: 'white',borderWidth: 1, borderColor : 'rgba(0,0,0,0.1)', margin : 2, flexDirection : 'row' }

     const buttonText = { fontFamily: fontFamilies.candaraBold,color: 'rgba(0,0,0,0.7)', fontSize : fontSizes.fontSmallPlus,paddingLeft: dimensions.paddingLevel1,
                          paddingRight: dimensions.paddingLevel2 } 


     

     return (
          <View style={[container,{ backgroundColor : integerId % 2==0 ? colors.white : 'rgba(0,0,0,0.1)'}]}>
               <View style={textContainer}>
                    <Text style={userDetails}>{username}</Text>
               </View>
               <View style={buttonContainer}>
                    <ListButton name="update" customButton={button} customButtonText={buttonText} showIcon={true}  iconName={"updateIcon"} />
                    <ListButton  name="delete" customButton={button} customButtonText={buttonText} showIcon={true} />
               </View>
          </View>
     )
}







const AdminManageUserScreen = () => {

     const [email,setEmail] = useState(null);
     const [firstName,setFirstName] = useState(null);
     const [lastName,setLastName] = useState(null);
     const [phone,setPhone] = useState(null);
     const [password, setPassword] = useState(null);
     const [isAddUser, setIsAddUser] = useState(false);

     const isDisabled = !email || !password || !firstName || !password || !phone || !checkValidEmail(email);

     const userArray = [  { id : 0, name  : "Hasitha"} ,
                          { id : 1, name  :"Kual" } ,
                          { id : 2, name  :"Danushka" } ,
                          { id : 3, name  :"Kavindu" } ,
                          { id : 4, name :"Malith" } ,
                          { id : 5, name  :"Arthur" } ,
                          { id : 6, name  :"Ajith" } ,
                          { id : 7, name  :"kumar" } ,
                          { id : 8, name  :"Dasun" } ,
                          { id : 9, name  :"Upul" } ,
                          { id : 10, name  :"Kasun" } ,
                         ]

     return (
          <Layout>
          <ScrollView scrollEnabled={false} >
               <View style={styles.container}>
                         <EmptyView style={{marginTop: dimensions.heightLevel3}} />


                              <HamburgerOption/>


                         <EmptyView style={{marginTop: dimensions.heightLevel1}} />
                         <Text style={styles.title}>Manage Users</Text>

                         <EmptyView style={{marginTop : dimensions.heightLevel1 * 0.7}} />
                         <Text style={styles.sub_text}>View Users</Text>
                         <EmptyView style={{marginTop : dimensions.heightLevel1}} />

                         {/* search bar */}
                         <View style={styles.searchbarContainer}>
                              <SearchField />
                         </View>
                              
                         <EmptyView style={{marginTop : dimensions.heightLevel2 * 1.2}} />
                    {/* this is list items container */}
                    

                    <View style={{height : dimensions.fullHeight * 0.6 , alignSelf : 'center'}}>
                         <ScrollView showsVerticalScrollIndicator={false}>
                              {/* <ListItem username="Arthur Conan Doyle ffffffffffffffff" integerId={1} />
                              <ListItem username="Arthur Conan Doyle ffffffffffffffff" integerId={2} />
                              <ListItem username="Arthur Conan Doyle" integerId={3} />
                              <ListItem username="Arthur Conan Doyle" integerId={4} />
                              <ListItem username="Arthur Conan Doyle" integerId={5} />
                              <ListItem username="Arthur Conan Doyle Arthur Conan" integerId={6} />
                              <ListItem username="Arthur Conan Doyle Arthur Conan" integerId={7} />
                              <ListItem username="Arthur Conan Doyle Arthur Conan" integerId={8} />
                              <ListItem username="Arthur Conan Doyle" integerId={9} />
                              <ListItem username="Arthur Conan Doyle" integerId={10} /> */}

                              {
                                   userArray.map( item => {
                                       return <ListItem username={item.name} key={userArray.indexOf(item)} integerId={userArray.indexOf(item)} />
                                   })
                              }
                         </ScrollView>
                              <View style={styles.buttonWrapper}>
                                   <ListButton
                                        name='Add User'
                                        onPress={()=> setIsAddUser(true)}
                                        customButton={styles.addUserButton}
                                        customButtonText={styles.addUserButtonText}
                                   />
                              </View>
                              <EmptyView style={{marginBottom : dimensions.heightLevel1 }} />
                    </View>
               </View>
          </ScrollView>



 {/*///////////////////////// add category Form  <<<<< exta dark-screen like modal */}
          
                {
                      isAddUser?
                         <View style={styles.modalContainer}>
                         <EmptyView style={{marginBottom : dimensions.heightLevel8 }} />
                         <KeyboardAvoidingView>
                         <View style={styles.inputContainer}>     
                                   
                                   {/* textfield First-Name */}
                                   <View style={styles.inputGroup}>
                                        <Text style={styles.placeholderText}>First Name</Text>
                                        <TextField
                                             width={dimensions.widthLevel7}
                                             onChangeText={(text)=>setFirstName(text)}
                                             placeholder='First Name'
                                             textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}
                                             
                                        />
                                   </View>     
                                   
                                   {/* textfield Last-Name */}
                                   <View style={styles.inputGroup}>
                                        <Text style={styles.placeholderText}>Last Name</Text>
                                        <TextField
                                             width={dimensions.widthLevel7}
                                             onChangeText={(text)=>setLastName(text)}
                                             placeholder='Last Name'
                                             textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}
                                             
                                        />
                                   </View>     
                                   {/* textfield - Email */}
                                   <View style={styles.inputGroup}>
                                        <Text style={styles.placeholderText}>E-mail</Text>
                                        <TextField
                                             width={dimensions.widthLevel7}
                                             onChangeText={(text)=>setEmail(text)}
                                             placeholder='E-mail'
                                             keyboardType={KEYBOARD_TYPES.EMAIL}
                                             textFieldStyles={email && !checkValidEmail(email) ? {borderColor: colors.red,borderWidth: 1,height: dimensions.heightLevel3 * 1.1} : {}}
                                        />
                                   </View>
                                   {/* textfield - telephone no      */}
                                   <View style={styles.inputGroup}>
                                        <Text style={styles.placeholderText}>Phone Number</Text>
                                        <TextField
                                             width={dimensions.widthLevel7}
                                             onChangeText={(text)=>setPhone(text)}
                                             placeholder='Phone Number'
                                             textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}
                                        />
                                   </View>
                                        
                                   <View style={styles.inputGroup}>
                                   <Text style={styles.placeholderText}>Password</Text>
                                        <TextField
                                        width={dimensions.widthLevel7}
                                        onChangeText={(text)=>setPassword(text)}
                                        isPassword={true}
                                        placeholder='Password'
                                        showEye={password && password.length}
                                        textFieldStyles={{ height: dimensions.heightLevel3 * 1.1 }}     
                                        />
                                   </View>

                                        {/* submit BUTTON         */}
                                   <EmptyView style={{ marginTop: dimensions.heightLevel5 }} />  
                                   <View style={styles.buttonWrapper}>
                                        <ListButton 
                                        name="Update" 
                                        customButton={ styles.addUserButton} 
                                        customButtonText={ styles.addUserButtonText} 
                                        onPress={()=> setIsAddUser(false)}  
                                        disabled={isDisabled}   
                                        />
                                   </View>
                                   <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />  
                         
                                   
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
     addUserButton: {
          borderRadius: 30,
          paddingHorizontal: dimensions.paddingLevel3,
          paddingVertical: dimensions.paddingLevel1 *1.1,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: colors.black,
          borderWidth: 1,
          borderColor : 'rgba(0,0,0,0.1)',
          marginTop : dimensions.heightLevel2,
     },
     addUserButtonText: {
          fontFamily: fontFamilies.candaraBold,
          color: 'rgba(255,255,255,1)',
          fontSize : fontSizes.fontLarge,
          paddingLeft: dimensions.paddingLevel3,
          paddingRight: dimensions.paddingLevel3
     },

     modalContainer : { position : 'absolute' , margin : 0 , top : 0, bottom : 0, left : 0, right : 0, backgroundColor : 'rgba(0,0,0,0.9)' },
     inputContainer: { width: dimensions.widthLevel4, alignSelf : 'center'},
     placeholderText: { fontFamily: fontFamilies.candaraBold, fontSize: fontSizes.fontMediumPlus, paddingLeft: dimensions.paddingLevel1, marginBottom: 3, color : 'rgba(0,0,0,0.5)' , color : colors.white },
     inputGroup: { marginBottom: 7 },
});

export default AdminManageUserScreen
