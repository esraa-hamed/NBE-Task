import React, {useState, useEffect, useCallback, useRef, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Animated,
    Easing,
  } from 'react-native';

import MenuCard from '../../atoms/MenuCardOption/MenuCardOption';
import Home from '../HomeScreen/HomeScreen';
import TransferScreen from '../TransferScreen/TransferScreen';
import BeneficiaryScreen from '../BeneficiaryScreen/BeneficiaryScreen';
import MapScreen from '../MapScreen/MapScreen';
import AirpayScreen from '../AirpayScreen/AirpayScreen';
import HorizontalMenu from '../../molecules/HorizontalMenu/HorizontalMenu';
import Header from '../../molecules/Header/Header';
import SideMenu from '../../organisms/SideMenu/SideMenu';
import AddBeneficiary from '../BeneficiaryScreen/AddBeneficiary';
import TransactionHistory from '../BeneficiaryScreen/TransactionHistory';
import { ModeContext } from '../../../Context';
import { OptionContext } from '../../../Context';

 //1:Home //2:Transfer //3:Beneficiaries //4:ATMS //5:Air Pay
 //3--> List, Add, History

function HomeNavigation({route}): React.JSX.Element {

    const {optionSelected=1,firstName, imageUrl, currentBalance, mobileNumber, darkModeFromParent, beneficiaryPage='List', beneficiaryInfo} = route.params || {};
    const [optionFromChild, setOptionFromChild] = useState(optionSelected);
    const [showMenu, setShowMenu] = useState(false);
    const menuAnimation = useRef(new Animated.Value(-330)).current;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [benefChanged, setBenefChanged] = useState(false);
    const [overlay, setOverlay] = useState(false);
    var benefPage = beneficiaryPage;

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const {optionNumber} = useContext(OptionContext);
    const {setOptionNumber} = useContext(OptionContext);

    // const menuTranslateX = menuAnimation.interpolate({
    //     inputRange: [0, 330],
    //     outputRange: [-1, 0], // Adjust this value to match your menu width
    // });

    const handleShowMenu = () => {
        setShowMenu(true);
        Animated.timing(menuAnimation, {
            toValue: 0, // Slide in to the screen
            duration: 450,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const handleCloseMenu = () => {
        // setShowMenu(false);
        Animated.timing(menuAnimation, {
            toValue: -330, 
            duration: 450,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => setShowMenu(false));
    }

    const handleOptionFromChild = (data: number) => {
        console.log(beneficiaryInfo);
        setOptionFromChild(data);
    }

    const handleDarkMode = (darkMode: boolean) => {
        setIsDarkMode(darkMode);
        setDarkMode(darkMode);
    }

    const handleOverlay = (showOverlay: boolean) => {
        setOverlay(showOverlay);
    }

    useEffect(() => {
            benefPage='List';
            setBenefChanged(!benefChanged);
            console.log(benefPage, optionFromChild)
        
      }, [optionFromChild]);


    // useEffect(() => {
    //     if(optionSelected !== undefined) {
    //         console.log("Entered", optionSelected);
    //         setOptionFromChild(optionSelected);
    //     }
    //   }, [optionSelected]);

        useFocusEffect(
            useCallback(() => {
                if(optionSelected!==undefined){
                    setOptionFromChild(optionSelected);
                }
                }, [optionSelected])
      );

      const backgroundColor = darkMode ? "#2E2E2E" : "#FFFFFF";

    return(
        <View style={[{flex: 1}, {backgroundColor}]}>
            {optionNumber!==2 && optionNumber!==4 && optionNumber!==3 && (
                <Header firstName={firstName} imageUrl={imageUrl} transparent={false} onMenuPress={handleShowMenu} />
            )}
            {optionNumber==3 && beneficiaryPage!=='Add' && (
                <Header firstName={firstName} imageUrl={imageUrl} transparent={false} onMenuPress={handleShowMenu} />
            )}
            {optionNumber==4 && (
                <Header firstName={firstName} imageUrl={imageUrl} transparent={true} onMenuPress={handleShowMenu} />
            )}

            {optionNumber==5 && overlay && <View style={styles.overlay} />}

            {optionNumber==1 && (
                <Home firstName={firstName} imageUrl={imageUrl} currentBalance={currentBalance} />
            )}
            {optionNumber==2 && (
                <TransferScreen mobileNumber={mobileNumber} />
            )}
            {optionNumber==3 && benefPage=='List' && (
                <BeneficiaryScreen />
            )}
            {optionNumber==3 && benefPage=='Add' && (
                <AddBeneficiary />
            )}
            {optionNumber==3 && benefPage=='History' && (
                <TransactionHistory name={beneficiaryInfo?.name || ''} image={beneficiaryInfo?.image || ''} number={beneficiaryInfo?.number || '0'} balance={beneficiaryInfo?.balance || '00'} />
            )}
            {optionNumber==4 && (
                <MapScreen />
            )}
            {optionNumber==5 && (
                <AirpayScreen sendOverlay={(handleOverlay)}/>
            )} 
            <HorizontalMenu sendDataToParent={handleOptionFromChild} getDataFromParent={optionFromChild} />
            {showMenu &&      
                    <TouchableWithoutFeedback onPress={handleCloseMenu}>
                        <View style={styles.overlay} />
                    </TouchableWithoutFeedback>}
            {showMenu && 
                <Animated.View style={ [styles.animationView, {transform: [{translateX: menuAnimation}]}]}>
                    <SideMenu name={firstName} imageUrl={imageUrl} mobileNumber={mobileNumber} sendMode={handleDarkMode} />
                </Animated.View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        zIndex: 2,
        position: 'absolute'
    },
    animationView: {
        flex:1, 
        zIndex: 5, 
        position: 'absolute', 
        height: '100%',
    }
});

export default HomeNavigation;
