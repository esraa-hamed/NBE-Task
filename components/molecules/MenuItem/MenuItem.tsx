import React, {useState, useEffect, useContext} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
  } from 'react-native';
  import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

  import { ModeContext } from '../../../Context';

interface MenuItemProps {
   text: string;
   icon: React.ReactElement; 
   darkModeOption: boolean;
   sendMode : (darkMode: boolean) => void;
//    darkModeValue: boolean;
}

function MenuItem(props: MenuItemProps): React.JSX.Element {

    const [itemClicked, setItemClicked] = useState(false);
    const [toggleClicked, setToggleClicked] = useState(false);
    // const [darkMode, setDarkMode] = useState(false);

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);


    const handleMenuItemClick = () => {
        setItemClicked(!itemClicked);
    }

    const handleToggleClick = () => {
        setToggleClicked(!toggleClicked);
        props.sendMode(!darkMode);
        setDarkMode(!darkMode);
    }

    return(
        <TouchableOpacity onPress={handleMenuItemClick} disabled={props.darkModeOption}>
            <View style={itemClicked ? styles.menuItemContainerClicked : styles.menuItemContainer}>
                {!darkMode && 
                    <View style={itemClicked ? styles.iconContainerClicked : styles.iconContainer}></View>
                }
                {darkMode &&
                    <View style={itemClicked ? styles.iconContainerClickedDark : styles.iconContainerDark}></View>
                }
                {!darkMode && React.cloneElement(props.icon, {
                        style: itemClicked ? styles.iconClickedStyle : styles.iconStyle
                })}
                {darkMode && React.cloneElement(props.icon, {
                        style: itemClicked ? styles.iconClickedDarkStyle : styles.iconDarkStyle
                })}
                <View style={styles.textRowView}>
                    {!darkMode
                        && 
                        <Text style={itemClicked ? styles.menuItemTextClicked : styles.menuItemText}>
                                {props.text}
                        </Text>
                    }
                    {darkMode
                        && 
                        <Text style={itemClicked ? styles.menuItemTextClickedDark : styles.menuItemTextDark}>
                                {props.text}
                        </Text>
                    }
                    {props.darkModeOption && 
                        <TouchableOpacity onPress={handleToggleClick}>
                            <FontAwesomeIcon name={darkMode ? 'toggle-on' : 'toggle-off'} 
                                             size={29}
                                             style={darkMode ? styles.toggleOn : styles.toggleOff}/>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    menuItemContainerClicked: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007236',
        borderRadius: 13,
        padding: 5,
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 30,
        width: 30,
        backgroundColor: '#1B1B1B',
        opacity: 0.2,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        zIndex: 1
    },
    iconContainerDark: {
        display: 'flex',
        flexDirection: 'column',
        height: 30,
        width: 30,
        backgroundColor: '#B7B7B7',
        opacity: 0.2,
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
        backgroundColor: '#FFFF',
        opacity: 0.2,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        zIndex: 1
    },
    iconContainerClickedDark: {
        display: 'flex',
        flexDirection: 'column',
        height: 30,
        width: 30,
        backgroundColor: '#FFFF',
        opacity: 0.2,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        zIndex: 1
    },
    menuItemText: {
        color: '#1B1B1B',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
    },
    menuItemTextDark: {
        color: '#FFFF',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
    },
    menuItemTextClicked: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
    },
    menuItemTextClickedDark: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 10,
    },
    iconStyle: {
        zIndex: 3, 
        position: 'absolute',
        opacity: 0.4,
        marginLeft: 15,
        fontWeight: '700',
        color: '#1B1B1B',
    },
    iconClickedStyle: {
        zIndex: 3, 
        position: 'absolute',
        marginLeft: 15,
        fontWeight: '700',
        color: '#FFFF',
    },
    iconDarkStyle: {
        zIndex: 3, 
        position: 'absolute',
        opacity: 0.6,
        marginLeft: 15,
        fontWeight: '700',
        color: 'white',
    },
    iconClickedDarkStyle: {
        zIndex: 3, 
        position: 'absolute',
        marginLeft: 15,
        fontWeight: '700',
        color: '#FFFF',
    },
    textRowView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%'
    },
    toggleOn: {
        color: '#007236',
    },
    toggleOff: {
        color: '#B3B3B3',
    }
})

export default MenuItem;