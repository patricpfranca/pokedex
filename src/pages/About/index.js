import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';

import { padDigits } from '~/config/utils';
import BadgeTypes from '~/components/BadgeTypes';
import BackgroundLogo from '~/components/BackgroundLogo';

export default function About({ navigation }) {
  const pokemonDetail = navigation.getParam('pokemon');

  return (
    <BackgroundLogo data="detail">
      <View style={{ marginTop: 104, marginHorizontal: 26 }}>
        <View style={styles.info}>
          <Text style={styles.name}>{pokemonDetail.name}</Text>
          <Text>#{padDigits(pokemonDetail.id)}</Text>
        </View>
        <View style={styles.types}>
          {pokemonDetail.types.map(types => (
            <BadgeTypes
              value={types.type.name}
              size="xl"
              key={types.type.slot}
            />
          ))}
        </View>
        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={{
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padDigits(
                pokemonDetail.id
              )}.png`,
            }}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text>123</Text>
      </View>
    </BackgroundLogo>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 36,
    lineHeight: 46,
    color: '#000',
    textTransform: 'capitalize',
    fontFamily: 'roboto-regular',
  },
  id: {
    fontSize: 18,
    lineHeight: 23,
    fontFamily: 'roboto-regular',
  },
  types: {
    flexDirection: 'row',
  },
  image: {
    width: 234,
    height: 223,
  },
  boxImage: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    borderTopRightRadius: 48,
    borderTopLeftRadius: 48,
    backgroundColor: '#000',
  },
});
