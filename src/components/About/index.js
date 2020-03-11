import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About({ data }) {
  return (
    <View>
      <View style={styles.size}>
        <View style={styles.box}>
          <Text style={styles.txtSize}>Height</Text>
          <Text>{data.height}</Text>
        </View>
        <View>
          <Text style={styles.txtSize}>Weight</Text>
          <Text>{data.weight}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>Breeding</Text>
        <View style={[styles.line]}>
          <Text style={[styles.txtSize]}>Gender</Text>
          <View style={[styles.line]}>
            <Text>87.5%</Text>
            <Text>12.5%</Text>
          </View>
        </View>
        <View style={[styles.line]}>
          <Text style={[styles.txtSize]}>Egg Groups</Text>
          <Text>Monster</Text>
        </View>
        <View style={[styles.line]}>
          <Text style={[styles.txtSize]}>Egg Cycle</Text>
          <Text>Grass</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  size: {
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 20,
    top: 28,
    borderWidth: StyleSheet.hairlineWidth,
  },
  txtSize: {
    fontSize: 14,
    lineHeight: 28,
    fontFamily: 'roboto-regular',
    color: '#303943',
    opacity: 0.4,
  },
  info: {
    top: 51,
  },
  line: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    lineHeight: 28,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    marginBottom: 21,
  },
});
