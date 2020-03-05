import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';
import Pokedex from './pages/Pokedex';
import About from './pages/About';

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
        navigationOptions: {
          headerBackTitleVisible: false,
        },
      },
      About: {
        screen: About,
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
