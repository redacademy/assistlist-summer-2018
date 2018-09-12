import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ItemMeta from '../../components/ItemMeta'
import styles from './styles';

const SingleListing = ({ createChat, itemData }) => {
  return (
    <View style={styles.container}>
      <ItemMeta itemData={itemData} />
      <Text style={styles.description}>
        This is a sample item description and must be added properly in the item
        schema and add item
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

export default SingleListing;
