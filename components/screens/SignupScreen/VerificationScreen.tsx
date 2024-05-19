import React, {useState, useEffect} from 'react';
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
  import OTPTextInput from 'react-native-otp-textinput';

  interface VerificationProps{
    mobileNumber: string;
  }

  function VerificationScreen({route, navigation}): React.JSX.Element {

    const [buttonActive, setButtonActive] = useState(false);
    const [seconds, setSeconds] = useState(59);
    const [resendActive, setResendActive] = useState(false);
    const [code, setCode] = useState('');
    
    const { mobileNumber } = route.params;

    const handleSubmitButtonClick = () => {
      navigation.navigate('Password');
    }

    const handleGoingBack = () => {

    }

    const handleOTPInput = (optText : string) => {
      if (optText.length == 5) {
        setButtonActive(true);
        setCode(optText)
      }
      else{
        setButtonActive(false);
      }
    }

    const handleResendCode = () => {
      setResendActive(false);
      setSeconds(59);
    }

    useEffect(() => {
      let timeout;
      if( seconds > 0){  
          timeout = setTimeout(() => {  
            setSeconds(seconds - 1);
      }, 1000);
      }
      else{
        setResendActive(true);
      }
    }, [seconds]);

    return(
      <SafeAreaView style={styles.container}>

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
            <Text style={styles.signupTitleOne}>Verification</Text>
            <Text style={styles.signupTitleTwo}>Enter 5 digit code we sent to {mobileNumber}</Text>
            <OTPTextInput inputCount={5} 
                          containerStyle={{ width: '100%', marginTop: 15}}
                          textInputStyle={{backgroundColor: 'white', borderRadius: 10, height: 65, borderWidth: 1.5, borderColor: '#007236'}}
                          handleTextChange={(optText: string) => handleOTPInput(optText)}
                          />
            <Text style={styles.codeTextOne}>Didn’t receive the code?</Text>
            { resendActive ? (
              <View style={styles.resendButtonView}>
                <Button title='Resend' 
                        fontColor='white' 
                        backgroundColor='#007236'
                         active={true}
                         onPress={handleResendCode}
                         padding={7}
                         ></Button>
              </View>
            ) : (
                <Text style={styles.codeTextTwo}>
                  Request new one in 00:{seconds>9 ? (seconds):('0'+seconds)}
                </Text>
            )}
          </View>

          <View style={styles.submitButtonView}>
              <Button title='Submit' 
                      fontColor='white' 
                      backgroundColor='#007236' 
                      onPress={handleSubmitButtonClick}
                      active={buttonActive}
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
  signupTitleTwo: {
    color: '#B7B7B7',
    fontSize: 15,
    fontWeight: '400',
  },
  submitButtonView: {
    width: '100%',
    display: 'flex',
  },
  codeTextOne: {
    marginTop: 20,
    fontSize: 16,
    color: '#B7B7B7',
    fontWeight: '400'
  },
  codeTextTwo: {
    marginTop: 5,
    color: '#1C2437',
    fontWeight: '700',
    fontSize: 16
  },
  resendButtonView: {
    width: '30%',
    marginTop: 10
  }
})

export default VerificationScreen;