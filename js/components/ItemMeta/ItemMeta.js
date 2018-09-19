import React, { Fragment } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
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
    <Fragment>
      <ScrollView
        style={styles.imageBorder}
        horizontal
        pagingEnabled
        contentContainerStyle={{
          flex: 1,
          minWidth: `${itemData.images.length * 100}%`,
        }}
      >
        {itemData.images.length > 0 ? (
          itemData.images.map((image, index) => {
            return (
              <Image style={styles.image} source={{ uri: image }} key={index} />
            );
          })
        ) : (
          <Image
            style={styles.image}
            source={{
              uri:
                'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/wheelchair-512.png',
            }}
          />
        )}
      </ScrollView>
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
    </Fragment>
  );
};

export default ItemMeta;
