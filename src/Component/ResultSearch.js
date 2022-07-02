import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '../Metrics'

const ResultSearch = ({ search,isDark }) => {
    if (!search && search.length < 1) {
        return null
    }
    return (
        <View style={isDark?styles.containerDark:styles.container}>
            <Image source={require('../parague.jpg')} style={styles.image}/>
            <View style={styles.desc}>
                <Text style={{ fontWeight: 'bold', marginBottom: 8, fontSize: 16, textAlign: 'left',color:isDark?'white':'black' }}>Lokal Hamburk</Text>
                <Text style={{ fontSize: 12, textAlign: 'left', color: 'gray' }}>Pub in Parague</Text>
            </View>
        </View>
    )
}

export default ResultSearch

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: height * 0.15,
        width: width * 0.8,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12
    },
    containerDark:{
        position: 'absolute',
        bottom: height * 0.15,
        width: width * 0.8,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#5C5C5C',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 12,
        backgroundColor:'whitesmoke'
    },
    desc: {
        marginHorizontal: 12,
        justifyContent: 'center'
    }
})