import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import NavigationLayout, { authStack } from './NavigationLayout';
import OnBoarding from '../screens/OnBoarding';

const createRootNavigator = signedIn =>
  createSwitchNavigator(
    {
      SignedOut: {
        screen: authStack,
      },
      SignedIn: {
        screen: NavigationLayout,
      },
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    }
  );

export default createRootNavigator;
