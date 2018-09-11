import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import NavigationLayout, { authStack } from './NavigationLayout';
import OnBoarding from '../screens/OnBoarding';

const SignedOut = createStackNavigator(
  {
    authStack,
  },
  {
    headerMode: 'none',
  }
);
const SignedIn = createStackNavigator(
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
