import {IMAGE_UPLOAD} from '../actionTypes/actiontype';

const initialState = {
    ImageDetails : {
          width : 0,
          height : 0,
          fileSize : 0,
          type : "",
          fileName : "",
          uri : "",
          base64 : ""
    }
}

export default (state=initialState , action) => {
     if(action.type === IMAGE_UPLOAD) {
          return {
              ImageDetails : action.value
          }
     }
     return state
}

