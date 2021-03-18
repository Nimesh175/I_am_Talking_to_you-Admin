import {manageAppActionTypes} from '../actionTypes/actiontype';

export const addMainChapterAction = obj => {
     return (
         {
               type : manageAppActionTypes.ADD_MAIN_CHAPTER ,
               value : obj
         }
     )
} 

export const hideUpdateMainChapter = () => {
    return (
        {
              type : manageAppActionTypes.HIDE_UPDATE_MAIN_CHAPTER   
        }
    )
}

export const setOneMainChapterAction = obj => {
    return (
        {
              type : manageAppActionTypes.SET_ONE_MAIN_CHAPTER ,
              value : obj
        }
    )
}

export const updateMainChapterAction = obj => {
    return (
        {
              type : manageAppActionTypes.UPDATE_MAIN_CHAPTER ,
              value : obj
        }
    )
}

export const deleteMainChapterAction = id => {
    return (
        {
              type : manageAppActionTypes.DELETE_MAIN_CHAPTER,
              value : id
        }
    )
}