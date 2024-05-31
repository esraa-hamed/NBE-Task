import React, {useState, useContext, useEffect} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    SafeAreaView,
    View,
    Image
  } from 'react-native';

  import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
  import Icon from 'react-native-vector-icons/FontAwesome5';
  import InputBox from '../../molecules/InputBox/InputBox';
  import Button from '../../atoms/Button/Button';
  import { ModeContext } from '../../../Context';

  function SignupScreen({navigation}): React.JSX.Element {
    const [inputFocused, setInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [titleColor, setTitleColor] = useState('#B7B7B7');
    const [buttonActive, setButtonActive] = useState(false);

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const handleInputFocus = () => {
      setInputFocused(true);
      setTitleColor('#007236');
    }
    const handleInputBlur = () => {
        setInputFocused(false); 
        setTitleColor('#B7B7B7');  
    }
    const handleInputChange = (inputText: string) => {
        setInputValue(inputText);
        if(inputText){
          setButtonActive(true);
        }
        else{
          setButtonActive(false);
        }
    }

    const handleGoingBack = () => {
      navigation.navigate('Login');
    }

    const handleNextButtonClick = () =>{
      navigation.navigate('Verification', {mobileNumber: inputValue, parentName: 'Signup'});
    }

    return(
      <SafeAreaView style={darkMode ? styles.containerDark : styles.container}>

        <View style={styles.signupFirstSection}>
            <TouchableOpacity onPress={handleGoingBack}>
              <View style={styles.backView}>
              <MaterialIcon name='arrow-back-ios-new' color={'#FFFF'} size={24} ></MaterialIcon>
              </View>
            </TouchableOpacity>
            <Image source={require('../../../images/signup_bank_logo.png')}/>
        </View>

        <View style={styles.mainContainer}>
            <View style={styles.signupSecondSection}>
              <Text style={darkMode ? styles.signupTitleOneDark : styles.signupTitleOne}>Mobile number</Text>
              <Text style={styles.signupTitleTwo}>Enter the mobile number registred in the bank</Text>
              <InputBox placeholder='Enter your mobile number' isPassword={false} inputFocused={inputFocused} inputValue={inputValue} icon={<Icon name="mobile-alt" size={28} color="#B7B7B7"></Icon>}
                        borderColor={'#007236'}
                        fontColor={'black'}
                        numericInput={true}
                        placeholderColor={'#B7B7B7'}
                        titleTop={'Mobile number'}
                        titleColor={titleColor}
                        backgroundColor={'white'}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChangeText={ (newText: string) => handleInputChange(newText)}
              ></InputBox>
            </View>

            <View style={styles.nextButtonView}>
                <Button title='Next' fontColor='white' backgroundColor='#007236' onPress={handleNextButtonClick} active={buttonActive} padding={13}></Button>
                <Text style={darkMode ? styles.footerTextDark : styles.footerText}>
                  <Text style={styles.footerTextNormal}>By signing up, you agree to our </Text> 
                  <Text style={styles.footerTextBold}>Terms of Service </Text> 
                  <Text style={styles.footerTextNormal}>and acknowledge that you have read our</Text> 
                  <Text style={styles.footerTextBold}>Privacy Policy</Text>
                  <Text style={styles.footerTextNormal}>.</Text>
                </Text>
            </View> 
        </View>

        </SafeAreaView>

    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F1F3FB',
      flex: 1,
    },
    containerDark: {
      backgroundColor: '#2E2E2E',
      flex: 1,
    },
    signupFirstSection: {
      display: 'flex',
      alignItems: 'center',
      top: 23,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      width: '100%',
      flexDirection: 'row',
    },
    backView: {
      backgroundColor: '#007236',
      height: 40,
      width: 40,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '700',
      paddingRight: 4
    },
    mainContainer: {
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      height: '92%'
    },
    signupSecondSection: {
      display: 'flex',
      marginTop: 50,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    signupTitleOne: {
      color: '#1C2437',
      fontSize: 29,
      fontWeight: '700',
    },
    signupTitleOneDark: {
      color: '#FFFF',
      fontSize: 29,
      fontWeight: '700',
    },
    signupTitleTwo: {
      color: '#B7B7B7',
      fontSize: 15,
      fontWeight: '400',
    },
    nextButtonView: {
      width: '100%',
      display: 'flex',
    },
    footerText: {
      marginTop: 20,
      fontSize: 14,
      marginLeft: 10,
    },
    footerTextDark: {
      marginTop: 20,
      fontSize: 14,
      marginLeft: 10,
      color: '#B7B7B7'
    },
    footerTextNormal: {
      fontWeight: '400'
    },
    footerTextBold: {
      fontWeight: '700'
    }
  })

  export default SignupScreen;