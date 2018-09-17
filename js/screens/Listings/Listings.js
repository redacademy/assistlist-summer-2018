import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import SearchBar from '../../components/SearchBar';
import ItemList from '../../components/ItemsList';
import styles from './styles';
import { colors } from '../../config/styles';

const Listings = ({ data }) => {
  return (
    <View styles={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar />
        <TouchableOpacity onPress={() => console.log('clicked filter')}>
          <Image
            style={styles.filterIcon}
            source={require('../../assets/images/Icons/Filter.png')}
          />
        </TouchableOpacity>
      </View>
      <ItemList data={data} />
    </View>
  );
};
export default Listings;
