import React from 'react';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import { Header } from 'react-navigation';
import { fonts, colors } from '../config/styles';

const { height, width } = Dimensions.get('window');

export const sharedNavigationOptions = navigation => ({
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: fonts.main,
    color: colors.darkBlue,
    fontSize: 23,
  },
});
