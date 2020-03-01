import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const substract = require('../../../assets/subtract_types.png');

const categorys = [
  { title: 'Pokedex', color: '#6af3ca', url: 'Pokedex' },
  { title: 'Movimentos', color: '#fa6555', url: 'Movimentos' },
  { title: 'Habilidades', color: '#429bed', url: 'Habilidades' },
  { title: 'Itens', color: '#f7c747', url: 'Itens' },
  { title: 'Localização', color: '#9f5bba', url: 'Localizacao' },
  { title: 'Tipos', color: '#b1736c', url: 'Tipos' },
];

export default function Types({ navigation }) {
  return categorys.map(category => (
    <TouchableOpacity onPress={() => navigation.navigate(`${category.url}`)}>
      <View
        style={[
          styles.container,
          { backgroundColor: category.color, shadowColor: category.color },
        ]}>
        <Text style={styles.title}>{category.title}</Text>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={substract} />
        </View>
      </View>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  container: {
    width: 155,
    height: 60,
    borderRadius: 15,
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 15,
  },
  logo: {
    opacity: 0.4,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  containerLogo: {
    opacity: 0.4,
    alignItems: 'flex-end',
    zIndex: 1,
  },
  title: {
    color: '#fff',
    position: 'absolute',
    width: 90,
    height: 13,
    top: 23,
    left: 17,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
  },
});
