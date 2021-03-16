import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, createTransform } from "redux-persist";
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from '../reducers/index';


const persistConfig = {
     key: 'root',
     storage : AsyncStorage,
 };
 
 const middleWares = [thunk];
 const enhancer = applyMiddleware(...middleWares);
 const persistedReducer = persistReducer(persistConfig, rootReducer);
 
 const store = createStore(
   persistedReducer,
   enhancer
 )
 
 let persistor = persistStore(store);
 
 export {
     store,
     persistor,
 };
 