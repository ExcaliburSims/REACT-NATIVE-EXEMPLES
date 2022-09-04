/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Login from './src/Login';

const App = () => {
  return (
    <SafeAreaView style={styles.layout}>
      <Login />
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#1F172F',
    justifyContent: 'center',
  },
});
