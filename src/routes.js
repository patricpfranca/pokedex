import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';
import Pokedex from './pages/Pokedex';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome,
        navigationOptions: {
          headerBackTitleVisible: false,
        },
      },
      Pokedex: {
        screen: Pokedex,
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
