import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const substract = require('../../../assets/subtract_types.png');

export default function Types({ title, color }) {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.container,
          { backgroundColor: color, shadowColor: color },
        ]}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={substract} />
        </View>
      </View>
    </TouchableOpacity>
  );
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
    fontWeight: 'bold',
  },
});
