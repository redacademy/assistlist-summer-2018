import { createStackNavigator } from 'react-navigation';

import NavigationLayout, { authStack } from './NavigationLayout';

export default createStackNavigator(
  {
    authStack,
    NavigationLayout,
  },
  {
    headerMode: 'none',
  }
);
