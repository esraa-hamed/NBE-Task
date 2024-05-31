/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/screens/LoginScreen/LoginScreen'; 
import SignupScreen from './components/screens/SignupScreen/SignupScreen';
import VerificationScreen from './components/screens/SignupScreen/VerificationScreen';
import PasswordScreen from './components/screens/SignupScreen/PasswordScreen';
import SignupSuccess from './components/screens/SignupScreen/SignupSuccess';
import HomeNavigation from './components/screens/HomeNavigation/HomeNavigation';
import TransferScreen from './components/screens/TransferScreen/TransferScreen';
import BeneficiaryScreen from './components/screens/BeneficiaryScreen/BeneficiaryScreen';
import AddBeneficiary from './components/screens/BeneficiaryScreen/AddBeneficiary';

import { ModeProvider } from './Context';
import { OptionProvider } from './Context';

function App(): React.JSX.Element {

  const Stack = createStackNavigator();
  
  return (
    <ModeProvider>
    <OptionProvider>
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="SignupSuccess" component={SignupSuccess} options={{ headerShown: false }}/>
          <Stack.Screen name="HomeNavigation" component={HomeNavigation} options={{ headerShown: false }}/>
          <Stack.Screen name="Transfer" component={TransferScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="BeneficiaryScreen" component={BeneficiaryScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="AddBeneficiary" component={AddBeneficiary} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
    </OptionProvider>
    </ModeProvider>
  );
}

export default App;
