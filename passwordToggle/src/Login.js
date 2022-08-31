import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Login = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.box1}>
        <Text>Yando</Text>
      </View>
      <View style={styles.box2}>
        <Text>Zil</Text>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#1F172F',
  },
  box1: {
    flex: 5,
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  box2: {
    flex: 1,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
});
