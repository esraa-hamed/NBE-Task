import React, {useState, useEffect, useContext} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
  } from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import MenuCard from '../../atoms/MenuCardOption/MenuCardOption';

import { ModeContext } from '../../../Context';
import { OptionContext } from '../../../Context';

interface HorizontalMenuProps {
    sendDataToParent: (data: number) => void;
    getDataFromParent: number;
    // darkMode: boolean;
  }

function HorizontalMenu(props: HorizontalMenuProps): React.JSX.Element {

    const [optionSelected, setOptionSelected] = useState(props.getDataFromParent);

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const {optionNumber} = useContext(OptionContext);
    const {setOptionNumber} = useContext(OptionContext);

    const handleHomeClick = () => {
        setOptionSelected(1);
        props.sendDataToParent(1);
        setOptionNumber(1);
    }

    const handleTransferClick = () => {
        setOptionSelected(2);
        props.sendDataToParent(2);
        setOptionNumber(2);
    }

    const handleBeneficiaryClick = () => {
        setOptionSelected(3);
        props.sendDataToParent(3);
        setOptionNumber(3);
    }

    const handleATMClick = () => {
        setOptionSelected(4);
        props.sendDataToParent(4);
        setOptionNumber(4);
    }

    const handleAirpayClick = () => {
        setOptionSelected(5);
        props.sendDataToParent(5);
        setOptionNumber(5);
    }

    useEffect(() => {
        setOptionSelected(props.getDataFromParent);
        console.log("horizontal menu",props.getDataFromParent);
      }, [props.getDataFromParent]);

    return(
        <View style={[styles.mainView, darkMode ? {backgroundColor: "black"} : {backgroundColor: "#FFFFFF"}]}>
            <TouchableOpacity onPress={handleHomeClick}>
                {!darkMode && 
                    <MenuCard name='Home' 
                    optionSelected={optionNumber==1 ? true : false} 
                    icon={<IonIcon name="home" size={35} color={optionNumber==1 ? "white" : "#B7B7B7"}/>}
                    darkMode={darkMode}
                    />
                }
                {darkMode && 
                    <MenuCard name='Home' 
                    optionSelected={optionNumber==1 ? true : false} 
                    icon={<IonIcon name="home" size={35} color={optionNumber==1 ? "white" : "#1e1e1e"}/>}
                    darkMode={darkMode}
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTransferClick}>
                {!darkMode && 
                    <MenuCard name='Transfer' 
                    optionSelected={optionNumber==2 ? true : false} 
                    icon={<FeatherIcon name="navigation" size={35} color={optionNumber==2 ? "white" : "#B7B7B7"}/>}
                    darkMode={darkMode}
                    />
                }
                {darkMode && 
                    <MenuCard name='Transfer' 
                    optionSelected={optionNumber==2 ? true : false} 
                    icon={<FeatherIcon name="navigation" size={35} color={optionNumber==2 ? "white" : "#1e1e1e"}/>}
                    darkMode={darkMode}
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBeneficiaryClick}>
                {!darkMode && 
                    <MenuCard name='Beneficiaries' 
                    optionSelected={optionNumber==3 ? true : false} 
                    icon={<IonIcon name="people" size={35} color={optionNumber==3 ? "white" : "#B7B7B7"}/>}
                    darkMode={darkMode}
                    />
                }
                {darkMode && 
                    <MenuCard name='Beneficiaries' 
                    optionSelected={optionNumber==3 ? true : false} 
                    icon={<IonIcon name="people" size={35} color={optionNumber==3 ? "white" : "#1e1e1e"}/>}
                    darkMode={darkMode}
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={handleATMClick}>
                {!darkMode && 
                    <MenuCard name='ATMs' 
                              optionSelected={optionNumber==4 ? true : false} 
                              icon={<IonIcon name="location-sharp" size={35} color={optionNumber==4 ? "white" : "#B7B7B7"}/>}
                              darkMode={darkMode}
                    />
                }
                {darkMode && 
                    <MenuCard name='ATMs' 
                              optionSelected={optionNumber==4 ? true : false} 
                              icon={<IonIcon name="location-sharp" size={35} color={optionNumber==4 ? "white" : "#1e1e1e"}/>}
                              darkMode={darkMode}
                    />
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAirpayClick}>
                {darkMode && 
                    <MenuCard name='Air Pay' 
                    optionSelected={optionNumber==5 ? true : false} 
                    icon={<IonIcon name="card-sharp" size={35} color={optionNumber==5 ? "white" : "#1e1e1e"}/>}
                    darkMode={darkMode}
                    />
                }
                {!darkMode && 
                    <MenuCard name='Air Pay' 
                    optionSelected={optionNumber==5 ? true : false} 
                    icon={<IonIcon name="card-sharp" size={35} color={optionNumber==5 ? "white" : "#B7B7B7"}/>}
                    darkMode={darkMode}
                    />
                }
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
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
   },

})

export default HorizontalMenu;