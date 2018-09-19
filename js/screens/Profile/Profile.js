import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { removeUser } from '../../config/models';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import PhotoUpload from 'react-native-photo-upload';

const Profile = ({ navigation, user, updateUser, userID }) => {
  const img =
    user[0].profilePic.length > 0
      ? {
          uri: 'data:image/jpeg;base64,' + user[0].profilePic[0],
        }
      : require('../../assets/images/Icons/default-user.png');

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <PhotoUpload
          quality={4}
          onPhotoSelect={avatar => {
            if (avatar) {
              updateUser({ variables: { id: userID, pic: avatar } });
            }
          }}
        >
          <Image style={styles.userIcon} resizeMode="cover" source={img} />
          <Text style={styles.editText}>edit</Text>
        </PhotoUpload>
        <Text style={styles.usernameText}>{user[0].username}</Text>
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
            <Image
              style={styles.icon}
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
