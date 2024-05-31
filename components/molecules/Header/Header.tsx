import React, {useState, useEffect, useContext} from 'react';
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

  import { ModeContext } from '../../../Context';

  interface HeaderProps{
    firstName: string;
    imageUrl: string;
    transparent: boolean;
    onMenuPress: () => void;
    // darkMode: boolean;
  }

  function Header(props: HeaderProps): React.JSX.Element {

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);


    return(
        <View style={[styles.firstSection, props.transparent ? {backgroundColor: 'transparent', zIndex: 3, position: 'absolute'} : (darkMode ? {backgroundColor: '#2E2E2E'} :{backgroundColor: '#F1F3FB'})]}>
                <View style={styles.leftPart}>
                    <TouchableOpacity onPress={props.onMenuPress}>
                        <MaterialIcon name='menu' size={25} color={darkMode ? "white" : "#000000"} style={{top: 10, right: 5}}/>
                    </TouchableOpacity>
                    <Image style={styles.userImage} source={{ uri: props.imageUrl }}></Image>
                    <View style={styles.userNameView}>
                        <Text style={[styles.userNameTextOne, darkMode? styles.darkModeText : styles.normalModeText]}>Good morning</Text>
                        <Text style={[styles.userNameTextTwo, darkMode? styles.darkModeText : styles.normalModeText]}>{props.firstName}</Text>
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
        // marginTop: 30,
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        width: '100%',
        zIndex: 1,
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
    darkModeText:{
        color: 'white',
    },
    normalModeText:{
        color: 'black',
    }
  })

  export default Header;