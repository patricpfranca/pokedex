import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import BackgroundLogo from '~/components/backgroundLogo';
import ListPokedex from '~/components/ListPokedex';
import PokemonService from '~/services/Pokemon/PokemonService';

export default function Pokedex({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [index, setIndex] = useState(10);

  async function loadPokemons() {
    const response = await PokemonService.index(index);

    setPokemon(response);
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <BackgroundLogo>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Pokedex</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={pokemon}
          numColumns={2}
          keyExtractor={item => String(item.id)}
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
    position: 'absolute',
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
  list: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    flex: 1,
  },
});
