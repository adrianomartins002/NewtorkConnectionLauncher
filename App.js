/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import {NetworkInfo} from './src/component'

const App= () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <View style={{
          flex:1,
          // backgroundColor:"blue"
        }}>
          <View style={{width:"100%", height:100, backgroundColor:"#CCC"}}></View>
          <NetworkInfo></NetworkInfo>
        </View>

    </>
  );
};

export default App;
