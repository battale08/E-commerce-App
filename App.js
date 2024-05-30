// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './Src/Screens/WelcomeScreen';
import LoginScreen from './Src/Screens/LoginScreen';
import HomeScreen from './Src/Screens/HomeScreen';
import ProductDetails from './Src/Screens/productDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
