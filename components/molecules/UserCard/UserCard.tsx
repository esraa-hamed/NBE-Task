import React, {useState} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image
  } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

interface UserCardProps {
    username: string,
    imageUrl: string,
    imageStyle: string // either 'contain' or 'cover',
    marginRight: number
}

function UserCard(props: UserCardProps): React.JSX.Element {
    return(
        <View style={ [styles.container, {marginRight: props.marginRight}]}>
            <TouchableOpacity>
                <View style={props.imageStyle=='contain' ? styles.cardContain : styles.cardCover}>
                <Image source={{uri: props.imageUrl}} style={props.imageStyle=='contain' ? styles.imageContain : styles.imageCover}></Image>
                <Text style={styles.cardText}>{props.username}</Text>
                </View>
            </TouchableOpacity>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    cardContain: {
        borderRadius: 18,
        height: 86,
        width: 77,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FC'
    },
    cardCover: {
        borderRadius: 18,
        height: 86,
        width: 77,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F8F9FC'
    },
    cardText: {
        color: "#1C2437",
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 3
    },
    imageContain: {
        borderRadius: 8,
        height: 33.35,
        width: 33.35
    },
    imageCover:{
        width: 77,
        height: 55,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})

export default UserCard;