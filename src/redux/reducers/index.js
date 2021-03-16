import { combineReducers } from 'redux'
import manageAppReducer from './manageAppReducer'
import imageUploadReducer from './imageUploadReducer'

export default combineReducers({
    manageAppState : manageAppReducer,
    imageUploadState : imageUploadReducer,
   
})
