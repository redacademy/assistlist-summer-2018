import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const capitalizeFirstLetter = str => {
  return str
    .split(' ')
    .map(string => {
      return string[0].toUpperCase() + string.slice(1);
    })
    .join(' ');
};

const ItemMeta = ({ itemData }) => {
  return (
    <View>
      <View style={styles.imageBorder}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images-na.ssl-images-amazon.com/images/I/91MBcSocZuL._SL1500_.jpg',
          }}
        />
      </View>
      <Text style={styles.title}>{capitalizeFirstLetter(itemData.title)}</Text>
      <Text style={styles.title}>{itemData.subCategory.title}</Text>
      <View style={styles.priceLocationContainer}>
        <Text style={styles.price}>${itemData.price}</Text>
        <View style={styles.locationContainer}>
          <Image
            style={styles.locationIcon}
            source={require('../../assets/images/Icons/Location.png')}
          />
          <Text style={styles.location}>{itemData.location.title}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemMeta;
