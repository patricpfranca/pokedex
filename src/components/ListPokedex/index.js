import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import { padDigits } from '~/config/utils';

export default function ListPokedex({ data, navigation }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.cards}>
        <View style={styles.number}>
          <Text style={styles.txtId}>#{padDigits(data.id)}</Text>
        </View>
        <View style={styles.boxName}>
          <Text style={styles.name}>{data.name}</Text>
        </View>
        <View style={styles.type}>
          {data.types.map(types => (
            <View style={styles.typeBag} key={types.type.slot}>
              <Text style={styles.txtType}>{types.type.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={{
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padDigits(
                data.id
              )}.png`,
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cards: {
    width: 155,
    height: 111,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: '#48d0b0',
    marginRight: 10,
  },
  boxName: {
    width: 70,
    height: 13,
    left: 17,
    top: 26,
  },
  name: {
    fontSize: 15,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'roboto-regular',
    textTransform: 'capitalize',
  },
  type: {
    width: 49,
    height: 38,
    left: 17,
    top: 37,
  },
  typeBag: {
    height: 17,
    opacity: 0.4,
    marginBottom: 4,
    borderRadius: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  txtType: {
    fontSize: 12,
    lineHeight: 28,
    color: '#000',
    fontFamily: 'roboto-regular',
    textTransform: 'capitalize',
  },
  number: {
    position: 'absolute',
    width: 50,
    height: 13,
    top: 10,
    right: 7,
    alignItems: 'flex-end',
    opacity: 0.12,
  },
  txtNumber: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: 'bold',
    fontFamily: 'roboto-regular',
  },
  boxImage: {
    position: 'absolute',
    width: 76,
    height: 71,
    right: 4,
    top: 40,
    bottom: 3,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
  },
  image: {
    width: 76,
    height: 71,
  },
  txtId: {
    fontFamily: 'roboto-regular',
    fontSize: 14,
    lineHeight: 14,
  },
});
