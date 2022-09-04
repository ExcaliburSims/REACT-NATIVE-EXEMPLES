import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Login = () => {
  return (
    <View style={styles.layout}>
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        placeholderTextColor={'#88888888'}
      />
      <Icon
        name="ios-eye-outline"
        size={30}
        color="#88888888"
        style={styles.icone}
      />
      {/* <View style={styles.box1}>
      </View> */}
      {/* <View style={styles.box2}>
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
      </View> */}
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  layout: {
    //flex: 1,
    //backgroundColor: '#1F172F',
    //backgroundColor: 'white',
    //paddingTop: 200,
    //justifyContent: 'center',
    //alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#000',
    borderBottomWidth: 1,
    //marginBottom: 36,
    color: '#000',
    width: 250,
    fontSize: 20,
    //backgroundColor: 'red',
    paddingHorizontal: 15,
  },
  box1: {
    //flex: 3,
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
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
  icone: {
    position: 'absolute',
    right: 70,
    top: '40%',
  },
});
