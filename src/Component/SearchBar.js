import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import { height, width } from '../Metrics';
const isIOS = Platform.OS === 'ios'
const SearchBar = ({ isDark, setsearch, search }) => {

  const onChangeSearch = query => setsearch(query);
  return (
    <View style={styles.containerSearch}>
      <Searchbar
        placeholder="Search here"
        placeholderTextColor={'#A3A3A3'}
        onChangeText={onChangeSearch}
        value={search}
        style={isDark ? styles.SearchBarDark : styles.SearchBar}
        inputStyle={{ fontSize: 14, color: 'black' }}

      />
    </View>
  )
}
export default SearchBar
const styles = StyleSheet.create({
  containerSearch: {
    position: 'absolute',
    top: width * 0.1,
    width: width * 0.8,
    alignSelf: 'center',
    paddingTop: isIOS ? height * 0.05 : 0
  },
  SearchBar: {
    height: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    color:'black'
  },
  SearchBarDark: {
    height: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#5C5C5C',
  }
})