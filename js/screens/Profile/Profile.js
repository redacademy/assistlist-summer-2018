import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { removeUser } from '../../config/models';
import styles from './styles';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.userIcon}
          source={require('../../assets/images/Icons/default-user.png')}
        />
        <Text style={styles.linkText}>Me</Text>
        <TouchableOpacity onPress={() => console.log('add picture')}>
          <Text style={styles.editText}>edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkGrid}>
        <TouchableOpacity onPress={() => navigation.navigate('MyListings')}>
          <View style={styles.gridItem}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/Footer/Listing-Filled.png')}
            />
            <Text style={styles.gridText}>My listings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <View style={styles.gridItem}>
            <Image style={styles.icon} 
            source={require('../../assets/images/Icons/Notification.png')}
            />
            <Text style={styles.gridText}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <View style={styles.gridItem}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/Icons/Edit.png')}
            />
            <Text style={styles.gridText}>Edit Account Info</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            removeUser();
            navigation.navigate('SignedOut');
          }}
        >
          <View style={styles.gridItem}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/Icons/power.png')}
            />
            <Text style={styles.gridText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;
