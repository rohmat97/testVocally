import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '../Metrics'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
const BottomBar = ({ isDark }) => {
    return (
        <View style={[styles.container, { backgroundColor: isDark ? 'black' : 'white' }]}>
            <View style={styles.icons} elevation={5}>
                <IconIonicons name="compass-outline" size={30} color={!isDark ? 'black' : 'white'} />
            </View>
            <View style={styles.icons}>
                <IconIonicons name={!isDark ? "map" : "map-outline"} size={!isDark ? 24 : 25} color={!isDark ? 'black' : 'white'} />
            </View>
            <View style={styles.middleMenu}>
                <IconFontisto name="plus-a" size={20} color={'white'} />
            </View>
            <View style={styles.icons}>
                <IconIonicons name="ios-notifications-outline" size={30} color={!isDark ? 'black' : 'white'} />
            </View>
            <View style={styles.icons}>
                <Icon name="user-o" size={30} color={!isDark ? 'black' : 'white'} />
            </View>
        </View>
    )
}

export default BottomBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        // height:height*0.1,
        flexDirection: 'row',
        justifyContent: "space-around",
        borderTopColor: 'rgba(211,211,211,0.5)',
        borderTopWidth: 3
    },
    icons: {
        maxHeight: 60,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
        marginBottom: 24
    },
    middleMenu: {
        width: width * 0.15,
        height: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
        marginBottom: 24,
        marginTop: -height * 0.025,
        backgroundColor: 'red'
    },
})