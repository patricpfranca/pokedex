import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome,
        navigationOptions: {
          headerBackTitleVisible: false,
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTransparent: true,
        title: null,
      },
    }
  )
);

export default Routes;
