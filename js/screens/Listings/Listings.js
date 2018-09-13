import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import ItemList from '../../components/ItemsList';
import styles from './styles';
import { colors } from '../../config/styles';
import { ItemSearchContext } from '../../context/ItemsProvider';

const Listings = ({ data, searchMethods }) => {
  console.log(data, '<><><><><><');
  return (
    <View styles={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/images/Icons/Search.png')}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={text => searchMethods.filterByTitle(text)}
          placeholder={'Enter a Keyword or Location'}
          placeholderTextColor="#0082B566"
        />
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
