// src/screens/WelcomeScreen.js
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {WELCOME_IMAGE} from '../../assets/Images/Index';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find your Gadget</Text>
      <View style={styles.imageContainer}>
        <Image source={WELCOME_IMAGE} style={styles.image} resizeMode="cover" />
        <LinearGradient
          colors={['rgba(89, 86, 233, 0)', 'rgba(89, 86, 233, 1)']}
          style={styles.gradient}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5956E9',
  },
  title: {
    fontSize: 65,
    fontWeight: '800',
    color: 'white',
    marginBottom: 10,
    lineHeight: 69,
  },
  imageContainer: {
    width: 400,
    height: 400,
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    width: 314,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#5956E9',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default WelcomeScreen;
