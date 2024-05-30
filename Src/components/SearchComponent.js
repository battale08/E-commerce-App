import React from 'react';
import {View, StyleSheet, Image, TextInput, SafeAreaView} from 'react-native';
import {MENU, SEARCH} from '../../assets/Images/Index';

const SearchField = ({onSearch}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.menuIcon}>
          <Image source={MENU} />
        </View>
        <View style={styles.search}>
          <Image source={SEARCH} style={styles.searchImage} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={onSearch}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  menuIcon: {
    marginRight: 20,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#C9C9C9',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flex: 1,
  },
  searchImage: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
});
export default SearchField;
