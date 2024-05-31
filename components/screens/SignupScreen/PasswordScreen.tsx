import React, {useState, useEffect, useContext} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    SafeAreaView,
    View,
    Image
  } from 'react-native';

  import Button from '../../atoms/Button/Button';
  import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
  import EvilIcon from 'react-native-vector-icons/EvilIcons';
  import FontIcon from 'react-native-vector-icons/FontAwesome';
  import InputBox from '../../molecules/InputBox/InputBox';
  import { ModeContext } from '../../../Context';
  function PasswordScreen({navigation}): React.JSX.Element {

    const [titleOneColor, setTitleOneColor] = useState('#B7B7B7');
    const [titleTwoColor, setTitleTwoColor] = useState('#B7B7B7');

    const [inputOneValue, setInputOneValue] = useState('');
    const [inputTwoValue, setInputTwoValue] = useState('');

    const [inputOneFocused, setInputOneFocused] = useState(false);
    const [inputTwoFocused, setInputTwoFocused] = useState(false);

    const [containLowerCase, setContainLowerCase] = useState(false);
    const [containUpperCase, setContainUpperCase]= useState(false);
    const [containEightCharacters, setContainEightCharacters] = useState(false);
    const [containNumber, setContainNumber] = useState(false);
    const [containSpecialChar, setContainSpecialChar] = useState(false);

    const [submitButtonActive, setSubmitButtonActive] = useState(false);

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);
     
    const handleGoingBack = () => {

    }

    const handleInputOneFocus = () => {
        setInputOneFocused(true);
        setTitleOneColor('#007236');
    }

    const handleInputTwoFocus = () => {
        setInputTwoFocused(true);
        setTitleTwoColor('#007236');
    }

    const handleInputOneBlur = () => {
        setInputOneFocused(false);
        setTitleOneColor("#B7B7B7");
    }

    const handleInputTwoBlur = () => {
        setInputTwoFocused(false);
        setTitleTwoColor("#B7B7B7");
    }

    const handleSubmitButtonClick = () => {
        navigation.navigate('SignupSuccess');
    }

    const handleInputOneChange = (textInput: string) => {

        setInputOneValue(textInput);

        const numberRegex = /\d/;
        const specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        // At least eight characters
        if(textInput.length >= 8){
            setContainEightCharacters(true);
        }
        else{
            setContainEightCharacters(false);
        }

        // Contains upper case letter
        if(textInput !== textInput.toLowerCase()) {
            setContainUpperCase(true);
        }
        else{
            setContainUpperCase(false);
        }

        // Contains lower case letter
        if(textInput !== textInput.toUpperCase()) {
            setContainLowerCase(true);
        }
        else{
            setContainLowerCase(false);
        }

        // Contains a number
        if(numberRegex.test(textInput)){
            setContainNumber(true);
        }
        else{
            setContainNumber(false);
        }

        // Contains special character
        if(specialCharactersRegex.test(textInput)) {
            setContainSpecialChar(true);
        }
        else{
            setContainSpecialChar(false);
        }

        // Checks for enabling the submit button
        if(textInput 
            && textInput===inputTwoValue
            && containLowerCase && containUpperCase
            && containEightCharacters && containNumber
            && containSpecialChar)
        {
            setSubmitButtonActive(true);
        }
        else{
            setSubmitButtonActive(false);
        }
    }

    const handleInputTwoChange = (textInput: string) => {
        setInputTwoValue(textInput);
        // Checks for enabling the submit button
        if(inputOneValue 
            && inputOneValue===textInput
            && containLowerCase && containUpperCase
            && containEightCharacters && containNumber
            && containSpecialChar)
        {
            setSubmitButtonActive(true);
        }
        else{
            setSubmitButtonActive(false);
        }
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
                <Text style={darkMode ? styles.signupTitleOneDark : styles.signupTitleOne}>Set your password</Text>
                <Text style={styles.signupTitleTwo}>Enter a strong password for your online banking account</Text>
                <InputBox placeholder='Enter your password' isPassword={true} inputFocused={inputOneFocused} inputValue={inputOneValue} icon={<EvilIcon name="lock" size={42} color="#B7B7B7" style={{top:-6}}></EvilIcon>}
                        borderColor={'#007236'}
                        fontColor={'black'}
                        placeholderColor={'#B7B7B7'}
                        titleTop={'Password'}
                        titleColor={titleOneColor}
                        backgroundColor={'white'}
                        onFocus={handleInputOneFocus}
                        onBlur={handleInputOneBlur}
                        onChangeText={ (newText: string) => handleInputOneChange(newText)}
                ></InputBox>
                <InputBox placeholder='Rewrite your password here' isPassword={true} inputFocused={inputTwoFocused} inputValue={inputTwoValue} icon={<EvilIcon name="lock" size={42} color="#B7B7B7" style={{top:-6}}></EvilIcon>}
                        borderColor={'#007236'}
                        fontColor={'black'}
                        placeholderColor={'#B7B7B7'}
                        titleTop={'Confirm Password'}
                        titleColor={titleTwoColor}
                        backgroundColor={'white'}
                        onFocus={handleInputTwoFocus}
                        onBlur={handleInputTwoBlur}
                        onChangeText={ (newText: string) => handleInputTwoChange(newText)}
                ></InputBox>
                <View style={styles.radioBtnView}>
                    <View style={styles.radioBtnFirstRow}>
                        <View style={styles.buttonTextView}>
                            <FontIcon name='circle' size={18} style={ containLowerCase ? {color: '#007236', borderColor: '#007236', top: 2} : {color: "#B7B7B7", borderColor: "#B7B7B7", top: 2}}/>
                            <Text style={darkMode ? styles.checkTextDark : styles.checkText}>Lower case letter</Text>
                        </View>
                        <View style={styles.buttonTextView}>
                            <FontIcon name='circle' size={18} style={ containUpperCase ? {color: '#007236', borderColor: '#007236', top: 2} : {color: "#B7B7B7", borderColor: "#B7B7B7", top: 2}}/>
                            <Text style={darkMode ? styles.checkTextDark : styles.checkText}>Upper case letter</Text>
                        </View>
                    </View>
                    <View style={styles.radioBtnSecondRow}>
                    <View style={styles.buttonTextView}>
                            <FontIcon name='circle' size={18} style={ containEightCharacters ? {color: '#007236', borderColor: '#007236', top: 2} : {color: "#B7B7B7", borderColor: "#B7B7B7", top: 2}}/>
                            <Text style={darkMode ? styles.checkTextDark : styles.checkText}>Minimum 8 characters</Text>
                        </View>
                        <View style={ [styles.buttonTextView, {left:-63}]}>
                            <FontIcon name='circle' size={18} style={ containNumber ? {color: '#007236', borderColor: '#007236', top: 2} : {color: "#B7B7B7", borderColor: "#B7B7B7", top: 2}}/>
                            <Text style={darkMode ? styles.checkTextDark : styles.checkText}>Number</Text>
                        </View>
                    </View>
                    <View style={styles.radioBtnThirdRow}>
                        <View style={ styles.buttonTextView}>
                            <FontIcon name='circle' size={18} style={ containSpecialChar ? {color: '#007236', borderColor: '#007236', top: 2} : {color: "#B7B7B7", borderColor: "#B7B7B7", top: 2}}/>
                            <Text style={darkMode ? styles.checkTextDark : styles.checkText}>Special character</Text>
                        </View>
                    </View>
                </View>
            </View>


        <View style={styles.submitButtonView}>
              <Button title='Submit' 
                      fontColor='white' 
                      backgroundColor='#007236' 
                      onPress={handleSubmitButtonClick}
                      active={submitButtonActive}
                      padding={13}
                    ></Button>
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
        fontSize: 16,
        fontWeight: '400',
        marginTop: 5
      },
      radioBtnView: {
        top: 20,
        width: '100%'
      },
      radioBtnFirstRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 7
      },
      radioBtnSecondRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 7,
        marginVertical: 7
      },
      buttonTextView: {
        display: 'flex',
        flexDirection: 'row',
      },
      checkText: {
        left: 10,
        fontSize: 16,
        color: '#1C2437'
      },
      checkTextDark: {
        left: 10,
        fontSize: 16,
        color: '#FFFF'
      },
      radioBtnThirdRow: {
        marginHorizontal: 7,
        marginBottom: 7
      },
      submitButtonView: {
        width: '100%',
      },
  })

  export default PasswordScreen;