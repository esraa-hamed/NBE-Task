import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';

interface InputBoxProps extends TextInputProps{
    icon: React.ReactNode;
    isPassword: boolean;
    inputFocused: boolean;
    numericInput: boolean;
    titleTop: string;
    titleColor: string;
    inputValue: string;
    borderColor: string;
    backgroundColor: string;
    fontColor: string;
    placeholderColor: string;
}

function InputBox(props: InputBoxProps): React.JSX.Element {

    const {placeholder, icon, isPassword=false, inputFocused, inputValue, borderColor, backgroundColor, fontColor, titleTop='', titleColor='', numericInput=false} = props;
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(true);
    }

    const handleHidePassword = () => {
      setShowPassword(false);
    }

    return(
        <View style={ [styles.inputView, inputFocused ? {borderColor: borderColor, backgroundColor: backgroundColor, borderWidth: 1.5} : {borderColor: '#FFFFFF80', backgroundColor: backgroundColor, borderWidth: 1.5} ]}>
            {props.icon && (
                  <View style={styles.iconView}>
                    {props.icon}
                  </View>
            )}
            { titleTop ? (
                <View style={props.icon ? styles.textInputView : styles.textInputViewNoIcon}>
                    <Text style={[styles.textTop, {color: titleColor}]}>{props.titleTop}</Text>
                    <View style={props.icon ? styles.viewRow : styles.viewRowNoIcon}>
                      <TextInput 
                      placeholder={ props.inputFocused || props.inputValue ? '' : props.placeholder}
                      style={ [styles.inputTopStyle, {color: fontColor}]} 
                      placeholderTextColor={props.placeholderColor}
                      keyboardType={ numericInput ? "numeric" : "default"}
                      secureTextEntry={isPassword && !showPassword}
                      onFocus={props.onFocus}
                      onBlur={props.onBlur}
                      value={inputValue}
                      onChangeText={props.onChangeText}
                      >
                      </TextInput>
                      {isPassword && !showPassword &&
                      (
                        <TouchableOpacity onPress={handleShowPassword}>
                          <EntypoIcon name='eye-with-line' color={'#B7B7B7'} size={20} style={{top: 15, right: 15}}/>
                        </TouchableOpacity>
                      )}
                      {isPassword && showPassword && (
                        <TouchableOpacity onPress={handleHidePassword}>
                          <EntypoIcon name='eye' color={'#B7B7B7'} size={20} style={{top: 15, right: 15}}/>
                        </TouchableOpacity>
                      )}
                    </View>
              </View>
            ) : (  
                <TextInput 
                    placeholder={ props.inputFocused || props.inputValue ? '' : props.placeholder}
                    style={ [styles.inputStyle, {color: fontColor}]} 
                    placeholderTextColor={props.placeholderColor}
                    secureTextEntry={isPassword}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    value={inputValue}
                    onChangeText={props.onChangeText}
                >
                </TextInput>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        width: '100%',
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 2,
        marginTop: 10,
        borderRadius: 10,
      },
      inputStyle: {
        fontSize: 20,
        left: 17,
        width: '85%',
      },
      textInputView: {
        fontSize: 20,
        left: 0,
        width: '80%',
      },
      textInputViewNoIcon: {
        fontSize: 20,
        left: 20,
        width: '90%',
      },
      iconView:  {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textTop: {
        fontSize: 16,
        marginBottom: -9,
        fontWeight: '700',
        marginTop: 7
      },
      inputTopStyle: {
        fontSize: 18,
        marginLeft: -4,
        marginBottom: -5,
        width: '85%'
      },  
      viewRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
     
})

export default InputBox;