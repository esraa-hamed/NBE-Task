import React, {useState, useEffect} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView
  } from 'react-native';

  import LinearGradient from 'react-native-linear-gradient';
  import VisaCard from '../../atoms/VisaCard/VisaCard';

  interface VisaProps{
    balance: string;
    lastDigits: string;
    expiryDate: string;
    cvv: string;
    holderName: string;
    color: string;
  }

  function VisaScroll(props: VisaProps): React.JSX.Element {
    return(
        <View style={styles.visaContainer}>    
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer}>
                    <VisaCard colorOne='#4B2A2E' colorTwo='#DE0606'/>
                    <VisaCard colorOne='#2A4B39' colorTwo='#06DE90'/>
                </ScrollView>
            </View>
    )
  }

  const styles = StyleSheet.create({
    visaContainer: {
        marginTop: 20,
        borderRadius: 27,
    },
    visaImage: {
        borderRadius: 27,
        zIndex: 1,
        height: 196,
        width: 326,
        opacity: 0.5
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'rgba(0, 61, 29, 1)', 
        borderRadius: 27,
        height: 196,
        width: 326,
    },
    gradient: {
        position: 'absolute',
        borderRadius: 27,
        width: 326,
        left:0,
        right:0,
        top:0,
        bottom:0
    },
    visaInfoView: {
        position: 'absolute',
        zIndex: 3,
        marginTop: 15,
        marginHorizontal: 30
    },
    
  })

  export default VisaScroll;