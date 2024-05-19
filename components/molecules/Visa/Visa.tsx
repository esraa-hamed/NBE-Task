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
    balance: string;
    lastDigits: string;
    expiryDate: string;
    cvv: string;
    holderName: string;
    color: string;
  }

  function Visa(props: VisaProps): React.JSX.Element {
    return(
        <View style={styles.visaContainer}>
                
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer}>
                   <View style={{marginRight: 5}}>
                   <Image style={styles.visaImage} source={require("../../../images/visa_background_img.png")}/>
                    <LinearGradient colors={['#4B2A2E', '#DE0606']} 
                                    style={styles.gradient}
                                    start={{ x: 0, y: 0.5 }}
                                    end={{ x: 1, y: 0.5 }}>
                    </LinearGradient>
                   </View>

                   <View>
                   <Image style={styles.visaImage} source={require("../../../images/visa_background_img.png")}/>
                    <LinearGradient colors={['#2A4B39', '#06DE90']} 
                                    style={styles.gradient}
                                    start={{ x: 0, y: 0.5 }}
                                    end={{ x: 1, y: 0.5 }}>
                    </LinearGradient>
                   </View>
                </ScrollView>

                <View style={styles.dragDropView}>
                    <Text style={styles.dragDropText}>Touch & hold a card then drag it
                            to this box</Text>
                </View>
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
    dragDropView: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#007236',
        height: 216,
        width: 346,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    dragDropText: {
        color: '#007236C4',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        marginHorizontal: 50,
    }
  })

  export default Visa;