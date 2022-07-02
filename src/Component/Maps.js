import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import WebView from 'react-native-webview';
import { width } from '../Metrics';
import GetLocation from 'react-native-get-location'
const Maps = ({ isDark }) => {
  const [latitude, setlatitude] = useState('')
  const [longitude, setlongitude] = useState('')
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        // console.log(location);
        setlatitude(location?.latitude)
        setlongitude(location?.longitude)
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }, [])

  return (
    // <MapView
    //     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    //     style={styles.map}
    //     region={{
    //     latitude: 37.78825,
    //     longitude: -122.4324,
    //     latitudeDelta: 0.015,
    //     longitudeDelta: 0.0121,
    //     }}
    //     userInterfaceStyle={isDark?'dark':'light'}
    // >
    // </MapView>
    <WebView source={{ uri: `https://www.google.com/maps/@${latitude},${longitude}` }} style={styles.map}></WebView>
  )
}

export default Maps

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    margin: -width,
  },
})