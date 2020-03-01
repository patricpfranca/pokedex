import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BackgroundLogo from '~/components/backgroundLogo';
import SearchField from '~/components/searchField';
import Types from '~/components/Types';

export default function Welcome({ navigation }) {
  return (
    <BackgroundLogo>
      <View style={styles.containerTitle}>
        <Text style={styles.title} numberOfLines={2}>
          Que Pokemon você está procurando?
        </Text>
      </View>
      <View>
        <SearchField
          icon="search"
          placeholder="Procure Pokemons"
          placeholderTextColor="#000"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.category}>
        <Types navigation={navigation} />
      </View>
    </BackgroundLogo>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#303943',
    alignItems: 'center',
    fontWeight: 'bold',
    fontFamily: 'roboto-regular',
  },
  containerTitle: {
    lineHeight: 42,
    position: 'absolute',
    display: 'flex',
    width: 316,
    height: 66,
    left: 26,
    top: 117,
  },
  category: {
    width: 320,
    height: 214,
    left: 28,
    top: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
