import React, {useState, useEffect, useContext} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView
  } from 'react-native';

  import Icon5 from 'react-native-vector-icons/FontAwesome5';
  import IconCard from '../../molecules/IconCard/IconCard';
  import UserCard from '../../molecules/UserCard/UserCard';
  import HistoryItem from '../../molecules/HistoryItem/HistoryItem';
  import AntDesignIcon from 'react-native-vector-icons/AntDesign';
  import VisaCard from '../../atoms/VisaCard/VisaCard';

  import { ModeContext } from '../../../Context';

  interface HomeProps{
    firstName: string;
    imageUrl: string;
    currentBalance: string;
    // darkMode: boolean;
  }

  function Home(props: HomeProps): React.JSX.Element {

    const [cardClicked, setCardClicked] = useState(false);
    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    
    const handleCardClick = () => {
        setCardClicked(true);
    }

    const userInformation = [
        {
            name: 'Hala',
            image: 'https://images.unsplash.com/photo-1493050261174-9e48e90f6773?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Ayman',
            image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2363&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Alex',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Soha',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Sandra',
            image: 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    const historyInformation = [
        {
            name: 'Carrefour',
            image: 'https://freepngimg.com/save/81020-blue-logo-dubai-carrefour-text-download-hq-png/2272x1704',
            date: '15-12-2021',
            price: '250.21',
            type: 'shop'
        },
        {
            name: 'Amazon',
            image: 'https://thumbs.dreamstime.com/b/astana-kazakhstan-july-amazon-icon-logo-vector-symbol-198642038.jpg',
            date: '02-12-2021',
            price: '3004.21',
            type: 'shop'
        },
        {
            name: 'Jumia',
            image: 'https://logowik.com/content/uploads/images/jumia3245.jpg',
            date: '28-11-2021',
            price: '2146.63',
            type: 'shop'
        },
        {
            name: 'Hala Slimen',
            image: 'https://images.unsplash.com/photo-1493050261174-9e48e90f6773?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            date: '28-11-2021',
            price: '5140.00',
            type: 'user'
        },
        {
            name: 'IKEA',
            image: 'https://cdn.iconscout.com/icon/free/png-256/free-ikea-282384.png',
            date: '03-11-2021',
            price: '12,547.96',
            type: 'shop'
        },
       
    ];
    return(
        <SafeAreaView style={[styles.container, darkMode ? styles.darkModeBackground : styles.normalModeBackground]}>
            <ScrollView style={styles.verticalScrollView} showsVerticalScrollIndicator={false}>

            {!cardClicked && 
                <View>
                    <TouchableOpacity onPress={handleCardClick}>
                        <View style={styles.secondSection}>
                            <Image style={styles.cardImage} source={require("../../../images/card_background_img.png")}/>
                            <View style={styles.overlay}></View>
                            <View style={styles.balanceInfo}>
                                <View style={styles.balanceLineOne}>
                                    <Text style={styles.balanceTitle}>Balance</Text>
                                    <TouchableOpacity>
                                        <View style={styles.iconView}>
                                            <Icon5 name='fingerprint' color={'#F6A721'} size={15}></Icon5>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.balanceLineTwo}>${props.currentBalance}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.thirdSection}>
                        <IconCard cardText='Accounts' 
                                backgroundColor='#00C97426' 
                                darkMode={darkMode}
                                icon={<Icon5 name='money-bill-wave' size={24} style={{color: '#00C974', backgroundColor: 'transparent'}}/>}/>
                        <IconCard cardText='Cards' 
                                backgroundColor='#00ADF826' 
                                darkMode={darkMode}
                                icon={<Icon5 name='credit-card' size={24} style={{color: '#00ADF8', backgroundColor: 'transparent'}}/>}/>
                        <IconCard cardText='Utilities' 
                                backgroundColor='#F6A72126' 
                                darkMode={darkMode}
                                icon={<Icon5 name='faucet' size={24} style={{color: '#F6A721', backgroundColor: 'transparent'}}/>}/>
                        <IconCard cardText='History' 
                                backgroundColor='#FF002E26' 
                                darkMode={darkMode}
                                icon={<AntDesignIcon name='filetext1' size={24} style={{color: '#FF002E', backgroundColor: 'transparent'}}/>}/>
                    </View>

                    <View style={styles.fourthSection}>
                        <View style={styles.fourthSectionLineOne}>
                            <Text style={[styles.fourthSectionTextOne, darkMode ? styles.darkModeText : styles.normalModeText]}>Send money</Text>
                            <TouchableOpacity>
                                <Text style={[styles.fourthSectionTextTwo, darkMode ? styles.darkModeText : {color: "#808080"}]}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainer}>
                            {userInformation.map((item, index)=> (
                                <UserCard key={index} 
                                        username={item.name} 
                                        imageUrl={item.image} 
                                        imageStyle='contain'
                                        marginRight={10}/>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            }

            {cardClicked &&  
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent}>
                        <VisaCard   color='green'  
                                    balance='125,381.15' 
                                    lastDigits='6506'
                                    cardHolder='Ahmad Sami Al-sayed'
                                    expiryDate='08/25'
                                    cvv='352'
                                    />
                        <VisaCard   color='red' 
                                    balance='18,631.15' 
                                    lastDigits='8154'
                                    cardHolder='Arwa Mohamed'
                                    expiryDate='11/27'
                                    cvv='781'
                                    />
                </ScrollView>
            }
            <View style={styles.fifthSection}>
                <View style={styles.fifthSectionLineOne}>
                    <Text style={[styles.fifthSectionTextOne, darkMode ? styles.darkModeText : styles.normalModeText]}>History</Text>
                    <TouchableOpacity>
                        <Text style={[styles.fifthSectionTextTwo, darkMode ? styles.darkModeText : {color: "#808080"}]}>View All</Text>
                    </TouchableOpacity>
                </View>
                
                    {historyInformation.map((item, index)=> (
                        <TouchableOpacity key={index}>
                            <HistoryItem key={index}
                                     name={item.name}
                                     date={item.date}
                                     price={item.price}
                                     imageUrl={item.image}
                                     shop={item.type=='shop' ? true : false}
                                     marginBottom={5}
                                     darkMode={darkMode}/>
                        </TouchableOpacity>
                    ))}
                
            </View>

            </ScrollView>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F1F3FB',
    },
    darkModeBackground:{
        backgroundColor: '#2E2E2E',
    },
    normalModeBackground: {
        backgroundColor: '#F1F3FB',
    },
    darkModeText:{
        color: 'white',
    },
    normalModeText: {
        color: "#1C2437",
    },
    secondSection:{
        marginTop: 20,      
    },
    cardImage: {
        borderRadius: 22,
        zIndex: 1,
        height: 132,
        opacity: 0.5
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 61, 29, 1)', 
        borderRadius: 22,
        height: 132,
    },
    balanceInfo: {
        position: 'absolute',
        zIndex: 3,
        marginTop: 15,
        marginHorizontal: 30
    },
    balanceTitle: {
        color: "#F7F7F7",
        fontWeight: '400',
        fontSize: 16,
    },
    balanceLineOne:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    iconView:{
        borderColor: '#F6A721',
        borderRadius: 8,
        borderWidth: 1.5,
        height: 27,
        width: 27,
        justifyContent: 'center',
        alignItems: 'center'
    },
    balanceLineTwo: {
        fontSize: 25,
        fontWeight: '700',
        color: '#F7F7F7',
        top: 13,
        textAlign: 'center'
    },
    thirdSection:{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fourthSection: {
        marginTop: 25,
    },
    fourthSectionLineOne: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    fourthSectionTextOne: {
        color: "#1C2437",
        fontWeight: '700',
        fontSize: 20
    },
    fourthSectionTextTwo: {
        color: "#808080",
        fontWeight: '400',
        fontSize: 16
    },
    fifthSection: {
        marginTop: 10,
    },
    fifthSectionLineOne: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    fifthSectionTextOne: {
        color: "#1C2437",
        fontWeight: '700',
        fontSize: 20
    },
    fifthSectionTextTwo: {
        color: "#808080",
        fontWeight: '400',
        fontSize: 16,
        top: 2
    },
    scrollContentContainer: {
        justifyContent: 'space-between'
    },
    
    verticalScrollView: {
        flexGrow: 1,
        paddingHorizontal: 25
    },
    horizontalScrollContent: {
        paddingVertical: 15,
    },
  })

  export default Home;