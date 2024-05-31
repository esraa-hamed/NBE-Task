// CountContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import SignupScreen from './components/screens/SignupScreen/SignupScreen';
import VerificationScreen from './components/screens/SignupScreen/VerificationScreen';
import HomeNavigation from './components/screens/HomeNavigation/HomeNavigation';

export const ModeContext = createContext({
    darkMode: false,
    setDarkMode: (dMode: boolean) => {}
  });

  export const OptionContext = createContext({
    optionNumber: 1,
    setOptionNumber: (oNumber: number) => {}
  });

// Create a provider component
export const ModeProvider = ({ children }: { children: React.ReactNode }) => {

  const [darkMode, setDarkModeState] = useState(false);

  useEffect(() => {
    const loadDarkMode = async () => {
      try {
        const storedDarkMode = await AsyncStorage.getItem('darkMode');
        if (storedDarkMode !== null) {
          setDarkModeState(JSON.parse(storedDarkMode));
        }
      } catch (e) {
        console.error('Failed to load dark mode state', e);
      }
    };
    loadDarkMode();
  }, []);

  const setDarkMode = async (dMode: boolean) => {
    try {
      await AsyncStorage.setItem('darkMode', JSON.stringify(dMode));
      setDarkModeState(dMode);
    } catch (e) {
      console.error('Failed to save dark mode state', e);
    }
  };

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const OptionProvider = ({ children }: { children: React.ReactNode }) => {

  const [optionNumber, setOptionNumber] = useState(1);

  return (
    <OptionContext.Provider value={{ optionNumber, setOptionNumber }}>
      {children}
    </OptionContext.Provider>
  );
};

// export const useMode = () => {
//   const context = useContext(ModeContext);
//   if (context === undefined) {
//     throw new Error('useMode must be used within a ModeProvider');
//   }
//   return context;
// };