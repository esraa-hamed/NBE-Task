import React, {useState, useEffect} from 'react';
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

  import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
  import IonIcon from 'react-native-vector-icons/Ionicons';
  import UserCard from '../../molecules/UserCard/UserCard';
  import UserInformation from '../../molecules/UserInformation/UserInformation';
  import Visa from '../../molecules/Visa/Visa';

  function AirpayScreen(): React.JSX.Element {
    return(
        <SafeAreaView style={styles.container}>
                    <View style={styles.airpayFirstSection}>
                        <Text style={styles.airpayTitleOne}>Cards</Text>
                    </View>
                    <Visa />
        </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F1F3FB',
        paddingHorizontal: 25
    },
    airpayFirstSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,

    },
    airpayTitleOne: {
        color: '#1C2437',
        fontSize: 20,
        fontWeight: '700',
    },
   
  })

  export default AirpayScreen;