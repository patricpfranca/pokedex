import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';
import Pokedex from './pages/Pokedex';

const back = require('../assets/back.png');
const list = require('../assets/list.png');

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
