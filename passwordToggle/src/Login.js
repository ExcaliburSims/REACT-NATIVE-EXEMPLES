import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
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
        <TouchableOpacity>
          <Image
            source={require('./assets/img/icons8-facebook-nouveau-192(-xxxhdpi).png')}
            style={styles.Image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/img/icons8-logo-google-192(-xxxhdpi).png')}
            style={styles.Image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./assets/img/icons8-linkedin-entouré-192(-xxxhdpi).png')}
            style={styles.Image}
          />
        </TouchableOpacity>
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
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: width / 4,
    //backgroundColor: 'green',
    width: '50%',
    justifyContent: 'space-between',
  },
  Image: {
    width: 50,
    height: 50,
  },
});
