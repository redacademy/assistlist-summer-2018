import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import ItemList from '../../components/ItemsList';
import styles from './styles';
import PropTypes from 'prop-types';

const Listings = ({ data, searchMethods, sortPriceState, toggleSort, navigation }) => {
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
        <TouchableOpacity
          onPress={() => {
            toggleSort(searchMethods.filterByPrice);
          }}
        >
          <Image
            style={styles.filterIcon}
            source={require('../../assets/images/Icons/Filter.png')}
          />
        </TouchableOpacity>
      </View>
      {data.length > 0 ? (
        <ItemList data={data} navigation={navigation}/>
      ) : (
        <View style={styles.noItems}>
          <Text style={styles.noItemsText}>No Listings</Text>
        </View>
      )}
    </View>
  );
};

Listings.propTypes = {
  data: PropTypes.array.isRequired,
  searchMethods: PropTypes.object.isRequired,
  sortPriceState: PropTypes.bool.isRequired,
  toggleSort: PropTypes.func.isRequired,
};

export default Listings;
