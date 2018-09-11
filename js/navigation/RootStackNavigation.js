import { createSwitchNavigator } from 'react-navigation';
import NavigationLayout, { authStack } from './NavigationLayout';

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
