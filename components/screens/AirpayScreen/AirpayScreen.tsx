import React, {useState, useEffect, useRef, useContext} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    PanResponder, 
    Animated,
    PanResponderGestureState,
    GestureResponderEvent,
    LayoutChangeEvent,
  } from 'react-native';

  import { useNavigation } from '@react-navigation/native';

  import VisaCard from '../../atoms/VisaCard/VisaCard';
  import Button from '../../atoms/Button/Button';
  import Icon5 from 'react-native-vector-icons/FontAwesome5';

  import { ModeContext } from '../../../Context';

  interface AirpayProps {
    // darkMode: boolean;
    sendOverlay: (showOverlay: boolean) => void;
  }

  function AirpayScreen(props: AirpayProps): React.JSX.Element {

    const panOne = useRef(new Animated.ValueXY()).current;
    const panTwo = useRef(new Animated.ValueXY()).current;

    const [draggingOne, setDraggingOne] = useState(false); 
    const [draggingTwo, setDraggingTwo] = useState(false);
    const [droppedOne, setDroppedOne] = useState(false);
    const [droppedTwo, setDroppedTwo] = useState(false);

    const [rightActive, setRightActive] = useState(true);
    const [leftActive, setLeftActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [payButtonActive, setPayButtonActive] = useState(false);

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const navigation = useNavigation();

    const handleDoneButtonClick = () => {
        props.sendOverlay(false);
        setShowSuccessModal(false),
        navigation.navigate('HomeNavigation', {optionSelected: 1, firstName: 'Ahmed', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bank-task-7a340.appspot.com/o/home_user_image.png?alt=media&token=1d81fbc3-1b74-40aa-b977-2dfac6870d59', currentBalance:'2,374,654.25', mobileNumber: '+201143333206', beneficiaryPage: 'List'});
    }

    const handleTryAgainClick = () => {
        props.sendOverlay(false);
        setShowFailureModal(false); 
    }

    const handleCancelClick = () => {
        setShowFailureModal(false);
        props.sendOverlay(false);
    }

    const handleDropAreaLayout = (event: LayoutChangeEvent) => {
        const { x, y, width, height } = event.nativeEvent.layout;
        console.log('Drop Area Coordinates:', { x, y, width, height }); 
    };

    const isDropArea = (gesture: PanResponderGestureState) => {
        const dropAreaY = 307; // Y-coordinate of the top of the drop area
        const dropAreaHeight = 216; // Height of the drop area
        const dropAreaX = 25; // X-coordinate of the left side of the drop area
        const dropAreaWidth = 346; // Width of the drop area
        return (
          gesture.moveY > dropAreaY &&
          gesture.moveY < dropAreaY + dropAreaHeight &&
          gesture.moveX > dropAreaX &&
          gesture.moveX < dropAreaX + dropAreaWidth
        );
    };

    const isCardArea = (gesture: PanResponderGestureState) => {
        const cardAreaY = 67; // Y-coordinate of the top of the drop area
        const cardAreaHeight = 196; // Height of the drop area
        const cardAreaX = 25; // X-coordinate of the left side of the drop area
        const cardAreaWidth = 346; // Width of the drop area
        return (
          gesture.moveY > cardAreaY &&
          gesture.moveY < cardAreaY + cardAreaHeight 
        //   gesture.moveX > cardAreaX &&
        //   gesture.moveX < cardAreaX + cardAreaWidth
        );
    };

    const panResponder = useRef(
        PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            setDraggingOne(true);
        },
        onPanResponderMove: Animated.event(
            [
            null,
            { dx: panOne.x, dy: panOne.y }  
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (e: GestureResponderEvent, gesture: PanResponderGestureState) => {
            setDraggingOne(false);
            if(!droppedTwo) {
                if(isDropArea(gesture)){
                    setDroppedOne(true);
                    setPayButtonActive(true);
                    setRightActive(false);
                    setLeftActive(false);
                    panOne.setValue({ x: 0, y: 0 });
                }
                else{
                    Animated.spring(
                        panOne, 
                        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
                        ).start();
                }
            }
            else{
                Animated.spring(
                    panOne, 
                    { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
                    ).start();
            }
            
        }
        })
    ).current;

    const panResponderBack = useRef(
        PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            setDraggingOne(true);
        },
        onPanResponderMove: Animated.event(
            [
            null,
            { dx: panOne.x, dy: panOne.y }
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (e: GestureResponderEvent, gesture: PanResponderGestureState) => {
            setDraggingOne(false);
            if(isCardArea(gesture)){
                setDroppedOne(false);
                setRightActive(true);
                setPayButtonActive(droppedTwo);
                panOne.setValue({ x: 0, y: 0 });
            }
            else{
                Animated.spring(
                    panOne, 
                    { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
                    ).start();
            }
            
        }
        })
    ).current;

    const panResponderTwo = useRef(
        PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            setDraggingTwo(true);
        },
        onPanResponderMove: Animated.event(
            [
            null,
            { dx: panTwo.x, dy: panTwo.y }
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (e: GestureResponderEvent, gesture: PanResponderGestureState) => {
            setDraggingTwo(false);
            if(!droppedOne) {
                if(isDropArea(gesture)){
                    setDroppedTwo(true);
                    setPayButtonActive(true);
                    setRightActive(false);
                    setLeftActive(false);
                    panTwo.setValue({ x: 0, y: 0 });
                }
                else{
                    Animated.spring(
                        panTwo, 
                        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
                        ).start();
                }
            }
        }
        })
    ).current;

    const panResponderBackTwo = useRef(
        PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            setDraggingTwo(true);
        },
        onPanResponderMove: Animated.event(
            [
            null,
            { dx: panTwo.x, dy: panTwo.y }
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (e: GestureResponderEvent, gesture: PanResponderGestureState) => {
            setDraggingTwo(false);
            if(isCardArea(gesture)){
                setDroppedTwo(false);
                setLeftActive(true);
                setPayButtonActive(droppedOne);
                panTwo.setValue({ x: 0, y: 0 });
            }
            else{
                Animated.spring(
                    panTwo, 
                    { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
                    ).start();
            }
            
        }
        })
    ).current;

    const handlePayButtonClick = () => {
        // Just showing the two types of modals ( .. to be changed later)
        if(droppedOne){
            setShowFailureModal(true);
            setShowSuccessModal(false);
            props.sendOverlay(true);
        }
        else if(droppedTwo){
            setShowSuccessModal(true);
            setShowFailureModal(false);
            props.sendOverlay(true);
        }
    }

    const handleLeftClick = () => {
        if(currentIndex > 0){ // current index > 0
            setCurrentIndex(currentIndex-1);
        }
    }

    const handleRightClick = () => {
        if(currentIndex < 2) { // current index < length
            setCurrentIndex(currentIndex+1);
        }
    }

    useEffect(() => {
       if(currentIndex==1){ // current index == length-1
        setRightActive(false);
        setLeftActive(true);
       }
       else if(currentIndex==0){ // current index = 0
        setLeftActive(false);
        setRightActive(true);
       }
       else{ // in the middle
        setLeftActive(true);
        setRightActive(true);
       }
      }, [currentIndex]);

    return(
        <SafeAreaView style={[darkMode ? styles.containerDark : styles.container, showFailureModal || showSuccessModal ? {justifyContent: 'center', alignItems: 'center'} : {}]}>

                    <View style={styles.airpayFirstSection}>
                        <Text style={darkMode ? styles.airpayTitleOneDark : styles.airpayTitleOne}>Cards</Text>
                    </View>

                    <View style={[styles.visaContainer, currentIndex==0 ? {justifyContent: 'flex-start'} : {justifyContent: 'flex-end'}]} onLayout={handleDropAreaLayout}>    
                        {!droppedOne &&
                            <Animated.View {...panResponder.panHandlers} style={panOne.getLayout()}>
                                {/* colorOne='#4B2A2E' colorTwo='#DE0606' */}
                                <VisaCard   color='green' 
                                            isDragging={draggingOne} 
                                            balance='125,381.15' 
                                            lastDigits='6506'
                                            cardHolder='Ahmad Sami Al-sayed'
                                            expiryDate='08/25'
                                            cvv='352'
                                            />
                            </Animated.View>
                        }
                        {!droppedTwo &&
                            <Animated.View {...panResponderTwo.panHandlers} style={panTwo.getLayout()}>
                                {/* colorOne='#2A4B39' colorTwo='#06DE90' */}
                                <VisaCard   color='red' 
                                            isDragging={draggingTwo} 
                                            balance='18,631.15' 
                                            lastDigits='8154'
                                            cardHolder='Arwa Mohamed'
                                            expiryDate='11/27'
                                            cvv='781'
                                            />
                            </Animated.View>
                        }    
                    </View>

                    <View style={styles.iconsView}>
                        <TouchableOpacity disabled={!leftActive} onPress={handleLeftClick}>
                            {!darkMode && 
                                <Icon5 name="chevron-left" size={23} color={leftActive ? 'black' : '#B7B7B7'}/>
                            }
                            {darkMode && 
                                <Icon5 name="chevron-left" size={23} color={leftActive ? '#B7B7B7' : 'black'} style={!leftActive ? {opacity: 0.2} : {}}/>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity disabled={!rightActive} onPress={handleRightClick}>
                            {!darkMode && 
                                <Icon5 name="chevron-right" size={23} color={rightActive ? 'black' : '#B7B7B7'}/>
                            }
                            {darkMode && 
                                <Icon5 name="chevron-right" size={23} color={rightActive ? '#B7B7B7' : 'black'} style={!rightActive ? {opacity: 0.2} : {}}/>
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dragDropView} onLayout={handleDropAreaLayout}>
                        {droppedOne &&
                            <Animated.View {...panResponderBack.panHandlers} style={panOne.getLayout()}>
                                <VisaCard   color='green' 
                                            isDragging={draggingOne} 
                                            balance='125,381.15' 
                                            lastDigits='6506'
                                            cardHolder='Ahmad Sami Al-sayed'
                                            expiryDate='08/25'
                                            cvv='352'
                                        />
                            </Animated.View>
                        }

                        {droppedTwo &&
                            <Animated.View {...panResponderBackTwo.panHandlers} style={panTwo.getLayout()}>
                                <VisaCard   color='red' 
                                            isDragging={draggingTwo} 
                                            balance='18,631.15' 
                                            lastDigits='8154'
                                            cardHolder='Arwa Mohamed'
                                            expiryDate='11/27'
                                            cvv='781'
                                        />
                            </Animated.View>
                        }

                        {!droppedOne && !droppedTwo &&
                            <Text style={styles.dragDropText}>Touch & hold a card then drag it
                            to this box</Text>
                        }
                    </View>

                    <View style={styles.payButtonView}>
                        <Button title='Pay Now' 
                                fontColor='white' 
                                backgroundColor='#007236' 
                                onPress={handlePayButtonClick}
                                active={payButtonActive}
                                padding={11}
                        ></Button>
                    </View> 

                    {showFailureModal && <View style={styles.overlay} />}
                    {showFailureModal && <View style={styles.failureModalView}>
                                <Image source={require('../../../images/red_card_icon.png')} style={styles.modalImage}></Image>
                                <Text style={styles.failureModalTitle}>Ooops...</Text>
                                <Text style={styles.modalText}>Your payment didn’t go through</Text>
                                <Text style={styles.modalBalance}>$5,542.00</Text>
                                <View style={styles.failureButtonsView}>
                                    <View style={styles.cancelView}>
                                        <Button title='Cancel' 
                                                fontColor='#EB001B' 
                                                backgroundColor='white' 
                                                onPress={handleCancelClick}
                                                active={true}
                                                padding={11}
                                                ></Button>
                                    </View>
                                    <View style={styles.tryAgainView}>
                                        <Button title='Try Again' 
                                                fontColor='white' 
                                                backgroundColor='#007236' 
                                                onPress={handleTryAgainClick}
                                                active={true}
                                                padding={11}
                                                ></Button>
                                    </View>
                                </View>
                        </View>}

                    {showSuccessModal && <View style={styles.overlay} />}
                    {showSuccessModal && <View style={styles.successModalView}>
                                <Image source={require('../../../images/green_card_icon.png')} style={styles.modalImage}></Image>
                                <Text style={styles.successModalTitle}>Mission Complete</Text>
                                <Text style={styles.modalText}>Your payment to IKEA was successful</Text>
                                <Text style={styles.modalBalance}>$5,542.00</Text>
                                <View style={styles.doneButtonView}>
                                <Button title='Done' 
                                        fontColor='white' 
                                        backgroundColor='#007236' 
                                        onPress={handleDoneButtonClick}
                                        active={true}
                                        padding={11}
                                    ></Button>
                                </View>
                        </View>}

        </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F1F3FB',
        paddingHorizontal: 25,
        zIndex: 3
    },
    containerDark: {
        flex:1,
        backgroundColor: '#2E2E2E',
        paddingHorizontal: 25,
        zIndex: 3
    
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
    airpayTitleOneDark: {
        color: '#FFFF',
        fontSize: 20,
        fontWeight: '700',
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
        marginTop: 15,
    },
    dragDropText: {
        color: '#007236C4',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        marginHorizontal: 50,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
        borderRadius: 5,
      },
      visaContainer: {
        marginTop: 20,
        borderRadius: 27,
        display: 'flex',
        flexDirection: 'row',
    },
    scrollContentContainer: {
        padding: 15,
    },
    horizontalScroll: {
        zIndex: 1,
    },
    payButtonView: {
        width: '100%',
        top: 15,
    },
    iconsView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 5,
    },
    // overlay: {
    //     ...StyleSheet.absoluteFillObject,
    //     backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    //     zIndex: 3,
    //     flex: 1,
    // },
    failureModalView: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 416,
        width: 346,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    failureModalTitle:{
        fontSize: 20,
        fontWeight: '700',
        color: '#EB001B'
    },
    successModalView: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 416,
        width: 346,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        zIndex: 5,
    },
    successModalTitle:{
        fontSize: 20,
        fontWeight: '700',
        color: '#1C2437'
    },
    modalText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#B7B7B7',
    },
    modalBalance: {
        fontSize: 40,
        fontWeight: '700',
        color: '#1C2437',
    },
    modalImage: {
        height: 182,
        width: 231
    },
    failureButtonsView: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
    },
    cancelView: {
        width: '35%',
    },
    tryAgainView: {
        width: '55%',
    },
    doneButtonView: {
        width: '100%',
        marginTop: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        zIndex: 4,
        position: 'absolute',
        
    },
  })

  export default AirpayScreen;