import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const capitalizeFirstLetter = str => {
  return str
    .split(' ')
    .map(string => {
      return string[0].toUpperCase() + string.slice(1);
    })
    .join(' ');
};

export const ItemsList = ({ data, searchMethods, navigation }) => {
  return ( 
    <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={item => '' + item.id}
      renderItem={({ item }) => {
        const image =
          item.images.length > 0
            ? item.images[0]
            : 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/wheelchair-512.png';
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SingleListing', { id: item.id })
            }
            style={styles.listItem}
          >
            <Image
              style={styles.listImage}
              source={{
                uri: image,
              }}
            />
            <View style={styles.listText}>
              <Text style={styles.listTitle}>
                {capitalizeFirstLetter(item.title)}
              </Text>
              <Text style={styles.listTitle}>{item.subCategory.title}</Text>
              {item.price === 0 ? (
                <Text style={styles.listPriceFree}>Free</Text>
              ) : (
                <Text style={styles.listPrice}>${item.price}</Text>
              )}
              <View style={styles.locationContainer}>
                <Image
                  style={styles.listLocationIcon}
                  source={require('../../assets/images/Icons/Location.png')}
                />
                <Text style={styles.listLocationText}>
                  {item.location.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
    </View>
  );
};

ItemsList.propTypes = {
  data: PropTypes.array.isRequired,
  searchMethods: PropTypes.object,
};
