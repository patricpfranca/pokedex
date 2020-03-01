import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import BackgroundLogo from '~/components/backgroundLogo';
import ListPokedex from '~/components/ListPokedex';

const data = [
  {
    id: '001',
    name: 'Bulbasaur',
    poison: 'Grass',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: '002',
    name: 'Charizard',
    poison: 'Grass',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
  {
    id: '003',
    name: 'Pikachu',
    poison: 'Grass',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  {
    id: '004',
    name: 'Squirtle',
    poison: 'Grass',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    id: '004',
    name: 'Snorlax',
    poison: 'Grass',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
  },
];

export default function Pokedex({ navigation }) {
  return (
    <BackgroundLogo>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Pokedex</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
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
  },
  container: {
    position: 'absolute',
    alignItems: 'flex-start',
    top: 175,
    alignSelf: 'center',
  },
});
