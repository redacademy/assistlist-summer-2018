import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../config/styles';

const LoadingIndicator = () => (
  <ActivityIndicator size="large" color={colors.lightBlue} />
);

export default LoadingIndicator;
