import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BackgroundLogo from '~/components/backgroundLogo';
import SearchField from '~/components/searchField';
import Types from '~/components/Types';

export default function Welcome() {
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
        <Types color="#6af3ca" title="Pokedex" />
        <Types color="#fa6555" title="Movimentos" />
        <Types color="#429bed" title="Habilidades" />
        <Types color="#f7c747" title="Itens" />
        <Types color="#9f5bba" title="Localização" />
        <Types color="#b1736c" title="Tipos" />
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
