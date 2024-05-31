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

  import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps';
  import { ModeContext } from '../../../Context';

  interface mapProps {
    darkMode: boolean;
  }

  function MapScreen(): React.JSX.Element {

    const { darkMode } = useContext(ModeContext);
    const { setDarkMode } = useContext(ModeContext);

    const mapCustomStyleNormal = [
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "color": "#ffffff" } // White roads
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          { "color": "#B7B7B7" } 
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          { "color": "#7a8b98" } 
        ]
      },
      
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#000000" } // Black text on roads
        ]
      }
    ]

    const mapCustomStyleDark = [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}],
      },
    ];
    
    return(
        <View style={styles.container}>
            <MapView
                zoomControlEnabled={true}
                zoomEnabled={true}
                scrollEnabled={true}
                style={styles.map}
                customMapStyle={darkMode ? mapCustomStyleDark : mapCustomStyleNormal}
                initialRegion={{
                    latitude: 30.0444,
                    longitude: 31.2357,
                    latitudeDelta: 0.0922, // Adjust as needed
                    longitudeDelta: 0.0421, // Adjust as needed
                }}
            >
              {markers.map((marker, index) => (
                <Marker key={index} coordinate={marker} 
                        title={"National Bank of Egypt"}
                        description={""}
                >
                </Marker>
              ))}
            </MapView>
            
        </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        flex: 1,
      },
  })

  export const markers = [
    {
      latitude: 30.026566640090675,
      longitude: 31.211383044817754,
    },
    {
      latitude: 30.023556972635838,
      longitude: 31.217219531591358,
    },
    {
      latitude: 30.036532252741342,
      longitude: 31.214222629122762,
    },
    {
      latitude: 30.050576549393572,
      longitude: 31.219311985939576,
    },
    {
      latitude: 30.050941625881887,
      longitude: 31.233174156754714,
    },
    {
      latitude: 30.037676316830506,
      longitude: 31.2335115726751,
    },
    {
      latitude: 30.057074709589912,
      longitude: 31.22541359053256,
    },
  ];  

  //  30.026566640090675, 31.211383044817754
  //  30.023556972635838, 31.217219531591358
  //  30.036532252741342, 31.214222629122762
  //  30.050576549393572, 31.219311985939576
  //  30.050941625881887, 31.233174156754714
  //  30.037676316830506, 31.2335115726751
  //  30.057074709589912, 31.22541359053256
  export default MapScreen;