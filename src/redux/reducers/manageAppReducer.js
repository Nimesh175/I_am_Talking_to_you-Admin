import {manageAppActionTypes} from '../actionTypes/actiontype';

const initialState = {
     
     chapterArray : [  
          { index : 0, name  : "Other Icons", image : {} } ,
          { index : 1, name  :"Who Am I" , image : {} } ,
          { index : 2, name  :"Guiding Mode" , image : {} } ,
          { index : 3, name  :"Intuition Mode" , image : {} } ,
          { index : 4, name :"Silence Mode"  , image : {} } 
     ],
     
     showMainChapterListUpdate : false,
     selectedChapterArrayObject : {},

     guidingModeSubChapterArray : [
                    { index : 0, name  : "Awakening"} ,
                    { index : 1, name  :"Listning" } ,
                    { index : 2, name  :"Time" } ,
                    { index : 3, name  :"Feelings" } ,
                    { index : 4, name :"MindFulness" } ,
     ],
     instuitionModeSubChapterArray : [
                    { index : 0, name  : "Awakening2"} ,
                    { index : 1, name  :"Listning2" } ,
                    { index : 2, name  :"Time2" } ,
                    { index : 3, name  :"Feelings2" } ,
                    { index : 4, name :"MindFulness2" } ,
     ]   ,   

}




export default (state=initialState , action) => {
     switch (action.type) {
          case manageAppActionTypes.ADD_MAIN_CHAPTER:
               var chapterList = state.chapterArray
               chapterList[action.value.index]=action.value;
               console.log(chapterList , "  <<<<<<<<<<<<<<<  [Reducer] ")
               return {
                    ...state,
                    chapterArray : chapterList
               }

               case manageAppActionTypes.HIDE_UPDATE_MAIN_CHAPTER:
                    return {
                         ...state,
                         showMainChapterListUpdate : false
                    } 

               case manageAppActionTypes.SET_ONE_MAIN_CHAPTER:
               return {
                    ...state,
                    selectedChapterArrayObject : action.value,
                    showMainChapterListUpdate : true
               } 

               case manageAppActionTypes.UPDATE_MAIN_CHAPTER:
                    
                   var chapterList = [state.chapterArray]
                   chapterList[action.value.index]=action.value;
               return {
                    ...state,
                    chapterArray : chapterList,
                    showMainChapterListUpdate : true
               } 

          case manageAppActionTypes.DELETE_MAIN_CHAPTER:
               return {  }     
               


          default:
               return state
     }

}

