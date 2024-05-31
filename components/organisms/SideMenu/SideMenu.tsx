import React, {useState, useEffect, useCallback, useRef, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

import MenuItem from '../../molecules/MenuItem/MenuItem';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ModeContext } from '../../../Context';

interface SideMenuProps {
    name: string;
    imageUrl: string;
    mobileNumber: string;
    // sendMode: (darkMode: boolean) => void;
    // darkMode: boolean;
}

function SideMenu(props: SideMenuProps): React.JSX.Element {

    const [currentLanguage, setCurrentLanguage] = useState('AR');
    const [itemClicked, setItemClicked] = useState(false);
    // const [darkMode, setDarkMode] = useState(false);

    const navigation = useNavigation();
    const handleLanguageChange = () => {
        if(currentLanguage === 'AR') {
            setCurrentLanguage('EN');
        }
        else{
            setCurrentLanguage('AR');
        }
    }

    const handleLogoutClick = () => {
        setItemClicked(!itemClicked);
        navigation.navigate('Login');
    }

    const handleToggleValue = (darkMode: boolean) => {
        // props.sendMode(darkMode);
        setDarkMode(darkMode);
    }

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);


    return(
        <View style={[styles.menuView, darkMode ? styles.darkModeBackground : styles.normalModeBackground]}>

            <View style={styles.menuFirstSection}>
                {darkMode ? 
                    <Image source={require('../../../images/home_bank_logo.png')}/>
                     : 
                    <Image source={require('../../../images/signup_bank_logo.png')}/>
                }
                <TouchableOpacity onPress={handleLanguageChange}>
                    <View style={styles.languageView}>
                        <Text style={styles.languageText}>{currentLanguage}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.mainSection}>

                <View style={styles.menuSecondSection}>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Account Summary' 
                                  icon={<MaterialCommunityIcon name='file-chart-outline' size={20} />}
                                  darkModeOption={false}
                                  sendMode={handleToggleValue}
                                  darkModeValue={darkMode}
                                />
                    </View>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Open Certificates & Deposits' 
                                icon={<MaterialCommunityIcon name="file-certificate" size={20} />}
                                darkModeOption={false}
                                sendMode={handleToggleValue}
                                darkModeValue={darkMode}
                                />
                    </View>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Payement Services' 
                                icon={<Icon5 name="money-check-alt" size={18} style={{marginLeft: 8}}/>}
                                darkModeOption={false}
                                sendMode={handleToggleValue}
                                darkModeValue={darkMode}
                                />
                    </View>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Cards Services' 
                                icon={<MaterialCommunityIcon name="credit-card-multiple-outline" size={20}/>}
                                darkModeOption={false}
                                sendMode={handleToggleValue}
                                darkModeValue={darkMode}
                                />
                    </View>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Hard Token' 
                                icon={<Icon5 name="tablet-alt" size={18} style={{marginLeft: 12}}/>}
                                darkModeOption={false}
                                sendMode={handleToggleValue}
                                darkModeValue={darkMode}
                                />
                    </View>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Offers' 
                                icon={<MaterialCommunityIcon name="sale" size={20}/>}
                                darkModeOption={false}
                                sendMode={handleToggleValue}
                                darkModeValue={darkMode}
                                />
                    </View>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Customer Services' 
                                icon={<MaterialIcon name='people-alt' size={20}/>}
                                darkModeOption={false}
                                sendMode={handleToggleValue}
                                darkModeValue={darkMode}
                                />
                    </View>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Calculators' 
                                icon={<MaterialCommunityIcon name="calculator-variant" size={20}/>}
                                darkModeOption={false}
                                sendMode={handleToggleValue}
                                darkModeValue={darkMode}
                                />
                    </View>
                    <View style={styles.menuItemView}>
                        <MenuItem text='Dark Mode' 
                                icon={<MaterialIcon name='dark-mode' size={20}/>}
                                darkModeOption={true}
                                sendMode={handleToggleValue}
                                darkModeValue={darkMode}
                                />
                    </View>
                </View>

                <View>

                    <TouchableOpacity onPress={handleLogoutClick}>
                        <View style={itemClicked ? styles.logoutViewClicked : styles.logoutView}>
                            <View style={itemClicked ? styles.iconContainerClicked : styles.iconContainer}>  
                            </View>
                            {!darkMode &&
                                <Icon name='power-off' size={22} style={itemClicked ? styles.iconClickedStyle : styles.iconStyle}/>
                            }
                            {darkMode &&
                                <Icon name='power-off' size={22} style={itemClicked ? styles.iconClickedDarkStyle : styles.iconStyle}/>
                            }
                            {!darkMode &&
                                <Text style={itemClicked ? styles.logoutTextClicked : styles.logoutText}>Log Out</Text>
                            }
                            {darkMode &&
                                <Text style={itemClicked ? styles.logoutTextClickedDark : styles.logoutText}>Log Out</Text>
                            }
                        </View>
                    </TouchableOpacity>

                    <View style={styles.cardView}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{uri: props.imageUrl}} style={styles.imageView}></Image>
                            <View style={styles.cardTextView}>
                                <Text style={styles.nameText}>{props.name}</Text>
                                <Text style={styles.numberText}>{props.mobileNumber}</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <MaterialCommunityIcon name='dots-vertical' size={26} color={'#1B1B1B'}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    menuView: {
        backgroundColor: '#F1F3FB',
        flex: 1,
        width: 330,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        paddingVertical: 20,
        paddingHorizontal: 20,
        textAlign: 'left',
    },
    darkModeBackground: {
        backgroundColor: '#2E2E2E',
    },
    normalModeBackground: {
        backgroundColor: '#F1F3FB',
    },
    menuFirstSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    languageView: {
        backgroundColor: 'white',
        height: 40,
        width: 40,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    languageText: {
        color: '#007236',
        fontWeight: '700',
        fontSize: 16
    },
    menuSecondSection: {
        top: 30,
    },
    menuItemView: {
        marginBottom: 3,
    },
    logoutView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginBottom: 7
    },
    logoutViewClicked: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#E1072133',
        borderRadius: 13,
        marginBottom: 7
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 30,
        width: 30,
        backgroundColor: '#E1072133',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        zIndex: 1
    },
    iconContainerClicked: {
        display: 'flex',
        flexDirection: 'column',
        height: 30,
        width: 30,
        backgroundColor: '#E1072133',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        zIndex: 1
    },
    iconStyle: {
        zIndex: 3, 
        position: 'absolute',
        opacity: 0.8,
        marginLeft: 15,
        marginTop: 8,
        fontWeight: '700',
        color: '#EB001B',
    },
    iconClickedStyle: {
        zIndex: 3, 
        position: 'absolute',
        marginLeft: 15,
        marginTop: 8,
        fontWeight: '700',
        color: 'black',
    },
    iconClickedDarkStyle: {
        zIndex: 3, 
        position: 'absolute',
        marginLeft: 15,
        marginTop: 8,
        fontWeight: '700',
        color: 'white',
    },
    logoutText: {
        color: '#EB001B',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
    },
    logoutTextClicked: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 10,
    },
    logoutTextClickedDark: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 10,
    },
    mainSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    cardView:{
        backgroundColor: '#FFFFFF',
        borderRadius: 29,
        width: '100%',
        height: 85,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    cardTextView: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 15,
    },
    imageView: {
        height: 50,
        width: 50,
        borderRadius: 12,
    },
    nameText: {
        color: '#1B1B1B',
        fontWeight: '500',
        fontSize: 18
    },
    numberText: {
        color: '#4D4D4D',
        fontWeight: '400',
        fontSize: 14
    }
});

export default SideMenu;
