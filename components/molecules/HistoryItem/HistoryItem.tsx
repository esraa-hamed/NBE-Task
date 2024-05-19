import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
  } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface HistoryItemProps {
   imageUrl: string;
   name: string;
   date: string;
   price: string;
   shop: boolean;  // 1:shop   // 2:user
   marginBottom: number;
}

function HistoryItem(props: HistoryItemProps): React.JSX.Element {
    return(
        <View style={[styles.mainView, {marginBottom: props.marginBottom}]}>
            <View style={styles.leftView}>
                { props.shop && (
                    <View style={styles.shopIconView}>
                        <Image source={{uri: props.imageUrl}} style={styles.shopImage}/>
                    </View>
                )}
                { !props.shop && (
                    <View style={styles.userIconView} >
                        <Image source={{uri: props.imageUrl}} style={styles.userImage}/>
                    </View>
                )}
                <View style={styles.leftViewText}>
                    <Text style={styles.nameText}>{props.name}</Text>
                    <Text style={styles.dateText}>{props.date}</Text>
                </View>
            </View>
            <View style={styles.rightView}>
                <Text style={styles.priceText}>${props.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    rightView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftView: {
        display: 'flex',
        flexDirection: 'row',
    },
    shopIconView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 50,
        width: 50,
    },
    userIconView: {
        borderRadius: 10,
        height: 50,
        width: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    userImage: {
        width: 50,
        height: 40,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    shopImage: {
        width: 45,
        height: 45,
    },
    leftViewText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 10
    },
    priceText: {
        color: "#1C2437",
        fontSize: 18,
        fontWeight: '700',
    },
    nameText:{
        color: "#1C2437",
        fontSize: 18,
        fontWeight: '400',
    },
    dateText: {
        color: "#B7B7B7",
        fontSize: 14,
        fontWeight: '400'
    }
})

export default HistoryItem;