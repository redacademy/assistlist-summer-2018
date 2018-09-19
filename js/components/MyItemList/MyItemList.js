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
import moment from 'moment';
import { colors } from '../../config/styles';
import PropTypes from 'prop-types';

const capitalizeFirstLetter = str => {
  return str
    .split(' ')
    .map(string => {
      return string[0].toUpperCase() + string.slice(1);
    })
    .join(' ');
};

export const MyItemList = ({ data, updateItem }) => {
  const getStatus = postStatus => {
    let now = new Date();
    let statusIconStyle = 'fresh';
    if (moment(now).subtract(7, 'days') > moment(postStatus)) {
      statusIconStyle = 'medium';
    }
    if (moment(now).subtract(24, 'days') > moment(postStatus)) {
      statusIconStyle = 'stale';
    }
    return statusIconStyle;
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={item => '' + item.id}
      renderItem={({ item }) => {
        const image =
          item.images.length > 0
            ? item.images[0]
            : 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/wheelchair-512.png';
        return (
          <View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>
                Posted
                {' ' + moment(item.createdAt).fromNow()}
              </Text>
            </View>
            <View style={styles.listItem}>
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
                {item.price === 0 ? (
                  <Text style={styles.listPriceFree}>Free</Text>
                ) : (
                  <Text style={styles.listPrice}>${item.price}</Text>
                )}
                <View style={styles.locationContainer}>
                  <Text style={styles.listLocationText}>Post Status</Text>
                  <View
                    style={[
                      styles.statusIcon,
                      styles[getStatus(item.postStatus)],
                    ]}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      updateItem({
                        variables: {
                          id: item.id,
                          date: new Date(),
                        },
                      })
                    }
                  >
                    <Image
                      style={styles.refreshIcon}
                      source={require('../../assets/images/Icons/refresh.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

MyItemList.propTypes = {
  data: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
};
