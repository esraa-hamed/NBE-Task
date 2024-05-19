import React, {useState, useEffect} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';


  import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
  import IonIcon from 'react-native-vector-icons/Ionicons';

  interface HeaderProps{
    firstName: string;
    imageUrl: string;
  }

  function Header(props: HeaderProps): React.JSX.Element {
    return(
        <View style={styles.firstSection}>
                <View style={styles.leftPart}>
                    <TouchableOpacity>
                        <MaterialIcon name='menu' size={25} color={"#000000"} style={{top: 10, right: 5}}/>
                    </TouchableOpacity>
                    <Image style={styles.userImage} source={{ uri: props.imageUrl }}></Image>
                    <View style={styles.userNameView}>
                        <Text style={styles.userNameTextOne}>Good morning</Text>
                        <Text style={styles.userNameTextTwo}>{props.firstName}</Text>
                    </View>
                </View>
                <View style={styles.rightPart}>
                    <TouchableOpacity>
                        <IonIcon name="notifications-outline" size={21} color={"#1C2437"} style={{top: 2, transform: [{ rotate: '17.39deg' }]}}/>
                    </TouchableOpacity>
                </View>
            </View>
    )
  }

  const styles = StyleSheet.create({
    firstSection: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        backgroundColor: '#F1F3FB',
       
    },
    leftPart: {
        display: 'flex',
        flexDirection: 'row',
    },
    userNameView: {
        marginLeft: 10
    },
    userNameTextOne: {
        fontSize: 14,
        color: 'black',
        fontWeight: '300'
    },
    userNameTextTwo: {
        fontSize: 14,
        color: 'black',
        fontWeight: '700'
    },
    rightPart: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 8,
    },
    userImage: {
        borderRadius: 10,
        height: 50,
        width: 50,
        left: 2
    },
  })

  export default Header;