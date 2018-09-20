import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('AboutUs');
        }}
      >
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('OnBoarding');
        }}
      >
        <Text style={styles.buttonText}>How it works</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('CommunityPartners');
        }}
      >
        <Text style={styles.buttonText}>Community Partners</Text>
      </TouchableOpacity>
    </View>
  );
};

About.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default About;
