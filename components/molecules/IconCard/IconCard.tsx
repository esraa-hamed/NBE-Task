import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
  } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface IconCardProps {
    cardText: string,
    backgroundColor: string,
    icon: React.ReactNode
}

function IconCard(props: IconCardProps): React.JSX.Element {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={[styles.card, {backgroundColor: props.backgroundColor}]}>
                    {props.icon}
                </View>
            </TouchableOpacity>
            <Text style={styles.cardText}>{props.cardText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    card: {
        borderRadius: 13,
        height: 59,
        width: 59,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        color: "#1C2437",
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 3
    }
})

export default IconCard;