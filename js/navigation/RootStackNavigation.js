import { createStackNavigator } from 'react-navigation';
import NavigationLayout, { authStack } from './NavigationLayout';
import OnBoarding from '../screens/OnBoarding';

export default createStackNavigator(
  {
    authStack,
    NavigationLayout,
    OnBoarding: {
      screen: OnBoarding,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  }
);
