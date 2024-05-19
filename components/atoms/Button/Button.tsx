import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    View
  } from 'react-native';

  interface ButtonProps extends TouchableOpacityProps{
    title: string;
    fontColor: string;
    backgroundColor: string;
    active: boolean;
    padding: number;
}

function Button(props: ButtonProps): React.JSX.Element {
    const {padding = 13} = props;
    return(
        <View>
            {props.active ? (
                <TouchableOpacity onPress={props.onPress}>
                    <Text style={ [styles.loginText, {color: props.fontColor, backgroundColor: props.backgroundColor, padding: padding}]}>{props.title}</Text>
                </TouchableOpacity>
            ) : (
                    <Text style={ [styles.loginText, {color: props.fontColor, backgroundColor: "#B7B7B7", padding: padding}]}>{props.title}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    loginText: {
        borderRadius: 12.5,
        // padding: 13,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
      },
})

export default Button;