/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigationContainerRef,} from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { BaseNavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/screens/LoginScreen/LoginScreen'; 
import SignupScreen from './components/screens/SignupScreen/SignupScreen';
import VerificationScreen from './components/screens/SignupScreen/VerificationScreen';
import PasswordScreen from './components/screens/SignupScreen/PasswordScreen';
import SignupSuccess from './components/screens/SignupScreen/SignupSuccess';
import Home from './components/screens/HomeScreen/HomeScreen';
import HomeNavigation from './components/screens/HomeNavigation/HomeNavigation';

function App(): React.JSX.Element {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignupSuccess" component={SignupSuccess} options={{ headerShown: false }}/>
          <Stack.Screen name="HomeNavigation" component={HomeNavigation} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>

      // <LoginScreen />
      // <SignupScreen />
      // <VerificationScreen mobileNumber='+201143333206'/>
      // <PasswordScreen />
      // <SignupSuccess/>
      // <HomeNavigation 
      //       optionSelected={1}
      //       firstName='Ahmad' 
      //       imageUrl='https://firebasestorage.googleapis.com/v0/b/bank-task-7a340.appspot.com/o/home_user_image.png?alt=media&token=1d81fbc3-1b74-40aa-b977-2dfac6870d59'
      //       currentBalance="2,374,654.25"/>
  );
}

export default App;
