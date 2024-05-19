import React, {useState, useEffect} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  import Button from '../../atoms/Button/Button';

  function SignupSuccess({navigation}): React.JSX.Element {

    const handleFinishButtonClick = () => {
      navigation.navigate('HomeNavigation', {optionSelected: 1, firstName: 'Ahmed', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bank-task-7a340.appspot.com/o/home_user_image.png?alt=media&token=1d81fbc3-1b74-40aa-b977-2dfac6870d59', currentBalance:'2,374,654.25'});
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
                <Image source={require('../../../images/signupsuccess_background.png')}
                                style={styles.signupsuccessBackgroundImage}/>
                <View>
                    <View style={styles.homeFirstSection}>
                        <Image source={require('../../../images/home_bank_logo.png')}/>
                    </View>
                    <Text style={styles.signupTitleOne}>Congratulations</Text>
                    <Text style={styles.signupTitleTwo}>You have successfully registered in NBE online banking service</Text>
                </View>
                <View style={styles.finishButtonView}>
                    <Button title='Finish' 
                            fontColor='#007236' 
                            backgroundColor='#FFFFFF' 
                            onPress={handleFinishButtonClick}
                            active={true}
                            padding={13}
                    ></Button>
                </View>
            </View>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007236',
        flex: 1,
        zIndex: 1,
    },
    mainContainer: {
     flex: 1,
     paddingHorizontal: 20,
     justifyContent: 'space-between'
    },
    signupsuccessBackgroundImage: {
        flex: 1,
        position: 'absolute',
        resizeMode: 'contain',
        height: 740,
        top:120,
        left: -7
    },
    homeFirstSection: {
        display: 'flex',
        alignItems: 'center',
        top: 23,
        justifyContent: 'flex-end',
        width: '100%',
        flexDirection: 'row',
      },
      finishButtonView: {
        width: '100%',
        bottom: 20
      },
      signupTitleOne: {
        color: '#F7F7F7',
        fontSize: 30,
        fontWeight: '700',
        marginTop: 50
      },
      signupTitleTwo: {
        color: '#F7F7F7',
        fontSize: 16,
        fontWeight: '400',
      },
  })

  export default SignupSuccess;