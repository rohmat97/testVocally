import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { height } from '../Metrics'

import IconIonicons from 'react-native-vector-icons/Ionicons';

const isIOS = Platform.OS==='ios'
const FloatingMenu = ({setisDark,isDark}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>setisDark(!isDark)}>
            <View style={[styles.icons,{backgroundColor:isDark?'#5C5C5C':'white'}]} elevation={5}>
                <IconIonicons name="options-outline" size={20} color={!isDark?'black':'white'} />
            </View>
        </TouchableOpacity>
        <View style={[styles.icons,{marginTop:12,backgroundColor:isDark?'#5C5C5C':'white'}]} elevation={5}>
            <IconIonicons name="navigate-outline" size={20} color={!isDark?'black':'white'} />
        </View>
    </View>
  )
}

export default FloatingMenu

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:isIOS?height*0.2:height*0.15,
        right:28
    },
    icons:{
        backgroundColor:'white',
        borderRadius:200,
        padding:8,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
    }
})