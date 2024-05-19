import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Touchable,
    TouchableOpacity
  } from 'react-native';

import MenuCard from '../../atoms/MenuCardOption/MenuCardOption';
import Home from '../HomeScreen/HomeScreen';
import TransferScreen from '../TransferScreen/TransferScreen';
import BeneficiaryScreen from '../BeneficiaryScreen/BeneficiaryScreen';
import AirpayScreen from '../AirpayScreen/AirpayScreen';
import HorizontalMenu from '../../molecules/HorizontalMenu/HorizontalMenu';
import Header from '../../molecules/Header/Header';

interface HomeNavigationProps {
    firstName: string;
    imageUrl: string;
    currentBalance: string;
    optionSelected: number; //1:Home //2:Transfer //3:Beneficiaries //4:ATMS //5:Air Pay
}

function HomeNavigation({route}): React.JSX.Element {

    const {firstName, imageUrl, currentBalance, optionSelected} = route.params;

    const [optionFromChild, setOptionFromChild] = useState(1);

    const handleOptionFromChild = (data: number) => {
        setOptionFromChild(data);
    }

    return(
        <View style={{flex: 1, backgroundColor: '#F1F3FB',}}>
            {optionFromChild!==2 && (<Header firstName={firstName} imageUrl={imageUrl}/>)}
            {optionFromChild==1 && (
                <Home firstName={firstName} imageUrl={imageUrl} currentBalance={currentBalance}/>
            )}
            {optionFromChild==2 && (
                <TransferScreen />
            )}
            {optionFromChild==3 && (
                <BeneficiaryScreen />
            )}
            {optionFromChild==5 && (
                <AirpayScreen />
            )} 
            <HorizontalMenu sendDataToParent={handleOptionFromChild}/>
        </View>
    );
}

export default HomeNavigation;
