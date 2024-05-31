import React, {useState, useContext} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    SafeAreaView,
    View,
    Image,
    ScrollView,
    Modal
  } from 'react-native';

  import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
  import RNPickerSelect from 'react-native-picker-select';
  import Icon from 'react-native-vector-icons/FontAwesome5';
  import InputBox from '../../molecules/InputBox/InputBox';
  import Button from '../../atoms/Button/Button';
  import { useNavigation } from '@react-navigation/native';
  
  import { ModeContext } from '../../../Context';
  import { OptionContext } from '../../../Context';

  interface transferProps {
    mobileNumber: string;
    // darkMode: boolean;
  }

  function TransferScreen(props: transferProps): React.JSX.Element {

    const [transferTypeFocused, setTransferTypeFocused] = useState(false);
    const [transferFromFocused, setTransferFromFocused] = useState(false);
    const [transferToFocused, setTransferToFocused] = useState(false);
    const [transferAmountFocused, setTransferAmountFocused] = useState(false);
    const [transferReasonFocused, setTransferReasonFocused] = useState(false);

    const [transferTypeValue, setTransferTypeValue] = useState('');
    const [transferFromValue, setTransferFromValue] = useState('');
    const [transferToValue, setTransferToValue] = useState('');
    const [transferAmountValue, setTransferAmountValue] = useState('');
    const [transferReasonValue, setTransferReasonValue] = useState('');

    const [typeTitleValue, setTypeTitleValue] = useState('');
    const [toTitleValue, setToTitleValue] = useState('');
    const [fromTitleValue, setFromTitleValue] = useState('');
    const [amountTitleValue, setAmountTitleValue] = useState('');
    const [reasonTitleValue, setReasonTitleValue] = useState('');

    const [typeTitleColor, setTypeTitleColor] = useState('#B7B7B7');
    const [toTitleColor, setToTitleColor] = useState('#B7B7B7');
    const [fromTitleColor, setFromTitleColor] = useState('#B7B7B7');
    const [amountTitleColor, setAmountTitleColor] = useState('#B7B7B7');
    const [reasonTitleColor, setReasonTitleColor] = useState('#B7B7B7');

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const {optionNumber} = useContext(OptionContext);
    const {setOptionNumber} = useContext(OptionContext);

    const [buttonActive, setButtonActive] = useState(false);

    const navigation = useNavigation() ;

    const handleTransferTypeFocus = () => {
      setTransferTypeFocused(true);
      setTypeTitleValue('Type of transfer');
      setTypeTitleColor('#007236');
    }

    const handleTransferFromFocus = () => {
        setTransferFromFocused(true);
        setFromTitleValue('Transfer from');
        setFromTitleColor('#007236');
    }

    const handleTransferToFocus = () => {
        setTransferToFocused(true);
        setToTitleValue('Transfer to');
        setToTitleColor('#007236');
    }

    const handleTransferAmountFocus = () => {
        setTransferAmountFocused(true);
        setAmountTitleValue('Amount to transfer');
        setAmountTitleColor('#007236');
    }

    const handleTransferReasonFocus = () => {
        setTransferReasonFocused(true);
        setReasonTitleValue('Reason of transfer');
        setReasonTitleColor('#007236');
    }

    const handleTransferTypeBlur = () => {
        setTransferTypeFocused(false);
        setTypeTitleColor('#1C2437');
        if(!transferTypeValue){
            setTypeTitleValue('');
        }
    }
  
      const handleTransferFromBlur = () => {
          setTransferFromFocused(false);
          setFromTitleColor('#1C2437');
          if(!transferFromValue){
            setFromTitleValue('');
          }
    }
  
      const handleTransferToBlur = () => {
          setTransferToFocused(false);
          setToTitleColor('#1C2437');
          if(!transferToValue){
            setToTitleValue('');
          }
    }
  
      const handleTransferAmountBlur = () => {
          setTransferAmountFocused(false);
          setAmountTitleColor('#1C2437');
          if(!transferAmountValue){
            setAmountTitleValue('');
          }
    }
  
      const handleTransferReasonBlur = () => {
          setTransferReasonFocused(false);
          setReasonTitleColor('#1C2437');
          if(!transferReasonValue){
            setReasonTitleValue('');
          }
    }

    const handleTransferTypeChange = (inputText: string) => {
        setTransferTypeValue(inputText);
        if(inputText && transferFromValue && transferToValue && transferAmountValue){
          setButtonActive(true);
        }
        else{
          setButtonActive(false);
        }
    }

    const handleTransferFromChange = (inputText: string) => {
        setTransferFromValue(inputText);
        if(transferTypeValue && inputText && transferToValue && transferAmountValue){
          setButtonActive(true);
        }
        else{
          setButtonActive(false);
        }
    }

    const handleTransferToChange = (inputText: string) => {
        setTransferToValue(inputText);
        if(transferTypeValue && transferFromValue && inputText && transferAmountValue){
          setButtonActive(true);
        }
        else{
          setButtonActive(false);
        }
    }

    const handleTransferAmountChange = (inputText: string) => {
     
        setTransferAmountValue(inputText);
        if(transferTypeValue && transferFromValue && transferToValue && inputText){
          setButtonActive(true);
        }
        else{
          setButtonActive(false);
        }
    }

    const handleTransferReasonChange = (inputText: string) => {
        setTransferReasonValue(inputText);
    }

    const handleGoingBack = () => {
      setOptionNumber(1);
      navigation.navigate('HomeNavigation', {optionSelected: 1, firstName: 'Ahmed', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bank-task-7a340.appspot.com/o/home_user_image.png?alt=media&token=1d81fbc3-1b74-40aa-b977-2dfac6870d59', currentBalance:'2,374,654.25', mobileNumber: '+201143333206'});
    }

    const handleTransferButtonClick = () =>{
      navigation.navigate('Verification', {mobileNumber: props.mobileNumber, parentName: 'Transfer', darkMode: darkMode});
    }

    return(
      <SafeAreaView style={darkMode ? styles.containerDark : styles.container}>
        <ScrollView style={styles.verticalScrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.transferFirstSection}>
            <TouchableOpacity onPress={handleGoingBack}>
              <View style={styles.backView}>
              <MaterialIcon name='arrow-back-ios-new' color={'#FFFF'} size={24} ></MaterialIcon>
              </View>
            </TouchableOpacity>
            <Image source={require('../../../images/signup_bank_logo.png')}/>
        </View>

        <View style={styles.mainContainer}>
            <View style={styles.transferSecondSection}>
              <Text style={darkMode ? styles.transferTitleOneDark : styles.transferTitleOne}>Transfer</Text>
              <View style={styles.pickerView}>
              <RNPickerSelect
                            placeholder={{label: 'Type of transfer', value: null}}
                            onValueChange={(value: string) => handleTransferTypeChange(value)}
                            items={[
                                { label: 'Between your accounts', value: 'ownAccount' },
                                { label: 'Bill payment', value: 'bill' },
                                { label: 'Mobile wallet transfer', value: 'wallet' },
                            ]}
                            style={{
                                inputAndroid: {      
                                    width: '100%',
                                },
                                placeholder: {
                                    color: '#B7B7B7',
                                    fontWeight: '700',
                                    fontSize: 16,
                                    left: 5,
                                }
                            }}
                 
                />
                </View>
                <View style={styles.pickerView}>
              <RNPickerSelect
                            placeholder={{label: 'Transfer from', value: null}}
                            onValueChange={(value: string) => handleTransferFromChange(value)}
                            items={[
                                { label: '042-653214521245   -   $2,145,5874.25', value: '042-653214521245' },
                                { label: '056-32154875423   -   $1,523.48', value: '056-32154875423 ' },
                            ]}
                            style={{
                                inputAndroid: {
                                    
                                    width: '100%',
                                },
                                placeholder: {
                                    color: '#B7B7B7',
                                    fontWeight: '700',
                                    fontSize: 16,
                                    left: 5,

                                }
                            }}
                 
                />
                </View>
                <View style={styles.pickerView}>
              <RNPickerSelect
                            placeholder={{label: 'Transfer to', value: null}}
                            onValueChange={(value: string) => handleTransferToChange(value)}
                            items={[
                                { label: '042-653214521245   -   $2,145,5874.25', value: '042-653214521245' },
                                { label: '056-32154875423   -   $1,523.48', value: '056-32154875423 ' },
                            ]}
                            style={{
                                inputAndroid: {     
                                    width: '100%',
                                },
                                placeholder: {
                                    color: '#B7B7B7',
                                    fontWeight: '700',
                                    fontSize: 16,
                                    left: 5,

                                }
                            }}
                 
                />
                </View>
                <InputBox placeholder='Enter amount to transfer' isPassword={false} inputFocused={transferAmountFocused} inputValue={transferAmountValue} icon={null}
                        borderColor={'#007236'}
                        numericInput={true}
                        fontColor={'black'}
                        placeholderColor={'#B7B7B7'}
                        titleTop={'Amount to transfer'}
                        titleColor={amountTitleColor}
                        backgroundColor={'white'}
                        onFocus={handleTransferAmountFocus}
                        onBlur={handleTransferAmountBlur}
                        onChangeText={ (newText: string) => handleTransferAmountChange(newText)}>
              </InputBox>
                <InputBox placeholder='Enter reason of transfer' isPassword={false} inputFocused={transferReasonFocused} inputValue={transferReasonValue} icon={null}
                        borderColor={'#007236'}
                        fontColor={'black'}
                        placeholderColor={'#B7B7B7'}
                        titleTop={'Reason of transfer'}
                        titleColor={reasonTitleColor}
                        backgroundColor={'white'}
                        onFocus={handleTransferReasonFocus}
                        onBlur={handleTransferReasonBlur}
                        onChangeText={ (newText: string) => handleTransferReasonChange(newText)}>
              </InputBox>
            </View>

        </View>
        </ScrollView>

        <View style={styles.transferButtonView}>
                <Button title='Transfer' fontColor='white' backgroundColor='#007236' onPress={handleTransferButtonClick} active={buttonActive} padding={13}></Button>
        </View> 

        </SafeAreaView>

    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F1F3FB',
      flex: 1,
      paddingHorizontal: 20,
    },
    containerDark: {
      flex:1,
      backgroundColor: '#2E2E2E',
      paddingHorizontal: 20
    },
    verticalScrollView: {
        flexGrow: 1,
    },
    transferFirstSection: {
      display: 'flex',
      alignItems: 'center',
      top: 23,
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
      justifyContent: 'space-between',
      height: '92%'
    },
    transferSecondSection: {
      display: 'flex',
      marginTop: 50,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    transferTitleOne: {
      color: '#1C2437',
      fontSize: 29,
      fontWeight: '700',
    },
    transferTitleOneDark: {
      color: '#FFFF',
      fontSize: 29,
      fontWeight: '700',
    },
    transferButtonView: {
      width: '100%',
      display: 'flex',
      bottom: 20,
    },
    pickerView: {
        borderRadius: 10,
        backgroundColor: 'white',
         height: 65, 
         width: '100%',
         justifyContent: 'center',
         marginTop: 15
    }
  })

  export default TransferScreen;