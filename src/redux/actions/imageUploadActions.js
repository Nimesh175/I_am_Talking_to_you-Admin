import {IMAGE_UPLOAD} from '../actionTypes/actiontype';

export const addImagePickerAction = obj => {
     return  {
               type : IMAGE_UPLOAD,
               value : obj
         }
     
}