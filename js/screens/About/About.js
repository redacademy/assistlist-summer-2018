import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('AboutUs')}
        name="About Us"
        color="darkBlue"
        size="huge"
      />
      <Button
        onPress={() => navigation.navigate('OnBoarding')}
        name="How it works"
        color="darkBlue"
        size="huge"
      />
      <Button
        onPress={() => navigation.navigate('CommunityPartners')}
        name="Community Partners"
        color="darkBlue"
        size="huge"
      />
    </View>
  );
};
export default About;
