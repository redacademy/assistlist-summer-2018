import { createStackNavigator } from 'react-navigation';
import OnBoarding from '../screens/OnBoarding';
import NavigationLayout from './NavigationLayout';

export default createStackNavigator(
  {
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
