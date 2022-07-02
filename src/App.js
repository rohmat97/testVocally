
import React, { useEffect, useState } from 'react'
import { BackHandler, SafeAreaView, StyleSheet, View } from 'react-native'
import BottomBar from './Component/BottomBar';
import FloatingMenu from './Component/FloatingMenu';
import Maps from './Component/Maps';
import ResultSearch from './Component/ResultSearch';
import SearchBar from './Component/SearchBar';
import { height, width } from './Metrics';
const App = () => {
  const [isDark, setisDark] = useState(false)
  const [search, setsearch] = useState('')
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [])
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Maps isDark={isDark} />
        <BottomBar isDark={isDark} />
        <SearchBar isDark={isDark} setsearch={setsearch} search={search} />
        <FloatingMenu setisDark={setisDark} isDark={isDark} />
        <ResultSearch search={search} isDark={isDark} />
      </View>
    </SafeAreaView>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: width,
    height: height
  },
})