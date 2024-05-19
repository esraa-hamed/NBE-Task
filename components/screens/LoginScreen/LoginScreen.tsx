import React, {useState, useEffect} from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';

  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


  import InputBox from '../../molecules/InputBox/InputBox';
  import CheckBox from '../../atoms/CheckBox/CheckBox';
  import Button from '../../atoms/Button/Button';

  import Icon from 'react-native-vector-icons/FontAwesome';
  import Icon5 from 'react-native-vector-icons/FontAwesome5'
  import EvilIcon from 'react-native-vector-icons/EvilIcons';


  function LoginScreen({navigation}): React.JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [appLoaded, setAppLoaded] = useState(false);
    const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('AR');
    const [inputOneFocused, setInputOneFocused] = useState(false);
    const [inputOneValue, setInputOneValue] = useState('');
    const [inputTwoFocused, setInputTwoFocused] = useState(false);
    const [inputTwoValue, setInputTwoValue] = useState('');
    const [titleOneColor, setTitleOneColor] = useState('#FFFF');
    const [titleTwoColor, setTitleTwoColor] = useState('#FFFF');
    const [buttonActive, setButtonActive] = useState(false);

    const handleInputOneFocus = () => {
        setInputOneFocused(true);
        setTitleOneColor('#007236');
    }
    const handleInputOneBlur = () => {
        setInputOneFocused(false);   
        setTitleOneColor('#FFFF');
    }
    const handleInputOneChange = (inputText: string) => {
        setInputOneValue(inputText);
        if(inputText && inputTwoValue) {
          setButtonActive(true);
        }
        else{
          setButtonActive(false);
        }
        
    }
    const handleInputTwoFocus = () => {
      setInputTwoFocused(true);
      setTitleTwoColor('#007236');
    }
    const handleInputTwoBlur = () => {
        setInputTwoFocused(false);   
        setTitleTwoColor('#FFFF');
    }
    const handleInputTwoChange = (inputText: string) => {
        setInputTwoValue(inputText);
        if(inputOneValue && inputText) {
          setButtonActive(true);
        }
        else {
          setButtonActive(false);
        }
    }
    const handleForgotPasswordClick = () => {
        setForgotPasswordClicked(!forgotPasswordClicked);
    }
    const handleLoginButtonClick = () => {
        
    }

    const handleSignup = () => {
      navigation.navigate('Signup');
    }
    const handleLanguageChange = () => {
        if(currentLanguage === 'AR') {
        setCurrentLanguage('EN');
        }
        else{
        setCurrentLanguage('AR');
        }
    }

    useEffect(() => {
        // Simulate app loading process
        setTimeout(() => {
          setAppLoaded(true);
        }, 3000); 
      }, []);

    return(
        <SafeAreaView style={appLoaded ? styles.container : styles.splashContainer}>
            {appLoaded ? (
            <View style={styles.mainContainer}>
                <ImageBackground source={require('../../../images/home_background_img2.png')}
                                style={styles.homeBackgroundImage}/>
                <View style={styles.overlay} />
                <View style={styles.homeFirstSection}>
                <TouchableOpacity onPress={handleLanguageChange}>
                <View style={styles.languageView}>
                    <Text style={styles.languageText}>{currentLanguage}</Text>
                    </View>
                </TouchableOpacity>
                <Image source={require('../../../images/home_bank_logo.png')}/>
                </View>
                <View style={styles.homeSecondSection}>
                <Text style={styles.homeTitleOne}>
                    Welcome to 
                </Text>
                <Text style={styles.homeTitleTwo}>
                    The National Bank of Egypt
                </Text>
                <InputBox placeholder={'Enter your username'} isPassword={false} inputFocused={inputOneFocused} inputValue={inputOneValue} icon={<Icon name="at" size={27} color={inputOneFocused ? "#FFFF": "#FFFF"}/>}
                            borderColor={'#007236'}
                            fontColor={'white'}
                            placeholderColor={'#B7B7B7'}
                            backgroundColor={'#0000004D'}
                            titleColor={titleOneColor}
                            numericInput={false}
                            titleTop='Username'
                            onFocus={handleInputOneFocus}
                            onBlur={handleInputOneBlur}
                            onChangeText={ (newText: string) => handleInputOneChange(newText)}              
                ></InputBox>
                <InputBox placeholder={'Enter your password'} isPassword={true} inputFocused={inputTwoFocused} inputValue={inputTwoValue} icon={<EvilIcon name="lock" size={42} color={inputTwoFocused ? "#FFFF": "#FFFF"}  style={{top:-6}}/>}
                            borderColor={'#007236'}
                            fontColor={'white'}
                            placeholderColor={'#B7B7B7'}
                            titleColor={titleTwoColor}
                            numericInput={false}
                            backgroundColor={'#0000004D'}
                            titleTop='Password'
                            onFocus={handleInputTwoFocus}
                            onBlur={handleInputTwoBlur}
                            onChangeText={ (newText: string) => handleInputTwoChange(newText)}
                ></InputBox>
                <View style={styles.checkboxLineView}>
                    <View style={styles.checkboxView}>
                    <CheckBox />
                    <Text style={styles.checkboxText}>Remember me</Text>
                    </View>
                    <TouchableOpacity onPress={handleForgotPasswordClick}>
                    <Text style={forgotPasswordClicked ? styles.forgotPassTextClicked : styles.forgotPassText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.loginButtonView}>
                    <View style={styles.loginButton}>
                    <Button title='Log In' 
                            fontColor='white' 
                            backgroundColor='#007236' 
                            onPress={handleLoginButtonClick}
                            active={buttonActive}
                            padding={13}
                            ></Button>
                    </View>
                    <TouchableOpacity onPress={handleLoginButtonClick}>
                    <View style={styles.fingerprintView}>
                    <Icon5 name='fingerprint' color={'#F6A721'} size={24}></Icon5>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupView}>
                    <Text style={styles.noAccountText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={handleSignup}>
                    <Text style={styles.signupText}>Signup</Text>
                    </TouchableOpacity>
                </View>

                </View>


                <View style={styles.footerView}>
                    <View style={styles.footerLineOne}>
                    <Text style={styles.footerOrangeText}>Contact Us</Text>
                    <Text style={styles.hyphenText}>-</Text>
                    <Text style={styles.footerOrangeText}>FAQs</Text>
                    <Text style={styles.hyphenText}>-</Text>
                    <Text style={styles.footerOrangeText}>Help</Text>
                    </View>
                    <View >
                    <Text style={styles.footerWhiteText}>
                    Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
                    </Text>
                    </View>
                </View>

            </View>
            ) : (
            <View style={styles.splashMainContainer}>
                <Image source={require('../../../images/splash_screen_img1.png')}/>
                <Image source={require('../../../images/splash_screen_img2.png')}/>
            </View>
            )}
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1
      },
      mainContainer: {
        flex:1
      },
    splashContainer: {
      backgroundColor: '#F1F3FB',
      flex: 1
      },
    splashMainContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#F1F3FB',
      flex: 1,
      paddingTop: 210
    },
    splashImageOne: {
      height: 136,
      width: 119
    },
    splashImageTwo: {
      height: 40,
      width: 130
    },
    homeBackgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black'
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      zIndex: 1
    },
    homeFirstSection: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      top: 23,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      width: '100%',
      flexDirection: 'row',
      zIndex: 3
    },
    homeSecondSection: {
      position: 'absolute',
      paddingHorizontal: 20,
      zIndex: 3,
      fontFamily: 'RobotoFontRegular',
      top: 200
    },
    homeTitleOne: {
      color: '#FFFFFF',
      fontSize: 35,
      fontWeight: '700'
    },
    homeTitleTwo: {
      color: '#FFFFFF',
      fontSize: 35,
      fontWeight: '700'
    },
    languageView: {
      backgroundColor: 'white',
      height: 40,
      width: 40,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    languageText: {
      color: '#007236',
      fontWeight: '700',
      fontSize: 16
    },
    checkboxView: {
      display: 'flex',
      flexDirection: 'row',
    },
    checkboxText: {
      color: 'white',
      fontSize: 17,
      left: 10,
      bottom: 5
    },
    checkboxLineView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      top: 20,
    },
    forgotPassText: {
      color: 'white',
      fontSize: 17,
    },
    forgotPassTextClicked: {
      color: '#FFA07A',
      fontSize: 17,
    },
    loginButtonView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      top: 35
    },
    fingerprintView:{
      borderWidth: 1.5,
      borderColor: '#F6A721',
      borderRadius: 12.5,
      backgroundColor: 'transparent',
      padding: 11
    },
    loginButton: {
      width: '80%',
    },
    signupView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      top: 50
    },
    signupText: {
      color: '#F6A721',
      textDecorationLine: 'underline',
      fontSize: 16,
      left: 5
    },
    noAccountText: {
      color: 'white',
      fontSize: 16
    },
    footerView: {
      position: 'absolute',
      zIndex: 3,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      width: '100%',
      top: 715
    },
    footerLineOne: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    footerOrangeText: {
      color: '#F6A721',
      marginRight: 10,
      fontSize: 14,
      fontWeight: '700'
    },
    hyphenText: {
      color: 'white',
      marginRight: 10,
      fontSize: 14,
      fontWeight: '700'
    },
    footerWhiteText: {
      color: '#FFFF',
      fontSize: 10,
      fontWeight: '400',
      textAlign: 'center',
      padding: 6
    }
    
  });

  export default LoginScreen;