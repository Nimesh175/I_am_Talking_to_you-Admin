import React from 'react';
import { ProgressViewIOSComponent, StyleSheet } from 'react-native';
import LinearGradients from 'react-native-linear-gradient';

const LinearGradient = (props) => {
     return (
            <LinearGradients start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={[ 'rgb(212, 244, 238)','rgb(206, 241, 239)','rgb(159, 217, 248)','rgb(131, 202, 253)','rgb(124, 199, 254)']} style={styles.linearGradient}>
                  {props.children}
          </LinearGradients>
     )
}

const styles = StyleSheet.create({
       linearGradient: {
          flex: 1,
          alignItems: 'center',
          padding: 0,
          margin : 0
     },
});

export default LinearGradient
