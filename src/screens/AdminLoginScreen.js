import React , {useState , useEffect} from 'react';
import { View , Text, KeyboardAvoidingView , ScrollView , StyleSheet , Image} from 'react-native';
import { dimensions , colors , fontFamilies , fontSizes , imageSizes , basicStyles ,_getShadows} from '../configurations/constants';
import EmptyView from '../components/EmptyView';
import TextField from '../components/TextField';
import ListButton from '../components/ListButton';
import Layout from '../components/Layout';
import {checkValidEmail } from '../utils/feildValidations'
import { KEYBOARD_TYPES } from "../configurations/appData";
import {Actions} from 'react-native-router-flux';


const logo = require('../assets/images/logo.png');
const emailImage = require('../assets/images/email.webp');
const passwordImage = require('../assets/images/password.webp');




const AdminLoginScreen = () => {

     const [email,setEmail] = useState(null);
     const [password,setPassword] = useState(null);

     const isDisable = !email || !password || !checkValidEmail(email);
     
     
     return (
     <Layout>
     <ScrollView showsVerticalScrollIndicator={false}>
     <KeyboardAvoidingView>
          <View  style={styles.container}>
               <EmptyView style={{marginTop : dimensions.heightLevel5}} />
               
               <Image source={logo} style={styles._image}  />
               <EmptyView style={{marginTop : dimensions.heightLevel2}} />
               <Text style={styles.title}>Login</Text>
               <EmptyView style={{marginTop : dimensions.heightLevel2}} />
               <Text style={styles.sub_text}>Synthesis of the complex DFGH ring system of the title compounds has been accomplished</Text>
               <EmptyView style={{marginTop : dimensions.heightLevel2}} />

               {/* textField & button */}
               <View style={styles.inputContainer}>
                    <Text style={styles.placeholderText}>E-mail</Text>
                    <TextField 
                         onChangeText={(text)=>setEmail(text)}
                         icon={emailImage}
                         placeholder='Enter E-mail Here'
                         keyboardType={KEYBOARD_TYPES.EMAIL}
                         style={styles.textField}
                         textFieldStyles={email && !checkValidEmail(email) ? { borderColor: colors.red, borderWidth: 1 } : {}}
                    />
                    <EmptyView style={{marginTop : dimensions.heightLevel1}} />
                    <Text style={styles.placeholderText}>Password</Text>
                    <TextField
                         style={styles.textField}
                          width={dimensions.widthLevel7}
                          onChangeText={(text)=>setPassword(text)}
                          icon={passwordImage}
                          isPassword={true}
                          placeholder='Enter Password Here'
                          showEye={password && password.length}
                    />

                    <EmptyView style={{marginTop: dimensions.heightLevel4}} />
                    <View style={styles.buttonWrapper}>
                         <ListButton
                              name='Login'
                              onPress={()=> Actions.dashboardScreen()}
                              customButton={styles.SignInButton}
                              customButtonText={styles.signInButtonText}
                         />
                    </View>
                    <EmptyView style={{marginTop: dimensions.heightLevel1}} />
               </View>
          </View>
          </KeyboardAvoidingView>
          </ScrollView>
          </Layout>
     )
}


const styles = StyleSheet.create({
     container : {
          width : dimensions.widthLevel2,
          marginHorizontal : 30,
          alignSelf : 'center',
          paddingVertical : 5,
          height : '100%'
     },
     _image : {
          width : dimensions.widthLevel10 * 0.9,
          height : dimensions.widthLevel10 * 0.9,
          alignSelf : 'center'
     },
     title : {
          fontSize : fontSizes.fontBigger,
          fontFamily : fontFamilies.montserratBold,
     },
     sub_text : {
          fontFamily : fontFamilies.montserratRegular,
          fontSize : fontSizes.fontMedium,
          marginRight : 10
     },
     textField : {
          ..._getShadows,
     },
     inputContainer : {
          width : '100%',
          paddingHorizontal : dimensions.paddingLevel3,
          alignSelf : 'center',
     },
     placeholderText: {
          fontFamily: fontFamilies.candaraBold,
          fontSize: fontSizes.fontMediumPlus,
          paddingLeft: dimensions.paddingLevel1,
          marginBottom: dimensions.paddingLevel1,
          color : 'rgba(0,0,0,0.5)',
          
     },
     buttonWrapper : {
          paddingHorizontal : dimensions.paddingLevel9
     },
     SignInButton: {
          borderRadius: 30,
          paddingHorizontal: dimensions.paddingLevel4,
          paddingVertical: dimensions.paddingLevel1 *1.1,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: colors.black,
          borderWidth: 1,
          borderColor : 'rgba(0,0,0,0.1)',
          margin : 5,
       },
     signInButtonText: {
          fontFamily: fontFamilies.candaraBold,
          color: 'rgba(255,255,255,0.9)',
          fontSize : fontSizes.fontLarge,
          paddingLeft: dimensions.paddingLevel3,
          paddingRight: dimensions.paddingLevel3
      },
  
});

export default AdminLoginScreen
