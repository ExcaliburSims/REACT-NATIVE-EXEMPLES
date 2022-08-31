import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Login = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.box1}>
        <Text>Yando</Text>
      </View>
      <View style={styles.box2}>
        <Icon name="twitter-with-circle" size={40} color="blue" />
        <Icon name="linkedin-with-circle" size={40} color="blue" />
        <Icon name="facebook-with-circle" size={40} color="blue" />
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
    flexDirection: 'row',
    justifyContent: 'center',
    /* borderTopEndRadius: 50,
		borderTopStartRadius: 50, */
    backgroundColor: 'green',
    width: '50%',
  },
});
