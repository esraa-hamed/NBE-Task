import React, {useState, useEffect, useContext} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { launchImageLibrary } from 'react-native-image-picker';
  import axios from 'axios';

  import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
  import IonIcon from 'react-native-vector-icons/Ionicons';
  import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
  import RNPickerSelect from 'react-native-picker-select';

  import InputBox from '../../molecules/InputBox/InputBox';
  import Button from '../../atoms/Button/Button';

  import { ModeContext } from '../../../Context';

  interface BeneficiaryProps {
    darkMode: boolean;
  }

  function AddBeneficiary(): React.JSX.Element {

    const [firstNameValue, setFirstNameValue] = useState('');
    const [firstNameFocused, setFirstNameFocused] = useState(false);
    const [firstNameColor, setFirstNameColor] = useState('#1C2437');

    const [lastNameValue, setLastNameValue] = useState('');
    const [lastNameFocused, setLastNameFocused] = useState(false);
    const [lastNameColor, setLastNameColor] = useState('#1C2437');

    const [branchValue, setBranchValue] = useState('');

    const [accountNumValue, setAccountNumValue] = useState('');
    const [accountNumFocused, setAccountNumFocused] = useState(false);
    const [accountNumColor, setAccountNumColor] = useState('#1C2437');

    const [phoneNumValue, setPhoneNumValue] = useState('');
    const [phoneNumFocused, setPhoneNumFocused] = useState(false);
    const [phoneNumColor, setPhoneNumColor] = useState('#1C2437');

    const [emailValue, setEmailValue] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [emailColor, setEmailColor] = useState('#1C2437');

    const [imageUri, setImageUri] = useState(null);

    const [buttonActive, setButtonActive] = useState(false);

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const navigation = useNavigation();

    const handleGoingBack = () => {
        navigation.navigate('HomeNavigation', {optionSelected: 3, firstName: 'Ahmed', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bank-task-7a340.appspot.com/o/home_user_image.png?alt=media&token=1d81fbc3-1b74-40aa-b977-2dfac6870d59', currentBalance:'2,374,654.25', mobileNumber: '+201143333206'});
    }

    const handlePhotoUpload = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
          };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
              const source = { uri: response.assets[0].uri };
              setImageUri(source);
            }
          });
    }

    const handleFirstNameInput = (newText: string) => {
        setFirstNameValue(newText);
        if(newText && lastNameValue && branchValue && accountNumValue && phoneNumValue && emailValue){
            setButtonActive(true);
        }
        else{
            setButtonActive(false);
        }
    }

    const handleLastNameInput = (newText: string) => {
        setLastNameValue(newText);
        if(firstNameValue && newText && branchValue && accountNumValue && phoneNumValue && emailValue){
            setButtonActive(true);
        }
        else{
            setButtonActive(false);
        }
    }

    const handleFirstNameFocus = () => {
        setFirstNameFocused(true);
        setFirstNameColor('#007236');
    }

    const handleLastNameFocus = () => {
        setLastNameFocused(true);
        setLastNameColor('#007236');
    }

    const handleFirstNameBlur = () => {
        setFirstNameFocused(false);
        setFirstNameColor('#1C2437');
    }

    const handleLastNameBlur = () => {
        setLastNameFocused(false);
        setLastNameColor('#1C2437');
    }

    const handleBranchChange = (inputText: string) => {
        setBranchValue(inputText);
        if(firstNameValue && lastNameValue && inputText && accountNumValue && phoneNumValue && emailValue){
            setButtonActive(true);
        }
        else{
            setButtonActive(false);
        }
    }

    const handleAccountNumInput = (newText: string) => {
        setAccountNumValue(newText);
        if(firstNameValue && lastNameValue && branchValue && newText && phoneNumValue && emailValue){
            setButtonActive(true);
        }
        else{
            setButtonActive(false);
        }
    }

    const handleAccountNumFocus = () => {
        setAccountNumFocused(true);
        setAccountNumColor('#007236');
    }

    const handleAccountNumBlur = () => {
        setAccountNumFocused(false);
        setAccountNumColor('#1C2437');
    }

    const handlePhoneNumInput = (newText: string) => {
        setPhoneNumValue(newText);
        if(firstNameValue && lastNameValue && branchValue && accountNumValue && newText && emailValue){
            setButtonActive(true);
        }
        else{
            setButtonActive(false);
        }
    }

    const handlePhoneNumFocus = () => {
        setPhoneNumFocused(true);
        setPhoneNumColor('#007236');
    }

    const handlePhoneNumBlur = () => {
        setPhoneNumFocused(false);
        setPhoneNumColor('#1C2437');
    }

    const handleEmailInput = (newText: string) => {
        setEmailValue(newText);
        if(firstNameValue && lastNameValue && branchValue && accountNumValue && phoneNumValue && newText){
            setButtonActive(true);
        }
        else{
            setButtonActive(false);
        }
    }

    const handleEmailFocus = () => {
        setEmailFocused(true);
        setEmailColor('#007236');
    }

    const handleEmailBlur = () => {
        setEmailFocused(false);
        setEmailColor('#1C2437');
    }

    const handleAddButtonClick = () => {
       
    }

    return(
        <SafeAreaView style={darkMode ? styles.containerDark : styles.container}>

           <View style={styles.beneficiaryFirstSection}>
            <View style={styles.leftPartView}>
                <TouchableOpacity onPress={handleGoingBack}>
                    <View style={styles.backView}>
                        <MaterialIcon name='arrow-back-ios-new' color={'#FFFF'} size={24} ></MaterialIcon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                        <View style={styles.bellIconView}>
                            <IonIcon name="notifications-outline" size={21} color={"#1C2437"} style={{transform: [{ rotate: '17.39deg' }]}}/>
                        </View>
                </TouchableOpacity>
            </View>
            <Image source={require('../../../images/signup_bank_logo.png')}/>
           </View>

           <ScrollView showsVerticalScrollIndicator={false}>
           <View style={styles.beneficiarySecondSection}>

                {!imageUri && 
                    <TouchableOpacity onPress={handlePhotoUpload}>
                        <View style={styles.uploadView}>
                            <SimpleIcon name="camera" size={45} color={"#007236"}/>
                        </View>
                    </TouchableOpacity>
                }

                {imageUri && 
                    <View style={styles.uploadView}>
                        <Image source={imageUri} style={styles.uploadImage}></Image>
                    </View>
                }

                <View style={styles.nameView}>
                    <View style={{width: '47%'}}>
                        <InputBox titleTop='First name' 
                                titleColor={firstNameColor}
                                numericInput={false}
                                isPassword={false}
                                inputValue={firstNameValue}
                                inputFocused={firstNameFocused}
                                fontColor='#1C2437'
                                borderColor='#007236'
                                placeholderColor='#B7B7B7'
                                backgroundColor='white'
                                onChangeText={(newText: string) => handleFirstNameInput(newText)}
                                onFocus={handleFirstNameFocus}
                                onBlur={handleFirstNameBlur}
                                placeholder='First name'
                            />
                    </View>
                    <View style={{width: '47%'}}>
                        <InputBox titleTop='Last name'
                                titleColor={lastNameColor}
                                numericInput={false}
                                isPassword={false}
                                inputValue={lastNameValue}
                                inputFocused={lastNameFocused}
                                fontColor='#1C2437'
                                borderColor='#007236'
                                placeholderColor='#B7B7B7'
                                backgroundColor='white'
                                onChangeText={(newText: string) => handleLastNameInput(newText)}
                                onFocus={handleLastNameFocus}
                                onBlur={handleLastNameBlur}
                                placeholder='Last name'
                            />
                    </View>
                </View>

                <View style={styles.pickerView}>
                    <Text style={styles.branchTitle}>Bank Branch</Text>
                    <RNPickerSelect
                                placeholder={{label: 'Bank branch', value: null}}
                                onValueChange={(value: string) => handleBranchChange(value)}
                                items={[
                                    { label: '043 - Water Way Mall', value: 'water way' },
                                    { label: '052 - Downtow', value: 'bill' },
                                ]}
                                style={{
                                    inputAndroid: {      
                                        width: '100%',
                                        marginLeft: 5
                                    },
                                    placeholder: {
                                        color: '#B7B7B7',
                                        fontWeight: '400',
                                        fontSize: 16,
                                        left: 5,
                                    }
                                }}
                    
                    />
                </View>

                <View style={styles.accountNumberView}>
                    <InputBox       titleTop='Account number'
                                    titleColor={accountNumColor}
                                    numericInput={false}
                                    isPassword={false}
                                    inputValue={accountNumValue}
                                    inputFocused={accountNumFocused}
                                    fontColor='#1C2437'
                                    borderColor='#007236'
                                    placeholderColor='#B7B7B7'
                                    backgroundColor='white'
                                    onChangeText={(newText: string) => handleAccountNumInput(newText)}
                                    onFocus={handleAccountNumFocus}
                                    onBlur={handleAccountNumBlur}
                                    placeholder='Enter account number'
                                />
                </View>

                <View style={styles.phoneNumberView}>
                    <InputBox       titleTop='Phone number'
                                    titleColor={phoneNumColor}
                                    numericInput={true}
                                    isPassword={false}
                                    inputValue={phoneNumValue}
                                    inputFocused={phoneNumFocused}
                                    fontColor='#1C2437'
                                    borderColor='#007236'
                                    placeholderColor='#B7B7B7'
                                    backgroundColor='white'
                                    onChangeText={(newText: string) => handlePhoneNumInput(newText)}
                                    onFocus={handlePhoneNumFocus}
                                    onBlur={handlePhoneNumBlur}
                                    placeholder='Enter phone number'
                                />
                </View>

                <View style={styles.emailView}>
                    <InputBox       titleTop='Email'
                                    titleColor={emailColor}
                                    numericInput={false}
                                    isPassword={false}
                                    inputValue={emailValue}
                                    inputFocused={emailFocused}
                                    fontColor='#1C2437'
                                    borderColor='#007236'
                                    placeholderColor='#B7B7B7'
                                    backgroundColor='white'
                                    onChangeText={(newText: string) => handleEmailInput(newText)}
                                    onFocus={handleEmailFocus}
                                    onBlur={handleEmailBlur}
                                    placeholder='Enter email'
                                />
                </View>

                <View style={styles.buttonView}>
                        <Button title='Add Beneficiary' 
                                fontColor='white' 
                                backgroundColor='#007236' 
                                onPress={handleAddButtonClick}
                                active={buttonActive}
                                padding={13}
                        ></Button>
                </View>

           </View>
           </ScrollView>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F1F3FB',
        paddingHorizontal: 25
    },
    containerDark: {
        flex:1,
        backgroundColor: '#2E2E2E',
        paddingHorizontal: 25
    },
   
    beneficiaryFirstSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    beneficiaryTitleOne: {
        color: '#1C2437',
        fontSize: 20,
        fontWeight: '700',
    },
    beneficiaryTitleOneDark: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    firstSectionIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    leftPartView: {
        display: 'flex',
        flexDirection: 'row',
    },
    bellIconView: {
        padding: 10,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 7,
    },
    beneficiarySecondSection: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadView: {
        height: 138,
        width: 138,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameView: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    accountNumberView: {
        width: '100%',
        marginTop: 2,
    },
    phoneNumberView: {
        width: '100%',
        marginTop: 2,
    },
    emailView: {
        width: '100%',
        marginTop: 2,
    },
    buttonView: {
        width: '100%',
        marginTop: 16,
    },
    pickerView: {
        borderRadius: 10,
        backgroundColor: 'white',
        height: 65, 
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 10,
        alignItems: 'flex-start'
    },
    branchTitle: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 20,
        marginTop: 10,
        color: '#1C2437'
    },
    uploadImage: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    }
  })
export default AddBeneficiary;