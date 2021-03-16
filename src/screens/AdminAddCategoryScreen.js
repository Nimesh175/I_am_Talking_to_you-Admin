import React , {useState , useEffect} from 'react';
import { View , Text, KeyboardAvoidingView , ScrollView , StyleSheet , Image , TouchableHighlight ,TouchableOpacity} from 'react-native';
import { dimensions , colors , fontFamilies , fontSizes , imageSizes , basicStyles ,_getShadows} from '../configurations/constants';
import EmptyView from '../components/EmptyView';
import TextField from '../components/TextField';
import ListButton from '../components/ListButton';



const AdminAddCategoryScreen = () => {
     return (
          <KeyboardAvoidingView>
               <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>
                 <View style={styles.container}>
                    <EmptyView  style={{marginTop : dimensions.heightLevel7}} /> 
                      <View style={styles.inputGroup}>
                         <Text style={styles._text}>Title Name</Text>
                          <EmptyView  style={{marginTop : dimensions.heightLevel1 * 0.5}} /> 
                         <TextField  placeholder="Name"  textFieldStyles={{elevation : 2}} />
                      </View>

                      <EmptyView  style={{marginTop : dimensions.heightLevel2 * 0.8}} /> 
                      <View style={styles.inputGroup}>
                         <Text style={styles._text}>Price</Text>
                          <EmptyView  style={{marginTop : dimensions.heightLevel1 * 0.5}} /> 
                         <TextField  placeholder="Price" textFieldStyles={{elevation : 2}}/>
                      </View>

                      <EmptyView  style={{marginTop : dimensions.heightLevel2 * 0.8}} /> 
                      <View style={styles.inputGroup}>
                         <Text style={styles._text}>Description</Text>
                          <EmptyView  style={{marginTop : dimensions.heightLevel1 * 0.5}} /> 
                         <TextField  placeholder="Description"  isMultiline={true} textFieldStyles={styles.textFieldStyles} />
                      </View>


                      {/* buttons */}
                      <EmptyView  style={{marginTop : dimensions.heightLevel6}} /> 
                         <View style={{flexDirection : 'row' , justifyContent : 'flex-end'}}>
                        
                         <ListButton name={"   submit   "} customButton={styles.button} customButtonText={styles.buttonText} />
                     </View>

                 </View>
               </ScrollView>
          </KeyboardAvoidingView>
     )
}

const styles = StyleSheet.create({
     container : { width : dimensions.widthLevel4,alignSelf : 'center',paddingVertical : 5, alignSelf : 'center' },
     inputGroup : {},
     _text : {fontFamily : fontFamilies.montserratBold , fontSize : fontSizes.fontMedium , marginLeft : 10},
     textFieldStyles : {height : dimensions.fullHeight * 0.2 , alignItems : 'flex-start' , paddingRight : 5, paddingLeft : 2 , paddingVertical : 5 ,elevation : 4}  ,  
     button: {
          borderRadius: 30,
          padding: dimensions.paddingLevel2/2,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor:  'rgba(0,0,0,0.7)',
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

export default AdminAddCategoryScreen
