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

const capitalizeFirstLetter = str => {
  return str
    .split(' ')
    .map(string => {
      return string[0].toUpperCase() + string.slice(1);
    })
    .join(' ');
};

export const ItemsList = ({ data, navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data.allItems}
        keyExtractor={item => '' + item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleListing', { id: item.id })}
          >
            <View style={styles.listItem}>
                <Image
                  style={styles.listImage}
                  source={{
                    uri:
                      'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/wheelchair-512.png',
                  }}
                />
              <View style={styles.listText}>
                <Text style={styles.listTitle}>
                  {capitalizeFirstLetter(item.title)}
                </Text>
                <Text style={styles.listTitle}>{item.subCategory.title}</Text>
                <Text style={styles.listPrice}>${item.price}</Text>
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
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};
