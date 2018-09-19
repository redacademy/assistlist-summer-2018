import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MyItemList from '../../components/MyItemList';
import PropTypes from 'prop-types';

const MyListings = ({ data, updateItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.alignHeader}>
          <View style={styles.iconContainer}>
            <View style={styles.staleIcon} />
            <Text style={styles.headerText}>Stale</Text>
          </View>
          <Text style={styles.days}>25+ Days</Text>
        </View>
        <View>
          <View style={styles.iconContainer}>
            <View style={styles.mediumIcon} />
            <Text>Medium</Text>
          </View>
          <Text style={styles.days}>8 - 24 Days</Text>
        </View>
        <View>
          <View style={styles.iconContainer}>
            <View style={styles.freshIcon} />
            <Text>Fresh</Text>
          </View>
          <Text style={styles.days}>0 - 7 Days</Text>
        </View>
      </View>
      {data.length > 0 ? (
        <MyItemList data={data} updateItem={updateItem} />
      ) : (
        <View style={styles.noItems}>
          <Text style={styles.noItemsText}>You have no listings</Text>
        </View>
      )}
    </View>
  );
};

MyListings.propTypes = {
  data: PropTypes.array.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default MyListings;
