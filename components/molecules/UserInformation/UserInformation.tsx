import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image
  } from 'react-native';

import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome';

interface UserInfoProps {
    username: string,
    number: string,
    balance: string,
    imageUrl: string,
}

function UserInformation(props: UserInfoProps): React.JSX.Element {
    return(
            <View style={styles.infoContainer}>
                <Image source={{uri: props.imageUrl}} style={styles.infoImage}></Image>
                <View style={styles.textView}>
                    <Text style={styles.headerText}>{props.username}</Text>
                    <View style={styles.iconTextView}>
                        <View style={styles.iconCircleView}>
                            <Icon name="phone" size={7} color={"#B7B7B7"}/>
                        </View>
                        <Text style={styles.numberText}>{props.number}</Text>
                    </View>
                    <View style={styles.iconTextView}>
                        <View style={styles.iconCircleView}>
                            <Icon name="dollar" size={7} color={"#B7B7B7"}/>
                        </View>
                        <Text style={styles.balanceText}>{props.balance}</Text>
                    </View>
                </View>
            </View> 
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        height: 86,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 18,
    },
    textView: {
        display: 'flex',
        flexDirection: 'column',
    },
    infoImage: {
        width: 59,
        height: 59,
        borderRadius: 8,
        marginHorizontal: 15
    },
    headerText: {
        color: '#1C2437',
        fontSize: 14,
        fontWeight: '700',
    },
    iconTextView: {
        display: 'flex',
        flexDirection: 'row',
    },
    numberText: {
        color: '#B7B7B7',
        fontSize: 12,
        fontWeight: '400',
    },
    balanceText: {
        color: '#B7B7B7',
        fontSize: 12,
        fontWeight: '400',
    },
    iconCircleView: {
        backgroundColor: '#00000017',
        borderRadius: 50,
        height: 15,
        width: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    }
})

export default UserInformation;