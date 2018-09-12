import React from 'react';
import { Image, View } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import About from './../screens/About';
import CreateItem from './../screens/CreateItem';
import Listings from './../screens/Listings';
import Messages from './../screens/Messages';
import Profile from './../screens/Profile';
import EditProfile from './../screens/EditProfile';
import MyListings from './../screens/MyListings';
import Notifications from './../screens/Notifications';
import AccountForm from './../screens/AccountForm';
import OnBoarding from './../screens/OnBoarding';
import CommunityPartners from './../screens/CommunityPartners';
import AboutUs from './../screens/AboutUs';
import CreateItemNav from '../components/CreateItemNav/CreateItemNav';
import SingleListing from './../screens/SingleListing';
import Chat from './../screens/Chat';

export const authStack = createStackNavigator(
  {
    AccountForm: {
      screen: AccountForm,
    },
    OnBoarding: {
      screen: OnBoarding,
    },
  },
  {
    headerMode: 'none',
  }
);
const aboutStack = createStackNavigator({
  About: {
    screen: About,
  },
  AboutUs: {
    screen: AboutUs,
  },
  CommunityPartners: {
    screen: CommunityPartners,
  },
});
const createItemStack = createStackNavigator({
  CreateItem: {
    screen: CreateItem,
  },
});
const listingsStack = createStackNavigator({
  Listings: {
    screen: Listings,
  },
  SingleListing: {
    screen: SingleListing,
  },
});
const messagesStack = createStackNavigator(
  {
    Messages: {
      screen: Messages,
    },
    Chat: {
      screen: Chat,
    },
  },
);
const profileStack = createStackNavigator({
  Profile: {
    screen: Profile,
  },
  EditProfile: {
    screen: EditProfile,
  },
  MyListings: {
    screen: MyListings,
  },
  Notifications: {
    screen: Notifications,
  },
});

export default createBottomTabNavigator(
  {
    Listings: listingsStack,
    Messages: messagesStack,
    CreateItem: createItemStack,
    Profile: profileStack,
    About: aboutStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Listings') {
          if (focused === false) {
            sourceFile = require('../assets/images/Footer/Listing-Empty.png');
          } else {
            sourceFile = require('../assets/images/Footer/Listing-Filled.png');
          }
          styleImage = {
            height: 30,
            width: 30,
            overflow: 'visible',
            marginTop: 5,
          };
          styleView = {
            height: 40,
            borderRightColor: '#0082B5',
            borderRightWidth: 1,
            paddingRight: 15,
            paddingLeft: 15,
          };
        }
        if (routeName === 'Messages') {
          if (focused === false) {
            sourceFile = require('../assets/images/Footer/Message-Empty.png');
          } else {
            sourceFile = require('../assets/images/Footer/Message-Filled.png');
          }
          styleImage = { height: 30, width: 30, overflow: 'visible' };
          styleView = {
            borderRightColor: '#0082B5',
            padding: 7,
            paddingLeft: 15,
          };
        }
        if (routeName === 'CreateItem') {
          return <CreateItemNav />;
        }
        if (routeName === 'Profile') {
          if (focused === false) {
            sourceFile = require('../assets/images/Footer/Profile-Empty.png');
          } else {
            sourceFile = require('../assets/images/Footer/Profile-Filled.png');
          }
          styleImage = { height: 30, width: 30, marginTop: 5 };
          styleView = {
            height: 40,
            borderRightColor: '#0082B5',
            borderRightWidth: 1,
            paddingRight: 15,
          };
        }
        if (routeName === 'About') {
          if (focused === false) {
            sourceFile = require('../assets/images/Footer/About-Empty.png');
          } else {
            sourceFile = require('../assets/images/Footer/About-Filled.png');
          }
          styleImage = { height: 40, width: 40 };
          styleView = { borderRightColor: '#0082B5', padding: 7 };
        }
        return (
          <View style={styleView}>
            <Image source={sourceFile} style={styleImage} />
          </View>
        );
      },
      tabBarVisible: navigation.state.routes[navigation.state.index].routeName !== 'Chat'
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: 'white',
        borderTopColor: '#00ADCB',
        borderTopWidth: 1,
      },
    },
  }
);
