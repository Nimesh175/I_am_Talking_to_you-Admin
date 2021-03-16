
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import StackNavigations from './navigations/StackNavigations';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store/store";
import {colors ,basicStyles} from './configurations/constants'

const App = () => {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
           <StackNavigations />     
      </PersistGate>
    </Provider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
