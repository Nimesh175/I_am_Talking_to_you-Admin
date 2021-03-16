import React from 'react';
import { View , StyleSheet} from 'react-native'
import { dimensions } from '../configurations/constants'
const Layout = (props) => {
     return (
          <View style={styles.container}>
                { props.children }
          </View>
     )
}

const styles = StyleSheet.create({
     container : {
          width : dimensions.fullWidth,
          height : '100%',
          alignItems: 'center',
          padding: 0,
          margin : 0,
     }
});

export default Layout
