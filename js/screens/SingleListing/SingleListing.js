import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ItemMeta from '../../components/ItemMeta';
import PropTypes from 'prop-types';
import styles from './styles';

const SingleListing = ({ createChat, itemData }) => {
  return (
    <View style={styles.container}>
      <ItemMeta itemData={itemData} />
      <Text style={styles.description}>
        {itemData.description
          ? itemData.description
          : 'No description provided'
        }
      </Text>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => {
          createChat();
        }}
      >
        <Text style={styles.buttonText}>Contact Seller</Text>
      </TouchableOpacity>
    </View>
  );
};

SingleListing.propTypes = {
  createChat: PropTypes.func.isRequired,
  itemData: PropTypes.object.isRequired,
};

export default SingleListing;
