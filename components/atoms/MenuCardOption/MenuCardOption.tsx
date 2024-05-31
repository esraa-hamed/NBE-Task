import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
  } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface MenuCardProps {
    name: string,
    icon: React.ReactNode;
    optionSelected: boolean;
    darkMode: boolean;
}

function MenuCard(props: MenuCardProps): React.JSX.Element {
    return(
        <View>
            {!props.darkMode && 
                <View style={ props.optionSelected ? styles.activeView : styles.passiveView}>
                    {props.icon}
                    <Text style={props.optionSelected ? styles.activeText: styles.passiveText}>{props.name}</Text>
                </View>
            }
            {props.darkMode &&
                <View style={ props.optionSelected ? styles.activeViewDark : styles.passiveViewDark}>
                    {props.icon}
                    <Text style={props.optionSelected ? styles.activeTextDark : styles.passiveTextDark}>{props.name}</Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
   activeView: {
    backgroundColor: "#007236",
    borderRadius: 16,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
   },
   passiveView: {
    backgroundColor: "#F1F3FB",
    borderRadius: 16,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
   },
   activeText: {
    fontSize: 10,
    fontWeight: '400',
    color: "#FFFFFF",
   },
   passiveText: {
    fontSize: 10,
    fontWeight: '400',
    color: "#B7B7B7",
   },
   activeViewDark: {
    backgroundColor: '#2f2f2f',
    borderRadius: 16,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
   },
   passiveViewDark: {
    backgroundColor: "#B7B7B7",
    borderRadius: 16,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
   },
   activeTextDark: {
    fontSize: 10,
    fontWeight: '400',
    color: "#FFFFFF",
   },
   passiveTextDark: {
    fontSize: 10,
    fontWeight: '400',
    color: "#2f2f2f",
   },
})

export default MenuCard;