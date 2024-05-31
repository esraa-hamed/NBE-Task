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

  interface VisaProps{
    // colorOne: string;
    // colorTwo: string;
    color: string;
    isDragging: boolean;
    balance: string;
    lastDigits: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
  }

  function VisaCard(props: VisaProps): React.JSX.Element {
    return(
            <View style={{marginRight: 5}}>
                {props.color==='red' && <Image style={[styles.visaImage, props.isDragging ? {opacity: 0.8} : {}]} source={require("../../../images/visa_red.png")}/>}
                {props.color==='green' && <Image style={[styles.visaImage, props.isDragging ? {opacity: 0.8} : {}]} source={require("../../../images/visa_green.png")}/>}
                {/* <LinearGradient colors={[props.colorOne, props.colorTwo]} 
                                style={ [styles.gradient, props.isDragging ? {opacity: 0.7} : {opacity: 1}]}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 1, y: 1 }}>
                </LinearGradient> */}
                <View style={styles.visaContentView}>

                  <Image source={require('../../../images/visa_logo_white.png')} style={styles.visaCardLogo}></Image>
                  <Text style={styles.balanceText}>${props.balance}</Text>

                  <View style={styles.digitsView}>
                    <Text style={styles.digitsText}>**** **** **** {props.lastDigits}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={require('../../../images/visa_icon_orange.png')} style={styles.orangeIcon}></Image>
                      <Image source={require('../../../images/visa_icon_white.png')} style={styles.whiteIcon}></Image>
                    </View>
                  </View>

                  <View style={styles.titlesView}>
                    <Text style={[styles.titleText, styles.widthOne]}>CARD HOLDER</Text>
                    <Text style={[styles.titleText, styles.widthTwo]}>EXPIRES</Text>
                    <Text style={[styles.titleText, styles.widthThree]}>CVV</Text>
                  </View>

                  <View style={styles.valuesView}>
                    <Text style={[styles.valueText, styles.widthOne]}>{props.cardHolder}</Text>
                    <Text style={[styles.valueText, styles.widthTwo]}>{props.expiryDate}</Text>
                    <Text style={[styles.valueText, styles.widthThree]}>{props.cvv}</Text>
                  </View>
                </View>
            </View>
    )
  }

  const styles = StyleSheet.create({
    visaImage: {
        borderRadius: 27,
        zIndex: 2,
        height: 196,
        width: 326,
        // opacity: 0.5
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
        bottom:0,
        zIndex: 1,
    },
    visaContentView: {
      position: 'absolute',
      zIndex: 4,
      borderRadius: 27,
      height: 196,
      width: 326,
      left:0,
      right:0,
      top:0,
      bottom:0,
      paddingHorizontal: 27,
      paddingBottom: 10,
    },
    visaCardLogo: {
      height: 17,
      width: 52,
      marginLeft: 220,
      marginTop: 20
    },
    balanceText: {
      fontSize: 25,
      fontWeight: '700',
      color: 'white',
      fontFamily: 'GemunuLibre-Medium'
    },
    digitsText: {
      fontSize: 25,
      fontWeight: '400',
      color: 'white',
      fontFamily: 'GemunuLibre-Medium'
    },
    digitsView: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    orangeIcon: {
      width: 30,
      height: 23,
      marginRight: 7
    },
    whiteIcon: {
      width: 11,
      height: 18
    },
    titlesView: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 15,
      justifyContent: 'space-between'
    },
    titleText: {
      fontSize: 14,
      fontWeight: '700',
      color: '#848484',
      fontFamily: 'GemunuLibre-Medium',
    },
    valuesView:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    valueText: {
      textAlign: 'left',
      fontSize: 14,
      fontWeight: '700',
      color: '#FFFFFF',
      fontFamily: 'GemunuLibre-Medium',
    },
    widthOne:{
      width: '55%',
    },
    widthTwo: {
      width:'22%',
    },
    widthThree: {
      width: '16%'
    }
  })

  export default VisaCard;