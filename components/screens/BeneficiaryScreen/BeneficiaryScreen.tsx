import React, {useState, useEffect, useContext} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Touchable,
    FlatList
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
  import IonIcon from 'react-native-vector-icons/Ionicons';
  import UserCard from '../../molecules/UserCard/UserCard';
  import UserInformation from '../../molecules/UserInformation/UserInformation';
  import { ModeContext } from '../../../Context';

  interface BeneficiaryProps {
    darkMode: boolean;
  }

  function BeneficiaryScreen(): React.JSX.Element {

    const bInformationEmpty = [];

    const navigation = useNavigation();

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const bInformation = [
        {
            name: 'Hala',
            number: '+20 123 456 7890',
            balance: '802,828.61',
            image: 'https://images.unsplash.com/photo-1524550158212-33f2ff985344?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Maria',
            number: '+20 123 456 7890',
            balance: '1000',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Marten',
            number: '+20 123 456 7890',
            balance: '213,828',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Rose',
            number: '+20 123 456 7890',
            balance: '455,980',
            image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'John',
            number: '+20 123 456 7890',
            balance: '3000',
            image: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Jessica',
            number: '+20 123 456 7890',
            balance: '80,000',
            image: 'https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Mariam',
            number: '+20 123 456 7890',
            balance: '150,000',
            image: 'https://images.unsplash.com/photo-1531618236489-173a1781cce5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Ramy',
            number: '+20 123 456 7890',
            balance: '400,000',
            image: 'https://images.unsplash.com/photo-1544390518-77b4770ba804?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },{
            name: 'Robert',
            number: '+20 123 456 7890',
            balance: '200,000',
            image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2363&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },{
            name: 'David',
            number: '+20 123 456 7890',
            balance: '20,000',
            image: 'https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },{
            name: 'Malek',
            number: '+20 123 456 7890',
            balance: '340,000',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },{
            name: 'Johny',
            number: '+20 123 456 7890',
            balance: '700,000',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },{
            name: 'Martin',
            number: '+20 123 456 7890',
            balance: '1,200,000',
            image: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },{
            name: 'Caren',
            number: '+20 123 456 7890',
            balance: '20,000',
            image: 'https://images.unsplash.com/photo-1505330375570-be7ea15a6ce9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },{
            name: 'Lina',
            number: '+20 123 456 7890',
            balance: '100,000',
            image: 'https://images.unsplash.com/photo-1484503360389-8ed1e281fc76?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    const [optionOneClicked, setOptionOneClicked] = useState(true);
    const [optionTwoClicked, setOptionTwoClicked] = useState(false);

    const handleOptionOneClick = () => {
        setOptionOneClicked(true);
        setOptionTwoClicked(false);
    }

    const handleOptionTwoClick = () => {
        setOptionOneClicked(false);
        setOptionTwoClicked(true);
    }

    const handleAddBeneficiary = () => {
        // navigation.navigate('AddBeneficiary');
        navigation.navigate('HomeNavigation', {optionSelected: 3, firstName: 'Ahmed', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bank-task-7a340.appspot.com/o/home_user_image.png?alt=media&token=1d81fbc3-1b74-40aa-b977-2dfac6870d59', currentBalance:'2,374,654.25', mobileNumber: '+201143333206', beneficiaryPage: 'Add'});
    
    }

    const chunkArray = (array: any[], size: number) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
          chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const handleBeneficiaryClick = (name: string, number: string, balance: string, image: string) => {
        const beneficiaryInfo = {name: name, number: number, balance: balance, image: image};
        navigation.navigate('HomeNavigation', {optionSelected: 3, firstName: 'Ahmed', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bank-task-7a340.appspot.com/o/home_user_image.png?alt=media&token=1d81fbc3-1b74-40aa-b977-2dfac6870d59', currentBalance:'2,374,654.25', mobileNumber: '+201143333206', beneficiaryPage: 'History', beneficiaryInfo: beneficiaryInfo});
    }

    return(
        <SafeAreaView style={darkMode ? styles.containerDark : styles.container}>

                    <View style={styles.beneficiaryFirstSection}>
                        <Text style={darkMode ? styles.beneficiaryTitleOneDark : styles.beneficiaryTitleOne}>Beneficiaries</Text>
                        <View style={styles.firstSectionIcons}>
                            <View style={styles.firstSectionIconOne}>
                                <TouchableOpacity onPress={handleOptionOneClick}>
                                    <View style={optionOneClicked ? styles.clickedStyle : styles.noStyle}>
                                        <IonIcon name="grid" size={15}
                                                 color={optionOneClicked ? 'white' : '#B7B7B7'}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleOptionTwoClick}>
                                    <View style={optionTwoClicked ? styles.clickedStyle : styles.noStyle}>
                                        <MaterialIcon name="format-list-bulleted-square" 
                                                      size={20}
                                                      color={optionTwoClicked ? 'white' : '#B7B7B7'}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={handleAddBeneficiary}>
                                <View style={styles.firstSectionIconTwo}>
                                    <IonIcon name="add-circle-outline" size={22} color={"#007236"}/> 
                                    <Text style={styles.iconTwoText}>Add</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                {bInformation.length==0 && (
                    <View style={styles.mainContainerEmpty}>
                        <Image source={require("../../../images/beneficiaries_img.png")}></Image>
                        <Text style={darkMode ? styles.emptyTextTitleDark : styles.emptyTextTitle }>No Beneficiaries</Text>
                        <Text style={darkMode ? styles.emptyTextParagraphDark : styles.emptyTextParagraph }>You don’t have beneficiaries, add some so you can send money</Text>
                        <TouchableOpacity onPress={handleAddBeneficiary}>
                                <View style={styles.addBeneficiaryView}>
                                    <IonIcon name="add-circle-outline" size={22} color={"white"}/> 
                                    <Text style={styles.addText}>Add</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                )}

                {bInformation.length>0 && optionOneClicked && (
                    <ScrollView style={styles.verticalScrollView} showsVerticalScrollIndicator={false}>
                        {chunkArray(bInformation,4).map((row, rowIndex)=> (
                            <View key={rowIndex} style={styles.rowView}>
                                {row.map((item, itemIndex)=> (
                                    <TouchableOpacity onPress={() => handleBeneficiaryClick(item.name, item.number, item.balance, item.image)}>
                                        <UserCard key={itemIndex} 
                                              username={item.name} 
                                              imageUrl={item.image} 
                                              imageStyle='contain'
                                              marginRight={10}/>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))} 
                    </ScrollView>
                )}

                {bInformation.length>0 && optionTwoClicked && (
                    <ScrollView style={styles.verticalScrollViewTwo} showsVerticalScrollIndicator={false}>
                    {bInformation.map((data, dataIndex)=> (
                       <View style={{marginTop: 10}}>
                                <TouchableOpacity onPress={() => handleBeneficiaryClick(data.name, data.number, data.balance, data.image)}>
                                    <UserInformation key={dataIndex}
                                                     username={data.name}
                                                     number={data.number}
                                                     balance={data.balance}
                                                     imageUrl={data.image}
                                            />
                                </TouchableOpacity>
                       </View>
                    ))}
                </ScrollView>
                )}
            {/* </ScrollView> */}
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F1F3FB',
        paddingHorizontal: 25
    },
    containerDark: {
        flex:1,
        backgroundColor: '#2E2E2E',
        paddingHorizontal: 25
    },
    verticalScrollView: {
        flexGrow: 1,
        display: 'flex',
    },
    verticalScrollViewTwo: {
        flexGrow: 1,
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
    },
    beneficiaryFirstSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    beneficiaryTitleOne: {
        color: '#1C2437',
        fontSize: 20,
        fontWeight: '700',
    },
    beneficiaryTitleOneDark: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    firstSectionIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    firstSectionIconOne: {
        backgroundColor: 'white',
        height: 30,
        width: 61,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        marginRight: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    firstSectionIconTwo: {
        backgroundColor: 'white',
        height: 30,
        width: 61,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    clickedStyle: {
        backgroundColor: '#007236',
        borderRadius: 12,
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noStyle: {

    },
    iconTwoText: {
        color: "#007236",
        fontWeight:'300',
        fontSize: 16,
    },
    addText: {
        color: "white",
        fontWeight:'400',
        fontSize: 14,
    },
    mainContainerEmpty: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    emptyTextTitle: {
        color: "#34343F",
        fontWeight: '500',
        fontSize: 18,
    },
    emptyTextParagraph: {
        color: '#464665',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        width: 240,
    },
    emptyTextTitleDark: {
        color: "white",
        fontWeight: '500',
        fontSize: 18,
    },
    emptyTextParagraphDark: {
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        width: 240,
    },
    addBeneficiaryView: {
        backgroundColor: '#007236',
        height: 30,
        width: 63,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 4,
        top: 5,
    },
    rowView: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
    }
  })
export default BeneficiaryScreen;