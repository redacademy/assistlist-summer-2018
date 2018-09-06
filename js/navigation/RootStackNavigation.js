import { createStackNavigator } from 'react-navigation';

import NavigationLayout, { accountFormStack } from './NavigationLayout';

export default createStackNavigator(
  {
    accountFormStack,
    NavigationLayout,
  },
  {
    headerMode: 'none',
  }
);
