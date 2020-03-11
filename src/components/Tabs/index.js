import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import About from '~/components/About';
import Stats from '~/components/Stats';
import Evolution from '~/components/Evolution';
import Moves from '~/components/Moves';

export default function Tabs({ details }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'About' },
    { key: 'second', title: 'Base Stats' },
    { key: 'third', title: 'Evolution' },
    { key: 'fourth', title: 'Moves' },
  ]);

  const renderScene = SceneMap({
    first: () => <About data={details} />,
    second: () => <Stats />,
    third: () => <Evolution />,
    fourth: () => <Moves />,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({ route }) => (
        <Text style={{ color: '#303943', fontSize: 14, lineHeight: 28 }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{ backgroundColor: '#6C79DB' }}
      style={{ backgroundColor: '#fff' }}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
}
