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
        <Text>Yando</Text>
      </View>
      <View style={styles.box3}>
        <Text>Zilu</Text>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
    borderBottomLeftRadius: 100,
  },
  box2: {
    flex: 3,
    backgroundColor: 'red',
    height: 100,
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue',
    //borderBottomLeftRadius: 15,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
});
