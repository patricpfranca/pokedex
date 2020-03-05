import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';

import BackgroundLogo from '~/components/BackgroundLogo';
import ListPokedex from '~/components/ListPokedex';
import PokemonService from '~/services/Pokemon/PokemonService';

export default function Pokedex({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [index, setIndex] = useState(20);

  async function loadPokemons() {
    const response = await PokemonService.index(index);

    setPokemon(response);
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <BackgroundLogo data="home">
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Pokedex</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pokemon}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          style={{ marginHorizontal: 25, marginTop: 140 }}
          renderItem={({ item }) => (
            <ListPokedex data={item} navigation={navigation} />
          )}
        />
      </View>
    </BackgroundLogo>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    width: 316,
    height: 25,
    left: 26,
    top: 108,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    display: 'flex',
    alignItems: 'center',
    color: '#303943',
    fontFamily: 'roboto-regular',
  },
});
