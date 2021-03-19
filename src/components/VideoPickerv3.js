import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {
  ImagePicker,
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

const uploadIcon = <Icon name="cloud-upload-alt" size={30} color="#fff" />;
// import {addImagePickerAction} from '../redux/actions/imageUploadActions'

import VideoPlayer from '../components/video-player/screens/VideoPlayer'



const VideoPickerv3 = () => {
  const dispatch = useDispatch();
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);

        setFilePath(response);
       

      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      // console.log('base64 *-> ', response.base64);
      // console.log('uri *-> ', response.uri);
      // console.log('width *-> ', response.width);
      // console.log('height *-> ', response.height);
      // console.log('fileSize *-> ', response.fileSize);
      // console.log('type *-> ', response.type);
      // console.log('fileName *-> ', response.fileName);
      setFilePath(response);
      // dispatch(addImagePickerAction(response))
    });
  };

  return (
     
      <View style={styles.container}>
     
        <Image
          source={{uri: filePath.uri}}
          style={styles.imageStyle}
        /> 


        
        
       
            <View style={styles.blurArea}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => chooseFile('video')}>      
            <View style={{backgroundColor : "rgba(0,0,0,0.5)" , borderRadius : 15}}> 
                <View  style={styles.uploadIcon}>
                  {
                   uploadIcon
                  }
              </View>


            <Text style={styles.textStyle}>upload video</Text>   
            </View>     
        </TouchableOpacity>
           </View>
        

        
      
      </View>
  );
};

export default VideoPickerv3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    borderWidth : 1,
    borderColor : 'lightgray',
    justifyContent : 'center',
    alignSelf : 'center',
    height : 150,
    width : 150,
    borderRadius : 30,
  },
  blurArea : {
    width : '100%',
    height :'100%',
    // borderBottomLeftRadius : 30,
    // borderBottomRightRadius : 30,
    backgroundColor : 'rgba(0,0,0,0)' ,
    position : 'absolute',
    bottom : 0,
    justifyContent: 'center',
    alignItems : 'center',
    borderRadius : 30
  },




  // titleText: {
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   paddingVertical: 20,
  // },
  textStyle: {
    padding: 10,
    color: 'white',
    textAlign: 'center',
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 5,
    position : 'absolute',
    bottom : 5,
    height : '90%', 
    justifyContent : 'center'
    
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    margin: 3,
    alignSelf : 'center',
    borderRadius : 30
  },

  uploadIcon : {
    alignItems : 'center',
    bottom : 0,
    marginTop : 20
  }
});