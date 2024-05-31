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

  import EntypoIcon from 'react-native-vector-icons/Entypo';
  import UserInformation from '../../molecules/UserInformation/UserInformation';

  import { ModeContext } from '../../../Context';

  interface TransactionHistoryProps {
    name: string;
    image: string;
    number: string;
    balance: string;
    // darkMode: boolean;
  }

  function TransactionHistory(props: TransactionHistoryProps): React.JSX.Element {

    const transactionsEmpty = [];

    const navigation = useNavigation();

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const transactions= [
       {
            name: 'Flat Rent',
            date: '15-12-2021',
            price: '892,48.0',
       },
       {
            name: 'House Fixes',
            date: '20-5-2021',
            price: '764,92.0',
        },
        {
            name: 'New Laptop',
            date: '08-04-2021',
            price: '647,67.0',
        },
        {
            name: 'College Expenses',
            date: '12-02-2021',
            price: '563,62.0',
        },
        {
            name: 'Car Loan',
            date: '10-02-2021',
            price: '755,45.0',
        },
        {
            name: 'Mom wants some money',
            date: '03-02-2021',
            price: '743,45.0',
        },
        {
            name: 'New dress',
            date: '25-01-2021',
            price: '25,76.0',
        },
        {
            name: 'Birthday gift for ross and rachel',
            date: '28-12-2020',
            price: '538,96.0',
        },
    ];

    const handleGoingBack = () => {
        navigation.navigate('HomeNavigation', {optionSelected: 3, firstName: 'Ahmed', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bank-task-7a340.appspot.com/o/home_user_image.png?alt=media&token=1d81fbc3-1b74-40aa-b977-2dfac6870d59', currentBalance:'2,374,654.25', mobileNumber: '+201143333206', beneficiaryPage: 'List'});
    }

    return(
        <SafeAreaView style={darkMode ? styles.containerDark : styles.container}>

                    <TouchableOpacity onPress={handleGoingBack}>
                        <EntypoIcon name='arrow-long-left' size={20} style={{top: 5}} color={"#B7B7B7"}/>
                    </TouchableOpacity>

                    <View style={darkMode ? styles.beneficiaryFirstSectionDark : styles.beneficiaryFirstSection}>
                        <UserInformation 
                                            username={props.name}
                                            number={props.number}
                                            balance={props.balance}
                                            imageUrl={props.image}/>
                    </View>

               
                    <Text style={darkMode ? styles.transactionsTextDark : styles.transactionsText}>Transactions History</Text>
                   

                    {transactions.length==0 && (
                        <View style={styles.emptyView}>
                            <Image source={require('../../../images/no_history_image.png')} style={styles.transactionsImage}></Image>
                            <Text style={darkMode ? styles.emptyTitleDark : styles.emptyTitle }>No History</Text>
                            <Text style={darkMode ? styles.emptyTextDark : styles.emptyText }>Not a single transaction was made to this account</Text>
                        </View>
                    )}

                    {transactions.length>0  && (
                        <ScrollView style={styles.verticalScrollView} showsVerticalScrollIndicator={false}>
                            {transactions.map((data, dataIndex)=> (
                                <View style={{marginTop: 10}} key={dataIndex}>  
                                    <View style={styles.rowView}>
                                        <View>
                                            <Text style={darkMode ? styles.nameTextDark : styles.nameText}>{data.name}</Text>
                                            <Text style={styles.dateText}>{data.date}</Text>
                                        </View>
                                        <View>
                                            <Text style={darkMode ? styles.priceTextDark : styles.priceText}>${data.price}</Text>
                                        </View>
                                    </View>                                  
                                </View>
                            ))}
                        </ScrollView>
                    )}

        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#F1F3FB",
    paddingHorizontal: 20,
   },
   containerDark: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    paddingHorizontal: 20,
   },
   beneficiaryFirstSection: {
    width: '100%',
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
   },
   beneficiaryFirstSectionDark: {
    width: '100%',
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
   },
   emptyView: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center'
   },
   transactionsText: {
    color: '#1C2437',
    fontSize: 20,
    fontWeight: '700',
   },
   transactionsTextDark: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '700',
   },
   transactionsImage: {
    width: 150,
    height: 166,
   },
   emptyTitle: {
    color: '#34343F',
    fontSize: 18,
    fontWeight: '500',
    width: 240,
    textAlign: 'center',
    marginTop: 20,
   },
   emptyText: {
    color: '#464665',
    fontSize: 14,
    fontWeight: '400',
    width: 240,
    textAlign: 'center',
    marginTop: 10,
   },
   emptyTitleDark: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: '500',
    width: 240,
    textAlign: 'center',
    marginTop: 20,
   },
   emptyTextDark: {
    color: '#B7B7B7',
    fontSize: 14,
    fontWeight: '400',
    width: 240,
    textAlign: 'center',
    marginTop: 10,
   },
   verticalScrollView: {
        flexGrow: 1,
        display: 'flex',
    },
    rowView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 69,
        alignItems: 'center',
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 0.9
    },
    priceText: {
        color: '#1C2437',
        fontSize: 18,
        fontWeight: '700',
    },
    priceTextDark: {
        color: '#e6f0f5',
        fontSize: 18,
        fontWeight: '700',
    },
    nameText: {
        color: '#1C2437',
        fontSize: 18,
        fontWeight: '400',
    },
    nameTextDark: {
        color: '#FFFF',
        fontSize: 18,
        fontWeight: '400',
    },
    dateText: {
        color: '#B7B7B7',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5
    },
    backView: {
        backgroundColor: '#007236',
        height: 40,
        width: 40,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        paddingRight: 4
    }
   
  })
export default TransactionHistory;