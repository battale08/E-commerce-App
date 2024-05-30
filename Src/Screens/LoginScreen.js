// src/screens/WelcomeScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {EMAIL, PASSWORD} from '../../assets/Images/Index';
import useProductData from '../utils/customHook/useProductData';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const {data} = useProductData('https://fakestoreapi.com/products');

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = () => {
    // This regex checks for Minimum eight characters, at least one letter and one number:
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleLogin = async () => {
    let isValid = true;

    if (email === '') {
      Alert.alert('Error', 'Please enter both email and password.');
      isValid = false;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (!isValid) {
      return;
    }
    Alert.alert('Congratulations, Logged In successfully');
    navigation.navigate('Home', {productData: data});
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.halfCircle} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome back</Text>
      </View>
      <View style={styles.LoginArea}>
        <View style={styles.LoginContainer}>
          <Text style={styles.header}>Login</Text>
          <View style={styles.inputGroup}>
            <Image
              source={EMAIL}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <Text style={styles.label}>Email</Text>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Ex : Shubham@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {emailError ? (
            <Text style={styles.errorMessage}>Please Enter Valid Email</Text>
          ) : null}

          <View style={styles.inputGroup}>
            <Image
              source={PASSWORD}
              style={styles.imageStyle}
              resizeMode="contain"
            />

            <Text style={styles.label}>Password</Text>
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showButton}>
              <Text style={styles.showButtonText}>
                {showPassword ? 'Hide' : 'Show'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Your Password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
          </View>
          {passwordError ? (
            <Text style={styles.errorMessage}>
              Minimum eight characters required, at least one letter and one
              number, without any special characters
            </Text>
          ) : null}

          <TouchableOpacity onPress={() => {}} style={styles.forgotPasscode}>
            <Text style={styles.forgotPasscodeText}>Forgot passcode?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleLogin()}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.createAccount}>
            <Text style={styles.createAccountText}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5956E9',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 65,
    fontWeight: '800',
    marginBottom: 45,
    color: 'white',
    lineHeight: 69,
  },
  circleContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 16,
  },

  halfCircle: {
    width: 120,
    height: 120,
    borderRadius: 50,
    borderBottomLeftRadius: 50,
    marginTop: -56,
    backgroundColor: '#FAB8C3',
  },
  LoginArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageStyle: {
    height: 24,
    width: 24,
  },
  //** ---------*/
  LoginContainer: {
    marginHorizontal: 50,
    marginTop: 25,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    color: '#000000',
  },
  inputGroup: {
    marginBottom: 16,
    flexDirection: 'row',
    marginTop: 30,
  },
  label: {
    color: '#868686',
    fontSize: 15,
    fontWeight: '600',
    padding: 3,
    marginHorizontal: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#C9C9C9',
    paddingBottom: 8,
    fontSize: 17,
    fontWeight: '600',
    width: '100%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showButton: {
    alignItems: 'flex-end',
    paddingTop: 3,
    marginLeft: 165,
  },
  showButtonText: {
    color: '#5956E9',
    fontSize: 15,
    fontWeight: '600',
  },
  forgotPasscode: {
    alignItems: 'flex-start',
    marginTop: 15,
    // marginBottom: 15,
  },
  forgotPasscodeText: {
    color: '#5956E9',
    fontSize: 15,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#5956E9',
    paddingVertical: 12,
    marginTop: 30,
    borderRadius: 8,
    width: 314,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  createAccount: {
    alignItems: 'center',
    marginTop: 10,
  },
  createAccountText: {
    color: '#5956E9',
    fontSize: 17,
    fontWeight: '600',
  },
  errorMessage: {
    color: 'red',
    fontWeight: '600',
    fontSize: 12,
    padding: 2,
  },
});

export default LoginScreen;
