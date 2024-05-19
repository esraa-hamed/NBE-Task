import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
  } from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import MenuCard from '../../atoms/MenuCardOption/MenuCardOption';

interface HorizontalMenuProps {
    sendDataToParent: (data: number) => void;
  }

function HorizontalMenu(props: HorizontalMenuProps): React.JSX.Element {

    const [optionSelected, setOptionSelected] = useState(1);

    const handleHomeClick = () => {
        setOptionSelected(1);
        props.sendDataToParent(1);
    }

    const handleTransferClick = () => {
        setOptionSelected(2);
        props.sendDataToParent(2);
    }

    const handleBeneficiaryClick = () => {
        setOptionSelected(3);
        props.sendDataToParent(3);
    }

    const handleATMClick = () => {
        setOptionSelected(4);
        props.sendDataToParent(4);
    }

    const handleAirpayClick = () => {
        setOptionSelected(5);
        props.sendDataToParent(5);
    }

    return(
        <View style={styles.mainView}>
            <TouchableOpacity onPress={handleHomeClick}>
                <MenuCard name='Home' 
                          optionSelected={optionSelected==1 ? true : false} 
                          icon={<IonIcon name="home" size={35} color={optionSelected==1 ? "white" : "#B7B7B7"}/>}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTransferClick}>
                <MenuCard name='Transfer' 
                          optionSelected={optionSelected==2 ? true : false} 
                          icon={<FeatherIcon name="navigation" size={35} color={optionSelected==2 ? "white" : "#B7B7B7"}/>}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBeneficiaryClick}>
                <MenuCard name='Beneficiaries' 
                          optionSelected={optionSelected==3 ? true : false} 
                          icon={<IonIcon name="people" size={35} color={optionSelected==3 ? "white" : "#B7B7B7"}/>}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleATMClick}>
                <MenuCard name='ATMs' 
                          optionSelected={optionSelected==4 ? true : false} 
                          icon={<IonIcon name="location-sharp" size={35} color={optionSelected==4 ? "white" : "#B7B7B7"}/>}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAirpayClick}>
                <MenuCard name='Air Pay' 
                          optionSelected={optionSelected==5 ? true : false} 
                          icon={<IonIcon name="card-sharp" size={35} color={optionSelected==5 ? "white" : "#B7B7B7"}/>}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
   mainView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 6,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
   },

})

export default HorizontalMenu;